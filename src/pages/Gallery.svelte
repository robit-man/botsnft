<script>
import { onMount, getContext} from 'svelte';
import { slide, fade } from 'svelte/transition';
import { Router, Link, Route } from "svelte-routing";
import { address, contract, provider, nfts, balances } from '../store';
import Card from "../cards/dex.svelte"
import { Swiper, SwiperSlide } from 'swiper/svelte';
import Carousel from 'svelte-carousel'
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
  {#if !$address}
  <div on:click={connect} style="" class="mint-button"><p>Connect Wallet</p></div>
  {:else}
    <Carousel class="test "
  >
 
  {#each $nfts as nft}
    <div class="nft-card">
      <div class="nft-card-inner">
        <img transition:fade src="/forms/{nft['image']}" style="z-index:2;position:relative;width:256px" alt="">
      </div>
    </div>
  {/each}

  </Carousel>
  
  {/if} 
</div>



<style>
.wrapper{    
  position: absolute;
  margin:auto;
  left: 0px;
  width:100vw;display:flex;flex-flow:row;justify-content:center;
  top:calc(4rem + 100px);
  height:calc(100vh - 150px - 4rem);
}
</style>

