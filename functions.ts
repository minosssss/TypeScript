// 반환하고자 하는 타입을 명시적으로 할당; ▶️ number
// 문자열일 경우 오류 발생
// 꼭 명시해야 되는 경우가 아니라면 변수와 마찬가지로 타입스크립트가 타입 추론에 대한 작업을 수행하도록 하는 것이 좋다.
function fnAdd(n1: number, n2:number) : number {
  return n1 + n2;
}


function printResult(num:number) : void{
  console.log("Result: " + num);
}

printResult(fnAdd(5,12));

// 함수 타입 지정
let combineValues: (a:number, b:number) => number;
combineValues = fnAdd;



// 함수 타입과 콜백
function addAndHandle(n1: number, n2:number, callback: (num:number) => void) {
  const result = n1 + n2;
  callback(result);
}

addAndHandle(10,20,(result)=>{
  console.log(result)
});