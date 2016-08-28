import React, { Component } from 'react'
import { connect } from 'react-redux';
import Modal from '../components/Modal';

export default class Intro extends Component {
  render() {
    return (
        <div className="u-pt-56">
          <div className="l-wrapper">
            <Modal />
          </div>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Intro);