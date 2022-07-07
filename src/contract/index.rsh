'reach 0.1';
'use strict';

const Common = {
  seeTimeout: Fun([], Null),
  seeTransfer: Fun([], Null),
};

export const main = Reach.App(() => {
  const John = Participant('John', {
    ...Common,
    getSwap: Fun([], Tuple(Token, UInt, Token, UInt, UInt)),
  });
  const Jane = Participant('Jane', {
    ...Common,
    acceptSwap: Fun([Token, UInt, Token, UInt], Bool),
  });
  init();

  John.only(() => {
    const [ tokenA, amtA, tokenB, amtB, time ] = declassify(interact.getSwap());
    assume(tokenA != tokenB); });
  John.publish(tokenA, amtA, tokenB, amtB, time);
  commit();
  John.pay([ [amtA, tokenA] ]);
  commit();

  Jane.only(() => {
    const janeSwap = declassify(interact.acceptSwap(tokenA, amtA, tokenB, amtB)); });
  Jane.pay([ [amtB, tokenB] ])
    .when(janeSwap)
    .timeout(relativeTime(time), () => {
      John.publish();
      transfer(amtA, tokenA).to(John);
      each([John, Jane], () => interact.seeTimeout());
      commit();
      exit();
    });
  transfer(amtB, tokenB).to(John);
  transfer([ [amtA, tokenA] ]).to(Jane);
  each([John, Jane], () => interact.seeTransfer());
  commit();

  exit();
});