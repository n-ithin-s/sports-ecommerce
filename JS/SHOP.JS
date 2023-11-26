window.onscroll = function() {myFunction(),mysecond(),mythird(),myfourth(),myfifth()};


function myFunction() {
  if (document.documentElement.scrollTop > 350) {
    document.getElementById("slide_first").classList.add("slideUp")
   
  }
  else{
    document.getElementById("slide_first").classList.remove("slideUp")
   
     
  }
}

function mysecond() {
    if (document.documentElement.scrollTop > 750) {
      document.getElementById("slide_second").classList.add("slideUp")
     
    }
    else{
      document.getElementById("slide_second").classList.remove("slideUp")
     
       
    }
  }

  function mythird() {
    if (document.documentElement.scrollTop > 1050) {
      document.getElementById("slide_third").classList.add("slideUp")
     
    }
    else{
      document.getElementById("slide_third").classList.remove("slideUp")
     
       
    }
  }

  
  function myfourth() {
    if (document.documentElement.scrollTop > 1850) {
      document.getElementById("slide_fourth").classList.add("slideUp")
     
    }
    else{
      document.getElementById("slide_fourth").classList.remove("slideUp")
     
       
    }
  }

  function myfifth() {
    if (document.documentElement.scrollTop > 2550) {
      document.getElementById("slide_fifth").classList.add("slideUp")
     
    }
    else{
      document.getElementById("slide_fifth").classList.remove("slideUp")
     
       
    }
  }

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
 