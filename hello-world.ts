export {};

function doIt(): void {
    const theText: string = "Hello World";

    alert(theText);
}
interface Point {
 x: number;
 y: number;
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

const point = { x: 12, y: 26 };
logPoint(point);
