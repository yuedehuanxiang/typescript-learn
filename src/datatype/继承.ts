class Person3 {
  // 在构造函数的参数中如果直接使用了public等修饰符，则等同于同时创建了该属性
  constructor(public username: string, public age: number) {
    this.username = username;
    this.age = age;
  }
}

class Student3 extends Person3 {
  // 如果子类没有重写构造函数，则继承父类的
  // 如果子类重写了构造函数
  constructor(username: string, age: number, public type: string) {
    super(username, age);
    this.type = type;
  }
}

let s1 = new Student3("kimo", 20, "xuesheng");
