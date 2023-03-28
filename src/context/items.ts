import { createContext } from "react";
import { ListItem } from "../data/items";

export interface IItemsContext 
{
    removeItem: (item: ListItem) => void;
    setCompleted: (item: ListItem) => void;    
};

export const ItemsContext = createContext<IItemsContext>({
    removeItem: (item: ListItem) => { return; },
    setCompleted: (item: ListItem) => { return; }
}); 
