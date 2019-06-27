import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react';
import { fetchCurrentUTCTime } from '../actions/time';

class TimeDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  componentDidMount() {
    if (!this.props.UTCTime && !this.props.loading && !this.state.loading) {
      this.props.fetchCurrentUTCTime();
    }
  }

  render() {
    return (
      this.props.loading ? <React.Fragment>Loading</React.Fragment> :
        <React.Fragment>
          <Header as="h2">GMT: <b>{new Date(this.props.UTCTime).toString()}</b> </Header>
          <Header as="h2">Local: <b>{new Date().toString()}</b> </Header>
        </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    UTCTime: state.time.UTCTime,
    loading: state.time.loading
  };
};

export default connect(
  mapStateToProps,
  { fetchCurrentUTCTime },
)(TimeDisplay);
