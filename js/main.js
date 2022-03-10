/* Modifichiamo il codice dell'esercizio per renderlo funzionante con un array di oggetti al posto dei tre array separati, con una sola regola: non è possibile modificare l'HTML ma solamente JS e CSS.
Ricordiamo sempre l'importanza dell'integrità del dato.

Bonus 1:
Sperimentiamo attraverso l'uso delle timing functions anche una funzionalità di scorrimento al nostro carosello:
al click di un bottone possiamo far partire, ad intervalli di tempo a piacere, lo scorrimento delle immagini disponibili nel carosello stesso.

Bonus 2:
E se volessi un bottone per invertire la "direzione" del carosello? */

document.getElementById('my-before-carousel').innerHTML = `<h1 class="text-white fw-bold">Cosa vuoi guardare stasera?</h1>`;

const immagini = [
    {
        name: 'The Witcher',
        image: 'witcher.jpg',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
    },
    {
        name: 'The Sinner',
        image: 'sinner.jpg',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
    },
    {
        name: 'Revolution',
        image: 'rivoluzione.jpg',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
    },
    {
        name: 'Daredevil',
        image: 'daredevil.jpg',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
    },
    {
        name: 'Ghoul',
        image: 'ghoul.jpg',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
    },
];




let mainImageWrapper = document.querySelector('div.my-carousel-images');

mainImage = "";

/* Ciclo gli elementi all'interno dell'array immagini */
for (let i = 0; i < immagini.length; i++){
    mainImage += `
    <div class="bigger-img d-none position-relative" id="visualized-image">
        <img src="${"img/"+immagini[i].image}" alt="${immagini[i].name}">
    </div>`;

    document.querySelector('div.my-thumbnails.position-relative').innerHTML += `
    <div class="my-thumbnails-container d-inline px-3">
        <img src="${"img/"+immagini[i].image}" alt="${immagini[i].name}">
    </div>`;
}



/* Scrivo nel div my-carousel-images tutti gli elementi dell'array immagini ciclati */
mainImageWrapper.innerHTML = mainImage;


/* Visualizzo solo la prima immagine */
document.getElementsByClassName('bigger-img')[0].classList.remove('d-none');

/* Variabile per contare */
let start = 0;

document.querySelector('div.my-next.position-absolute').addEventListener('click', function(){
    if (start < 4) {   
        document.getElementsByClassName('bigger-img')[start].classList.add('d-none');
        
        start++;
        
        document.getElementsByClassName('bigger-img')[start].classList.remove('d-none');
    }
});

document.querySelector('div.my-previous.position-absolute').addEventListener('click', function(){
    if (start > 0) {   
        document.getElementsByClassName('bigger-img')[start].classList.add('d-none');
        
        start--;
        
        document.getElementsByClassName('bigger-img')[start].classList.remove('d-none');
    }
})