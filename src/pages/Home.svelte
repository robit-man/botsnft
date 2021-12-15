<script>
import { onMount, getContext} from 'svelte';
import { slide, fade } from 'svelte/transition';
import { address, contract, provider, nfts, balances } from '../store';
import { Swiper, SwiperSlide } from 'swiper/svelte';
import "swiper/css/pagination";
import Mask from "./mask.svelte";
import Gallery from "./Gallery.svelte";
import Example from "./example.svelte";
import "aframe"
import "aframe-svelte"
    //Help import data from opensea and pass into SwiperSlide <3 
    import { 
        initProvider,
        mintHex
    } from '../utils.js';

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


<div class="wrapper">
<div class="escher">
  <div class="backdrop">
    <img src="/imgs/focus.svg" width="32px" height="32px" style="opacity:0.9;animation: flash 2s ease alternate infinite;mix-blend-mode:difference;position:fixed;top:1rem;right:1rem;" alt="">
    <img src="/imgs/focus.svg" width="32px" height="32px" style="opacity:0.9;animation: flash2 4s ease alternate infinite;mix-blend-mode:difference;position:fixed;bottom:1rem;right:1rem;" alt="">
    <!--<img src="/imgs/focus.svg" width="32px" height="32px" style="opacity:0.9;animation: flash3 2s ease alternate infinite;mix-blend-mode:difference;position:fixed;top:1rem;left:1rem;" alt="">-->
    <img src="/imgs/focus.svg" width="32px" height="32px" style="opacity:0.9;animation: flash4 3s ease alternate infinite;mix-blend-mode:difference;position:fixed;bottom:1rem;left:1rem;" alt="">
  </div>
  <div class="hero " id="hero">
    <h1 style="position:relative;z-index:2;color:#f1f1f1;line-height:1;padding:2rem;mix-blend-mode:normal;" >H<b style="animation: flash3 2s ease alternate infinite;">E</b><div class="mobile-break"><br></div>X<b style="animation: flash3 4s ease alternate infinite;">E</b><div class="mobile-break"><br></div>L<b style="animation: flash3 5s ease alternate infinite;">Z</b></h1>
    <a href="#mint"><div class="mint-button-cta-box" style=""><h1>MINT ▼</h1></div></a>
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
          EXP<b style="animation: flash 7s ease alternate infinite;">L</b>ORING <b style="animation: flash3 10s ease alternate infinite;">C</b>OMPLEX GEOMETRIES
        </h1>
        <p class="subheader">>> ESCHER AND PENROSE INSPIRED</p>
        Hexelz NFT is about complex geometries and art. It’s non generative, drawn piece by piece, inspired by the imaginative works of M C Escher. All art is based on a triangulation grid. Hexelz NFTs shows a colorful approach with visual illusions tricks. Called impossible objects, the art is about geometry, tessellations, and mathematics.        <p></p>
      </div>
      <div class="image-box" style="border-radius:4px;">
        <div class="perspective-hover-1" style="border-radius:4px;background-size:cover;" src="" alt=""><img style="width:100%;height:100%;" src="/imgs/Hexels_39.png" alt=""></div>
      </div>
    </div>

    </div>
    


    <div class="area" style="" id="roadmap" >
      <div class="text-image-row wrap-reverse">

        <div class="image-box" style="border-radius:4px;">
          <div class="perspective-hover-2" style="border-radius:4px;background-size:cover;" src="" alt=""><img style="width:100%;height:100%;" src="/imgs/Hexels_20.png" alt=""></div>
        </div>

      <div class="text-box2">
        <h1>
          CON<b style="animation: flash 7s ease alternate infinite;">N</b>ECT WI<b style="animation: flash2 10s ease alternate infinite;">T</b>H THE C<b style="animation: flash3 7s ease alternate infinite;">U</b>RATORS
        </h1>
        <p class="subheader"> Subheader Text >></p>
          <p>
            Learn More about the artist, and follow for ongoing collaborations and projects!
        </p>
        <div class="row">
        <a href="https://twitter.com/HexelzNFT"><img width="128px" src="/imgs/twitter.png" alt=""></a>
        <a href="https://t.co/qF2LhfTU8g"><img width="128px" src="/imgs/discord.png" alt=""></a>
      </div>
      </div>
    </div>

    </div>
    


  </div>

  <div class="fullheight"  id="gallery">
    
    <div class="area">
      <div class="text-image-row">
       
      </div>
    </div>
  </div>

  <div class="fullheight" id="mint">
    <div class="area" style="">
      
      <div class="text-image-row ">
        <div class="text-box2">
          <h1>
            MINT A HEXELZ
          </h1>
          <p class="subheader">>> CONNECT TO METAMASK</p>
        {#if !$address}
          <button on:click={connect} class="mint-button"><p>Connect Wallet</p></button>
          {:else}
            <button on:click={mint} class="mint-button"><p>Mint</p></button>
            <br><br>{addressDisplay}  
          {/if}

        </div>
        <div class="" style="">
          <Mask />
  
    
            </div>
      </div>
    </div>
  </div>
</div>



<style>
  
 .mask > svg {
  overflow:visible!important;
  max-width:512px;
}
.mask{display: flex;
  flex-flow: wrap;    overflow:visible!important;
  justify-content: center;
}

@media screen and (max-width:900px){

  #logo-container svg {
  width: 100vw;
  height: 100vw;
  margin:auto;
}
.mask{display: flex;
  flex-flow: wrap;
  justify-content: center;
height:100vw;width:100vw;}
}


.color1 { fill: #333; animation: escherflow2 7s ease alternate infinite;}

.color2 { fill: #444; animation: escherflow3 2s ease alternate infinite;}

.color3 { fill: #555; animation: escherflow4 5s ease alternate infinite;}


  .metamask-container {
    z-index:5;
    position:relative;
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

.hero{
  perspective: 600px;
 background-image:linear-gradient(45deg, #00015a, #ff00aa);width:100%;height:100%;display:flex;flex-flow:column;justify-content: center; overflow:hidden;   backdrop-filter:  invert(0%)brightness(0.5);transition:all 0.2s ease;
}
#svg-pattern{opacity:0.5;position:absolute;top:0px;left:0px;display:block;animation:zip 10s linear infinite;transition: transform 0.2s cubic-bezier(0.1, 0.7, 1.0, 0.1);}
.hero:hover{ backdrop-filter: invert(100%)brightness(1);cursor:crosshair;}
@keyframes zip{
  0%{transform:scale(1.5)rotateY(0deg)rotateX(0deg)rotateZ(0deg)}
  20%{transform:scale(1.4)rotateY(0deg)rotateX(0deg)rotateZ(5deg)}
  40%{transform:scale(1.3)rotateY(0deg)rotateX(5deg)rotateZ(5deg)}
  60%{transform:scale(1.2)rotateY(5deg)rotateX(5deg)rotateZ(0deg)}
  80%{transform:scale(1.3)rotateY(5deg)rotateX(0deg)rotateZ(5deg)}
  20%{transform:scale(1.4)rotateY(0deg)rotateX(0deg)rotateZ(5deg)}
  40%{transform:scale(1.3)rotateY(0deg)rotateX(-5deg)rotateZ(0deg)}
  60%{transform:scale(1.4)rotateY(-5deg)rotateX(-5deg)rotateZ(0deg)}
  80%{transform:scale(1.5)rotateY(-5deg)rotateX(0deg)rotateZ(-5deg)}
  100%{transform:scale(1.5)rotateY(0deg)rotateX(0deg)rotateZ(0deg)}}

</style>
