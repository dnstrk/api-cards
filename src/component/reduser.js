export const InitialState = {
    users: [],
    usersVisible: true,
    error: false,
    errorMsg: null,
    card: [],
    cardVisible: false,
    filterValue: "",
    filteredUsers: [],
};

export function reducer(state, action) {
    switch (action.type) {
        case "FETCH_SUCCESS":
            return {
                ...state,
                error: false,
                users: action.payload,
            };
        case "FETCH_ERROR":
            return {
                ...state,
                error: true,
                errorMsg: action.payload,
                // usersVisible: false,
            };
        case "SHOW_LIST":
            return {
                ...state,
                cardVisible: false,
                usersVisible: true,
            };
        case "SHOW_CARD":
            return {
                ...state,
                card: action.payload,
                cardVisible: true,
                usersVisible: false,
            };
        case "SET_FILTER":
            return {
                ...state,
                filterValue: action.setFilter,
            };
        case "FILTERED_LIST":
            return {
                ...state,
                filteredUsers: state.users.filter((user) => {
                    return (
                        user.name
                            .toLowerCase()
                            .includes(state.filterValue.toLowerCase()) ||
                        user.username
                            .toLowerCase()
                            .includes(state.filterValue.toLowerCase()) ||
                        user.email
                            .toLowerCase()
                            .includes(state.filterValue.toLowerCase())
                    );
                }),
            };
        case "RESET_FILTER":
            return {
                ...state,
                filterValue: "",
            };
        case "CHANGED":
            if (state.card.id === action.card.id) {
                return { ...state, card: action.card };
            } else {
                return { ...state, card: state.card };
            }
        case "RESTORE_CARD":
            return {
                ...state,
                card: action.payload,
            };
        default:
            return { ...state };
    }
}

