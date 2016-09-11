import { bindActionCreators } from 'redux'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from '../components/Modal'
import {modalOpen} from '../actions/Modal'
import DevTools from './DevTools'

class App extends Component {
  componentWillMount() {}

  handleModalOpen(){
    this.props.modalOpen(true)
  }

  handleModalClose(){
    this.props.modalOpen(false)
  }

  render() {
    const {show} = this.props
    return (
      <div>
        <div className="l-wrapper">
          <div className="c-container">
            <h1 className="c-title c-title--primary">Modal</h1>
            <button className="c-btn c-btn-primary--flat" onClick={this.handleModalOpen.bind(this)}>Modal Open</button>
            <Modal
              handleModalOpen={this.handleModalOpen.bind(this)}
              handleModalClose={this.handleModalClose.bind(this)}
              show={show}
              title='modalテスト'
            >
              モーダル内容
            </Modal>
          </div>
        </div>
        <DevTools />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    show: state.Modal.show
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, {modalOpen}), dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)