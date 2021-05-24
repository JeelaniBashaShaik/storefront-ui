import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from './../redux/actions/counter';
import Counter from './../components/counter';

const mapStateToProps = state => {
  return {
    count: state.counter.count
  };
};

const mapDispatchToProps = {
  // return {
  incrementCounter,
  decrementCounter
  //};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
