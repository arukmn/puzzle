/*
1000-9999までの自然数の中で四則演算したっ結果が文字列の逆となる数を求める
各桁全てに演算子を付加する必要はないが必ず一つは付加すること

e.g.) 351 => 3 * 51 = 153
      886 => 8 * 86 = 688
      -> 「反値」と呼称

結局各自然数において回文が作成できるように実行してみて合う数字を取得すれば良い
全数値を求めるのでループ数は一定数となる

気をつけるのは
* 0の計算
* 掛け算、割り算
*/
String.prototype.reverse = function() {
  return this.split('').reverse().join('')
}

var ope = ['*',''];
var results = [];
for (var cnt=1000; cnt<=9999; cnt++) {
  valid(cnt);
}

console.log(results);

function valid(target) {
  var target = target + '';
  var expect = target.reverse();

  if (target.charAt(3) == '0') {
    return;
  }

  for(var i=0; i<ope.length; i++) {
    for(var j=0; j<ope.length; j++) {
      for(var k=0; k<ope.length; k++) {
        var test = target.charAt(0) + ope[i] +
               target.charAt(1) + ope[j] +
               target.charAt(2) + ope[k] +
               target.charAt(3);

        if (target == test) {
          return;
        }
        if (expect == eval(test)) {
          results.push(target);
        }
      }
    }
  }
}


/*
今回のオチ
固定できるところは何処なのか、動的に変更しなければならないのはどこなのか
ココをはっきりさせるだけで変数に置くのか置かないのかハッキリさせることが出来る。
あとは、Stringの標準APIのcharAtぇぇぇ
 */
