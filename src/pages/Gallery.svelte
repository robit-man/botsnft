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
  "name": "Guracorp",
  "description": "100 GURA® NFT is a collection designed to celebrate a bespoke vision from the future. Where passion for ScienceFiction fuses with Aesthetics and a new wave of mechanical sophistication enters the world. With a touch of personal character, we Introduce a batch of robots. Every one of them, Unique & Serialized.",
  "image": 'https://guranft.com/guras/',
  "external_url": 'https://guranft.com/guras/'
};

</script>



<div class="wrapper">

   
  <Carousel>
 
{#each $nfts as nft}
<div class="nft-card">
  <div class="nft-card-inner">
    <img transition:fade src="/guras/{nft['image']}" style="z-index:2;position:relative;width:256px;height:256px;" alt="">
  </div>
</div>
{/each}

</Carousel>
 
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

