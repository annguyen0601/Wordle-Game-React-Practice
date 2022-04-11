import React from 'react'
import './Heading.css'

interface IProps{
    type: String,
    text: string
}
export const Heading: React.FC<IProps> = (props) => {
    const {type,text} = props;
  return (
    <p className = {`heading-${type}`}>
        {text}
    </p>
  )
}
