/**
 * Created by zhouqihang on 2018/3/14.
 */

import { connect } from 'react-redux';
import Materials from '../components/Materials';
import { onNumberChangeAction } from '../actions/CreateMaterials';

const mapStateToProps = ({ createMaterials }, router) => {
    return {
        createMaterials,
        router,
    };
};

const mapDispatchToProps = {
    onNumberChangeAction,
};

const CreateMaterialsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Materials.CreateMaterials);

export default CreateMaterialsContainer;
