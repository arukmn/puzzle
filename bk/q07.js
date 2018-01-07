'use strict';
/*
日付(YYYYMMDD)を2進数に変換し、逆順に整列。
再度10進数に戻して同値であるかチェックする。
範囲は1964/10/10から2020/07/24までとする。
 */
function transformDate(dateNum) {
    var reverseNum;
    // 2進数変換した文字列を逆に並べる
    var machineStr = dateNum.toString(2);
    var reversed = machineStr.split('').reverse().join('');
    // 10進数値に再度変換
    reverseNum = parseInt(reversed, 2);
    // 元の数値と2進数変換->10進数に変換したものを比較
    if (dateNum === reverseNum) {
        console.log(dateNum);
    }
}
function getDateNum(date) {
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    var d = date.getDate();
    if (m < 10) {
        m = '0' + m;
    }
    if (d < 10) {
        d = '0' + d;
    }
    return +(y + '' + m + '' + d);
}
var endDate = new Date('2020/7/24');
for (var date = new Date('1964/10/10'); date.toString() !== endDate.toString(); date.setDate(date.getDate() + 1)) {
    transformDate(getDateNum(date));
}
