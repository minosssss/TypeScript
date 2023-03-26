type Admin = {
  name: string;
  privileges: string[]; //권한

};

type Employee = {
  name: string;
  startDate: Date;
}
// interface를 사용해도 괜찮다.
type ElevatedEmpoyee = Admin & Employee;

const e1: ElevatedEmpoyee = {
  name: 'Minho',
  privileges: ['crreate-server'],
  startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;

// 인터섹션 타입
type Universal = Combinable & Numeric;

function add(a: Combinable, b:Combinable) {
  // return a + b; - Error 발생!
  // 타입가드 적용
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b
}

type unknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: unknownEmployee) {
  console.log('Name: ' + emp.name);
  // console.log('Privileges: ' + emp.privileges)
  // name속성은 두 개 모두 가지고 있지만, privileges속성은 admin에만 해당되기에 Error발생
  // 타입가드 적용
  if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges);
  }
  if ('startDate' in emp) {
    console.log('startDate: ' + emp.startDate);
  }
}

printEmployeeInformation(e1);


class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a Truck....');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo...' + amount);
  }
}

type Vehicle = Car|Truck;
const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle:Vehicle) {
  vehicle.drive();
  // if ('loadCargo' in vehicle) {
  //   vehicle.loadCargo(10000);
  // }
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);


// 구별된 유니언

interface Bird {
  type : 'Bird';
  flyingSpeed: number;
}

interface Horse {
  type : 'Horse';
  groundSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'Bird':
      speed = animal.flyingSpeed;
      break;
    case 'Horse':
      speed = animal.groundSpeed;
      break;

  }
  console.log('Moving with spped: '+ speed);
}

// 형변환
// 아래 2가지를 사용할 수 있다. (단, 일관성을 위해 프로젝트의 규칙을 따르자)
// const userInputElem = <HTMLInputElement> document.getElementById('user-input');
// const userInputElem = document.getElementById('user-input') as HTMLInputElement;
// userInputElem.value = 'Hello World!'
const userInputElem = document.getElementById('user-input');

if (userInputElem) {
  (userInputElem as HTMLInputElement).value = 'Hello World!';
}