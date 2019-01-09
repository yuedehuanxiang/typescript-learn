// ts中类的修饰符
class Person {
  /**
   * ts中的类，成员属性必须要声明后使用
   * ts中泪的成员属性不是在构造函数中声明，而是在class内，方法外声明
   *    public(默认)
   *      公开的，所有的地方都能访问，属性和方法默认是public
   *    private
   *      私有的， 只能在该对象（类）的内部才可以访问, extends出的子类中也不能使用
   *    protected
   *      受保护的，在类的内部和他的子类中才能访问
   *    readonly
   */
  // private username: string = "";
  protected username: string = "";
  constructor(name: string) {
    this.username = name;
  }
}

class Student extends Person {
  say() {
    this.username;
  }
}

let p1 = new Person("kimo");
// p1.username;
