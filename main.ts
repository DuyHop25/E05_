import { Rectangle } from "./rectangle";
import { Square } from "./square";
import { Shape } from "./shape";

function main() {
  
  // *** Test Rectangle
    const r: Rectangle = new Rectangle(6, 3);
    r.output();
    r.input();
    r.output();
    console.log("- Dien tich:", r.getArea());

    // *** Test Rectangle
    const s: Square = new Square(-3);
    s.output();
    s.input();
    s.output();
    console.log("- Dien tich:", s.getArea());

    // *** Test Shape with Rectangle
    const shape_R: Shape = new Rectangle(6, 3);
    shape_R.input();
    shape_R.output();
    console.log("- Dien tich:", shape_R.getArea());

    // *** Test Shape with Square
    const shape_S: Shape = new Square(6);
    shape_S.input();
    shape_S.output();
    console.log("- Dien tich:", shape_S.getArea());
}
main();
