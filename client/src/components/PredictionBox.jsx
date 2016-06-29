import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/action'

const PredictionBox = React.createClass({

  render: function() {
    console.log( this.props )
    return (
      <h1>Hello World!</h1>
    )
  }

});

const mapStateToProps = (state) => {
  return {
    games: state
  }
}

export default connect( mapStateToProps )( PredictionBox );
