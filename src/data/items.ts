export enum ItemState {
    Active = 1,
    Completed = 2
}

export interface ListItem {
    id: number,
    title: string,
    description: string,
    state: ItemState,    
};

const initialItems : Partial<ListItem>[] = [
    {
        "title": "Buy groceries",
        "description": "Milk, bread, eggs, and cheese"
    },
    {
        "title": "Finish homework",
        "description": "Math, science, and English assignments"
    },
    {
        "title": "Go for a run",
        "description": "Jog for 30 minutes"
    },
    {
        "title": "Call mom",
        "description": "Catch up on family news"
    },
    {
        "title": "Clean bathroom",
        "description": "Scrub toilet, sink, and shower"
    },
    {
        "title": "Pay bills",
        "description": "Electricity, water, and gas bills"
    },
    {
        "title": "Schedule doctor's appointment",
        "description": "Annual physical exam"
    },
    {
        "title": "Finish book",
        "description": "Last 3 chapters of 'The Great Gatsby'"
    },
    {
        "title": "Watch movie",
        "description": "New release at the cinema"
    },
    {
        "title": "Learn a new skill",
        "description": "Programming or cooking"
    },
    {
        "title": "Take dog for a walk",
        "description": "20-minute walk around the block"
    },
    {
        "title": "Organize closet",
        "description": "Donate old clothes and shoes"
    },
    {
        "title": "Plan vacation",
        "description": "Research flights and hotels"
    },
    {
        "title": "Finish painting",
        "description": "Complete the last details of the landscape painting"
    },
    {
        "title": "Attend yoga class",
        "description": "Stretch and meditate for an hour"
    },
    {
        "title": "Catch up on emails",
        "description": "Reply to work and personal emails"
    },
    {
        "title": "Visit grandparents",
        "description": "Spend the afternoon with them"
    },
    {
        "title": "Start a new book",
        "description": "Choose from recommended list"
    },
    {
        "title": "Write in journal",
        "description": "Reflect on the past week"
    }
];

export function getItems() : ListItem[] {        
    const newItems : ListItem[] = initialItems.map((item, index) => {
        return {
            id: index,
            title: item.title!,
            description: item.description!,
            state: ItemState.Active
        }
    });
    return newItems;
};
