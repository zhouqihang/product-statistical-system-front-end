/**
 * Created by zhouqihang on 2018/3/15.
 */
import { connect } from 'react-redux';
import { ShowMaterials } from '../../components/Materials';
import {
    requestMaterials,
    onInputChangeAction,
    resetQueryAction,
} from '../../actions/Materials/show';

import {
    changeCreateStatus,
    initState
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
    changeCreateStatus,
    initState,
});

const MaterialsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowMaterials);

export default MaterialsContainer;
