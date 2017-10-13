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
    const {show, title, children} = this.props
    return(
      <div className="c-modal" data-clicked={show === true ? 'true' : 'false'}>
        <div className="c-modal__panel">
          <div className="c-modal__header">
            <h3>{title}</h3>
          </div>
          <div className="c-modal__content">
            {children}
          </div>
          <div className="c-modal__bottom">
            <button className="c-btn c-btn-default--flat" onClick={this.handleClickClose.bind(this)}>閉じる</button>
          </div>
        </div>
        <div className="c-modal__overlay" onClick={this.handleClickClose.bind(this)}></div>
      </div>
    )
  }
}