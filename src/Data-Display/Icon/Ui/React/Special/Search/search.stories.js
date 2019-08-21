import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'

import SearchIcon from './search.index'

const Variations = () => (
  <>
    <B
      style={{
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '50px',
      }}
    >
      <SearchIcon
        mainIcon='search/feather'
        closeIcon='close/feather'
        onSubmit={(value) => console.log(value)}
      />
    </B>
  </>
)

storiesOf('Data-Display|Icon/React/Special', module).add('Search', () => (
  <Variations />
))