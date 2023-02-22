import { CREATE_POST, UPDATE_POST, FETCH_POSTS, DELETE_POST, FETCH_BY_SEARCH, START_LOADING, END_LOADING  } from '../constants/actionTypes.js';
export default (state = {isLoading:true, posts: [] }, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case UPDATE_POST:
            return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) };
        case FETCH_POSTS:
            return {
                ...state,
                posts: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages,
              };
        case FETCH_BY_SEARCH:
            return { ...state, posts: action.payload.data };
        case CREATE_POST:
            return { ...state, posts: [...state.posts, action.payload] };
        case DELETE_POST:
            return { ...state, posts: state.posts.filter((post) => post._id !== action.payload) };
        default:
        return state;
    }
}