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
        mintPepe,
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
      await mintPepe(contract, provider);
    }
var metadata = {
  "name": "Guracorp",
  "description": "100 GURA® NFT is a collection designed to celebrate a bespoke vision from the future. Where passion for ScienceFiction fuses with Aesthetics and a new wave of mechanical sophistication enters the world. With a touch of personal character, we Introduce a batch of robots. Every one of them, Unique & Serialized.",
  "image": 'https://guranft.com/guras/',
  "external_url": 'https://guranft.com/guras/'
};

</script>



<div class="wrapper">
  {#if !$address}
  <div on:click={connect} style="" class="mint-button"><p>Connect Wallet</p></div>
  {:else}
  <Carousel>
 
  {#each $nfts as nft}
    <div class="nft-card">
      <div class="nft-card-inner">
        <img transition:fade src="/guras/{nft[1]}" style="z-index:2;position:relative;height:256px;width:256px" alt="">
      </div>
    </div>
  {/each}

  </Carousel>
  
  {/if} 
</div>



<style>
.wrapper{    
  position: relative;
  margin:auto;
  left: 0px;
  width:100vw;display:flex;flex-flow:row;justify-content:center;
  top:calc(4rem + 100px);
  height:calc(100vh - 150px - 4rem);
}
	@media screen and (max-width:900px){
	.wrapper{position:relative;margin:2rem auto!important;top:auto!important;height:auto!important;}
	}
</style>

