// let numberOfCars = parseInt(prompt("Enter number of cars: "));
// let cars = [];
// function CarCreator(cName) {
//   this.carName = cName;
//   this.position = 0;
//   this.order= Math.random();
// }
// for (let i = 0; i < numberOfCars; i++) {
//   let x;
//   switch ((i + 1) % 10) {
//     case 1:
//       x = "'st";
//       break;
//     case 2:
//       x = "'nd";
//       break;
//     case 3:
//       x = "'rd";
//       break;
//     default:
//       x = "'th";
//   }
//   if (i + 1 === 11 || i + 1 === 12 || i + 1 === 13) {
//     x = "'th";
//   }
let cars=[];
let numberOfCars= parseInt(prompt("Enter Number of cars: "));
function CarCreator(cName){
  this.carName= cName;
  this.position=0;
  this.order= Math.random();
}
for(let i=0;i<numberOfCars;i++){
  let carName= prompt("please choose a name for car Numer "+ (i+1));
  let raceCar = new CarCreator(carName);
  cars.push(raceCar);
}
console.log(cars);
//   let userName = prompt("please enter name of the " + (i + 1) + x + " car");
//   let raceCAr = new CarCreator(userName);
//   cars.push(raceCAr);
// }
// console.log(cars);

function replacechar(str, index, char) {
  return str.slice(0, index) + char + str.slice(index + 1);
}
let map = [];
for (let i = 0; i < 300; i++) {
  map.push("*");
}

map = map.join("");
let originalMap = map;
let finished = [];
while(finished.length<numberOfCars){
  let moveArray = [];
  let positionArray = [];
   for (item of cars) {
  

    let distance = parseInt(Math.random() * 10 + 1);
    moveArray.push(distance);
    map = replacechar(map, item.position, "*");
    item.position += distance;
    if (item.position >= 299 && !finished.includes(item.carName)) {
      finished.push(item.carName);
      cars.splice(cars.indexOf(item),1);
      map=map.slice(0,299)+"*";
    }
    else{
      if (map[item.position] !== "*" && item.position !==0 ) {
        let hitCar = map[item.position];
        for (element of cars) {
          if (element.carName === hitCar) {
            element.position = 0;
          }
        }
      }
  
      positionArray.push(item.position);
      map = replacechar(map, item.position, item.carName);
    }
  }
  console.log(map);
  console.log("------------------------------------------");
}
console.log(finished);
console.log("winner: "+ finished[0]);



