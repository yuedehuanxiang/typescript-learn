/**
 * 类
 *    抽象类
 *        类是对具有相同特性的对象的抽象，抽象类是对具有相同特性的类的抽象
 */

abstract class Person5 {
  // 抽象类是不能实例化的
  username: string;

  constructor(username: string) {
    this.username = username;
  }

  say() {
    console.log("123");
  }

  // 学生4和5的study其实应该是不一样的
  // 如果一个类中有抽象的方法，那么这个类也必须是抽象的
  abstract study(): void; //抽象方法是没有代码的
}

class Student4 extends Person5 {
  study() {
    console.log("1");
  }
}

class Student5 extends Person5 {
  study() {
    console.log("2");
  }
}

// 如果一个类继承了抽象的父类， 就必须实现所有抽象方法， 否则这个子类也必须是抽象类， 如果p是抽象类则也不能使用new
// class P extends Person5 {}

// let p5 = new Person5(); // 抽象类不可以实例化
let s4 = new Student4("学习4");
s4.study();
let s5 = new Student5("学习5");
s5.study();
