// 木を1cm間隔で切っていく
// 木は切る度に2倍していく
// 最初は1人しか木を切ることができないが、
// 木を切り木の本数が増えることで同時に木を切ることができる

// q1: 長さ20cm, 人数3人の時の最小回数
// q2: 長さ100cm, 人数5人の時の最小回数

// 変わるのは木の長さ、そして人数。だが、人数は一定数まで行くとストップする
// 木の数は配列で扱い、人数の数だけ同時処理ができる
// 基本的に終わりが全ての木の長さが1cmになることであるため、無限ループとなる。

// 再帰処理で何回で全ての木の長さが1cmになるか数え上げを行う

//
function exec(len: number, person: number, current_cnt: number): number {
    // finish pattern
    if (len <= current_cnt) {
        return 0;
    }

    // 最大人数で同時分割が可能
    if (person >= current_cnt) {
        return 1 + exec(len, person, current_cnt * 2);
    } else {
        return 1 + exec(len, person, current_cnt + person);
    }
}

// 最初は一本
console.log(exec(20,  3, 1));
console.log(exec(100, 5, 1));
