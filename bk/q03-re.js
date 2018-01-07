'use strict';
var InsideOutGame = (function () {
    function InsideOutGame() {
        this.MAX = 100;
        this.cards = [];
        for (var i = 0; i < this.MAX; i++) {
            this.cards.push(false);
        }
    }
    InsideOutGame.prototype.logging = function () {
        for (var i = 0; i < this.MAX; i++) {
            if (this.cards[i] === false) {
                console.log('cards:', i + 1);
            }
        }
    };
    InsideOutGame.prototype.exec = function (interval) {
        var start = interval - 1;
        for (var i = start; i < this.MAX; i += interval) {
            this.cards[i] = !this.cards[i];
        }
    };
    InsideOutGame.prototype.start = function (val) {
        for (var i = val; i <= this.MAX; i++) {
            this.exec(i);
        }
        this.logging();
    };
    return InsideOutGame;
}());
new InsideOutGame().start(2);
