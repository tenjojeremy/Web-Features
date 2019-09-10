import React, {
  memo,
  useState,
  useEffect,
  lazy,
  Fragment,
  Suspense,
} from 'react'

import { WrapperIcon, Wrapper } from './icon.styles'
import { defaultProps, propTypes } from './icon.propTypes'

const FileInput = lazy(() =>
  import(
    /* webpackChunkName: 'ButtonIcon' */ '../../../../../Media/Files/Ui/React/fileInput.index'
  ),
)
const Typogrgraphy = lazy(() =>
  import(
    /* webpackChunkName: 'ButtonIcon' */ '../../../../Typography/Ui/React/typography.index'
  ),
)

const Icon = ({
  background,
  name,
  style,
  color,
  onClick,
  size,
  label,
  noBackground,
  dark,
  noBackgroundChange,
  outlined,
  labelVariant,
  link,
  inputProps,
  router,
  backgroundColor,
  plain,
  backgroundSize,
  center,
  ...restStyles
}) => {
  const [IconComp, setIconComp] = useState(null)
  const strokeTypes = ['feather']
  const iconType = name.split('/')[1]
  const isStroke = strokeTypes.includes(iconType)

  const getModule = async () => {
    if (name) {
      const module = await import(`../Library/${name}.js`)
      setIconComp(module.default())
    }
  }

  useEffect(() => {
    getModule()
  }, [name, label])

  const handleClick = () => {
    link && router.history.push(link)
    onClick()
  }
  const WrappingComp = inputProps ? FileInput : Fragment

  return (
    <Suspense fallback={null}>
      <WrappingComp {...inputProps}>
        <Wrapper label={label}>
          <WrapperIcon
            plain={plain}
            style={style}
            color={color}
            onClick={handleClick}
            background={!!background}
            size={size}
            noBackground={noBackground}
            dark={dark}
            noBackgroundChange={noBackgroundChange}
            outlined={outlined}
            backgroundColor={backgroundColor}
            isStroke={isStroke}
            backgroundSize={backgroundSize}
            center={center}
            {...restStyles}
          >
            {IconComp}
          </WrapperIcon>
          {label && (
            <Typogrgraphy color={color} variant={labelVariant} text={label} />
          )}
        </Wrapper>
      </WrappingComp>
    </Suspense>
  )
}

Icon.defaultProps = defaultProps
Icon.propTypes = propTypes

export default memo(Icon)
