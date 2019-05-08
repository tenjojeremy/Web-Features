import React from 'react'
import { storiesOf } from '@storybook/react'

import Title from '../../../.storybook/CustomComponents/title'

import DatePicker from './datePicker.index'

const Variations = () => (
  <>
    <Title>Date Picker - Month</Title>
    <DatePicker type='month' />
    <Title>Date Picker - Year</Title>
    <DatePicker type='year' onSelect={(value) => console.log(value)} />
  </>
)

storiesOf('Dates/Date Picker', module)
  .add('Variations', () => <Variations />)
  .add('Dev', () => <DatePicker />)