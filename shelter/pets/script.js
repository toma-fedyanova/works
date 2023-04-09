let burger = document.querySelector('.burger__menu');
let menu = document.querySelector('.header__navigation')
let links =menu.querySelectorAll('li');
let main = document.querySelector('main');
let block = document.querySelector('.overlay');

let petsBlock = document.querySelectorAll('.our__friends_animals');
let cards = document.querySelectorAll('.animal__card');
const mediaQueryThousent = window.matchMedia('(max-width: 1000px)');
const mediaQueryMobile = window.matchMedia('(max-width: 320px)');
const mediaQueryMini = window.matchMedia('(max-width: 767px)');  //for screen less 797px
const mediaQueryTablet = window.matchMedia('(max-width: 768px)');
const body = document.querySelector('body');
let wrapper = document.querySelector('.header__wrapper');
let newCard = document.querySelector('.card_pet_new');
let cross = document.querySelector('.cross');

//burger menu exits on the right
burger.addEventListener('click', function(event) {  //add listener to burger button
  event.stopImmediatePropagation();
  menu.classList.toggle('appier');
  this.classList.toggle('rotate');
  block.classList.toggle('overlay');
})

main.addEventListener('click', function() { //click for not menu 
     menu.classList.remove('appier');
     burger.classList.remove('rotate');
     block.classList.add('overlay');
})


  for (let li of links) {
    if (mediaQueryMini.matches) {
    li.addEventListener('click', () => { //click on the links 
      console.log(li);
      menu.classList.remove('appier');
      burger.classList.remove('rotate');
      block.classList.add('overlay');
    })
  }
}

//popap
let description = newCard.querySelector('.new_card_title .description');
let img = newCard.querySelector('.new_img img');
let imgBlock = newCard.querySelector('.new_img');
let num;
async function getInfoInPopap() {                         //change info in popap cfrd
      
  let img = newCard.getElementsByTagName('img')[0];
  let title = newCard.getElementsByClassName('title')[0];
  let breen = newCard.getElementsByClassName('dog')[0];
  let description = newCard.getElementsByClassName('description')[0];
  let firstBlock = newCard.getElementsByClassName('inner_text_1')[0];
  let secondBlock = newCard.getElementsByClassName('inner_text_2')[0];
  let thirdBlock = newCard.getElementsByClassName('inner_text_3')[0];
  let fourthBlock = newCard.getElementsByClassName('inner_text_4')[0];
      let pets = "pets.json";
      const res = await fetch(pets);
      const data = await res.json();
      
      img.src = data['pets'][num]["img"];
      title.textContent = data['pets'][num]["name"];
      breen.textContent =  data['pets'][num]["breed"];  
      description.textContent =  data['pets'][num]["description"]; 
      firstBlock.textContent = data['pets'][num]["age"];
      secondBlock.textContent = data['pets'][num]["inoculations"];
      thirdBlock.textContent = data['pets'][num]["diseases"];
      fourthBlock.textContent = data['pets'][num]["parasites"];
}
function changePopapForMobile() {           //change size popap for mobile
  imgBlock.style.display = 'none';
  newCard.style.width = '240px';
  description.style.width = '210px';
}

function chengePopapForTablet() {   //change size popap for tablet
  imgBlock.style.display = 'block';
  img.style.width = '330px';
  imgBlock.style.marginLeft = '-20px';
  let text = newCard.querySelector('.new_card_title .dog');
  text.style.fontSize = '20px';                                 
  description.style.fontSize = '13px'; 
  description.style.width = '260px'; 
  newCard.style.width = '630px';   
}
function chengePopapForComputer() {  //change size popap for computer
  imgBlock.style.display = 'block';
  img.style.width = '510px';
  let text = newCard.querySelector('.new_card_title .dog');
  text.style.fontSize = '21px';                                 
  description.style.fontSize = '17px'; 
  description.style.width = '350px'; 
  newCard.style.width = '900px'; 
  imgBlock.style.marginLeft = '-10px';  
}

function getLocationPopapOverlay() {     //locate popap in window
  newCard.style.left = '50%';            //appiar card
  body.style.overflowY = 'hidden';
  block.classList.remove('overlay');
}
function getPopapVisible() {            //add listener for animal card
  let arr = ["Jennifer", "Sophia", "Woody", "Scarlett", "Katrine", "Timmy", "Freddie", "Charly"];
  for (let card of cards) { 
    card.addEventListener('click', function func(event) {
      let value = card.querySelector('.animal_name').textContent;       //find index in array
      num = arr.indexOf(value);
      getInfoInPopap(); 
      event.stopPropagation();
      getLocationPopapOverlay()
    })
  }
}
getPopapVisible();

function getClosePopap() {                        //close popap  
    newCard.style.left = '-150%';
    body.style.overflowY = 'scroll';
    block.classList.add('overlay');
}
cross.addEventListener('click', getClosePopap);
block.addEventListener('click', getClosePopap);

window.addEventListener('resize',function(){   //listener for change size window
  if (mediaQueryMini.matches) changePopapForMobile();
  else if (mediaQueryThousent.matches) chengePopapForTablet(); 
  else chengePopapForComputer();    
});