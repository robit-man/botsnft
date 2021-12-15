<script>
import { onMount, getContext} from 'svelte';
import { slide, fade } from 'svelte/transition';
import { Router, Link, Route } from "svelte-routing";
import { address, contract, provider, nfts, balances } from '../store';
import Card from "../cards/dex.svelte";
import { Swiper, SwiperSlide } from 'swiper/svelte';
import Carousel from 'svelte-carousel';
import Gallery from 'svelte-image-gallery';

    //Help import data from opensea and pass into SwiperSlide <3 
    import { 
        initProvider,
        mintHex,
    } from '../utils.js';

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
var metadata = {
  "name": "HEXELZ",
  "description": "HEXELZ is a set of impossible shapes inspired by MC Escher and The Penrose Geometry",
  "image": '',
  "external_url": ''
};

</script>



<div class="">
  
 <!--
  {#if !$address}
  <div on:click={connect} style="" class="mint-button"><p>Connect Wallet</p></div>
  {:else}-->
  <Gallery>

    <div class="nft-card">
      <div class="nft-card-inner">
        <img transition:fade src="https://www.freepsdbazaar.com/wp-content/uploads/2020/06/sky-replace/sun-rise/sunrise-06-freepsdbazaar.jpg" style="z-index:2;position:relative;height:256px;width:256px" alt="">
        </div>
      </div>
    <div class="nft-card">
      <div class="nft-card-inner">
        <img transition:fade src="https://www.freepsdbazaar.com/wp-content/uploads/2020/06/sky-replace/sun-rise/sunrise-19-freepsdbazaar.jpg" style="z-index:2;position:relative;height:256px;width:256px" alt="">
        </div>
    </div>
    <div class="nft-card">
      <div class="nft-card-inner">
        <img transition:fade src="http://imaging.nikon.com/lineup/coolpix/p/p7000/img/sample/img_02_b.jpg" style="z-index:2;position:relative;height:256px;width:256px" alt="">
        </div>
    </div>
    <div class="nft-card">
      <div class="nft-card-inner">
        <img transition:fade src="https://pixy.org/src/0/6182.jpg" style="z-index:2;position:relative;height:256px;width:256px" alt="">
        </div>
    </div>
       <!--{#each $nfts as nft}
    <div class="nft-card">
      <div class="nft-card-inner">
        <img transition:fade src="/hexelz/{nft[1]}" style="z-index:2;position:relative;height:256px;width:256px" alt="">
        </div>
      </div>
    {/each}  -->

  </Gallery>
   <!--{/if} -->

</div>



<style>

</style>

