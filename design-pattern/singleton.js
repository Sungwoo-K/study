//new Object 생성할때마다 각각 할당된 object를 가르킨다.
class notSingletonCat {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name, "meow");
  }
}

let kitty = new notSingletonCat("kitty");
let nabi = new notSingletonCat("nabi");

if (kitty === nabi) {
  console.log("they are same");
} else {
  console.log("they are not same");
}

/////////////////////////////////////////////////////////////////

// 이름만 다를뿐이지 같은 object를 가르키게 해주는 singleton pattern
class singletonCat {
  static instance; // 프로세스의 시작부터 끝까지 유지되는 (정적)변수
  constructor(name) {
    this.name = name;
    if (!singletonCat.instance) {
      singletonCat.instance = this;
    } // singletonCat의 instance가 정의되어 있지 않을때 정의시켜준다.
    return singletonCat.instance;
  }
}

let sKitty = new singletonCat("sKitty");
let sNabi = new singletonCat("sNabi");

console.log(sKitty);
console.log(sNabi);

if (sKitty === sNabi) {
  console.log("they are same");
} else {
  console.log("they are not same");
}

/*
 *실제로 위의 콘솔결과를 보아도 다른 이름으로 할당했을뿐이지
 *singleton pattern에 의해 최초로 할당된, 이름이 cookie인 object를
 *가르키고 있다.
 *다른 이름으로 할당되어도 같은 object를 가르킨다.
 */
