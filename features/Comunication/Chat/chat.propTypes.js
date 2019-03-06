// Vednors
import React, { useState } from 'react'
import { func, array, arrayOf, object, shape, bool, string } from 'prop-types'

// Default
const Input = ({ onChange, onFocus }) => {
  const [inputMessageValue, setInputMessageValue] = useState('')
  const handleChange = ({ target: { value } }) => {
    setInputMessageValue(value)
    onChange(value)
  }
  return <input type='text' onChange={handleChange} value={inputMessageValue} onFocus={onFocus} />
}

export const defaultProps = {
  senderIds: [],
  CurrentUserComp: ({ message }) => <div>{message}</div>,
  OtherUserComp: ({ message }) => <div>{message}</div>,
  onReachedTop: null,
  InputComp: (props) => <Input {...props} />,
  wrapperStyles: {},
  messagesData: [],
  previousMessageData: [],
  fetchingPreviousMessageData: false,
  LoadingComp: () => <div>Loading...</div>,
  onSubmit: null,
}

export const propTypes = {
  senderIds: array,
  CurrentUserComp: func,
  OtherUserComp: func,
  onReachedTop: func,
  InputComp: func,
  wrapperStyles: object,
  messagesData: arrayOf(shape({ id: string, userId: string })).isRequired,
  previousMessageData: arrayOf(shape({ id: string, userId: string })).isRequired,
  fetchingPreviousMessageData: bool,
  LoadingComp: func,
  onSubmit: func,
}
