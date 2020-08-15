// Mousemove Parallax
document.addEventListener('mousemove' , parallax);
function parallax(e){
    this.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed');

        const x = (window.innerWidth - e.pageX*speed)/100
        const y = (window.innerHeight - e.pageY*speed)/100

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
};

// h2 changes
let arr = ['Be strong', 'Будь в тонусе', 'Бъди силен', 'Wees sterk', 'être fort', 'मजबूत बनो', 'Да се биде силен', '強くなる', '堅強', 'Būt stipram'];
let i = 0;
let phrasesBlock = document.querySelector('#phrasesBlock');

function slide(){
    phrasesBlock.innerHTML = arr[i];
    phrasesBlock.style.opacity = 1;

    setTimeout(next, 3000);
}

console.log(arr.length);

function next(){
    console.log('after 3s');
    i++;

    if(i > arr.length-1) {
        i=0;
    }

    console.log(i);
    phrasesBlock.style.opacity = 0;
    setTimeout(slide, 1000);
}

slide();