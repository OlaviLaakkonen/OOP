import { CanvasAction } from "./shape-actions.js"

/**
 * Defines the action protocol used by various components. 
 * For example Palette builds its list of buttons based on the availabe actions.
 * The controller will execute, i.e. delegate the browser events to the current action.
 */
export class SelectedActionChangedEvent {

    private _action: CanvasAction

    constructor(action: CanvasAction) {
        this._action = action
    }

    public get action(): CanvasAction {
        return this._action
    }

    public get prevAction(): CanvasAction {
        return null
    }

}

/**
 * Defines the action protocol used by various components. 
 * For example Palette builds its list of buttons based on the availabe actions.
 * The controller will execute, i.e. delegate the browser events to the current action.
 */
export interface PaletteListener {

    /**
     * This method is invoked by the controller. 
     * The controller is the first level listener of browser html elements events.
     * 
     * @param e browser mouse event.
     */
    selectedActionChanged(e: SelectActionChangedEvent): void

}

export class PaletteComponent {

    private _listeners: PaletteListener[]

    private _selectedAction: CanvasAction

    constructor(paletteElement: HTMLElement, actions: CanvasAction[]) {

        this._listeners = []
        this._selectedAction = actions[0]

        paletteElement.classList.add("v-box")

        actions.forEach(action => {
            const button = document.createElement("button")
            button.innerHTML = action.name
            button.addEventListener("click", e => {
                console.log("Click on ", action.name)
            })
            paletteElement.appendChild(button)
        })
    }
      
    public addPaletteListener(listener: PaletteListener) {
        this._listeners.push(listener)
    }

    private fireSelectedActionChangedEvent(e: SelectedActionChangedEvent) {
        this._listeners.forEach(l => l.selectedActionChanged(e))
    }

}