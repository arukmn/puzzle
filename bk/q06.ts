/*
10000までの偶数で「最初の数に戻る数」は幾つ存在するか
・偶数の場合は2で割る
・奇数は3掛けし、1を足す
 */
 'use strict';

var cnt: number;
cnt = 0;

function test(num: number): void {
    var trial = num * 3 + 1;

    while (trial !== 1) {
        if (trial % 2 === 0) {
            trial = trial / 2;
        } else {
            trial = trial * 3 + 1;
        }

        if (num === trial) {
            cnt++;
            return;
        }
    }
}

for (var i = 2; i <= 10000; i += 2) {
    test(i);
}
console.log(cnt);
