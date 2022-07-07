import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

// helper function to check if the transaction will pass or fail
const shouldFail = async (fp) => {
  let pass = undefined;
  try {
    await fp();
    pass = true;
  } catch (e) {
    pass = false;
  }
  console.log(`\tshouldFail = ${pass}`);
  if (pass !== false) {
    throw Error(`shouldFail`);
  }
};

// This set the stdlib
const stdlib = loadStdlib();

// This set the stdlib connector for conflux network
const time = stdlib.connector === 'CFX' ? 50 : 10;

// This set the intial test account fro the creator and launches the two tokens
const startingBalance = stdlib.parseCurrency(100);
const accCreator = await stdlib.newTestAccount(startingBalance);
const naira = await stdlib.launchToken(accCreator, "Naira", "NGN");
const cedis = await stdlib.launchToken(accCreator, "Cedis", "GHC");

// This set the testaccounts for the participants John and Jane and also 
//check that they optin to the two tokens/asssets
const accJohn = await stdlib.newTestAccount(startingBalance);
const accJane = await stdlib.newTestAccount(startingBalance);
if ( stdlib.connector === 'ETH' || stdlib.connector === 'CFX' ) {
  const myGasLimit = 5000000;
  accJohn.setGasLimit(myGasLimit);
  accJane.setGasLimit(myGasLimit);
} else if ( stdlib.connector == 'ALGO' ) {
  console.log(`Demonstrating need to opt-in on ALGO`);
  await shouldFail(async () => await naira.mint(accJohn, startingBalance));
  console.log(`Opt-ing in on ALGO`);
  await accJohn.tokenAccept(naira.id);
  await accJohn.tokenAccept(cedis.id);
  await accJane.tokenAccept(naira.id);
  await accJane.tokenAccept(cedis.id);
}
// This mints the token
await naira.mint(accJohn, startingBalance.mul(2));
await cedis.mint(accJane, startingBalance.mul(2));

// Opting out and opting in calls for John
if ( stdlib.connector == 'ALGO' ) {
  console.log(`Demonstrating opt-out on ALGO`);
  console.log(`\tJohn opts out`);
  await naira.optOut(accJohn);
  console.log(`\tJohn can't receive mint`);
  await shouldFail(async () => await naira.mint(accJohn, startingBalance));
  console.log(`\tJohn re-opts-in`);
  await accJohn.tokenAccept(naira.id);
  console.log(`\tJohn can receive mint`);
  await naira.mint(accJohn, startingBalance);
}

// function to format the currency
const fmt = (x) => stdlib.formatCurrency(x, 4);

// This handles the swap
const doSwap = async (tokenA, amtA, tokenB, amtB, trusted) => {
  console.log(`\nPerforming swap of ${fmt(amtA)} ${tokenA.sym} for ${fmt(amtB)} ${tokenB.sym}`);

  // Helper function to get token balance of the participant
  const getBalance = async (tokenX, who) => {
    const amt = await stdlib.balanceOf(who, tokenX.id);
    return `${fmt(amt)} ${tokenX.sym}`; };

    // Get token balance of the participants
  const getBalances = async (who) =>
    `${await getBalance(tokenA, who)} & ${await getBalance(tokenB, who)}`;

  // Get the intial balance of the participants
  const beforeJohn = await getBalances(accJohn);
  const beforeJane = await getBalances(accJane);
  console.log(`John has ${beforeJohn}`);
  console.log(`Jane has ${beforeJane}`);

  // Check if the parties are trusted then execute the transaction,  
  // John deploys the contract and Jane attaches to the contract
  if ( trusted ) {
    console.log(`John transfers to Jane honestly`);
    await stdlib.transfer(accJohn, accJane, amtA, tokenA.id);
    console.log(`Jane transfers to Alice honestly`);
    await stdlib.transfer(accJane, accJohn, amtB, tokenB.id);
  } else {
    console.log(`John will deploy the Reach DApp.`);
    const ctcJohn = accJohn.contract(backend);
    console.log(`Jane attaches to the Reach DApp.`);
    const ctcJane = accJane.contract(backend, ctcJohn.getInfo());

    // Helper function to check who saw timeout and who saw transfer
    let success = undefined;
    const Common = (who) => ({
      seeTimeout: () => {
        success = false;
        console.log(`${who} saw a timeout`); },
      seeTransfer: () => {
        success = true;
        console.log(`${who} saw the transfer happened`); },
    });

    // Interactions with John and Jane backend 
    await Promise.all([
      backend.John(ctcJohn, {
        ...Common(`John`),
        getSwap: () => {
          console.log(`John proposes swap`);
          return [ tokenA.id, amtA, tokenB.id, amtB, time ]; },
      }),
      backend.Jane(ctcJane, {
        ...Common(`Jane`),
        acceptSwap: (...tokens) => {
          console.log(`Jane accepts swap of`, tokens);
          return true; },
      }),
    ]);

    return success;
  }

  // John and Jane balance after the transaction
  const afterJohn = await getBalances(accJohn);
  const afterJane = await getBalances(accJane);
  console.log(`John went from ${beforeJohn} to ${afterJohn}`);
  console.log(`Jane went from ${beforeJane} to ${afterJane}`);
};

// Initial amount set for the swap for 1 tokenA transferred 2
// tokenB is transferred in return. i.e 1:2 swap

const amtA = stdlib.parseCurrency(1);
const amtB = stdlib.parseCurrency(2);

if ( await doSwap(naira, amtA, cedis, amtB, false)
     && await doSwap(cedis, amtB, naira, amtA, false) ) {
  await doSwap(naira, amtA, cedis, amtB, true);
}