"use strict"

var people = [
  {title: "Activist,",
  name: "Mahatma Gandhi",
  bio: "The leader of the Indian independence movement in British-ruled India.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Portrait_Gandhi.jpg/330px-Portrait_Gandhi.jpg",
  lifespan: {
    birth: 1869,
    death: 1948
    }},
  {title: "Humanitarian,",
  name: "Martin Luther King Jr.",
  bio: "The leader of the African-American Civil Rights Movement.",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Martin_Luther_King%2C_Jr..jpg",
  lifespan: {
    birth: 1929,
    death: 1968
  }
 }   
]

let container =  document.getElementById("container");
let input = document.getElementById('inputText');
let card = document.getElementsByClassName("card");
let bio = document.getElementsByClassName("bio");

function populateDOM (){
for (var i = 0; i < people.length; i++) {
    let person = people[i];
    buildCard(person);
  }
  AddClickEvent();
}

function buildCard(person){
  container.innerHTML += "<person class='card'><header id ='hdr'>" + "Title and Name:   " + person.title + " "+ person.name + "</header>" + "<section id='sect'><p class='bio'>"+person.bio + "</p>"+ "<img src =" + person.image +">"+ "</section>" + "<footer id ='foot'>" + "Lifespan:"+ person.lifespan.birth + " to  "+ person.lifespan.death + "</footer>"  + "</person>";

}

function AddClickEvent(){
  for (let i= 0 ;i < card.length; i++) {
    let currcard = card[i];
    let currBio = bio[i];
    currcard.addEventListener("click", function(){
    removeSelected();
    input.value = " ";
    input.focus();
    currcard.classList.add('selected');
    keyEvent(currcard, currBio);
    })
  };
}

function removeSelected(){
  for (var i = 0; i < card.length; i++) {
    card[i].classList.remove('selected')
  };
}

function keyEvent(currcard,currBio){
  input.addEventListener('keyup', function(event){
    if(currcard.classList.contains('selected')){
      let newBio = event.currentTarget.value;
      currBio.innerHTML = newBio;
      console.log(event );
        if(event.keyCode === 13)
        {
        currBio.innerHTML = newBio;
        console.log("newBio",newBio );
        input.value  = "";  
        }}
  })
}

populateDOM ();