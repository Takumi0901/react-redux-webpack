import React from 'react'

export default class Modal extends React.Component{
  handleClickOpen(){
    const { handleModalOpen } = this.props
    handleModalOpen()
  }

  handleClickClose(){
    const { handleModalClose } = this.props
    handleModalClose()
  }

  render(){
    const {Opened} = this.props
    return(
        <div className="c-container">
          <h1 className="c-title c-title--primary">Modal</h1>
          <button className="c-btn c-btn-primary--flat" onClick={this.handleClickOpen.bind(this)}>Modal Open</button>
          <div className="c-modal" aria-clicked={Opened === true ? 'true' : 'false'}>
            <div className="c-modal__panel">
              <div className="c-modal__header">
                モーダルタイトル
              </div>
              <div className="c-modal__content">
                modal
              </div>
              <div className="c-modal__bottom">
                <button className="c-btn c-btn-default--flat" onClick={this.handleClickClose.bind(this)}>閉じる</button>
              </div>
              <i className="c-modal__close fa fa-times-circle" onClick={this.handleClickClose.bind(this)}></i>
            </div>
            <div className="c-modal__overlay" onClick={this.handleClickClose.bind(this)}></div>
          </div>
        </div>
    )
  }
}