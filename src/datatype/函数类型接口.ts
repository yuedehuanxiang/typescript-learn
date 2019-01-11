/**
 * 当需要指定一个对象中必须包含函数解构的时候可以这么用
 */

interface Option1 {
  fn: Function;
}

let oo: Option1 = {
  fn: function() {}
};

// 定义的是函数接口
interface IFn {
  (x: number, y: number): number;
}

let fn88: IFn = function(x: number, y: number): number {
  return x + y;
};
let fn77: (x: number, y: number) => number = function(x: number, y: number): number {
  return x + y;
};

// 定义了一个接收一个 MouseEvent 类型参数的函数结构
interface MouseEventCallback {
  (e: MouseEvent): any;
}

let fn66: MouseEventCallback = function(a: MouseEvent) {};
document.onclick = fn66;
