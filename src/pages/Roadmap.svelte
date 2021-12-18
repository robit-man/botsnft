<script>
    import { onMount } from "svelte";
    import { slide } from 'svelte/transition';
    import { Router, Link, Route } from "svelte-routing"; 
    export let droidNumber = '##'
    export let Owner = '0x01f801..'
    export let Creator = '0x897808..'
    export let Price = '1.0'
    export let Type = 'Transparent Mask'
    export let Rarity = '10%'
    export let MintDate = '2021-10-09'
    export let Location = 'The Etherlands'
    </script>
    

    <div class="wrapper">
      <div class="fullheight" id="about">

        <div class="area">
          <div class="text-image-row">
          <div class="text-box">
            <h1>
              EXP<b style="animation: flash 7s ease alternate infinite;">L</b>ORING <b style="animation: flash3 10s ease alternate infinite;">C</b>OMPLEX GEOMETRIES
            </h1>
            <p class="subheader">>> ESCHER AND PENROSE INSPIRED</p>
            Hexelz NFT is about complex geometries and art. It’s non generative, drawn piece by piece, inspired by the imaginative works of M C Escher. All art is based on a triangulation grid. Hexelz NFTs shows a colorful approach with visual illusions and tricks. Called impossible objects, the art is about geometry, tessellations, and mathematics.       <p></p>
          </div>
          <div class="image-box" style="border-radius:4px;">
            <div class="perspective-hover-1" style="border-radius:4px;background-size:cover;" src="" alt=""><img style="width:100%;height:100%;pointer-events: none;" src="/imgs/Hexels_39.png" alt=""></div>
          </div>
        </div>
    
        </div>
        
     </div>
    </div>
     
 
 
 <style>
   body {
  display: flex;
  margin: 0;
  align-items: center;
  justify-content: center;
  height: 100vh;
} .wrapper{display: flex;
flex-flow: column;
justify-content: center;}
canvas {
  width:98vmin;
  height:98vmin;
}@media screen and (max-width:900px){
  .wrapper{display: flex;
flex-flow: column;
justify-content: flex-start;}
}
 </style>
 
