import { ShapeViewer } from "./shape-viewer"
import { Shape } from "./shapes"

/**
 * Defines the action protocol used by various components. 
 * For example Palette builds its list of buttons based on the availabe actions.
 * The controller will execute, i.e. delegate the browser events to the current action.
 */
export interface CanvasAction {
    // In an interface everything is public 

    /**
    * The name of the action. This is also displayed on the Palette component.
    */
    readonly name: string

    readonly id: string

    readonly status : string

    /**
     * This method is invoked by the controller. 
     * The controller is the first level listener of browser html elements events.
     * 
     * @param e browser mouse event.
     */
    onClick(e: MouseEvent): void

}

abstract class BaseAction implements CanvasAction {

    private _shapeView: ShapeViewer

    public constructor (shapeView: ShapeViewer) {
        this._shapeView = shapeView
    }

    public get shapeViewer(): ShapeViewer {
        return this._shapeView
    }

    public get id(): string {
        return this.name.toLowerCase().split(' ').join('-')
    }

    public abstract get name(): string

    public abstract get status(): string

    public abstract onClick(e: MouseEvent): void
}

export class SelectAction extends BaseAction {

    public get name(): string {
        return "Select"
    }

    public get status(): string {
        return "Click an shape to select it. "
    }
        
    public onClick(e: MouseEvent): void {
        // TODO: Implement this later
    }

}

export class AddShapeAction extends BaseAction {

    private _shapeClass: any

    public constructor(shapeClass: any, shapeViewer: ShapeViewer) {
        super(shapeViewer)

        this._shapeClass = shapeClass
    } 

    public get name() {
        return this._shapeClass.name
    }

    public get status() {
        return `Click to add a ${this.name}`
    }

    public onClick(e: MouseEvent): void {
        // TODO: Implement this later
    }

}