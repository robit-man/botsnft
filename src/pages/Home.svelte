<script>
import { onMount, getContext} from 'svelte';
import { slide, fade } from 'svelte/transition';
import { address, contract, provider, nfts, balances } from '../store';
import { Swiper, SwiperSlide } from 'swiper/svelte';
import "swiper/css/pagination"
import Card from "../cards/dex.svelte"


    //Help import data from opensea and pass into SwiperSlide <3 
    import { 
        initProvider,
    } from '../utils.js';
import 'swiper/css';
async function connectEthProvider(reconnect=false) {
    if(!$address) {
        await initProvider(app, reconnect);
        $address = $address;
    }
}import SwiperCore, {
  Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);


function connectWallet(event) {
    connectEthProvider(false);
}   
var metadata = {
     "name": "BOT #8",
     "description": "GURA",
     "image": 'https://spacepepes.com/pepes/',
     "external_url": 'https://spacepepes.com/pepes/'
};
</script>


<div class="wrapper">
  <div class="mint-box">
    <img style="width:100vw;" src="/imgs/eye.png" alt="">
  </div>
</div>



<style>
.mint-box{width:auto;height: min-content;margin:auto;}
.img-box{width:350px;height:350px;}
.text-row{display:flex;flex-flow:row;justify-content: space-between;}
.wrapper{    
 position: absolute;
 margin:auto;
 left: 0px;
 width:100vw;display:flex;flex-flow:row;justify-content:center;
 top:calc(4rem + 100px);
 height:calc(100vh - 150px - 4rem);
}
</style>
