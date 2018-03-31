/**
 * Created by zhouqihang on 2018/3/14.
 */

import { connect } from 'react-redux';
import { CreateMaterials } from '../../components/Materials/index';
import { onInputChangeAction, createMaterial, initState } from '../../actions/Materials/create';

const mapStateToProps = ({ createMaterials }) => {
    return {
        createMaterials,
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
)(CreateMaterials);

export default CreateMaterialsContainer;
