import React, { memo, useEffect, useState } from 'react'

import { defaultProps, propTypes } from './autocomplete.propTypes'
import { Wrapper, Other } from './autocomplete.styles'

const Autocomplete = ({ inputStyle }) => {
  const [Textfield, setTextField] = useState(null)

  useEffect(() => {
    importTextfield()
  }, [])

  const importTextfield = async () => {
    let mod = await import(
      `../../../Form/Text-Field/Ui/React/Styles/textfield.${inputStyle}.index.js`
    )
    setTextField(mod.default())
  }

  const handleInput = (value) => {
    console.log(value)
  }

  console.log(Textfield)

  return (
    <Wrapper>
      {Textfield}
      {Textfield && React.cloneElement(Textfield, { onInput: handleInput })}
      {/* {Textfield && <Textfield />} */}
      dd
    </Wrapper>
  )
}
console.log(Autocomplete)

Autocomplete.defaultProps = defaultProps
Autocomplete.propTypes = propTypes

export default memo(Autocomplete)
