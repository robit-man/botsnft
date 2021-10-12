<script>
    import { onMount } from "svelte";
    import { slide } from 'svelte/transition';
    import { Router, Link, Route } from "svelte-routing"; 
    export let droidNumber = '73'
    </script>
    

    <div class="wrapper">
        <div class="card">
<div class="front">
        <div class="mint-box">
          <div class="img-box">
            <img src="/imgs/bot.png" alt="">
           </div>
           <div class="text-area">
               <div class="nft-title-area">
                <p style="font-size:2rem;margin:unset;"><b>GURAⓇ</b> Droid {droidNumber}</p>
                <p><b>Buy Now</b> / Make Offer</p>
                <p class="light">Share Link</p>
               </div>

           </div>
        </div>
        <script>
            $('.container').on('click', function () {
            $('.card').toggleClass('flipped');
            });
        </script>
     </div>
    </div>
    <div class="back">

    </div>
    </div>
 
 
 <style>
     
.container{
  width: 300px;
  height: 200px;
  position: relative;
  perspective: 800px;
  border-radius: 4px;
 }
.card{
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border-radius: 6px;
  box-shadow: 0 6px 16px rgba(0,0,0,0.15);
  cursor: pointer;
}
  

  div{
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 6px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;}

  .back{
    transform: rotateY(180deg);
  }
  .flipped{
    transform: rotateY(180deg);
  }
     .mint-box{width:auto;height: min-content;margin:auto;display:flex;flex-flow:row;}
     .img-box{width:auto;height:auto;}
     .img-box > img{width:512px;height:512px;}
     .text-area{text-align:left;margin-left:4rem;display:flex;flex-flow:column;justify-content: space-between;}
     .wrapper{    
       position: absolute;
       margin:auto;
       left: 0px;
       width:100vw;display:flex;flex-flow:row;justify-content:center;
       top:calc(4rem + 100px);
       height:calc(100vh - 150px - 4rem);
     }
     .nft-title-area > p{
	margin:auto 0rem;
     }
     
@media only screen and (max-width: 900px) {
    
    .img-box > img{width:auto;height:auto;}
         .text-area{text-align:left;margin-left:0rem;display:flex;flex-flow:column;justify-content: space-between;}

    .mint-box{width:auto;height: min-content;margin:auto;display:flex;flex-flow:column;max-height: 100%;overflow-y:auto;overflow-x:hidden;}

}
 </style>
 