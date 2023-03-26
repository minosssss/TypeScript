// type Addfn = (a:number, b:number) => {}
interface Addfn {
  (a:number, b:number): number;
}
let add: Addfn;

add = (n1: number, n2:number) => {
  return n1 + n2;
}

interface Named {
  readonly name?: string;
  outputName?: string; // ?추가하여 선택사항 적용
}

interface Greetable extends Named {
  // 클래스와 달리 구체적 값이 아닌 구조만 존재
  // 상속은 한 클래스로부터 가능하지만,
  // 인터페이스는 쉼표를 구분지어 여러개의 인터페이스 가능
  age?: number;

  greet(phrase: string) : void;
}

class Person implements Greetable {
  name?: string;
  age? : number;
  constructor(n?: string, age?:number) {
    if (n && age) {
      this.name = n;
      this.age = age;
    } else {
      console.log("hi?");
    }
  }
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}

// let user_1 : Greetable;

// user_1 = {
//   name: 'Minho',
//   age: 33,
//   greet(phrase: string) {
//     console.log(phrase + ' ' + this.name);
//   }
// }
// user_1.greet("Hi there - I'm ");

let user_2:Person = new Person('Minho', 33);


// readonly속성은 모든 객체의 속성이 한번만 설정되어야 하며, 이후는 읽기전용으로 설정
// user_1.name = "YoungHoon"  'Error!'
user_2.name = "YoungHoon"
