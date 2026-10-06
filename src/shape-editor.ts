import { ShapeViewer } from "./shape-viewer.js"
import { PaletteComponent, PaletteListener, SelectedActionChangedEvent } from "./shape-palette.js"
import { AddShapeAction, SelectAction } from "./shape-actions.js"
import { circle, rectangle } from "./shapes.js"
import { StatusBar } from "./shape-status.js"
import { CanvasController } from "./shape-controller.js"

export class ShapeEditor implements PaletteListener {

    private _statusBar: StatusBar
    private _shapeView: ShapeViewer
    private _palette: PaletteComponent

    private _canvasController: CanvasController

    constructor() {
        const canvas = document.getElementById("myCanvas") as HTMLCanvasElement

            this._shapeView = new ShapeViewer(canvas)

            this._palette = new PaletteComponent(document.getElementById("palette"), [
                new SelectAction(this._shapeView),
                new AddShapeAction(rectangle, this._shapeView),
                new AddShapeAction(circle, this._shapeView),
        ])

        this._statusBar = new StatusBar(document.getElementById("status"))

        this._canvasController = new CanvasController(this._palette.selectedAction, canvas)

        this._palette.addPaletteListener(this._canvasController)
        this._palette.addPaletteListener(this._statusBar)
        this._palette.addPaletteListener(this)
    }

    selectedActionChanged(e: SelectedActionChangedEvent): void {
        console.log("ShapeEditor", e.action.name)
    }
}