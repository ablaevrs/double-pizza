import React from 'react'
import s from './index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Modal({ 
    visible, 
    setVisible, 
    modalTitle, 
    modalText, 
    onCancel, 
    onSuccess, 
    isCloseIcon, 
    isFooter, 
    isCancelButton, 
    isImage, 
    onSuccessButtonLabel, 
    onCancelButtonLabel, 
    image, 
    cancelButtonStyle,
    successButtonStyle,
    headerStyle
}) {
  if (!visible) return null

  return (
    <div className={s.overlay}>
        <div className={s.modal}>
            {
                isImage && (
                    <img className={s.img} src={ image } alt='' />
                )
            }
            
            <div className={s.modalContent}>
                <div className={s.headerAndBody}>
                    <div className={s.modalHeader}>
                        <div className={s.header} style={headerStyle}>
                            { modalTitle }
                        </div>
                        {
                            isCloseIcon && (
                                <button className={s.closeIcon} onClick={()=> setVisible(false)}>
                                    <FontAwesomeIcon icon={faXmark} />
                                </button>
                            )
                        }
                    </div>
                    <div className={s.modalBody}>
                        { modalText() }
                    </div>
                </div>
                {
                    isFooter && (
                        <div className={s.modalFooter}>
                            {
                                isCancelButton && ( <button className={s.cancelButton} style={cancelButtonStyle} onClick={()=> onCancel(false)}>{ onCancelButtonLabel || 'Cancel'}</button> )
                            }
                            <button className={s.successButton} style={successButtonStyle} onClick={()=> onSuccess(false)}>{ onSuccessButtonLabel || 'Done' }</button>
                        </div>
                    )
                }

            </div>
        </div>
    </div>
  )
}
