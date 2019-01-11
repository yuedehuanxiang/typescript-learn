/**
 * interface
 *    为我们提供一种方式来定义某种结构，ts按照这种解构来检测数据
 *
 * 对象抽象 => 类 （对象的抽象描述）
 * 类抽象 => 抽象类 （如果一个类中拥有一个没有具体实现的抽象方法，就是抽象类）
 * 抽象类 => 接口 （如果一个抽象类的成员全部都是抽象的，那么可以看成是接口）
 */

interface Options {
  width: number;
  height: number;
  color: string;
}

function fn9(opts: Options) {}

// 类型检测只检测必须的属性是否存在，不会按照顺序进行，是无序的
// 可选参数加问号，只读加 readonly
fn9({
  height: 200,
  width: 100
} as Options); // as 断言的使用(应对强行规定了必传3个参数，但是偶尔也有只想传2个参数的情况，当然用？也能解决这个问题)

// 如果想多传递一个变量，可以先赋值给一个obj对象来绕开类型检测的问题 (多传递可以，但是少传递了参数是会报错的)
let obj9 = {
  width: 1,
  height: 2,
  color: "3",
  left: 4
};
fn9(obj9);
