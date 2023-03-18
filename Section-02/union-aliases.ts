function combine(n1: number, n2: number) {
  const result = n1 + n2;
  return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

// 타입이 한정적이라면, 1개의 타입만 사용할 수 밖에 없다.
// const combineNames = combine('Minho','Lee');

// 파이프를 사용하여 다중 타입 적용
function combineUpgrade(input1: number | string, input2: number | string) {
  let result: string | number;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = +input1 + +input2;
  } else {
    result = "".concat(input1.toString(), input2.toString());
  }

  return result;
}

console.log(combineUpgrade("Minho", "Lee"));

function combineUpgradeAddConversion(
  input1: number | string,
  input2: number | string,
  resultConv: "as-number" | "as-text"
) {
  let result: string | number;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConv === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = "".concat(input1.toString(), input2.toString());
  }

  return result;
}

console.log(combineUpgradeAddConversion("1","2",'as-number'));

// Type Alias
type Combinable = {
  input: number | string;
  descriptor : 'as-number' | 'as-text';
}

function combineUpgradeWithType(
  input1: Combinable["input"],
  input2: Combinable["input"],
  resultConv: Combinable["descriptor"]
): string | number {
  let result: string | number;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConv === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = "".concat(input1.toString(), input2.toString());
  }

  return result;
}