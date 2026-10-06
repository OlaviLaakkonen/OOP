import { ShapeViewer } from "./shape-viewer.js"
import { Shape, rectangle, circle } from "./shapes.js"

/**
* Defines the action protocol used by various components.
* For example Palette builds its list of buttons based on the available actions.
* The controller will execute, i.e. delegate the browser events to the current action.
*/
export interface CanvasAction {
    // In an interface everything is public

    /**
    * The name of the action. This is also displayed on the Palette component.
    */
    readonly name: string

    /**
    * The unique identifier of the action.
    */
    readonly id: string

    /**
    * The status message of the action. This is displayed to the user.
    */
    readonly status : string

    /**
    * This method is invoked by the controller.
    * The controller is the first level listener of browser html elements events.
    * 
    * @param e browser mouse event.
    */
    onClick(e: MouseEvent): void

}

/**
* Provides the common functionality for different canvas actions.
* Each action has access to the ShapeViewer and provides its own name, status and click behaviour.
*/
abstract class BaseAction implements CanvasAction {

    private _shapeView: ShapeViewer

    /**
    * Creates a new base action.
    * 
    * @param shapeView the ShapeViewer used by the action.
    */
    public constructor (shapeView: ShapeViewer) {
        this._shapeView = shapeView
    }

    /**
    * Returns the ShapeViewer used by this action.
    */
    public get shapeViewer(): ShapeViewer {
        return this._shapeView
    }

    /**
    * Returns the unique identifier of the action.
    * The identifier is created from the action name by converting it to lowercase
    * and replacing spaces with hyphens.
    */
    public get id(): string {
        return this.name.toLowerCase().split(' ').join('-')
    }

    /**
    * Returns the name of the action.
    */
    public abstract get name(): string

    /**
    * Returns the status message of the action.
    */
    public abstract get status(): string

    /**
    * Handles the mouse click event for the action.
    * 
    * @param e browser mouse event.
    */
    public abstract onClick(e: MouseEvent): void

}

/**
* Defines the action used for selecting shapes on the canvas.
* The action allows the user to select a shape by clicking on it.
*/
export class SelectAction extends BaseAction {

    /**
    * Returns the name of the action.
    */
    public get name(): string {
        return "Select"
    }

    /**
    * Returns the status message displayed when the Select action is active.
    */
    public get status(): string {
        return "Click an shape to select it. "
    }

    /**
    * Handles the mouse click event for the Select action.
    * 
    * @param e browser mouse event.
    */
    public onClick(e: MouseEvent): void {
        // TODO: Implement this later
        console.log("Select action performed")
    }

}

/**
* Defines the action used for adding new shapes to the canvas.
*
* The action creates a shape based on the shape class provided to the constructor.
*/
export class AddShapeAction extends BaseAction {

    private _shapeClass: any

    /**
    * Creates a new add shape action.
    * 
    * @param shapeClass class of the shape that will be added.
    *
    * @param shapeViewer the ShapeViewer used by the action.
    */
    public constructor(shapeClass: any, shapeViewer: ShapeViewer) {
        super(shapeViewer)
        this._shapeClass = shapeClass
    }

    /**
    * Returns the name of the action.
    */
    public get name() {
        return `Add ${this._shapeClass.name}`
    }

    /**
    * Returns the status message displayed when the action is active.
    */
    public get status() {
        return `Click to add a ${this._shapeClass.name}`
    }

    /**
    * Handles the mouse click event for the Add Shape action.
    * 
    * @param e browser mouse event.
    */
    public onClick(e: MouseEvent): void {
        console.log(`Add ${this._shapeClass.name} shape action performed`)
        const shape = this._shapeClass.initWithXY(e.offsetX, e.offsetY)
        this.shapeViewer.addShape(shape)
    }
}