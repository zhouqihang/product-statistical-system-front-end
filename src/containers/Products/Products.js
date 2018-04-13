/**
 * Created by zhouqihang on 2018/4/13.
 */
import { connect } from 'react-redux';
import Show from '../../components/Products';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = dispatch => ({
    dispatch,
});

const ProductsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Show);

export default ProductsContainer;