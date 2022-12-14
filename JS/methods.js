// let numberOfCars = parseInt(prompt("Enter number of cars: "));
// let cars = [];
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

//   let cName = prompt("please enter name of the " + (i + 1) + x + " car");

//   function CarCreator(cName) {
//     this.carName = cName;
//     this.position = 0;
//     this.rank = 0;
//   }
//   let raceCAr = new CarCreator(cName);
//   cars.push(raceCAr);
// }

// function replacechar(str, index, char) {
//   return str.slice(0, index) + char + str.slice(index + 1);
// }
// let map = [];
// for (let i = 0; i < 300; i++) {
//   map.push("*");
// }

// console.log(cars);
// map = map.join("");
// let originalMap= map;
let hitCar;
// for (let i = 0; i < 5; i++) {
//   let positionArray = [];
//   map=originalMap;
//   for (item of cars) {
//     let distance = parseInt(Math.random() * 10 + 1);
replacechar(map,item.position, "*");
//     item.position += distance;
if(map[item.position] !== "*"){
 hitCar= map[item.position];
}


//     positionArray.push(item.position);
//     map = replacechar(map, item.position, item.carName);
    
//   }
//   console.log(positionArray);
//   console.log(map);

// }

