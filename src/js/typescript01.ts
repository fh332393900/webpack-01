//------------基本类型-----------
let str:String = "hello typescript"
interface Options { color: string; volume: number };
console.log(str)
let arr:number[] = [1,2,3];
console.log(arr[1])
//元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为 string和number类型的元组。
let x:[string,number];
x=["qqq",22];
//enum类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。
enum color {red=4,black=5,white=9}
let c:color = color.red
let colorName:string = color[9];
console.log(colorName);

//------------接口-----------
//我们传入的对象参数实际上会包含很多属性，但是编译器只会检查那些必需的属性是否存在，并且其类型是否匹配。
interface labelValue {
  size?:number//可选属性
  label:string
  readonly name:string//只读属性
}
function printLabel(labelObj:labelValue) {
  console.log(labelObj);
  //labelObj.name = "4"//修改就会报错
}
let myObj = {name:"fh",label:"sdsada"}
printLabel(myObj)

//接口继承
interface shape {
  color:string
}
interface shaped extends shape{
  size:number
}
let square = <shaped> {};
square.color = "red";
square.size = 10;
//-----------泛型-----------
function identity<T>(arg:T[]):T[] {
  console.log(arg.length)
  return arg;
}
identity([666]);



declare var require: {
    <T>(path: string): T;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure: (
      paths: string[],
      callback: (require: <T>(path: string) => T) => void
    ) => void;
  };

class Animal {
  public name: string;
  constructor(theName: string) { this.name = theName; }
}

console.log(new Animal("dog").name)

