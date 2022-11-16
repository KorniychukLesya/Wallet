<template class="h-screen">
  <div class="relative container mx-auto w-[40rem]  rounded bg-[#0C223C] font-sans">
    <div class=" flex justify-between pl-5 pb-3.5 pt-3.5 bg-[#2D4D70] bg-gradient-to-r from-[#0C223C]" >
      <h1 class="text-lg tracking-wider font-semibold text-sky-500">Wallet</h1>
      <button @click="changeVisibleSettings()">
        <img src="~/assets/images/seting.svg" alt="" class="inline-block w-5 h-5 mr-36">
      </button>
    </div>
    <div class="px-5 pb-3.5 pt-1">
      <ul v-if="select.typesValuta.checedFilter">
        <li v-for="(item, index) in curentWalletFiat" class=" pt-2.5 pb-3.5 flex justify-between items-center border-b  border-dashed border-[#24A0F5]">
          <div>
            <div class="flex">
              <div class="mr-1.5 mb-2.5 aspect-square rounded-sm w-7 h-7 bg-[#2D4D70] 
             flex place-items-center justify-center " >
              <div class="flex place-items-center justify-center bg-cyan-400 aspect-square w-5 rounded-full 
              shadow-[0_0_10px_2px_rgba(42,243,243,0.55)]">
                <img src="~/assets/images/dollar.svg" alt="dollar" class="mx-auto ">
              </div>
            </div>
            <h2 class="text-base font-medium text-white">{{findName(index)}}<span class="text-[#A6AEBF] font-normal"> ({{index}})</span></h2>
            </div>
            
            <div>
              <button class="w-32 h-7 mr-2.5 text-xs font-bold bg-sky-900 text-sky-500 uppercase">withdraw</button>
              <button class="w-32 h-7 text-xs font-bold bg-[#24A0F5] text-[#0D1C47] uppercase">deposit</button>
            </div>
          </div>
          <div class="flex flex-col items-end">
            <p class="mb-2.5 text-sm text-white font-normal leading-4">В заявках: {{ item.total }} {{ index }} </p>
            <p class="mb-2.5 text-sm text-white font-normal leading-4">Всего: {{ item.reserved }} {{ index }} </p>
            <p class="text-sm text-[#24A0F5] font-normal leading-4">1.98 {{evetSelect}}</p>
          </div>
        </li>
      </ul>
      <ul v-if="!select.typesValuta.checedFilter">
        <li v-for="(item, index) in curentWallet" class=" pt-2.5 pb-3.5 flex justify-between items-center border-b  border-dashed border-[#24A0F5]">
          <div>
            <div class="flex">
              <div class="mr-1.5 mb-2.5 aspect-square rounded-sm w-7 h-7 bg-[#2D4D70] 
             flex place-items-center justify-center " >
              <div class="flex place-items-center justify-center bg-cyan-400 aspect-square w-5 rounded-full 
              shadow-[0_0_10px_2px_rgba(42,243,243,0.55)]">
                <img src="~/assets/images/dollar.svg" alt="dollar" class="mx-auto ">
              </div>
            </div>
            <h2 class="text-base font-medium text-white">{{findName(index)}}<span class="text-[#A6AEBF] font-normal"> ({{index}})</span></h2>
            </div>
            
            <div>
              <button class="w-32 h-7 mr-2.5 text-xs font-bold bg-sky-900 text-sky-500 uppercase">withdraw</button>
              <button class="w-32 h-7 text-xs font-bold bg-[#24A0F5] text-[#0D1C47] uppercase">deposit</button>
            </div>
          </div>
          <div class="flex flex-col items-end">
            <p class="mb-2.5 text-sm text-white font-normal leading-4">В заявках: {{ item.total }} {{ index }} </p>
            <p class="mb-2.5 text-sm text-white font-normal leading-4">Всего: {{ item.reserved }} {{ index }} </p>
            <p class="text-sm text-[#24A0F5] font-normal leading-4">1.98 {{evetSelect}}</p>
          </div>
        </li>
      </ul>
      <div class="flex flex-col p-2.5 mt-3.5 items-center  bg-sky-900 ">
        <div class="flex w-full justify-center">
        <img src="~/assets/images/Group.svg" alt="dollar" class="inline-block mr-1.5">
        <div class="text-lg text-sky-500">0.0082243</div>
        <select class="bg-sky-900 text-lg text-sky-500 font-normal outline-none" 
          v-model="select.typesValuta.selectedCurret" 
          @change="changeCallStatus($event)">
          <option v-for="valuta in select.typesValuta.valuta" :value="valuta">{{valuta}}</option>
        </select>
      </div>
      <p class="text-sm font-medium text-white">Total balance</p>

      </div>
      
    </div>
    <div v-if="select.typesValuta.visibleSettings" class="rounded-md absolute top-3 right-5 flex w-48 h-28 flex-col items-center bg-sky-900">
        <button class="flex justify-center items-center w-full bg-cyan-700  p-1.5 " @click="changeVisibleSettings()">
          <img src="~/assets/images/seting.svg" alt="" class="inline-block w-5 h-5 mr-1">
          <p class=" mr-2 text-[#2AF3F3]">settings</p>
          <img src="~/assets/images/seting_botton.svg" alt="" class="inline-block w-2 h-1" >
        </button>
  
       <button @click="changeFilterStatus()" class="flex items-center  w-full p-2.5" >
        <img src="~/assets/images/filter.svg" alt="dollar" class="inline-block mr-1.5">
        <p class="bg-sky-900 text-xs text-white font-normal">Show only Fiat</p>
        </button>

    </div>
      
  </div>
