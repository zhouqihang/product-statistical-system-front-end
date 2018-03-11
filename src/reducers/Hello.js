import {INIT} from '../actions/Hello';

const hello = (state = {}, action) => {
    switch (action.type) {
        case INIT:
            return {...state, text: 'init'};
        default:
            return {...state, text: 123};
    }
};

export default hello;
