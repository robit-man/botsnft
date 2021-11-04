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
  "name": "Guracorp",
  "description": "100 GURA® NFT is a collection designed to celebrate a bespoke vision from the future. Where passion for ScienceFiction fuses with Aesthetics and a new wave of mechanical sophistication enters the world. With a touch of personal character, we Introduce a batch of robots. Every one of them, Unique & Serialized.",
  "image": 'https://guranft.com/guras/',
  "external_url": 'https://guranft.com/guras/'
};

</script>


<div class="wrapper">
  <div class="mint-box">
    <a href="/mint"><img style="width:100vw;" src="/imgs/eye.png" alt=""></a>
  </div>
</div>



<style>
.mint-box{width:auto;height: min-content;margin:auto;}
.img-box{width:350px;height:350px;}
.text-row{display:flex;flex-flow:row;justify-content: space-between;}
.wrapper{  position: relative;
margin: auto;
left: -2rem;
width: 100vw;
display: flex;
flex-flow: row;
justify-content: center;
top: auto;
height: 80vh;
min-height: 50vh;
}
</style>
