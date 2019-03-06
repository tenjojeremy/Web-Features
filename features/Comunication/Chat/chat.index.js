// Vendors
import React, { useRef, useEffect, useState, memo } from 'react'
// PropTypes
import { defaultProps, propTypes } from './chat.propTypes'
// Styles
import { ChatWrapper, ChatList, CurrentUserCompWrapper, OtherUserCompWrapper, InputCompWrapper } from './chat.styles'
// Main
const Chat = ({
  senderIds,
  CurrentUserComp,
  OtherUserComp,
  onReachedTop,
  InputComp,
  wrapperStyles,
  messagesData,
  previousMessageData,
  fetchingPreviousMessageData,
  LoadingComp,
  inputCompStyles,
  onSubmit,
}) => {
  // Refs
  const ChatList_Ref = useRef(null)

  // States
  const [inputMessageValue, setInputMessageValue] = useState('')

  // Effects
  useEffect(() => {
    scrollToBottom()
    addEventListeners()
    return removeEventListeners()
  }, [])

  // Functions
  const addEventListeners = () => {
    if (onReachedTop) {
      ChatList_Ref.current.addEventListener('scroll', handleScroll, true)
    }
  }

  const removeEventListeners = () => {
    ChatList_Ref.current.removeEventListener('scroll', handleScroll)
  }

  const scrollToBottom = () => (ChatList_Ref.current.scrollTop = ChatList_Ref.current.scrollHeight)

  const handleScroll = () => {
    const reachedTop = ChatList_Ref.current.scrollTop === 0
    if (reachedTop) onReachedTop()
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()

    const submitConditions = inputMessageValue !== ''
    if (submitConditions) {
      onSubmit(inputMessageValue)
      scrollToBottom()
    }
  }

  const messageInputOnChange = (message) => setInputMessageValue(message)

  const loadMessages = (data) =>
    data.map((msg) =>
      senderIds.includes(msg.userId) ? (
        <CurrentUserCompWrapper key={msg.id}>
          <CurrentUserComp {...msg} />
        </CurrentUserCompWrapper>
      ) : (
        <OtherUserCompWrapper key={msg.id}>
          <OtherUserComp {...msg} />
        </OtherUserCompWrapper>
      ),
    )
  // Template
  return (
    <ChatWrapper styles={wrapperStyles} onSubmit={handleOnSubmit}>
      <ChatList ref={ChatList_Ref}>
        {loadMessages(previousMessageData)}
        {fetchingPreviousMessageData && <LoadingComp />}
        {loadMessages(messagesData)}
      </ChatList>
      <InputCompWrapper>
        <InputComp styles={inputCompStyles} onChange={messageInputOnChange} onFocus={scrollToBottom} />
      </InputCompWrapper>
    </ChatWrapper>
  )
}

// PropTypes
Chat.defaultProps = defaultProps
Chat.propTypes = propTypes

// Exports
export default memo(Chat)
