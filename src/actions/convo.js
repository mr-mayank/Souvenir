import * as api from '../api/index.js';

export const getConversations = () => async (dispatch) => {
    try {
        const { data } = await api.getConversations();
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const getConversation = (id) => async (dispatch) => {
    try {
        const { data } = await api.getConversation(id);
        dispatch({ type: 'FETCH_ONE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const createConversation = (conversation) => async (dispatch) => {
    try {
        const { data } = await api.createConversation(conversation);
        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}


// export const deleteConversation = (id) => async (dispatch) => {
//     try {
//         await api.deleteConversation(id);
//         dispatch({ type: 'DELETE', payload: id });
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// export const deleteMessage = (id) => async (dispatch) => {
//     try {
//         await api.deleteMessage(id);
//         dispatch({ type: 'DELETE_MESSAGE', payload: id });
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// export const updateConversation = (id, conversation) => async (dispatch) => {
//     try {
//         const { data } = await api.updateConversation(id, conversation);
//         dispatch({ type: 'UPDATE', payload: data });
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// export const updateMessage = (id, message) => async (dispatch) => {
//     try {
//         const { data } = await api.updateMessage(id, message);
//         dispatch({ type: 'UPDATE_MESSAGE', payload: data });
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// export const likeConversation = (id) => async (dispatch) => {
//     try {
//         const { data } = await api.likeConversation(id);
//         dispatch({ type: 'UPDATE', payload: data });
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// export const likeMessage = (id) => async (dispatch) => {
//     try {
//         const { data } = await api.likeMessage(id);
//         dispatch({ type: 'UPDATE_MESSAGE', payload: data });
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// export const getConversationsBySearch = (searchQuery) => async (dispatch) => {
//     try {
//         const { data: { data } } = await api.fetchConversationsBySearch(searchQuery);
//         dispatch({ type: 'FETCH_BY_SEARCH', payload: {data} });
//     } catch (error) {
//         console.log(error.message);
//     }
// }

