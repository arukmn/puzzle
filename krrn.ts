"use strict";

// 関数の仮引数と戻り値の型
function concat(a: string, b: string): string {
    return a + b;
}

// 変数の型
let obj1: RegExp;
// 初期化子がある場合、わざわざ型注釈を明記しなくとも自動的に推論される
let obj2 = /^Hi!$/;

let array1: Array<Boolean>;
// array1 と全く同じ意味合い
let array2: boolean[];

interface Sample {
    str: string;
    func: (n: string) => number;
    methodA(): void;
}

let objSample: Sample;
objSample.str;
objSample.func("test");
objSample.methodA();

// getterのみあり setterなし
let obj = {
    get str() {
        return "Hi!";
    }
};

// エラーにしてくれる！
// Uncaught TypeError: Cannot set property str of # which has only a getter
// "use strict"; がないと、単に無視されるので値がセットされない謎のバグになり苦しみのたうつ
// obj.setStr = "setterは存在していない";
