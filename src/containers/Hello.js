import Hello from '../components/Hello';
import {initAction} from '../actions/Hello';
import {connect} from 'react-redux';

const mapStateToProps = ({ hello }) => ({
    hello,
});

const mapDispatchToProps = {
    initAction
};

const HelloContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Hello);

export default HelloContainer;
