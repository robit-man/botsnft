<script>
import { onMount, getContext} from 'svelte';
import { slide, fade } from 'svelte/transition';
import { address, contract, provider, nfts, balances } from '../store';
import { Swiper, SwiperSlide } from 'swiper/svelte';
import "swiper/css/pagination"
import Carousel from 'svelte-carousel'



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
<div class="escher">
  <div class="backdrop">
    <img src="/imgs/focus.svg" width="32px" height="32px" style="opacity:0.9;animation: flash 2s ease alternate infinite;mix-blend-mode:difference;position:fixed;top:1rem;right:1rem;" alt="">
    <img src="/imgs/focus.svg" width="32px" height="32px" style="opacity:0.9;animation: flash2 4s ease alternate infinite;mix-blend-mode:difference;position:fixed;bottom:1rem;right:1rem;" alt="">
    <!--<img src="/imgs/focus.svg" width="32px" height="32px" style="opacity:0.9;animation: flash3 2s ease alternate infinite;mix-blend-mode:difference;position:fixed;top:1rem;left:1rem;" alt="">-->
    <img src="/imgs/focus.svg" width="32px" height="32px" style="opacity:0.9;animation: flash4 3s ease alternate infinite;mix-blend-mode:difference;position:fixed;bottom:1rem;left:1rem;" alt="">
  </div>
  <div class="hero " id="hero">
    <h1 style="position:relative;text-align:center;z-index:2;color:#f1f1f1;line-height:1;padding:2rem;mix-blend-mode:normal;" >thi<b style="animation: flash3 2s ease alternate infinite;">s</b> is <b style="animation: flash3 4s ease alternate infinite;">a</b>n nf<b style="animation: flash3 5s ease alternate infinite;">t</b></h1>
   
    <svg id="svg-pattern" width="100%" height="calc(100% + 4rem)">
      <defs>
        <pattern id='half-hex-escher' patternUnits="userSpaceOnUse" width="130" height="75">
          <symbol id='half-hex'>
            <path d="M173.2,150 v200 l86.6,-50 v-100 z" stroke="#f1f1f1" stroke-width='2' />
          </symbol>
          <symbol id='half-hex-flip'>
            <use xlink:href="#half-hex" transform='rotate(180 173.2 250)' />
          </symbol>
          <g transform='scale(0.25)'>
            <g id='hh-vertex'>
              <use xlink:href="#half-hex" class='color1' />
              <use xlink:href="#half-hex" transform='rotate(120 173.2 150)' class='color2' />
              <use xlink:href="#half-hex" transform='rotate(240 173.2 150)' class='color3' />
              <use xlink:href="#half-hex-flip" class='color2' />
              <use xlink:href="#half-hex-flip" transform='rotate(120 173.2 150)' class='color3' />
              <use xlink:href="#half-hex-flip" transform='rotate(240 173.2 150)' class='color1' />
            </g>
            <use xlink:href='#hh-vertex' transform='translate(0 -300)' />
            <use xlink:href='#hh-vertex' transform='translate(259.8 -150)' />
            <use xlink:href='#hh-vertex' transform='translate(259.8 150)' />
            <use xlink:href='#hh-vertex' transform='translate(-259.8 -150)' />
            <use xlink:href='#hh-vertex' transform='translate(-259.8 150)' />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#half-hex-escher)" />
    </svg>
    
  </div>
