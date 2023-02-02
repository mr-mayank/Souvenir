import { CREATE_POST, UPDATE_POST, FETCH_POSTS, DELETE_POST  } from '../constants/actionTypes.js';
export default (posts = [], action) => {
    switch (action.type) {
        case UPDATE_POST:
        return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        case FETCH_POSTS:
        return  action.payload ;
        case CREATE_POST:
        return [...posts, action.payload];
        case DELETE_POST:
        return posts.filter((post) => post._id !== action.payload);
        default:
        return posts;
    }
    }