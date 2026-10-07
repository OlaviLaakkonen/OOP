import { ShapeViewer } from "./shape-viewer.js"
import { PropertiesComponent } from "./PropertiesComponent.js"
import { PaletteComponent, PaletteListener, SelectedActionChangedEvent } from "./shape-palette.js"
import { AddShapeAction, SelectAction } from "./shape-actions.js"
import { circle, rectangle, square, rhombus, hexagon } from "./shapes.js"
import { StatusBar } from "./shape-status.js"
import { CanvasController } from "./shape-controller.js"

export class ShapeEditor implements PaletteListener {

    private _statusBar: StatusBar
    private _palette: PaletteComponent

    private _canvasController: CanvasController

    private _shapeViewer: ShapeViewer
    private _propertiesComponent: PropertiesComponent

    constructor() {
        const canvas = document.getElementById("myCanvas") as HTMLCanvasElement

            this._shapeViewer = new ShapeViewer(canvas)

            this._shapeViewer = new ShapeViewer(canvas)
            this._propertiesComponent = new PropertiesComponent()

            this._shapeViewer.addSelectionListener(this._propertiesComponent)

            this._palette = new PaletteComponent(document.getElementById("palette"), [
                new SelectAction(this._shapeViewer),
                new AddShapeAction(rectangle, this._shapeViewer),
                new AddShapeAction(circle, this._shapeViewer),
                new AddShapeAction(square, this._shapeViewer),
                new AddShapeAction(hexagon, this._shapeViewer),
                new AddShapeAction(rhombus, this._shapeViewer),
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