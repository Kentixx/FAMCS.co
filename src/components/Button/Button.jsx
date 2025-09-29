import './Button.scss'
import clsx from 'clsx'
import Icon from "@/components/Icon";

const Button = (props) => {
  const {
    className,
    href,
    type = 'button',
    mode = '',
    /**
     *  '' (default) | 'transparent' | 'black-10' | 'black-08' | 'black-06'
     */
    label,
    isLabelHidden = false,
    iconName,
    iconPosition = 'before',
    /**
     *  'before' | 'after'
     */
    hasFillIcon,
    extraAttrs,
  } = props

  const isLink = href !== undefined
  const Component = isLink ? 'a' : 'button'
  const linkProps = { href }
  /* сугубо атрибуты ссылок */
  const buttonProps = { type }
  /* сугубо атрибуты кнопок */
  const specificProps = isLink ? linkProps : buttonProps
  const title = isLabelHidden ? label : undefined
  const iconComponent = iconName && (
    <Icon
      className='button__icon'
      name={iconName}
      hasFill={hasFillIcon}
    />
  )

  return (
    <Component
      className={clsx(className, 'button', {
        [`button--${mode}`] : mode,
      })}
      title={title}
      aria-label={title}
      {...specificProps}
      {...extraAttrs}
    >
      {iconPosition === 'before' && iconComponent}
      {!isLabelHidden && (
        <span className="button__label">
          {label}
        </span>
      )}
      {iconPosition === 'after' && iconComponent}
    </Component>
  ) /* [`button--${mode}`] : mode - БЭМ-модификатор
  /* выводится label, только когда isLabelHidden === true */
}

export default Button