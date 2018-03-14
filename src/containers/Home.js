/**
 * Created by zhouqihang on 2018/3/14.
 */
import { connect } from 'react-redux';
import Home from '../components/Home';

const mapStateToProps = ({ home }) => ({home});

const mapDispatchToProps = {};

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);

export default HomeContainer;
