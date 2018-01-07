"use strict";
// 関数の仮引数と戻り値の型
function concat(a, b) {
    return a + b;
}
// 変数の型
var obj1;
// 初期化子がある場合、わざわざ型注釈を明記しなくとも自動的に推論される
var obj2 = /^Hi!$/;
var array1;
// array1 と全く同じ意味合い
var array2;
var objSample;
objSample.str;
objSample.func("test");
objSample.methodA();
// getterのみあり setterなし
var obj = {
    get str() {
        return "Hi!";
    }
};
// エラーにしてくれる！
// Uncaught TypeError: Cannot set property str of # which has only a getter
// "use strict"; がないと、単に無視されるので値がセットされない謎のバグになり苦しみのたうつ
// obj.setStr = "setterは存在していない";
