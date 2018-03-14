import {combineReducers} from 'redux';
import hello from './Hello';
import home from './Home';
import createMaterials from './CreateMaterials';

const reducers = combineReducers({
    hello,
    home,
    createMaterials,
});

export default reducers;
