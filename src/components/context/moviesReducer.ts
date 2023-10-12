export type ListItem = {
    id: number
}
export type ListState = {
    items: ListItem[]
}
export type Action = | { type: 'add_item'; payload: ListItem }
    | { type: 'remove_item'; payload: number };
const wishListReducer = (state: ListState, action: Action) => {
    switch (action.type) {
        case "add_item":
            return { ...state, items: [...state.items, action.payload] }
        case "remove_item":
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.payload),
            };
    }
}