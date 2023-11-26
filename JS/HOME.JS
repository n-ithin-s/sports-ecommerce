window.onscroll = function() {myFunction(),myFun(),mynew()};


function myFunction() {
  if (document.documentElement.scrollTop > 250) {
    document.getElementById("slide").classList.add("slideUp")
   
  }
  else{
    document.getElementById("slide").classList.remove("slideUp")
   
     
  }
}

function myFun() {
    if (document.documentElement.scrollTop > 850) {
      document.getElementById("slide_new").classList.add("slideUp")
     
    }
    else{
      document.getElementById("slide_new").classList.remove("slideUp")
     
       
    }
  }
  
function mynew() {
  if (document.documentElement.scrollTop > 1450) {
    document.getElementById("slide_third").classList.add("slideUp")
   
  }
  else{
    document.getElementById("slide_third").classList.remove("slideUp")
   
     
  }
}



const slides = document.querySelectorAll('.box');

setInterval(() => {
  const active = document.querySelector('.active');
  active.classList.remove('active');
  if (active.nextElementSibling) {
    active.nextElementSibling.classList.add('active');
  } else {
    slides[0].classList.add('active');
  }
}, 5000);



function fun(){
  document.getElementById('hide').style.display="block";
  document.getElementById("bar").style.display="none";
  document.getElementById("close").style.display="block";
}
function fun2(){
  document.getElementById('hide').style.display="none";
  document.getElementById("close").style.display="none";
  document.getElementById("bar").style.display="block";
  
}