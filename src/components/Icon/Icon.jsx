import './Icon.scss'
import clsx from 'clsx'
import { Icon as MinistaIcon } from 'minista'

export default (props) => {
  const {
    className,
    name,
    hasFill = false,
    ariaLabel,
    width,
    height,
  } = props

  return (
    <span className={clsx('icon', className)} aria-label={ariaLabel}>
      <MinistaIcon
        iconId={name}
        fill={hasFill ? 'currentColor' : 'none'}
        stroke={hasFill ? 'none' : 'currentColor'}
        width={width}
        height={height}
      />
    </span>
  )
}
