import './Badge.scss'
import clsx from 'clsx'
import Icon from "@/components/Icon"

const Badge = (props) => {
  const {
    className,
    mode = '',
    /**
     * '' (default) | 'red', 'white'
     */
    text,
    iconName,
    hasFillIcon,
    iconAriaLabel,
  } = props

  return (
    <div
      className={clsx(className, 'badge', {
        [`badge--${mode}`]: mode,
      })}
    >
      {iconName && (
        <Icon
          className="badge__icon"
          name={iconName}
          hasFill={hasFillIcon}
          aria-label={iconAriaLabel}
        />
      )}
      {text && (<span>{text}</span>)}
    </div>
  )
}

export default Badge