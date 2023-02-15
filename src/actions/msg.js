import * as api from '../api/index';

export const getMessages = (id) => async (dispatch) => {
    try {
        const { data } = await api.getMessages(id);
        dispatch({ type: 'FETCH_MESSAGES', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const createMessage = (message) => async (dispatch) => {
    try {
        const { data } = await api.createMessage(message);
        dispatch({ type: 'CREATE_MESSAGE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

