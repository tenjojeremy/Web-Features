import React, { memo } from 'react'

import Buttom from '../../../Input/Button/Ui/React/button.index'

import { defaultProps, propTypes } from './emptyPage.propTypes'
import { Wrapper, InnerWrapper, Title } from './emptyPage.styles'

const EmptyPage = ({ image, title, buttonText, redUrl }) => {
  const historyRouter = window.historyRouter

  const redirect = () => historyRouter.push(redUrl)

  return (
    <Wrapper>
      <InnerWrapper>
        {image}
        <Title>{title}</Title>
        <Buttom
          href={redUrl}
          text={buttonText}
          onClick={redirect}
          style={{ width: 250 }}
        />
      </InnerWrapper>
    </Wrapper>
  )
}

EmptyPage.defaultProps = defaultProps
EmptyPage.propTypes = propTypes

export default memo(EmptyPage)