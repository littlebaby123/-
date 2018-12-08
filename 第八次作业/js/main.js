
    function inputEvent(e){
    var val=e.innerHTML;
    var xsval=document.getElementById("input");
    xsval.value+=val; 
    }
    function inputOper(){
    var xsval=document.getElementById("input");
    xsval.value=eval(document.getElementById("input").value);
    }
    function clearNum(){
    var xsval=document.getElementById("input");
    xsval.value="";
    document.getElementById("input").focus();
    }
    function backNum(){
    var arr=document.getElementById("input");
    arr.value=arr.value.substring(0,arr.value.length-1);
    } 