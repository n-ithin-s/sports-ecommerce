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

function price(){
    let price=286;
    document.getElementById('subtotal1').innerHTML='$'+ document.getElementById('num1').value*price + '.00';
    document.getElementById('sub-t1').innerHTML='$'+ document.getElementById('num1').value*price + '.00';
   
}
   
function price2(){
    let price=286;
    document.getElementById('subtotal2').innerHTML='$'+ document.getElementById('num2').value*price + '.00';
    document.getElementById('sub-t2').innerHTML='$'+ document.getElementById('num2').value*price + '.00';
    let total= Number(document. getElementById('num1').value*price) + Number(document.getElementById('num2').value*price);
    document.getElementById('grandtotal').innerHTML='$'+total+".00";
}

