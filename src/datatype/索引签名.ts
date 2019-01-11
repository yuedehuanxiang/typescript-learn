/**
 * 希望规则是： 一组由数字进行key命名的对象
 * 为数据定义一组具有某种特性的key的数据
 * 索引key的类型只能是number 或者 string
 * 当设置成 string 的时候 可以接受字符串和number
 */
interface Option {
  // key 是number, value是any类型的数据
  [attr: number]: any;
  length: number;
}

function fn99(opt: Option) {}

fn99({
  0: 1,
  length: 1
});
