// call signature && overloading;

type Add = (a:number,b:number) => number;
const add1:Add = (a,b) => a+b;


type overAdd = {
    (a:number, b:number) : number
    (a:number, b:number, c:number) : number
}

const add2:overAdd = (a,b,c?:number) => {
    if(c) return a + b + c;
    return a + b;
}
console.log(add1(1,2));

console.log(add2(4,5));
console.log(add2(1,2,3));


// Polymorphism (generic);

type CallSuperPrint = {
    (arr:number[]):void
    (arr:boolean[]):void
    (arr:string[]):void
}

const superPrint: CallSuperPrint = (arr) => {
    arr.forEach(i => console.log(i));
}

superPrint([1,2,3,4,5]);
superPrint([true,false,true,false]);

// SuperPrint에 파라미터에 확실한 타입을 알 수 없을때 generic을 사용;
// generic을 사용할 경우, 타입스크립트에게 타입을 유추하도록 알려준다.
// any는 any로서 밖에 알 수 없지만, generics는 타입정보를 알 수 있다.
type GenericSuperPrint = {
    <TypePlaceholder>(arr:TypePlaceholder[]):void
}

const genericSuperPrint: GenericSuperPrint = (arr) => {
    arr.forEach(i => console.log(i));
}

genericSuperPrint([1,2,3,4,5]);
genericSuperPrint([true,false,true,false]);
genericSuperPrint([1,'Hello',true,5]);


type ReturnGenericSuperPrint = {
    <TypePlaceholder>(arr:TypePlaceholder[]):TypePlaceholder
}
const returnGenericSuperPrint: ReturnGenericSuperPrint = (arr) => arr[0];

const num = returnGenericSuperPrint([1,2,3,4,5])
const bool = returnGenericSuperPrint([true,false,1,2,3,4,5])

/*
Generics
'제네릭은 선언 시점이 아니라 생성 시점에 타입을 명시하여 하나의 타입만이 아닌 다양한 타입을 사용할 수 있도록 하는 기법이다.'

제네릭은 C#이나 Java와 같은 언어에서 재사용 가능한 컴포넌트를 만들기 위해 사용하는 기법으로. 단일 타입이 아닌 다양한 타입에서 작동할 수 있는 컴포넌트를 생성.
(구체적인 타입을 지정하지 않고 다양한 인수와 리턴 값에 대한 타입을 처리할 수 있다.)
타입스크립트에서 제네릭을 통해 인터페이스, 함수 등의 재사용성을 높일 수 있다.

function identity< Type >(arg: Type): Type {
return arg;
}

// 제네릭 화살표 함수 (tsx기준)
const identity=< Type extends {} >(arg: Type):Type => {
return arg;
}

let output = identity< string >("myString"); // 첫 번째 방법
let output = identity("myString"); // 두 번째 방법
// 두 번째 방법은 type argument inference(타입 인수 유추)를 사용합니다. 즉, 컴파일러가 전달하는 인수 유형에 따라 자동으로 Type 값을 설정하기를 원합니다.

https://www.typescriptlang.org/docs/handbook/2/generics.html

*/