

let userInput: unknown;
let userName: string;
// unknow과 확실하게 타입이 지정되지 않는다.
// any는 아주 유연한 타입으로 타입확인을 수행하지 않는다.
// 단, 타입이 확실하다면 유니언 타입을 사용햐쟈!
userInput = 5;
userInput = 'Lee'

// 확실한 타입이 아니기에, 검사를 필요로 한다.
if (typeof userInput === 'string') {
  userName = userInput
}

function genError(msg: string, code:number):never {
  throw {msg:msg,errorCode:code};
}

genError("An error occurred!", 500);