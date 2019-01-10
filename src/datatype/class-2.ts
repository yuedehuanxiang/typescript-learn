class Person2 {
  username: string = "kimo";

  private _age: number = 10; // 设置成私有变量，约束外部的修改

  // getAge(): number {
  //   return this.age;
  // }

  // setAge(age: number): void {
  //   if (age > 0 && age < 150) {
  //     this.age = age;
  //   }
  // }

  // 存取器
  get age(): number {
    // a 不是方法 而是作为属性去访问
    return this._age;
  }

  set age(age: number) {
    this._age = age;
  }
}

let p2 = new Person2();

// p2.setAge(1000);
// console.log(p2.getAge());

p2.age = 100;
console.log(p2.age);
