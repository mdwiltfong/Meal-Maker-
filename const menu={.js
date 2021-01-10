const menu={
_courses: {
  appetizers: [],
  mains: [],
  desserts: [],
},

set appetizers(appetizers){
 this._courses.appetizers=appetizers;
},

set mains(mains){
  this._courses.mains=mains;
},
set desserts(desserts){
 this._courses.desserts=desserts;
},

get desserts(){
 return this._courses.desserts;
},
get appetizers(){
  return this._courses.appetizers;
},
get mains(){
  return this._courses.mains;
},

get courses() {
  return {
    appetizers: this.appetizers,
    mains: this.mains,
    desserts: this.desserts,
  };
},


addDishToCourse(courseName,dishName,dishPrice) {
const dish={
  name:dishName,
  price:dishPrice,
};

 this._courses[courseName].push(dish);
},




getRandomDishFromCourse(courseName){
let dishes=this._courses[courseName];
i=Math.floor(Math.random()*dishes.length);
return dishes[i];
},

generateRandomMeal(){
let appetizer=this.getRandomDishFromCourse('appetizers');
let main=this.getRandomDishFromCourse('mains');
let dessert=this.getRandomDishFromCourse('desserts');

let totalPrice=appetizer.price+main.price+dessert.price;

return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}. The price is ${totalPrice}.`
},
};


menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Coconut Shrimp', 8.25);
menu.addDishToCourse('appetizers', 'Chicken Fingers', 16.25);

menu.addDishToCourse('mains', 'Steak', 16.25);
menu.addDishToCourse('mains', 'Ham Sandwich', 15.25);
menu.addDishToCourse('mains', 'Steak Salad', 25.25);

menu.addDishToCourse('desserts', 'Beaver Tail', 16.25);
menu.addDishToCourse('desserts', 'Molten Lava Cake', 20.25);
menu.addDishToCourse('desserts', 'Ice Cream', 16.25);


let meal=menu.generateRandomMeal();

console.log(meal);





