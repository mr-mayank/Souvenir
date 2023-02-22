import * as api from '../api/index.js';

export const getConversations = () => async (dispatch) => {
    try {
        const { convo } = await api.getConversations();
        dispatch({ type: 'FETCH_CONVERSATIONS', payload: {convo} });
        console.log(convo);
    } catch (error) {
        console.log(error.message);
    }
}

export const getConversation = (id) => async (dispatch) => {
    try {
        const { convo } = await api.getConversation(id);
        dispatch({ type: 'FETCH_CONVERSATION', payload: convo });
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

