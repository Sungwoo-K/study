class cat {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return console.log(this.name, "meow");
  }
}

class dog {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return console.log(this.name, "woof");
  }
}
//////////////////////////////////////////////////////////////////////////
//static을 사용하여 인스턴스 없이 호출할 수 있게 하여 메모리 절약도 가능하다.
//factory에서 return으로 해당 동물공장의 인스턴스를 생성하는 펙토리클레스이다.
class catFactory {
  static createAnimal(name) {
    return new cat(name);
  }
}

class dogFactory {
  static createAnimal(name) {
    return new dog(name);
  }
}

///////////////////////////////////////////////////////////////

const factoryList = { catFactory, dogFactory };

// 하위클래스인 (cat, dog)Factory가 구체적인 내용을 결정하고
// 상위클래스인 animalFactory가 중요한 뼈대를 결정한다.

class animalFactory {
  static createAnimal(type, name) {
    const factory = factoryList[type];
    return factory.createAnimal(name);
  }
}

const makeAnimal = (type, name) => {
  const animal = animalFactory.createAnimal(type, name);
  animal.speak();
};

makeAnimal("dogFactory", "doggy");
makeAnimal("dogFactory", "dalbong");
