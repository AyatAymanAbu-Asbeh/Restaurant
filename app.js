'use strict'
//constructor
function Food(idc,name,type,price){
    this.idc=idc;
    this.name=name;
    this.type=type;
    this.price=price;
    this.space="\n";
};
Food.prototype.rendertable=function (){
    let foodtable=document.getElementById("table");
    let fooditem=document.createElement("tr");
    foodtable.appendChild(fooditem);



    let foodid=document.createElement("td");
    let foodname=document.createElement("td");
    let foodtype=document.createElement("td");
    let foodprice=document.createElement("td");
    fooditem.appendChild(foodid);
    fooditem.appendChild(foodname);
    fooditem.appendChild(foodtype);
    fooditem.appendChild(foodprice);
    foodid.textContent=this.idc;
    foodname.textContent=this.name;
    foodtype.textContent=this.type;
    foodprice.textContent=this.price;
    


    

};

Food.prototype.render=function(){
    

    let food=document.getElementById('food');

   let idc=document.createElement();
    idc.textContent=this.idc;
    food.appendChild(idc);

    let name=document.createElement();
    name.textContent=this.name;
    food.appendChild(name);

    let type=document.createElement();
    type.textContent=this.type;
    food.appendChild(type);

    let price=document.createElement();
    price.textContent=this.price;
    food.appendChild(price);

    let space =document.createElement();
    space.textContent=this.space;
    food.appendChild(space);

}
function handler(e){
    e.preventDefault();
    let idc= e.target.idc.value;
    let name= e.target.name.value;
    let type= e.target.type.value;
    let price= e.target.price.value;
    let space =" \n ";
   

  let food= new Food(idc,name,type,price);

  food.rendertable();
  food.render();
 

console.log(idc,name,type,price);

}

let clickvalue=document.getElementById('foodform');
clickvalue,addEventListener('submit',handler)




