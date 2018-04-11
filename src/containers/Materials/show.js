/**
 * Created by zhouqihang on 2018/3/15.
 */
import { connect } from 'react-redux';
import { ShowMaterials } from '../../components/Materials';
import {
    requestMaterials,
    onInputChangeAction,
    resetQueryAction,
    removeMaterial,
} from '../../actions/Materials/show';

import {
    changeCreateStatus,
    initState,
    onInputChangeAction as onCreateInputChangeAction,
    createMaterial,
    queryMaterial,
} from '../../actions/Materials/create';

const mapStateToProps = ({ materials, createMaterials }) => ({
    materials,
    createMaterials,
});

const mapDispatchToProps = dispatch => ({
    dispatch,
    requestMaterials,
    resetQueryAction,
    onInputChangeAction,

    // create
    changeCreateStatus,
    initState,
    onCreateInputChangeAction,
    createMaterial,
    queryMaterial,

    // remove
    removeMaterial
});

const MaterialsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowMaterials);

export default MaterialsContainer;
