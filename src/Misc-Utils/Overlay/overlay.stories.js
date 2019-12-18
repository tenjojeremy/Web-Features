import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'
import Button from '../../Input/Button/Ui/React/Styles/1'

import Overlay from './overlay.index'

const Variations = () => {
  const [show, setshow] = useState(null)
  return (
    <>
      <B title='default' noBackground>
        <Button
          onClick={() => setshow(true)}
          text='show overlay'
          color='secondary'
          dataCy='show-button'
        />
        <Overlay show={show} onClick={() => setshow(false)} dataCy='overlay' />

        <p>adsf</p>
        <p>adsf</p>
        <p>adsf</p>
        <p>adsf</p>
        <p>adsf</p>
        <p>adsf</p>
        <p>adsf</p>
        <p>adsf</p>
        <p>adsf</p>
        <p>adsf</p>
        <p>adsf</p>
        <p>adsf</p>
        <p>adsf</p>
        <p>adsf</p>
        <p>adsf</p>
        <p>adsf</p>
        <p>adsf</p>
        <p>adsf</p>
        <p>adsf</p>
        <p>adsf</p>
      </B>
    </>
  )
}

storiesOf('Misc-Utils|Overlay/Ui/React', module).add('variations', () => <Variations />)
