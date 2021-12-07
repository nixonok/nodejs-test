export class List<T> {
  private items: Array<T>;

  constructor() {
    this.items = [];
  }

  size(): number {
    return this.items.length;
  }

  add(value: T): void {
    this.items.push(value);
  }

  get(index: number): T {
    return this.items[index];
  }
}

export function GetRandomRange(min: number, max: Number) {
  var rand: Number = +max - +min;
  return getRandomInt(rand) + min;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
