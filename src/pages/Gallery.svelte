<script>
import { onMount, getContext} from 'svelte';
import { slide, fade } from 'svelte/transition';
import { Router, Link, Route } from "svelte-routing";
import { address, contract, provider, nfts, balances } from '../store';
import Card from "../cards/dex.svelte";
import { Swiper, SwiperSlide } from 'swiper/svelte';
import Carousel from 'svelte-carousel';

    //Help import data from opensea and pass into SwiperSlide <3 
    import { 
        initProvider,
        mintHex,
    } from '../utils.js';
    let hexelz = [
      { id: '01'},
      { id: '02'},
      { id: '03'},
      { id: '04'},
      { id: '05'},
      { id: '06'},
      { id: '07'},
      { id: '08'},
      { id: '09'},
	];
    const app = getContext('app');
    var addressDisplay = ''
    async function connectEthProvider(reconnect=false) {
        if(!$address) {
            await initProvider(app, reconnect);
            addressDisplay = String($address).slice(0,10)+"...";
            $address = $address;
        }
    }

    function connect(event) {
        connectEthProvider(false);
    }    

    async function mint(event) {
      await mintHex(contract, provider);
    }
var nft = {
  "name": "HEXELZ",
  "description": "HEXELZ is a set of impossible shapes inspired by MC Escher and The Penrose Geometry",
  "image": '',
  "external_url": ''
};

</script>



<div class="gallery">
  
 <!--
  {#if !$address}
  <div on:click={connect} style="" class="mint-button"><p>Connect Wallet</p></div>
  {:else}-->
  <div class="carousel-constraint">
  <Carousel>
  {#each hexelz as { id }}
        <img transition:fade src="/imgs/Hexelz/Hexelz/Hexels_{id}.png" style="z-index:2;position:relative;height:300px;width:300pxborder-radius:4px;" alt="">
    {/each} 
  </Carousel>
   <!--{/if} -->
  </div>
</div>



<style>
.carousel-constraint{width:512px;height:512px;margin:auto;position:relative;display:flex;}
</style>

