var i =0;
var 
a=0,
b=0,
c=0,
d=0,
e=0,
zone = {
    a:'identite',
    b:'domicile',
    c:'banque',
    d:'mandataire',
    e:'informelle',
};


async function nextSteper(boxName) {
    var boxs = document.querySelectorAll(`.${boxName}`);
    i= getIndex(boxName);
    if (i < boxs.length-1) {
            boxs[i].id = "masque";
            incrementIndex(boxName,true);
            boxs[i].id = "plain";
       }
}

async function lastSteper(boxName){
    var boxs =document.querySelectorAll(`.${boxName}`);
    i= getIndex(boxName);
    if (i>0) {
        boxs[i].id = "masque";
        incrementIndex(boxName,false);
        boxs[i].id = "plain";
       }      
}

function getIndex(boxName) {
    if (boxName == 'identite') {
        return a;
    }else if (boxName == 'domicile') {
        return b;
    }else if (boxName == 'banque') {
        return c;
    }else if (boxName == 'mandataire') {
        return d;
    }else if (boxName == 'informelle') {
        return e;
    }
}

function incrementIndex(boxName,incr) {
    if (boxName == 'identite') {
        if (incr) {
             return a++;
        }else{
            return a--;
        }
    }else if (boxName == 'domicile') {
        if (incr) {
            return b++;
       }else{
           return b--;
       }
    }else if (boxName == 'banque') {
        if (incr) {
            return c++;
       }else{
           return c--;
       }
    }else if (boxName == 'mandataire') {
        if (incr) {
            return d++;
       }else{
           return d--;
       }
    }else if (boxName == 'informelle') {
        if (incr) {
            return e++;
       }else{
           return e--;
       }
    }
}