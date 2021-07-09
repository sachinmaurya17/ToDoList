

let button = document.querySelector('.btn');

let blurDiv = document.querySelector('#blur');

let addCard = document.querySelector('.add-card');

let closeButton = document.querySelector('.btn-close-addCard');

let markDone = document.querySelector('.btn-mark-done');

let listItem = document.querySelector('.list-item');

let listCard = document.querySelector('.list-card');

let y = document.querySelector('.container-list');

let deleteButton =  document.querySelector('.delete-list-card');

deleteButton.addEventListener('click',() =>{
    listCard.classList.add('remover');
});

button.addEventListener('click',() => {
    blurDiv.classList.add('activeBlur');
    y.classList.add('activeBlur');
    addCard.classList.add('active');
}); 

closeButton.addEventListener('click',()=>{
    blurDiv.classList.remove('activeBlur');
    y.classList.remove('activeBlur');
    addCard.classList.remove('active');
});

markDone.addEventListener('click',() =>{
    listItem.classList.add('itemActive');
    markDone.classList.add('remover');
});