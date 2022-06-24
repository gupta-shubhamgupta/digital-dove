window.onload=function(){

    

   

    submit.addEventListener("click", function(e){

        if (document.getElementById("plain").value == '') { alert("Your name is missing"); return }
       if (document.getElementById("plain1").value == '') { alert("Your special one's name is missing"); return}
       if (document.getElementById("plain2").value == '') { alert("Your Secret note is missing"); return}

    var fname=document.getElementById("plain").value;
	var sname=document.getElementById("plain1").value;
    var note=document.getElementById("plain2").value;
    var qp = `fn#|#${fname}#|#ln#|#${sname}#|#msg#|#${note}`;


    const encoder = new TextEncoder()
    const view = encoder.encode(qp);
    
    //let encodedStr = view.toString();
    //encodedStr = encodedStr.replace(/,/gi,'/');

 var encodedStr = CryptoJS.AES.encrypt(fname+"!SpC!"+sname+"!SpC!"+note, '#');

    
    var link=document.getElementById("pwd");
    
        link.value=`https://gupta-shubhamgupta.github.io/dove?${encodedStr}`
        document.getElementById("plain").value="";
        document.getElementById("plain1").value="";
        document.getElementById("plain2").value="";


        
    })
    
}


function copy(){
    var cop=document.getElementById("pwd"); 
    cop.select(); 
    document.execCommand("copy");  
    alert("Send this Digital Dove link to your special one's");
  }    
