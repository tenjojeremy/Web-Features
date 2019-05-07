import React from 'react'
import { storiesOf } from '@storybook/react'

import Title from '../../../.storybook/CustomComponents/title'

import Day from './day.index'

const DayStories = () => (
  <>
    <Title>Default</Title>
    <Day />
    <Title>Status</Title>
    <Day accepted rejected pending />
    <Title>isCurrentDay</Title>
    <Day isCurrentDay />
    <Title>grey</Title>
    <Day grey />
    <Title>isActive</Title>
    <Day isActive />
  </>
)

storiesOf('Dates/Day', module)
  .add('Variations', () => <DayStories />)
  .add('Dev', () => <Day />)
