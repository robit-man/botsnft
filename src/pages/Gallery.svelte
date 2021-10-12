<script>
import { onMount, getContext} from 'svelte';
import { slide, fade } from 'svelte/transition';
import { Router, Link, Route } from "svelte-routing";
import { address, contract, provider, nfts, balances } from '../store';
import Card from "../cards/dex.svelte"
import { Swiper, SwiperSlide } from 'swiper/svelte';
    //Help import data from opensea and pass into SwiperSlide <3 
    import { 
        initProvider,
    } from '../utils.js';
import 'swiper/css';
import { paginate, PaginationNav } from 'svelte-easy-paginate'

  let items = []
  let currentPage = 1
  let pageSize = 4
  $: paginatedItems = paginate({ items, pageSize, currentPage })
async function connectEthProvider(reconnect=false) {
    if(!$address) {
        await initProvider(app, reconnect);
        $address = $address;
    }
}

function connectWallet(event) {
    connectEthProvider(false);
}   
var metadata = {
     "name": "SpacePepesFTM",
     "description": "100 SpacePepe's from an unknown F-type main sequence star have received an arrival beacon through Lieutenant Pepe that extraterrestrial contact with Earth has been established. They want to use the energy of the earthlings living there and establish a permanent settlement. Though they look terrifying, these SpacePepes are smart creatures that love the fine arts like the Opera.",
     "image": 'https://spacepepes.com/pepes/',
     "external_url": 'https://spacepepes.com/pepes/'
};
</script>



<div class="wrapper">
      
  <ul class="items">
    {#each paginatedItems as item}
      <li class="item">
        <div class="box">
          <img src="" alt="">
          {item}
        </div>
      </li>
    {/each}
  </ul>

  <PaginationNav
    totalItems="{items.length}"
    pageSize="{pageSize}"
    currentPage="{currentPage}"
    limit="{1}"
    showStepOptions="{true}"
    on:setPage="{(e) => currentPage = e.detail.page}"
  />   
  
</div>



<style>
.wrapper{    
  position: absolute;
  margin:auto;
  width:100vw;display:flex;flex-flow:row;justify-content:center;
  top:calc(4rem + 100px);
  height:calc(100vh - 150px - 4rem);
}
</style>

