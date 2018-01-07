'use strict';
class InsideOutGame {
  private MAX: number;
  private cards: boolean[];

  constructor() {
    this.MAX = 100;
    this.cards = [];

    for (var i = 0; i < this.MAX; i++) {
      this.cards.push(false);
    }
  }

  private logging(): void {
    for (var i = 0; i < this.MAX; i++) {
      if (this.cards[i] === false) {
        console.log('cards:', i + 1);
      }
    }
  }

  private exec(interval: number): void {
    var start = interval - 1;
    for (var i = start; i < this.MAX; i += interval) {
      this.cards[i] = !this.cards[i];
    }
  }

  public start(val: number): void {
    for (var i = val; i <= this.MAX; i++) {
      this.exec(i);
    }

    this.logging();
  }
}

new InsideOutGame().start(2);
