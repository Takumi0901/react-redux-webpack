import { bindActionCreators } from 'redux'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from '../components/Modal'
import {modalOpen} from '../actions/Modal'

export default class App extends Component {
  componentWillMount() {}

  handleModalOpen(){
    console.log('*************')
    console.log('Open')
    this.props.modalOpen(true)
  }

  handleModalClose(){
    console.log('*************')
    console.log('Close')
    this.props.modalOpen(false)
  }

  render() {
    const {Opened} = this.props
    return (
        <div>
          <div className="l-wrapper">
            <Modal
              handleModalOpen={this.handleModalOpen.bind(this)}
              handleModalClose={this.handleModalClose.bind(this)}
              Opened={Opened}
            />
          </div>
        </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    Opened: state.Modal.Opened
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, {modalOpen}), dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)