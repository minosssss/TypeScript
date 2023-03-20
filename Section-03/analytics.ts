console.log("analytics");

// 변수에 타입이 필요 없는 이유는, 타입스크립트가 코드의 흐름을 이해할 수 있기 때문
let logged;

function sendAnalytics(data: string) {
  console.log(data);
  logged = true;
  console.log(logged);
}

sendAnalytics('The data');

// 매개변수는 꼭 타입을 지정해주자!
