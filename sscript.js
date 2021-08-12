var boxs = document.querySelectorAll('.identite');
var i =0;
var next = document.querySelector('#next');
var last = document.querySelector('#last');

next.addEventListener('click',async()=>{
    //alert('next');
    if (i < boxs.length-1) {
     
     boxs[i].id = "masque";
     i++;
     boxs[i].id = "plain";
    }
},false);

last.addEventListener('click',async()=>{
    if (i>0) {
     boxs[i].id = "masque";
     i--;
     boxs[i].id = "plain";
    }      
},false);