</div>
  <div class="fullheight" id="about">

    <div class="area">
      <div class="text-image-row">
      <div class="text-box">
        <h1>
          ESCH<b style="animation: flash 7s ease alternate infinite;">E</b>R INSP<b style="animation: flash3 10s ease alternate infinite;">I</b>RED WORKS
        </h1>
        <p class="subheader"><img src="/imgs/fast-forward.svg" height="14px" style="margin-right:16px;margin-top:2px;" alt="">  Subheader Text</p>
      </div>
      <div class="image-box" style="border-radius:4px;">
        <div style="border-radius:4px;background-image:url(https://i.pinimg.com/originals/70/2e/db/702edbf5abbb39c6788b00ca18beb074.gif);height:400px;width:256px;background-size:cover;" src="" alt=""></div>
      </div>
    </div>

    </div>
    


    <div class="area" style="" id="roadmap" >
      <div class="text-image-row wrap-reverse">

        <div class="image-box" style="max-width: 80vw;border-radius:512px;">
          <div style="border-radius:512px;filter:invert(1);max-width: 80vw;width:512px;background-size:cover;" src="" alt="">
            <svg version="1.1" id="L7" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
              <path fill="#f1f1f1" d="M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3
               c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z">
                   <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="2s" from="0 50 50" to="360 50 50" repeatCount="indefinite"></animateTransform>
               </path>
              <path fill="#f1f1f1" d="M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7
               c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z">
                   <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50" to="-360 50 50" repeatCount="indefinite"></animateTransform>
               </path>
              <path fill="#f1f1f1" d="M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5
               L82,35.7z">
                   <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="2s" from="0 50 50" to="360 50 50" repeatCount="indefinite"></animateTransform>
               </path>
             </svg>
          </div>
        </div>

      <div class="text-box2">
        <h1>
          EXPLORE NFT FEATURES
        </h1>
        <p class="subheader"><img src="/imgs/fast-forward.svg" height="14px" style="margin-right:16px;margin-top:2px;" alt="">  Subheader Text</p>
        <p>Facere repudiandae corporis nobis maxime atque est quaerat quia. Neque non dolor ex rerum et. Unde et excepturi quidem dicta qui nulla. Sint sed iusto dolores quisquam quas possimus nostrum qui.…

        </p>
        <p class="feature-title">FEATURE #1 - XYZ</p>
        <p class="feature-title">FEATURE #2 - 123</p>
        <p class="feature-title">FEATURE #3 - ABC</p>
        <p class="feature-title">FEATURE #4 - #&$</p>
        <p class="feature-title">FEATURE #5 - |/\</p>
      </div>
    </div>

    </div>
    


  </div>

  <div class="fullheight"  id="gallery">
    
  </div>

  <div class="fullheight" id="mint">
    <div class="area" style="">
      
      <div class="text-image-row ">
        <div class="text-box">
          <h1>
            MINT AN NFT
          </h1>
          <p class="subheader"><img src="/imgs/fast-forward.svg" height="14px" style="margin-right:16px;margin-top:2px;" alt="">  Subheader Text</p>
          <!--{#if !$address}
          <button on:click={connect} class="mint-button"><p>Connect Wallet</p></button>
          {:else}
            <button on:click={mint} class="mint-button"><p>Mint</p></button>
            <br><br>{addressDisplay}  
          {/if} -->
        </div>
        <div class="image-box" style="">

          <Carousel autoplay>
                
            <img transition:fade src="http://pcdn.500px.net/13879205/577f96630535763e3dfc628d8f4a653b1495db1f/4.jpg" style="z-index:2;position:relative;width:256px;filter:saturate(0);" alt="">
            <img transition:fade src="https://www.irequireart.com/blog/wp-content/uploads/relativity-lattice-1.jpg" style="z-index:2;position:relative;width:256px;filter:saturate(0);" alt="">
            <img transition:fade src="https://dayoftheartist.files.wordpress.com/2014/11/ax192-7f8a-9jpg-b7073d105f67b355.jpg" style="z-index:2;position:relative;width:256px;filter:saturate(0);" alt="">

           
          </Carousel>           
        </div>
      </div>
    </div>
  </div>
</div>



<style>
  

.color1 { fill: #333; animation: escherflow2 7s ease alternate infinite;}

.color2 { fill: #444; animation: escherflow3 2s ease alternate infinite;}

.color3 { fill: #555; animation: escherflow4 5s ease alternate infinite;}


  .metamask-container {
    overflow: hidden;
    height: 512px;
    width: 512px;
    border: unset;
}
  .escher{z-index:-1;
    display:flex;
    overflow: hidden;
 background-attachment: fixed;height:calc(100vh + 4rem);clip-path: polygon(0 0, 100% 0, 100% 100%, 4rem 100%, 0 calc(100% - 4rem));}
 @keyframes escherflow{
   0%{background-color: rgb(206, 206, 206);}
   50%{background-color: rgb(59, 59, 59);}
   100%{background-color: rgb(206, 206, 206);}

 } @keyframes escherflow2{
   0%{fill: #333;}
   50%{fill: #333a;}
   100%{fill: #333;}

 }@keyframes escherflow3{
   0%{fill: #444;}
   50%{fill: #444a;}
   100%{fill: #444;}

 }@keyframes escherflow4{
   0%{fill: #555;}
   50%{fill: #555a;}
   100%{fill: #555;}

 }
 .backdrop{width:calc(100vw - 164px);
    height: 100vh;
    width:100vw;
    position: fixed;
    pointer-events:none;
    z-index: 2;
    display: block;
    top: 0px;
    right: 0px;}

.hero{background-image:linear-gradient(45deg, #00015a, #ff00aa);width:100%;height:100%;display:flex;flex-flow:column;justify-content: center; overflow:hidden;   backdrop-filter:  invert(0%)brightness(0.5);transition:all 0.2s ease;
}
#svg-pattern{opacity:0.5;position:absolute;top:0px;left:0px;display:block;}
.hero:hover{ backdrop-filter: invert(100%)brightness(1);cursor:crosshair;}
</style>
