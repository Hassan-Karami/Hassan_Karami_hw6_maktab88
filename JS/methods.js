let numberOfCars = parseInt(prompt("Enter Number of cars: "));
function CarCreator(cName) {
  this.carName = cName;
  this.position = 0;
  this.order = Math.random();
}
let cars = [];
for (let i = 0; i < numberOfCars; i++) {
  let carName = prompt("please choose a name for car Numer " + (i + 1));
  let raceCar = new CarCreator(carName);
  cars.push(raceCar);
}
cars.sort(function (a, b) {
  return a.order - b.order;
});
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
while (finished.length < numberOfCars) {
  let moveArray = [];
  let positionArray = [];
  for (item of cars) {
    let distance = parseInt(Math.random() * 10 + 1);
    moveArray.push(distance);
    map = replacechar(map, item.position, "*");
    item.position += distance;
    if (item.position >= 299 && !finished.includes(item.carName)) {
      finished.push(item.carName);
      cars.splice(cars.indexOf(item), 1);
      map = map.slice(0, 299) + "*";
    } else {
      if (map[item.position] !== "*" && item.position !== 0) {
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
console.log("order of finished cars: " + finished);
console.log("winner: " + finished[0]);
