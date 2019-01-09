function fn2(x: number, y: number): number {
  // 如果函数没有返回值，可以定义其类型为void，不是undefined
  return x + y;
}
// fn2(1, "1");
fn2(1, 1);

// 函数表达式写法和函数声明一样
// let fn3: Function = function(x: number, y: number): number { //这里这样定义fn3会有问题应该定义完整点按照鼠标提示的
//   return x + y;
// };

let fn3: (x: number, y: number) => number = function(x, y) {
  return x + y;
};

// 可选参数
function fn4(x: number, y?: number): void {
  // 如果想一个参数可传可不传，加?
}
fn4(1);

// 参数默认值
function fn5(x: number, y = 1): void {
  //给了默认参数就不能加问好了
  console.log(y);
}
fn5(1);

// 剩余参数
function fn6(...args: any[]) {
  console.log(args);
}

fn6(1, 2, 3);