</template>

<script setup>
import { useSelectStore } from '../src/Selector';
import { useWalletList } from '../src/WalletList';

const select = useSelectStore()
const store = useWalletList();
let curentWallet = store.allWalletList().USDT;
let curentWalletFiat = store.fiatWalletList().USDT;
let evetSelect = 'USDT';


const typeSelect = {
  USDT: 'USDT',
  EUR: 'EUR',
  RSD: 'RSD', 
  UAH: 'UAH', 
  ETH: 'ETH', 
  USD: 'USD', 
  BNB: 'BNB',
  LTC: 'LTC',
  BTC: 'BTC',
  RUB: 'RUB',
}
function changeVisibleSettings () {
  select.typesValuta.visibleSettings = !select.typesValuta.visibleSettings;
}

function changeFilterStatus () {
  select.typesValuta.checedFilter = !select.typesValuta.checedFilter;
  }

const changeCallStatus = (event) => {
  evetSelect = event.target.value
  switch (evetSelect) {
  case typeSelect.USDT:
    curentWallet = store.allWalletList().USDT;
    curentWalletFiat = store.fiatWalletList().USDT;
    break;
  case typeSelect.EUR:
    curentWallet = store.allWalletList().EUR;
    curentWalletFiat = store.fiatWalletList().EUR;
    break;
  case typeSelect.RSD:
    curentWallet = store.allWalletList().RSD;
    curentWalletFiat = store.fiatWalletList().RSD;
    break;
  case typeSelect.UAH:
    curentWallet = store.allWalletList().UAH;
    curentWalletFiat = store.fiatWalletList().UAH;
    break;
  case typeSelect.ETH:
    curentWallet = store.allWalletList().ETH;
    curentWalletFiat = store.fiatWalletList().ETH;
    break;
  case typeSelect.USD:
    curentWallet = store.allWalletList().USD;
    curentWalletFiat = store.fiatWalletList().USD;
    break;
  case typeSelect.BNB:
    curentWallet = store.allWalletList().BNB;
    curentWalletFiat = store.fiatWalletList().BNB;
    break;
  case typeSelect.LTC:
    curentWallet = store.allWalletList().LTC;
    curentWalletFiat = store.fiatWalletList().LTC;
    break;
  case typeSelect.BTC:
    curentWallet = store.allWalletList().BTC;
    curentWalletFiat = store.fiatWalletList().BTC;
    break;
    default:
    return;  
  } 
}

const findName = (valuta) => {
  switch (valuta) {
    case typeSelect.USDT:
      return 'Tether';     
    case typeSelect.EUR:
      return 'Euro'; 
    case typeSelect.RSD:
      return 'Serbian dinar'; 
    case typeSelect.UAH:
      return 'Ukrainian Hryvna'; 
    case typeSelect.ETH:
      return 'Ethereum'; 
    case typeSelect.USD:
      return 'United States dollar'; 
    case typeSelect.BNB:
      return 'Binance Coin'; 
    case typeSelect.LTC:
      return 'Litecoin'; 
    case typeSelect.BTC:
      return 'Bitcoin'; 
    case typeSelect.RUB:
      return 'RUB'; 
     
    default:
      return; 
  }
}

</script>
