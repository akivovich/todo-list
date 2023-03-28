import {ItemState, ListItem, getItems as getListItems} from '../data/items';

export enum ActionType {
    GetItems = 1,
    SetComplete = 2,
    Delete = 3,
};

export interface ListItemsState {
    items: ListItem[]
};

interface ListItemsAction {
    type: ActionType,
    item?: ListItem
}

export function listItemsReducer(state: ListItemsState, action: ListItemsAction): ListItemsState {
    
    const deleteItem = (state: ListItemsState, action: ListItemsAction) : ListItemsState => {
        const newState = {...state};    
        if (action.item) {
            const index = newState.items.indexOf(action.item!);
            if (index >= 0) {
                newState.items.splice(index, 1);
                newState.items = [...newState.items];
            }
        }
        return newState;
    };
    
    const setComplete = (state: ListItemsState, action: ListItemsAction) : ListItemsState => {
        const newState = {...state};    
        if (action.item) {
            action.item.state = ItemState.Completed;
            newState.items = [...newState.items];
        }
        return newState;
    };

    switch (action.type) {
        case ActionType.GetItems:
            return { items: getListItems() };
        case ActionType.SetComplete:
            return setComplete(state, action);        
        case ActionType.Delete:
            return deleteItem(state, action);
        default:
            return state;
    }
};
