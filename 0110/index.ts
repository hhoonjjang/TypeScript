const nico = {
  nickname: "nick",
};

function divide(a, b) {
  return a / b;
}

// divide("hello")

let a = "hello";
let b: boolean = false;
// let b = false; 위와 같다.
let c = [1, 2, 3];
// 현재는 넘버배열이라고한다.
let d: number[] = [];
// 만약 배열이 비어있을떄 타입유형 지정하기

const player = {
  name: "nico",
};

// let z: number[] = [1, 2];
// let y: string[] = ["li", "1"];
// let x: boolean[] = [true];
// 생성할때 자동으로 추론하게끔 만들수있다 위처럼안선언안해도된다,
let z = [1, 2];
let y = ["li", "1"];
let x = [true];

// const player1: {
//   name: string;
//   //age:number //에이지 없는거쓰려고할떄 ?를 붙힌다.
//   age?: number;
// } = {
//   name: "nico",
// };

// const playerJung :{
//     name :string,
//     age?:number
// } = {
//     name:"jung",
//     age:22
// }

//Alias 방법  = 재사용하기위해 타입을 묶어줌
type Age = number;
type Name = string;
type Player = {
  name: Name;
  age?: Age;
};
const playerNico: Player = {
  name: "nico",
};
const playerJay: Player = {
  name: "jaehoon",
  age: 31,
};

//타입스크립트는 오직 객체를 리턴한다
function playerMaker(name: string): Player {
  return {
    name,
  };
}
// 플레이어 메이커가 age가 있는지 알려면 위에 : Player로 타입을 알려줘야함.
const jay = playerMaker("nico");
jay.age = 12;
// 중요한건 함수뒤에 : 타입을 넣어주거나 변수 뒤에 : 타입을 넣어준다.

// 1-3
// 선택적 타입을 다루는 방법을 배웠다 48,49번줄
//  Alias 타입을 생성하는 방법을 배웠다 57~60번줄
// argument의 타입을 지정하는 방법을 배웠다 63~67
// 화살표함수를 사용했을때 타입을 지정하는방법 78줄
const playerMaker2 = (name: string): Player => ({ name });

// 1-4 readonly를 속성에 쓰면 읽기전용으로 바꿔서 보호장치를 만들어서 데이터를 변경하지 못하게한다.

const numbers: readonly number[] = [1, 2, 3, 4];
// numbers.push(1) 사용불가능
const names: readonly string[] = ["1", "2"];
// name. 메소드들을 사용할 수 없다.

//배열안에 여러 타입을 넣는방법
const player23: readonly [string, number, boolean] = ["nico", 1, true];
// 가끔 이렇게 객체를 넘겨주는 API가 있을 수 있다. 그럴때 이걸 사용하면 좋다
// 튜플과 readonly를 합칠 수 있다.
let tempA: undefined = undefined;
let tempB: null = null;

type tempPlayer = {
  age?: number;
};

// type any
let g = [];
// any는 타입스크립트를 빠져나오고싶을때 사용하는 것 any는 아무거나 다 쓸수있다.
// any 사용법 (권장하지않는다) 왜냐하면 타입스크립트를 쓰는 이유가 없어진다.
const h: any[] = [1, 2, 3, 4];
const l: any = true;
a + b;
// 보호장치를 없앤다 왜? any를 쓰기때문이지.

//1-4 배운것 readonly property, readonlyturple, any  any는 타입스크립트의 보호장치들을 비활성화시켜서 권장하지않는다.

// 1-5 타입스크립트 최고의 장점은 type check와 communicate하는거다 타입체크가 보호장치다.
// unknown 타입 활용하기.
let tempFiveA: unknown;

if (typeof tempFiveA === "number") {
  let tempFiveB = a + 1;
}
if (typeof tempFiveA === "string") {
  let b = tempFiveA.toUpperCase();
}
// void 는 return하지 않는 함수다. 알아서 void를 타입형으로 쓸 필요도없다.
function fiveHello() {
  console.log("x");
}

const tempFiveA1 = fiveHello();
// tempFiveA1.toUpperCase(); void는 투어퍼케이스가없다

// never
// return하지 않고 오류를 발생시키는 함수이다.
function fiveNever(): never {
  throw new Error("xxx");
}

// never는 타입을 2가지 쓸수있다.
function helloNever(name: string | number) {
  if (typeof name === "string") {
    name;
  } else if (typeof name === "number") {
    name;
  } else {
    name;
    //이코드는 절대 작동하지 않는다 왜냐하면 파라미터에서 스트링 또는 넘버라고 했기 때문이지. | 또는 & 하나만 쓴다.
  }
}

// 1-5 unknown, void,  never, void>>unknown>>never 순으로 사용할 것이다.

//1-6 타입스크립트 function를 배우자 call signatures , polymorphism(다형성), overloading, generic
// function addSix(a:number,b:number){
//     return a+b;
// }
// const addSix = (a: number, b: number) => a + b;
//화살표함수로 쓰기 하지만 타입을 쓰기 귀찮아서 쓰고싶지않아.
type addSix = (a: number, b: number) => number;

