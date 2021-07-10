

let addListCard = document.querySelector('.btn-add-addCard');


console.log(addListCard);

let todoArray = [];

let initailStep = () =>{
    let cardDisplay = document.querySelector('.flex-row-listCount');
    if(todoArray.length === 0){
        let pTag = document.createElement('p');
        // console.log(pTag);
        pTag.innerHTML = `No Items in the todo list`;
        cardDisplay.append(pTag);
    }
    else{
        let pTag = document.querySelector('.flex-row-listCount p');
        pTag.remove();
        console.log('element remove');
    }
    
}

initailStep();


let displayCard = () =>{
    initailStep();
    let cardDisplay = document.querySelector('.flex-row-listCount');
    var child = cardDisplay.lastElementChild;
    
    console.log(child);

    while (child) {
    cardDisplay.removeChild(child);
    child = cardDisplay.lastElementChild;
    }
    for(let i = 0 ;i < todoArray.length;i++){
        let node = document.createElement('div');
        node.setAttribute("class",`list-card`);
        node.setAttribute("data-key",todoArray[i].id);
        node.innerHTML = `<p class="list-card-heading">${todoArray[i].heading}</p>
        <hr class="ml-list">
        <ul class="ul-list"> 
                <button class="btn-mark-done">mark done</button><br>
        </ul>
        
        <div class="icon">
                    <button class="delete-list-card"><i id="icon-red" class="fa fa-trash"></i></button>
                    <button class="add-list-card"><i  class="icon-blue fa fa-plus-circle"></i></button>
        </div>
        `
       cardDisplay.append(node);
    };

    console.log(todoArray.length);
}

let addToDo = () =>{
    let input = document.querySelector('#addInputListCard').value;
    // creating an object for input 
    if(input!==''){
        let cardObj = {
            id:Date.now(),
            heading : input
        }
        todoArray.push(cardObj);

        console.log(todoArray);
    }


    addCard.classList.remove('active');
    blurDiv.classList.remove('activeBlur');

    displayCard();
}

addListCard.addEventListener('click', addToDo);

let button = document.querySelector('.btn');

let blurDiv = document.querySelector('#blur');

let addCard = document.querySelector('.add-card');

let closeButton = document.querySelector('.btn-close-addCard');

let markDone = document.querySelector('.btn-mark-done');

let listItem = document.querySelector('.list-item');

let listCard = document.querySelector('.list-card');


// let deleteButton =  document.querySelector('.delete-list-card');

// deleteButton.addEventListener('click',() =>{
//     listCard.classList.add('remover');
// });

button.addEventListener('click',() => {
    blurDiv.classList.add('activeBlur');
   
    addCard.classList.add('active');
}); 

closeButton.addEventListener('click',()=>{
    blurDiv.classList.remove('activeBlur');
   
    addCard.classList.remove('active');
});

// markDone.addEventListener('click',() =>{
//     listItem.classList.add('itemActive');
//     markDone.classList.add('remover');
// });






