import { ShapeSelectionEvent } from "./ShapeSelectionEvent";

export interface ShapeSelectionListener {
    shapeSelected(event: ShapeSelectionEvent): void;
}