const add: addSix = (a, b) => a + b;
// 이것이 call signatures
//1-7 overloading. 패키지나 라이브러리를 많이 사용할텐데 그때 오버로딩을 활용해서 사용하면 좋다
// 오버로딩쓰려면 위 1-6처럼 쓰지말고 풀어써줘야한다. 오버로딩은 함수가 여러개의 call signatures 를 가지고 있을때 발생시킨다.
type addSeven = {
  (a: number, b: number): number;
  (a: number, b: string): number;
};

const add2: addSeven = (a, b) => {
  if (typeof b === "string") return a;
  return a + b;
  a + b;
};

//next.js 에서 Router개념 홈페이지 이동할때 오버로딩 완벽한 예시

// Router.push({
//   path: "/home",
//   state: 1,
// });

// .push("/home")
type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === "string") console.log(config);
  else {
    console.log(config.path, config.state);
  }
};
// 패키지나 라이브러리를 디자인할 때 많은 사람들이 사용한다. config에 대해 공부해보기 next.js 공부하기

// 다시 add 오버로딩으로 돌아가기
type addSev = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

// c는 옵션이기때문에 명시해줘야한다.
const add22: addSev = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

add22(1, 2);
add22(1, 2, 3);

// 1-8 다형성  polymorphism 에대해 공부하자 폴리곤 다형성 모르포스 = 형태
// 여러가지 다양한 형태 구조, 스트럭처다.

type SuperPrint = {
  //   (arr: number[]): void;
  //   (arr: boolean[]): void;
  //   (arr: string[]): void; //이렇게 226을 돌릴수있지만 이건 다형성이아니다 여기 타입들은 concrete type이다. 콘크리트 타입이란 우리가쓰는 타입이다.
  //   (arr:(number|boolean)[]):void //이렇게 쓰는것은 원시인이다. 이것을 해결하려면 generic을 사용해야대 타입스크립트가 알아서 타입을 추론할수있게해준다.
  //   <TypePlaceholder>(arr: TypePlaceholder[]): void; //제네릭쓰는법 상당히 중요하다
  <TypePlaceholder>(arr: TypePlaceholder[]): TypePlaceholder; //제네릭쓰는법 상당히 중요하다
  <T>(arr: T[]): T; // generic을 최고수가 쓰는법
};
// 3개의 콜시그니쳐가있다

// const superPrint: SuperPrint = (arr) => {
//   arr.forEach((i) => console.log(i));
// };

const superPrint: SuperPrint = (arr) => arr[0];

// superPrint([1, 2, 3, 4]);
// superPrint([true, false, true]);
// superPrint(["a", "b", "c"]);
// superPrint([1, 2, true, false]);
const a1 = superPrint([1, 2, 3, 4]);
const b1 = superPrint([true, false, true]);
const c1 = superPrint(["a", "b", "c"]);
const d1 = superPrint([1, 2, true, false]);

// 1-9 제네릭 2개사용하기
type SuperPrint9 = <T, M>(a: T[], b: M) => T;
const superPrint9: SuperPrint9 = (a) => a[0];
const aS = superPrint9([1, 2, 3, 4], "x");
const bS = superPrint9([true, false, true], 1);
const cS = superPrint9(["a", "b", "c"], false);
const dS = superPrint9([1, 2, true, false], false);

// 1-10 제네릭을 실제로 사용하는 방법 주로 라이브러리를 사용할때 제네릭만 쓸껀데 nextJS,nestJS,reactJS에서 쓸거다.
// 실제 쓰는 방법을 아는게 좋다
function superPrint3<V>(a: V[]) {
  return a[0];
}
// 타입스크립트가 알아서 스스로 추론할수있게 만드는게 좋다.
const aT = superPrint3([1, 2, 3, 4]);
const bT = superPrint3([true, false, true]);
const cT = superPrint3(["a", "b", "c"]);
const dT = superPrint3([1, 2, true, false]);

type PlayerT<E> = {
  name: string;
  extraInfo: E;
};

// const jayT: PlayerT<{ favFood: string }> = {
//   name: "jay",
//   extraInfo: {
//     favFood: "kimchi",
//   },
// };
// type JayTPlayer = PlayerT<{ favFood: string }>;
type JayExtra = {
  favFood: string;
};
type JayTPlayer = PlayerT<JayExtra>; //270번을 유식하게 타입을 타입으로 확장해서 쓰기.

const JayT: JayTPlayer = {
  name: "jay",
  extraInfo: {
    favFood: "김치",
  },
};

const jung: PlayerT<null> = {
  name: "jung",
  extraInfo: null,
};

type tempArr = Array<number>;

let n: tempArr = [1, 2, 3, 4];

function printAllNumbers(arr: Array<number>) {}
