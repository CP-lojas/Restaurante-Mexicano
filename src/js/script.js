let imagens =[
'src/assets/burritos.jpg',
'src/assets/molhos.jpg',
'src/assets/nachos.jpg',
'src/assets/tacos.jpg',
]


let i = 0;
let tempo = 5000;


function slideShow(){
    document.getElementById('image').src = imagens[i];
    i++;
    if(i == imagens.length){
        i=0;
    }
    setTimeout("slideShow()",tempo)
}
slideShow();