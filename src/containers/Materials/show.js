/**
 * Created by zhouqihang on 2018/3/15.
 */
import { connect } from 'react-redux';
import { ShowMaterials } from '../../components/Materials/index';
import {
    requestMaterials,
} from '../../actions/Materials/show';

const mapStateToProps = ({ materials }) => ({
    materials,
});

const mapDispatchToProps = dispatch => ({
    dispatch,
    requestMaterials,
});

const MaterialsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ShowMaterials);

export default MaterialsContainer;
