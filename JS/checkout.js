$(document).ready(function(){
    $('#demo1').hide();
    
    

    
        $('#first').keyup(function(){
            fun();
        });

        function fun(){
        if($('#first').val()==""){
            $('#demo1').show();
            return false;
        }
        else{
            $('#demo1').hide();
            return true;
        }
        }
        
    

    $('#demo2').hide();
    $('#last').keyup(function(){
        fun2();
    });

    function fun2(){
        if($('#last').val()==""){
            $('#demo2').show();
            return false;
        }
        else{
            $('#demo2').hide();
            return true;
        }
    }
    

    
    $('#demo3').hide();
    $('#add').keyup(function(){
        fun3();
    });

    function fun3(){
        if($('#add').val()==""){
            $('#demo3').show();
            return false;
        }
        else{
            $('#demo3').hide();
            return true;
        }
    }

    
    $('#demo4').hide();
    $('#post').keyup(function(){
        fun3();
    });

    function fun4(){
        if($('#post').val()==""){
            $('#demo4').show();
            return false;
        }
        else{
            $('#demo4').hide();
            return true;
        }
    }

    
    $('#demo5').hide();
    $('#city').keyup(function(){
        fun5();
    });

    function fun5(){
        if($('#city').val()==""){
            $('#demo5').show();
            return false;
        }
        else{
            $('#demo6').hide();
            return true;
        }
    }

    
    $('#demo6').hide();
    $('#phone').keyup(function(){
        fun6();
    });

    function fun6(){
        if($('#phone').val()==""){
            $('#demo6').show();
            return false;
        }
        else{
            $('#demo6').hide();
            return true;
        }
    }

    $('#demo7').hide();
    $('#email_add').keyup(function(){
        fun7();
    });

    function fun7(){
        if($('#email_add').val()==""){
            $('#demo7').show();
            return false;
        }
        else{
            $('#demo7').hide();
            return true;
        }
    }
    
    
    $('#demo8').hide();
    $('#sele').keyup(function(){
        fun10();
    });

    function fun10(){
        if($('#sele').val()==""){
            $('#demo8').show();
            return false;
        }
        else{
            $('#demo8').hide();
            return true;
        }
    }
    

    

    $('#sub').click(function(){
          fun()
          fun2()
          fun3()
          fun4()
          fun5()
          fun6()
          fun7()
          fun10()
        if(fun()==true && fun2()==true && fun3()==true && fun4()==true && fun5()==true && fun6()==true && fun7()==true && fun10()==true)
            $('#form').submit();
        else
        return false;
        
    });



});
 
function fun8(){
    document.getElementById('hide').style.display="block";
    document.getElementById("bar").style.display="none";
    document.getElementById("close").style.display="block";
}
function fun9(){
    document.getElementById('hide').style.display="none";
    document.getElementById("close").style.display="none";
    document.getElementById("bar").style.display="block";
    
}
 
 
    
 