export default (state = {isLoading:true, conversations: [] }, action) => {
    switch (action.type) {
        case 'START_LOADING':
            return { ...state, isLoading: true };
        case 'END_LOADING':
            return { ...state, isLoading: false };
        case 'FETCH_CONVERSATIONS':
            return { ...state, conversations: action.payload.convo };
        case 'FETCH_CONVERSATION':
            return { ...state, conversations: action.payload.convo };
        case 'CREATE_CONVERSATION':
            return { ...state, conversations: [...state.conversations, action.payload] };
        case 'UPDATE_CONVERSATION':
            return { ...state, conversations: state.conversations.map((conversation) => (conversation._id === action.payload._id ? action.payload : conversation)) };
        case 'DELETE_CONVERSATION':
            return { ...state, conversations: state.conversations.filter((conversation) => conversation._id !== action.payload) };
        default:
            return state;
    }
}

