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
  <div class="" id="hero">
    <h1 style="font-size:20rem;max-width:calc(100vw - 200px);position:fixed;top:0px;right:50px;text-align:left;z-index:2;color:white;line-height:1;margin:unset;" >THIS IS THE TITLE TO AN NFT PROJECT!</h1>
    <body translate="no" style="overflow:hidden!important;">
  <style>#defaultCanvas0{position:fixed;top:0px;right:0px;}#defaultCanvas1{position:fixed;top:0px;right:0px;}</style>
      <script src="https://cpwebassets.codepen.io/assets/common/stopExecutionOnTimeout-1b93190375e9ccc259df3a57c1abc0e64599724ae30d7ea4c6877eb615f89387.js"></script>
  
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.3.1/p5.min.js"></script>
        <script id="rendered-js">
  const REDS = [
  "#e45064",
  "#e45064",
  "#e65d6c",
  "#ec6a5f",
  "#e13750",
  "#c03671",
  "#643d7a",
  "#284671",
  "#284671",
  "#284671"];
  
  const YELLOWS = ["#ef9f50", "#f2c061", "#f3bf61"];
  const LIGHT_BLUES = ["#b7cbef", "#e2eaf4", "#e2eaf4"];
  const DARK_BLUES = ["#3271ac", "#4282b6", "#7abcec"];
  const backgroundColor = "#ffffff";
  const width = window.innerWidth;
  const height = window.innerHeight;
  const totalFrames = 1000;
  let frameCount = 0;
  let recording = false;
  
  function setup() {
    canvas = createCanvas(width, height, WEBGL);
    noiseSeed(20);
  }
  
  let delta = 0;
  let delta1 = 0;
  let delta2 = 0;
  let delta3 = 0;
  
  function draw() {
    frameCount += 1;
    let frameDelta = 2 * Math.PI * (frameCount % totalFrames) / totalFrames;
  
    let bg = color(backgroundColor);
    background(bg);
  
    drawDarkBlues(DARK_BLUES, -width, -height * 0.7, PI / 150, 4);
    drawDarkBlues(DARK_BLUES, -width, -400, PI / 20, 2);
    drawLightBlues(LIGHT_BLUES);
    drawYellows(YELLOWS);
    drawReds(REDS);
  }
  
  function drawDarkBlues(colors, _x, _y, _r, _s) {
    push();
  
    rotate(_r);
  
    translate(_x, _y);
    scale(_s, _s);
  
    noStroke();
  
    let size = 100;
    let x = -(size / 2);
    let y = 0;
  
    beginShape(TRIANGLE_STRIP);
  
    for (let i = 0; i < colors.length - 1; i++) {if (window.CP.shouldStopExecution(0)) break;
      let j = 0;
  
      while (j < width * 2 + size / 2) {if (window.CP.shouldStopExecution(1)) break;
        let waveSize = 15;
        let y0 = y + sin(delta3 + j + x) * waveSize;
  
        delta3 += 0.00003;
  
        let y2 = y + size * 1.2 + sin(delta3 + j + x) * waveSize;
  
        if (j % 2 == 0) {
          fill(colors[i]);
          vertex(x, y0); //left 1
          fill(colors[i + 1]);
          vertex(x + size / 2, y2); //tip 3
        }
  
        x += size / 2;
        j += size / 2;
      }window.CP.exitedLoop(1);
      x = -(size / 2);
      y += size;
    }window.CP.exitedLoop(0);
  
    endShape(CLOSE);
  
    pop();
  }
  
  function drawLightBlues(colors) {
    push();
  
    rotate(PI / 20);
  
    translate(-width / 2, -200);
    scale(2, 2);
  
    noStroke();
  
    let size = 100;
    let x = -(size / 2);
    let y = 0;
  
    beginShape(TRIANGLE_STRIP);
  
    for (let i = 0; i < colors.length - 1; i++) {if (window.CP.shouldStopExecution(2)) break;
      let j = 0;
  
      while (j < width * 2 + size / 2) {if (window.CP.shouldStopExecution(3)) break;
        let waveSize = 15;
        let y0 = y + sin(delta2 + j + x) * waveSize;
        y0 += sin((delta2 + j + x) * 10) * 5;
  
        delta2 += 0.0001;
  
        let y2 = y + size * 1.2 + sin(delta2 + j + x) * waveSize;
        y2 += sin((delta2 + j + x) * 10) * 5;
  
        if (j % 2 == 0) {
          fill(colors[i]);
          vertex(x, y0); //left 1
          fill(colors[i + 1]);
          vertex(x + size / 2, y2); //tip 3
        }
  
        x += size / 2;
        j += size / 2;
      }window.CP.exitedLoop(3);
      x = -(size / 2);
      y += size;
    }window.CP.exitedLoop(2);
  
    endShape(CLOSE);
  
    pop();
  }
  
  function drawYellows(colors) {
    push();
  
    rotate(PI / 10);
  
    translate(-width / 2, -20);
    scale(2, 2);
  
    noStroke();
  
    let size = 50;
    let x = -(size / 2);
    let y = 0;
  
    beginShape(TRIANGLE_STRIP);
  
    for (let i = 0; i < colors.length - 1; i++) {if (window.CP.shouldStopExecution(4)) break;
      let j = 0;
  
      while (j < width * 2 + size / 2) {if (window.CP.shouldStopExecution(5)) break;
        let waveSize = 10;
        let y0 = y + sin(delta1 + j + x) * waveSize;
  
        delta1 += 0.0001;
  
        let y2 = y + size * 1.2 + sin(delta1 + j + x) * waveSize;
  
        if (j % 2 == 0) {
          fill(colors[i]);
          vertex(x, y0); //left 1
          fill(colors[i + 1]);
          vertex(x + size / 2, y2); //tip 3
        }
  
        x += size / 2;
        j += size / 2;
      }window.CP.exitedLoop(5);
      x = -(size / 2);
      y += size;
    }window.CP.exitedLoop(4);
  
    endShape(CLOSE);
  
    pop();
  }
  
  function drawReds(colors) {
    push();
  
    rotate(PI / 6);
  
    translate(-width, 0);
    scale(1, 1);
  
    noStroke();
  
    let size = 100;
    let x = -(size / 2);
    let y = 0;
  
    beginShape(TRIANGLE_STRIP);
  
    for (let i = 0; i < colors.length - 1; i++) {if (window.CP.shouldStopExecution(6)) break;
      let j = 0;
  
      while (j < width * 2 + size / 2) {if (window.CP.shouldStopExecution(7)) break;
        let waveSize = 20;
  
        let d = delta + j + x;
        let y0 = y + sin(d) * waveSize;
        y0 += sin(d * 10) * 10;
  
        delta += 0.00005;
  
        let d2 = delta + j + x;
        let y2 = y + size * 1.2 + sin(d2) * waveSize;
        y2 += sin(d2 * 10) * 10;
  
        if (j % 2 == 0) {
          fill(colors[i]);
          vertex(x, y0); //left 1
          fill(colors[i + 1]);
          vertex(x + size / 2, y2); //tip 3
        }
  
        x += size / 2;
        j += size / 2;
      }window.CP.exitedLoop(7);
      x = -(size / 2);
      y += size;
    }window.CP.exitedLoop(6);
  
    endShape(CLOSE);
  
    pop();
  }
  //# sourceURL=pen.js
      </script>
  
    
  
  
  
  
   
  <main><canvas id="defaultCanvas0" class="p5Canvas" style="width: 1667px; height: 904px;" width="1667" height="904"></canvas></main></body>
  </div>

  <div class="" id="about">
  </div>

  <div class="" id="gallery">
  </div>

  <div class="" id="mint">
  </div>

</div>



<style>

  svg{
	position:fixed;
	top:50%;
	left:50%;
	transform:translate(-50%,-50%);
}
</style>
