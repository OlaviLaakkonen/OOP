import { ShapeViewer } from "./shape-viewer.js"
import { PaletteComponent, PaletteListener, SelectedActionChangedEvent } from "./shape-palette.js"
import { AddShapeAction, SelectAction } from "./shape-actions.js"
import { circle, rectangle } from "./shapes.js"

export class ShapeEditor implements PaletteListener {

    private _shapeView: ShapeViewer
    private _palette: PaletteComponent

    constructor() {
        const canvas = document.getElementById("myCanvas") as HTMLCanvasElement

            this._shapeView = new ShapeViewer(canvas)

            this._palette = new PaletteComponent(document.getElementById("palette"), [
                new SelectAction(this._shapeView),
                new AddShapeAction(rectangle, this._shapeView),
                new AddShapeAction(circle, this._shapeView),
        ])

        this._palette.addPaletteListener(this)
    }

    selectedActionChanged(e: SelectedActionChangedEvent): void {
        console.log("Click on", e.action.name)
    }
}