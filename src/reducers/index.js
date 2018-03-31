import {combineReducers} from 'redux';
import hello from './Hello';
import home from './Home';
import createMaterials from './Materials/create';
import materials from './Materials/show';

const reducers = combineReducers({
    hello,
    home,
    createMaterials,
    materials,
});

export default reducers;
