/**
 * Created by zhouqihang on 2018/3/14.
 */

import { connect } from 'react-redux';
import Materials from '../components/Materials';
import { onInputChangeAction, createMaterial, initState } from '../actions/CreateMaterials';

const mapStateToProps = ({ createMaterials }, router) => {
    return {
        createMaterials,
        router,
    };
};

const mapDispatchToProps = (dispatch) => ({
    onInputChangeAction,
    createMaterial,
    initState,
    dispatch,
});

const CreateMaterialsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Materials.CreateMaterials);

export default CreateMaterialsContainer;
