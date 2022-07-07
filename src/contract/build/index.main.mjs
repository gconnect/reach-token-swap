// Automatically generated with Reach 0.1.11 (1c3f08fe)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (1c3f08fe)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc1, ctc2, ctc2],
      2: [ctc0, ctc1, ctc2, ctc1, ctc2, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Jane(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Jane expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Jane expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 5,
    funcNum: 0,
    out_tys: [ctc0, ctc1, ctc0, ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v197, v198, v199, v200, v201], secs: v203, time: v202, didSend: v46, from: v196 } = txn1;
  const v204 = stdlib.tokenEq(v197, v199);
  const v205 = v204 ? false : true;
  stdlib.assert(v205, {
    at: './index.rsh:23:8:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Jane'
    });
  ;
  ;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v222, time: v221, didSend: v53, from: v220 } = txn2;
  ;
  ;
  const v232 = stdlib.addressEq(v196, v220);
  stdlib.assert(v232, {
    at: './index.rsh:25:8:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Jane'
    });
  const v239 = stdlib.add(v221, v201);
  const v243 = stdlib.protect(ctc2, await interact.acceptSwap(v197, v198, v199, v200), {
    at: './index.rsh:29:52:application',
    fs: ['at ./index.rsh:28:12:application call to [unknown function] (defined at: ./index.rsh:28:16:function exp)'],
    msg: 'acceptSwap',
    who: 'Jane'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v196, v197, v198, v199, v200, v239],
    evt_cnt: 0,
    funcNum: 2,
    lct: v221,
    onlyIf: v243,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:30:8:dot', stdlib.UInt_max, '0'), [[v200, v199]]],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v246, time: v245, didSend: v63, from: v244 } = txn3;
      
      ;
      sim_r.txns.push({
        amt: v200,
        kind: 'to',
        tok: v199
        });
      sim_r.txns.push({
        kind: 'from',
        to: v196,
        tok: v199
        });
      sim_r.txns.push({
        kind: 'from',
        to: v244,
        tok: v197
        });
      
      sim_r.txns.push({
        kind: 'halt',
        tok: v199
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: v197
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v239],
    tys: [ctc4, ctc0, ctc1, ctc0, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  if (txn3.didTimeout) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 3,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v292, time: v291, didSend: v100, from: v290 } = txn4;
    ;
    const v293 = stdlib.addressEq(v196, v290);
    stdlib.assert(v293, {
      at: './index.rsh:33:12:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Jane'
      });
    ;
    stdlib.protect(ctc3, await interact.seeTimeout(), {
      at: './index.rsh:35:51:application',
      fs: ['at ./index.rsh:35:11:application call to [unknown function] (defined at: ./index.rsh:35:29:function exp)'],
      msg: 'seeTimeout',
      who: 'Jane'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v246, time: v245, didSend: v63, from: v244 } = txn3;
    ;
    ;
    ;
    ;
    stdlib.protect(ctc3, await interact.seeTransfer(), {
      at: './index.rsh:41:48:application',
      fs: ['at ./index.rsh:41:7:application call to [unknown function] (defined at: ./index.rsh:41:25:function exp)'],
      msg: 'seeTransfer',
      who: 'Jane'
      });
    
    return;
    }
  
  
  
  
  
  };
export async function John(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for John expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for John expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([ctc0, ctc1, ctc0, ctc1, ctc1]);
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const v183 = stdlib.protect(ctc2, await interact.getSwap(), {
    at: './index.rsh:21:77:application',
    fs: ['at ./index.rsh:20:12:application call to [unknown function] (defined at: ./index.rsh:20:16:function exp)'],
    msg: 'getSwap',
    who: 'John'
    });
  const v184 = v183[stdlib.checkedBigNumberify('./index.rsh:21:77:application', stdlib.UInt_max, '0')];
  const v185 = v183[stdlib.checkedBigNumberify('./index.rsh:21:77:application', stdlib.UInt_max, '1')];
  const v186 = v183[stdlib.checkedBigNumberify('./index.rsh:21:77:application', stdlib.UInt_max, '2')];
  const v187 = v183[stdlib.checkedBigNumberify('./index.rsh:21:77:application', stdlib.UInt_max, '3')];
  const v188 = v183[stdlib.checkedBigNumberify('./index.rsh:21:77:application', stdlib.UInt_max, '4')];
  const v194 = stdlib.tokenEq(v184, v186);
  const v195 = v194 ? false : true;
  stdlib.assert(v195, {
    at: './index.rsh:22:11:application',
    fs: ['at ./index.rsh:20:12:application call to [unknown function] (defined at: ./index.rsh:20:16:function exp)'],
    msg: null,
    who: 'John'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v184, v185, v186, v187, v188],
    evt_cnt: 5,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:23:8:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc1, ctc0, ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:23:8:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v197, v198, v199, v200, v201], secs: v203, time: v202, didSend: v46, from: v196 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v197
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v199
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc0, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v197, v198, v199, v200, v201], secs: v203, time: v202, didSend: v46, from: v196 } = txn1;
  const v204 = stdlib.tokenEq(v197, v199);
  const v205 = v204 ? false : true;
  stdlib.assert(v205, {
    at: './index.rsh:23:8:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'John'
    });
  ;
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v196, v197, v198, v199, v200, v201],
    evt_cnt: 0,
    funcNum: 1,
    lct: v202,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:25:8:dot', stdlib.UInt_max, '0'), [[v198, v197]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v222, time: v221, didSend: v53, from: v220 } = txn2;
      
      ;
      sim_r.txns.push({
        amt: v198,
        kind: 'to',
        tok: v197
        });
      const v239 = stdlib.add(v221, v201);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0, ctc1, ctc0, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v222, time: v221, didSend: v53, from: v220 } = txn2;
  ;
  ;
  const v232 = stdlib.addressEq(v196, v220);
  stdlib.assert(v232, {
    at: './index.rsh:25:8:dot',
    fs: [],
    msg: 'sender correct',
    who: 'John'
    });
  const v239 = stdlib.add(v221, v201);
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 2,
    out_tys: [],
    timeoutAt: ['time', v239],
    waitIfNotPresent: false
    }));
  if (txn3.didTimeout) {
    const txn4 = await (ctc.sendrecv({
      args: [v196, v197, v198, v199, v200, v239],
      evt_cnt: 0,
      funcNum: 3,
      lct: v221,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:33:12:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v292, time: v291, didSend: v100, from: v290 } = txn4;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v196,
          tok: v197
          });
        
        sim_r.txns.push({
          kind: 'halt',
          tok: v199
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: v197
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc1, ctc0, ctc1, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v292, time: v291, didSend: v100, from: v290 } = txn4;
    ;
    const v293 = stdlib.addressEq(v196, v290);
    stdlib.assert(v293, {
      at: './index.rsh:33:12:dot',
      fs: [],
      msg: 'sender correct',
      who: 'John'
      });
    ;
    stdlib.protect(ctc3, await interact.seeTimeout(), {
      at: './index.rsh:35:51:application',
      fs: ['at ./index.rsh:35:11:application call to [unknown function] (defined at: ./index.rsh:35:29:function exp)'],
      msg: 'seeTimeout',
      who: 'John'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v246, time: v245, didSend: v63, from: v244 } = txn3;
    ;
    ;
    ;
    ;
    stdlib.protect(ctc3, await interact.seeTransfer(), {
      at: './index.rsh:41:48:application',
      fs: ['at ./index.rsh:41:7:application call to [unknown function] (defined at: ./index.rsh:41:25:function exp)'],
      msg: 'seeTransfer',
      who: 'John'
      });
    
    return;
    }
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAMAAEEAiBAKDCgjQYIAzgmAgEAACI1ADEYQQLSKWRJIls1ASEJWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0klDEABKUkhCgxAAIUhChJEJTQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/IQRbNf6ABKdlxLSwMgY0AyEFWw9ENP8xABJEsSKyATQDIQZbshIkshA0/7IUNP6yEbOxIrIBIrISJLIQMgmyFTIKshQ0AyEHW7IRs7EisgEishIkshAyCbIVMgqyFDT+shGzQgHISCU0ARJENARJIhJMNAISEUQoZEk1A0lJIQRbNf8hB1s1/iELWzX9gARBsUBNsDIGNAMhBVsMRDT9NP6IAg+xIrIBNP2yEiSyEDQDVwAgshQ0/rIRs7EisgE0AyEGW7ISJLIQMQCyFDT/shGzsSKyASKyEiSyEDIJshUyCrIUNP6yEbOxIrIBIrISJLIQMgmyFTIKshQ0/7IRs0IBK0kjDEAAeEgjNAESRDQESSISTDQCEhFEKGRJNQNJSklXACA1/yEEWzX+IQZbNf0hB1s1/CELWzX7gASai5F0sDT9NP6IAWo0/zEAEkQyBjQDIQVbCDX6NP80/hZQNP0WUDT8FlA0+xZQNPoWUChLAVcASGdIJTUBMgY1AkIAyUghCIgBFCI0ARJENARJIhJMNAISEURJNQVJSkkiWzX/IQlbNf6BEFs1/YEYWzX8IQRbNfuABE1+Byc0/xZQNP4WUDT9FlA0/BZQNPsWULA0/zT9E0QhCIgAwLEisgEishIkshAyCrIUNP+yEbMhCIgAqLEisgEishIkshAyCrIUNP2yEbMxADT/FlA0/hZQNP0WUDT8FlA0+xZQKEsBVwBIZ0gjNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCUxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQJBJEOBFPAhJEOBISRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 72,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v197",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v198",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v199",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v200",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v201",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v197",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v198",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v199",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v200",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v201",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200105b3803806200105b833981016040819052620000269162000310565b60008055436003556040805133815282516020808301919091528084015180516001600160a01b039081168486015291810151606080850191909152818501519092166080808501919091529181015160a0840152015160c082015290517f131e9e7268765eedc6c73354bf31f60bd5d8d00b2dd80d93757e1786bb09c60b9181900360e00190a1602081015160408101519051620000e5916001600160a01b03918216911614620000da576001620000dd565b60005b6007620001ec565b620000f334156008620001ec565b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091523380825260208381018051516001600160a01b0390811683860190815282518401516040808801918252845181015184166060808a0191825286518101516080808c01918252975188015160a0808d019182526001600081905543905585519a8b019b909b5295518716938901939093529251928701929092529051909216928401929092525192820192909252905160c082015260e00160405160208183030381529060405260029080519060200190620001e392919062000216565b50505062000408565b81620002125760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200022490620003cb565b90600052602060002090601f01602090048101928262000248576000855562000293565b82601f106200026357805160ff191683800117855562000293565b8280016001018555821562000293579182015b828111156200029357825182559160200191906001019062000276565b50620002a1929150620002a5565b5090565b5b80821115620002a15760008155600101620002a6565b60405160a081016001600160401b0381118282101715620002ed57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200030b57600080fd5b919050565b600081830360c08112156200032457600080fd5b604080519081016001600160401b03811182821017156200035557634e487b7160e01b600052604160045260246000fd5b6040528351815260a0601f19830112156200036f57600080fd5b62000379620002bc565b91506200038960208501620002f3565b825260408401516020830152620003a360608501620002f3565b6040830152608084810151606084015260a09094015193820193909352602083015250919050565b600181811c90821680620003e057607f821691505b602082108114156200040257634e487b7160e01b600052602260045260246000fd5b50919050565b610c4380620004186000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f5780632c10a1591461008357806373b4522c146100965780637eea518c146100a957806383230757146100bc578063ab53f2c6146100d157005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b61005d6100913660046109de565b6100f4565b61005d6100a43660046109de565b610353565b61005d6100b73660046109de565b6104c2565b3480156100c857600080fd5b50600154610070565b3480156100dd57600080fd5b506100e661062e565b60405161007a929190610a26565b610104600160005414600c6106cb565b61011e8135158061011757506001548235145b600d6106cb565b60008080556002805461013090610a60565b80601f016020809104026020016040519081016040528092919081815260200182805461015c90610a60565b80156101a95780601f1061017e576101008083540402835291602001916101a9565b820191906000526020600020905b81548152906001019060200180831161018c57829003601f168201915b50505050508060200190518101906101c19190610b4c565b90506101d96040518060200160405280600081525090565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338460405161020a929190610b76565b60405180910390a161021e341560096106cb565b61023b61023433846020015185604001516106f1565b600a6106cb565b8151610253906001600160a01b03163314600b6106cb565b60a08201516102629043610bae565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915282516001600160a01b0390811680835260208086015183168185019081526040808801518187019081526060808a015187168189019081526080808c0151818b019081528b5160a0808d019182526002600055436001558751998a019a909a5296518a16958801959095529251918601919091525190951694830194909452925191810191909152905160c082015260e0016040516020818303038152906040526002908051906020019061034c929190610908565b5050505050565b61036360026000541460156106cb565b61037d8135158061037657506001548235145b60166106cb565b60008080556002805461038f90610a60565b80601f01602080910402602001604051908101604052809291908181526020018280546103bb90610a60565b80156104085780601f106103dd57610100808354040283529160200191610408565b820191906000526020600020905b8154815290600101906020018083116103eb57829003601f168201915b50505050508060200190518101906104209190610b4c565b90506104348160a0015143101560176106cb565b7f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c63383604051610465929190610b76565b60405180910390a1610479341560136106cb565b8051610491906001600160a01b0316331460146106cb565b6104a8816020015182600001518360400151610709565b600080805560018190556104be9060029061098c565b5050565b6104d260026000541460106106cb565b6104ec813515806104e557506001548235145b60116106cb565b6000808055600280546104fe90610a60565b80601f016020809104026020016040519081016040528092919081815260200182805461052a90610a60565b80156105775780601f1061054c57610100808354040283529160200191610577565b820191906000526020600020905b81548152906001019060200180831161055a57829003601f168201915b505050505080602001905181019061058f9190610b4c565b90506105a28160a00151431060126106cb565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033836040516105d3929190610b76565b60405180910390a16105e73415600e6106cb565b6106046105fd33836060015184608001516106f1565b600f6106cb565b61061b816060015182600001518360800151610709565b6104a88160200151338360400151610709565b60006060600054600280805461064390610a60565b80601f016020809104026020016040519081016040528092919081815260200182805461066f90610a60565b80156106bc5780601f10610691576101008083540402835291602001916106bc565b820191906000526020600020905b81548152906001019060200180831161069f57829003601f168201915b50505050509050915091509091565b816104be5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b60006106ff83853085610722565b90505b9392505050565b6107148383836107fc565b61071d57600080fd5b505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161078991610bd4565b60006040518083038185875af1925050503d80600081146107c6576040519150601f19603f3d011682016040523d82523d6000602084013e6107cb565b606091505b50915091506107dc828260016108cd565b50808060200190518101906107f19190610bf0565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161085b91610bd4565b60006040518083038185875af1925050503d8060008114610898576040519150601f19603f3d011682016040523d82523d6000602084013e61089d565b606091505b50915091506108ae828260026108cd565b50808060200190518101906108c39190610bf0565b9695505050505050565b606083156108dc575081610702565b8251156108ec5782518084602001fd5b60405163100960cb60e01b8152600481018390526024016106e8565b82805461091490610a60565b90600052602060002090601f016020900481019282610936576000855561097c565b82601f1061094f57805160ff191683800117855561097c565b8280016001018555821561097c579182015b8281111561097c578251825591602001919060010190610961565b506109889291506109c9565b5090565b50805461099890610a60565b6000825580601f106109a8575050565b601f0160209004906000526020600020908101906109c691906109c9565b50565b5b8082111561098857600081556001016109ca565b6000604082840312156109f057600080fd5b50919050565b60005b83811015610a115781810151838201526020016109f9565b83811115610a20576000848401525b50505050565b8281526040602082015260008251806040840152610a4b8160608501602087016109f6565b601f01601f1916919091016060019392505050565b600181811c90821680610a7457607f821691505b602082108114156109f057634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610aac57600080fd5b919050565b600060c08284031215610ac357600080fd5b60405160c0810181811067ffffffffffffffff82111715610af457634e487b7160e01b600052604160045260246000fd5b604052905080610b0383610a95565b8152610b1160208401610a95565b602082015260408301516040820152610b2c60608401610a95565b60608201526080830151608082015260a083015160a08201525092915050565b600060c08284031215610b5e57600080fd5b6107028383610ab1565b80151581146109c657600080fd5b6001600160a01b038316815281356020808301919091526060820190830135610b9e81610b68565b8015156040840152509392505050565b60008219821115610bcf57634e487b7160e01b600052601160045260246000fd5b500190565b60008251610be68184602087016109f6565b9190910192915050565b600060208284031215610c0257600080fd5b815161070281610b6856fea26469706673582212209e2668ba082b65d5263e251ec94ad354aad40be89a57f656c1367e9c542daecc64736f6c634300080c0033`,
  BytecodeLen: 4187,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:24:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:26:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:36:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:42:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Jane": Jane,
  "John": John
  };
export const _APIs = {
  };
