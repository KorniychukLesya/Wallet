import { defineStore } from "pinia";
// import {Decimal} from 'decimal.js';

const dataWallet = {
    "USDT": {
        "ETH": {
            "total": 0,
            "reserved": 0
        },
        "RSD": {
            "total": 0,
            "reserved": 0
        },
        "EUR": {
            "total": 489.98213165,
            "reserved": 387.95361152
        },
        "RUB": {
            "total": 0,
            "reserved": 0
        },
        "USDT": {
            "total": 491.30371146,
            "reserved": 389
        },
        "USD": {
            "total": 467.90829663,
            "reserved": 370.47619048
        },
        "currency": "USDT",
        "UAH": {
            "total": 19207.27294767,
            "reserved": 15207.7605
        },
        "BTC": {
            "total": 0.02351803,
            "reserved": 0.01862089
        },
        "LTC": {
            "total": 8.76076518,
            "reserved": 6.93651926
        }
    },
    "EUR": {
        "ETH": {
            "total": 0.10081536,
            "reserved": 0.01263165
        },
        "EUR": {
            "total": 160.82059226,
            "reserved": 20.15
        },
        "RUB": {
            "total": 0,
            "reserved": 0
        },
        "USDT": {
            "total": 160.15683826,
            "reserved": 20.06683501
        },
        "USD": {
            "total": 155.10615576,
            "reserved": 19.43401025
        },
        "currency": "EUR",
        "UAH": {
            "total": 0,
            "reserved": 0
        },
        "BTC": {
            "total": 0.00779523,
            "reserved": 0.0009767
        },
        "LTC": {
            "total": 0,
            "reserved": 0
        }
    },
    "RSD": {
        "ETH": {
            "total": 0,
            "reserved": 0
        },
        "RSD": {
            "total": 0,
            "reserved": 0
        },
        "USDT": {
            "total": 0,
            "reserved": 0
        },
        "USD": {
            "total": 0,
            "reserved": 0
        },
        "currency": "RSD",
        "BTC": {
            "total": 0,
            "reserved": 0
        }
    },
    "ETH": {
        "USDT": {
            "total": 0,
            "reserved": 0
        },
        "RSD": {
            "total": 0,
            "reserved": 0
        },
        "EUR": {
            "total": 42.72869174,
            "reserved": 42.72714441
        },
        "RUB": {
            "total": 0,
            "reserved": 0
        },
        "ETH": {
            "total": 0.02678597,
            "reserved": 0.026785
        },
        "USD": {
            "total": 42.83853396,
            "reserved": 42.83698265
        },
        "currency": "ETH",
        "UAH": {
            "total": 1666.41897109,
            "reserved": 1666.35862509
        },
        "BTC": {
            "total": 0.00207136,
            "reserved": 0.00207128
        },
        "LTC": {
            "total": 0,
            "reserved": 0
        }
    },
    "UAH": {
        "ETH": {
            "total": 0.02191351,
            "reserved": 0
        },
        "EUR": {
            "total": 0,
            "reserved": 0
        },
        "RUB": {
            "total": 0,
            "reserved": 0
        },
        "USDT": {
            "total": 35.04628173,
            "reserved": 0
        },
        "USD": {
            "total": 34.76305984,
            "reserved": 0
        },
        "currency": "UAH",
        "UAH": {
            "total": 1380.8235,
            "reserved": 0
        },
        "BTC": {
            "total": 0.00169439,
            "reserved": 0
        },
        "LTC": {
            "total": 0,
            "reserved": 0
        }
    },
    "USD": {
        "ETH": {
            "total": 0.24483767,
            "reserved": 0.08875758
        },
        "RSD": {
            "total": 0,
            "reserved": 0
        },
        "EUR": {
            "total": 390.56486769,
            "reserved": 141.58602622
        },
        "RUB": {
            "total": 0,
            "reserved": 0
        },
        "USDT": {
            "total": 391.56888889,
            "reserved": 141.95
        },
        "USD": {
            "total": 391.56888889,
            "reserved": 141.95
        },
        "currency": "USD",
        "UAH": {
            "total": 15280.19275115,
            "reserved": 5539.31485
        },
        "BTC": {
            "total": 0.01893144,
            "reserved": 0.00686295
        },
        "LTC": {
            "total": 0,
            "reserved": 0
        }
    },
    "BNB": {
        "USDT": {
            "total": 0,
            "reserved": 0
        },
        "RSD": {
            "total": 0,
            "reserved": 0
        },
        "currency": "BNB",
        "EUR": {
            "total": 0,
            "reserved": 0
        },
        "BNB": {
            "total": 0,
            "reserved": 0
        }
    },
    "LTC": {
        "ETH": {
            "total": 0,
            "reserved": 0
        },
        "EUR": {
            "total": 0,
            "reserved": 0
        },
        "RUB": {
            "total": 0,
            "reserved": 0
        },
        "USDT": {
            "total": 0,
            "reserved": 0
        },
        "USD": {
            "total": 0,
            "reserved": 0
        },
        "currency": "LTC",
        "UAH": {
            "total": 0,
            "reserved": 0
        },
        "BTC": {
            "total": 0,
            "reserved": 0
        },
        "LTC": {
            "total": 0,
            "reserved": 0
        }
    },
    "BTC": {
        "ETH": {
            "total": 0.00472631,
            "reserved": 0
        },
        "RSD": {
            "total": 0,
            "reserved": 0
        },
        "EUR": {
            "total": 7.54011946,
            "reserved": 0
        },
        "RUB": {
            "total": 0,
            "reserved": 0
        },
        "USDT": {
            "total": 7.559225,
            "reserved": 0
        },
        "BTC": {
            "total": 0.00036549,
            "reserved": 0
        },
        "currency": "BTC",
        "UAH": {
            "total": 294.05385233,
            "reserved": 0
        },
        "USD": {
            "total": 0,
            "reserved": 0
        },
        "LTC": {
            "total": 0,
            "reserved": 0
        }
    },
};

export const useWalletList = defineStore("product", {
  state: () => ({
    walletList: dataWallet, 
  }),
    getters: {
        walletListDec(state) {
      
         return state;
    }
    },
  actions: {
    allWalletList() {
    
      let newObject2 = {};
      for (let key in dataWallet) {
      let newGbject = {}; 
      const curent = dataWallet[key];
       
      for (let keyIn in curent) {
        if (keyIn !== ("currency") ) {
            // x = new Decimal(curent[keyIn][0])
            // curent[keyIn][0] = x.
            newGbject[keyIn] = Object.assign({}, curent[keyIn]); 
          }  
        } 
        newObject2[key] = Object.assign({}, newGbject);
      }
     
       return newObject2;
    },

    fiatWalletList() {
        let newObject2 = {};
        for (let key in dataWallet) {
        let newGbject = {}; 
        const curent = dataWallet[key];
         
        for (let keyIn in curent) {
          if (keyIn == "EUR" || keyIn == "USD" || keyIn == "UAH"|| keyIn == "RSD" || keyIn == "RUB" )  {
                            
             newGbject[keyIn] = Object.assign({}, curent[keyIn]); 
            }  
          } 
          newObject2[key] = Object.assign({}, newGbject);
        }
       
         return newObject2;
      }
  }
});
