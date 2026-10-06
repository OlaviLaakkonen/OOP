import { CanvasAction } from "./shape-actions.js"

/**
* Defines the event that is fired when the selected action changes.
* The event contains both the new action and the previous action.
*/
export class SelectedActionChangedEvent {

    private _action: CanvasAction
    private _prevAction: CanvasAction

    /**
    * Creates a new selected action changed event.
    *
    * @param action the newly selected action.
    *
    * @param prevAction the previously selected action.
    */
    constructor(action: CanvasAction, prevAction: CanvasAction) {
        this._action = action
        this._prevAction = prevAction
    }

    /**
    * Returns the newly selected action.
    */
    public get action(): CanvasAction {
        return this._action
    }

    /**
    * Returns the previously selected action.
    */
    public get prevAction(): CanvasAction {
        return this._prevAction
    }

}

/**
* Defines the listener interface for palette events.
* Components interested in changes to the selected action implement this interface.
*/
export interface PaletteListener {

    /**
    * This method is invoked when the selected action changes.
    * 
    * @param e event containing the new and previous selected actions.
    */
    selectedActionChanged(e: SelectedActionChangedEvent): void

}

/**
* Represents the palette component containing buttons for available canvas actions.
* The component creates one button for each available action and notifies
* registered listeners when the selected action changes.
*/
export class PaletteComponent {

    private _listeners: PaletteListener[]

    private _selectedAction: CanvasAction

    /**
    * Creates a new palette component.
    *
    * @param paletteElement HTML element where the palette buttons are created.
    *
    * @param actions actions that are available in the palette.
    */
    constructor(paletteElement: HTMLElement, actions: CanvasAction[]) {

        this._listeners = []
        this._selectedAction = actions[0]

        paletteElement.classList.add("v-box")

        actions.forEach(action => {
        const button = document.createElement("button")
        button.innerHTML = action.name

        button.addEventListener("click", e => {
            console.log("Click on ", action.name)
            this.selectedAction = action
        })

        paletteElement.appendChild(button)


    })
}

    /**
    * Adds a listener that will be notified when the selected action changes.
    *
    * @param listener listener that will receive palette events.
    */
    public addPaletteListener(listener: PaletteListener) {
        this._listeners.push(listener)
    }

    /**
    * Notifies all registered listeners that the selected action has changed.
    *
    * @param e event containing the new and previous selected actions.
    */
    private fireSelectedActionChangedEvent(e: SelectedActionChangedEvent) {
        this._listeners.forEach(l => l.selectedActionChanged(e))
    }

    /**
    * Changes the currently selected action and notifies all listeners about the change.
    *
    * @param selectedAction action that should become selected.
    */
    public set selectedAction(selectedAction: CanvasAction) {
        const prevAction = this._selectedAction
        this._selectedAction = selectedAction

        this.fireSelectedActionChangedEvent(
        new SelectedActionChangedEvent(selectedAction, prevAction)
        )
    }
}