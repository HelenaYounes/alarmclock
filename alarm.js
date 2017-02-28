
var myInterval;
var startcount;
var reset;


var onLoad = function(){
  var go = document.querySelector('.starter');
  go.addEventListener('click',starting);
  var stopbutton = document.querySelector('.stoper');
  stopbutton.addEventListener('click', stoping);
  var resetbutton = document.querySelector('.reseter');
  resetbutton.addEventListener('click',reseting);




}

function decrement(){
  startcount = document.querySelector('.counter');

    startcount.innerHTML--;
    if(startcount.innerHTML == 0){
    stoping();
    alert("time Out!");
    }
  }






function starting(){
   myInterval = setInterval (decrement, 1000);
}

function stoping(){
 clearInterval(myInterval);

}

function reseting(){
  startcount.innerHTML = 0;

}



window.addEventListener('load',onLoad);
