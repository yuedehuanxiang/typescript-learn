let a1: undefined; // 如果把 a1 定义为 undefined 类型

a1 = undefined; // a1 只能接受一个值 undefined

// 下面是可以的，可以把null 赋值给其他类型，但是不能把其他类型的数据赋值给null
// 默认情况下 null 和 undefined 是所有类型的子集 可以在 tsconfig.json 中配置 strictNullChecks 为 true 开启严格模式 null
// 就不能乱赋值了
let a2: number;
a2 = null;

// 类型推导
let a3 = 1; // ts 会自动推导，a是number类型
// a3 = "1";

document.onclick = function(e) {
  // 事件函数的第一个参数，是根据当前绑定的事件类型做推导
};

document.onkeydown = function(e) {
  // 鼠标移到 参数 e 上会有不同 类型的提示
};

let fn1 = function(a: number, b: string): string {
  return a + b;
}; // 函数类型
let fn: (a: number, b: string) => string = function(a: number, b: string): string {
  return a + b;
}; // 函数类型
