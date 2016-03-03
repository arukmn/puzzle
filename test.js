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
