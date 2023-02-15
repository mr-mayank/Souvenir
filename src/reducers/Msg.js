export default (state = { isLoading: true, messages: [] }, action) => {
    switch (action.type) {
        case 'START_LOADING':
            return { ...state, isLoading: true };
        case 'END_LOADING':
            return { ...state, isLoading: false };
        case 'FETCH_MESSAGES':
            return { ...state, messages: action.payload.data };
        case 'CREATE_MESSAGE':
            return { ...state, messages: [...state.messages, action.payload] };
        default:
            return state;
    }
}