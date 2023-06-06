// khoi tao cac thong so
let btn1 = document.querySelector('#btn1');
let img1 = document.querySelector('#call');
let btn2 = document.querySelector('#btn2');


btn1.addEventListener('click', ()=>{
    img1.src = 'img/callon.png'; 
    firebase.database().ref("thietbi1").set({dienthoai: 1})
})
btn2.addEventListener('click', ()=>{
    img1.src = 'img/call1.png';
    firebase.database().ref("thietbi1").set({dienthoai: 0})
})


// khoi tao cac thong so
let btn3 = document.querySelector('#btn3');
let img2 = document.querySelector('#light');
let btn4 = document.querySelector('#btn4');
// functions nut bam
btn3.addEventListener('click', ()=>{
    img2.src = 'img/street-light.png'; 
    firebase.database().ref("thietbi2").set({den1:1})
})

btn4.addEventListener('click', ()=>{
    img2.src = 'img/street-lamp (2).png';
    firebase.database().ref("thietbi2").set({den1:0})
})



// khoi tao cac thong so
let btn5 = document.querySelector('#btn5');
let img3 = document.querySelector('#loa');
let btn6 = document.querySelector('#btn6');

// functions nut bam
btn5.addEventListener('click', ()=>{
     img3.src = 'img/marketing.png' ;
     firebase.database().ref("thietbi3").set({loa:1})

})
btn6.addEventListener('click', ()=>{
    img3.src = 'img/megaphone.png';
    firebase.database().ref("thietbi3").set({loa: 0})
})


