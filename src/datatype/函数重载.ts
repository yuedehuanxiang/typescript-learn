// 如果要使用类型系统  函数重载
function fn7(x: number, y: number): number;
function fn7(x: string, y: string): string;
function fn7(x: string, y: number): string;

function fn7(x: any, y: any): any {
  return x + y;
  //console.log(x, y);
}
fn7(1, 2);
fn7("1", "2");
fn7("2", 1);
