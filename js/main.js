const moreOptions = document.querySelector('#bmore');
const bShowMobileLinks = document.querySelector('#bmenu');
const mobileMenu = document.querySelector('.links');
const moreMenu = document.querySelector('.more .menu');

bShowMobileLinks.addEventListener('click',e =>{
    e.preventDefault();
    mobileMenu.classList.toggle("show");
});

moreOptions.addEventListener('click', e =>{
    e.preventDefault();
    moreMenu.classList.toggle("show");
});

/* const videos = [
{
    id:`b4doITNi2RE`
},
{
    id:`u7oRIRn3mc4`
},
{
    id:`WOqT6U7ZtBc`
}
];

const SilderContainer = document.querySelector('#slider');
const currentContainer = document.querySelector('#current');
const videoContainer = document.querySelector('#videos-container');
const bNext =document.querySelector('.next')
const bPrev =document.querySelector('.prev')


let current = 0;

bNext.addEventListener('click',(e)=>{})
bPrev.addEventListener('click',(e)=>{})

function renderCurrentVideo(id){

    currentContainer.innerHTML= `<iframe width="100%" height="522" src="https://www.youtube.com/mbed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
} */