import React from 'react'
import "./NewInstance.css"
import MultipleSelect from './MultipleSelect'
import TextField from './TextField'
import Buttons from './Buttons'

export const NewInstance = () => {
  return (
    <>
    <div className='instance-screen'>
    <div className='new-instance'><b>Provision New Instance</b></div>
    <div className="sub-labels">
    <div className="instance-details">
        <div className="instance-select">Instance Details</div> <MultipleSelect/>
    </div>
    <div className="tag-details">
        <div className="tag-select">Tag Details</div> <MultipleSelect/>
    </div>
    <div className="request-reason">
        <div className="request-space">Request Reason</div>  <TextField/>
    </div>
    <div className="buttons">
        <Buttons/>
    </div>
    </div>
    </div>
    </>
  )
}
