import { defineStore } from "pinia";

export const useSelectStore = defineStore("select", {
  state: () => ({
    typesValuta:  
   {
    selectedCurret: "USDT",
    valuta: ["USDT", "EUR", "RSD", "UAH", "ETH", "USD", "BNB", "LTC", "BTC"],
    checedFilter: false,
    visibleSettings: false,
   }
  
  }),
    getters: {
    selectcurent(state) {
    return state;
  }
  },
    actions: {
    addselect(select) {
    return select;
  }
  }
 });
