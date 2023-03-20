// const btn = document.querySelector('button');
const btn = document.querySelector('button')!;
// 무엇이 존재하는지 확실하다면 '!' 를 붙여
btn.addEventListener('click',()=>{
  console.log('Clicked!');
})

// 타입스크립트는 코드를 작성 시 반드시 브라우저를 위해 작성하는게 아니다.
// 그럼 document객체는 어떻게 알 수 있을까?
// 이것이 작동하는 것은 tsconfig 옵션 때문!