import { Shape } from "./shapes.js";
import { ShapeSelectionEvent } from "./ShapeSelectionEvent.js";
import { ShapeSelectionListener } from "./ShapeSelectionListener.js";

export class PropertiesComponent implements ShapeSelectionListener {

    private _shape: Shape;

    public shapeSelected(event: ShapeSelectionEvent): void {
        this._shape = event.shape;

        console.log("PropertiesComponent received:", event.shape);
    }


}