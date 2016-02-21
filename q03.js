// 1-100までの数値がカードに記載されている。
// 二枚目から順にn-1枚の間隔で裏返し、一枚も裏返すことが無くなった時に裏になっているカードの番号を全て求めよ

function insideOutGame() {
  var cards = [];
  var max = 100;

  var init = function() {
    for (var i=0; i<max; i++) {
      cards.push(false);
    }
  };

  var main = function(interval) {
    var start = interval - 1;
    for (var i=start; i<max; i+=interval) {
      cards[i] = !cards[i];
    }
  };

  var logging = function() {
    for (var i=0; i<max; i++) {
      if (cards[i] === false) {
        console.log('card:', i+1);
      }
    }
  };

  var logic = function(start) {
    init();
    for(var i=start; i<=max; i++) {
      main(i);
    }

    logging();
  };

  return {
    start: logic
  }
}

insideOutGame().start(2);
