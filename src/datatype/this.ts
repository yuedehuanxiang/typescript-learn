/**
 * ts中默认情况下函数中的this指向 any 类型
 *
 */

let obj = {
  a: 10,
  fn() {
    // 因为默认情况下, this是any类型， any类型ts不会提示有任何属性和方法
    // any的值，ts不能提示或进行类型属性检测

    // 使用noImplicitThis选项可以取消使用默认this的any类型
    this;
  }
};

// ts 会自动推导事件函数中的this
document.onclick = function() {
  this;
};

let obj1 = {
  a: 1,
  fn(this: Document) {
    // ts函数中的第一个this参数是用来设置this类型的，是一个假参数，运行过程中不存在的，就留给ts检测用的
    this;
  }
};

document.onclick = obj1.fn;
