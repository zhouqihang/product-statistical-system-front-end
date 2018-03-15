/**
 * Created by zhouqihang on 2018/3/15.
 */
import { connect } from 'react-redux';
import Materials from '../components/Materials';

const mapStateToProps = ({ materials }, router) => ({
    materials,
    router,
});

const mapDispatchToProps = dispatch => ({
    dispatch,
});

const MaterialsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Materials);

export default MaterialsContainer;
