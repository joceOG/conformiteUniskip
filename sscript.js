//var boxs = document.querySelectorAll('.identite');
/*var i =0;
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
},false);*/
var control = new Map();
var boxs = new Map();

var next = document.querySelectorAll('#next');
var last = document.querySelectorAll('#last');


next.forEach((bott)=>{

   boxs.set(bott.name, document.querySelectorAll(`.${bott.name}`));
   control.set(bott.name,0);

   bott.addEventListener('click',()=>{

       //alert( boxs.get(bott.name).length );

       if (control.get(bott.name) < boxs.get(bott.name).length-1) {
           boxs.get(bott.name)[control.get(bott.name)].id = "masque";
           control.set(bott.name,control.get(bott.name)+1);
           boxs.get(bott.name)[control.get(bott.name)].id = "plain";
       }

   },false);
});

last.forEach((bott)=>{

    boxs.set(bott.name, document.querySelectorAll(`.${bott.name}`));
    control.set(bott.name,0);
 
    bott.addEventListener('click',()=>{
 
        //alert( boxs.get(bott.name).length );
 
        if (control.get(bott.name) > 0) {
            boxs.get(bott.name)[control.get(bott.name)].id = "masque";
            control.set(bott.name,control.get(bott.name)-1);
            boxs.get(bott.name)[control.get(bott.name)].id = "plain";
        }
 
    },false);
 });


