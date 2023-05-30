'use strict'
//constructor
function Food(name,type,price){
    this.name=name;
    this.type=type;
    this.price=price;
};

Food.prototype.render=function(){
    let food=document.getElementById('food');

    let name=document.createElement('tbody');
    name.textContent=this.name;
    food.appendChild(name);

    let type=document.createElement('ty');
    type.textContent=this.type;
    food.appendChild(type);

    let price=document.createElement('ty');
    price.textContent=this.price;
    food.appendChild(price);'\n'
     

}
function handler(e){
    e.preventDefault();
    let name= e.target.name.value;
    let type= e.target.type.value;
    let price= e.target.price.value;

  let food= new Food(name,type,price);
  food.render();

console.log(name,type,price);"\n"

}

let clickvalue=document.getElementById('foodform');
clickvalue,addEventListener('submit',handler)


