import './Section.scss'
import clsx from 'clsx'
import Button from "@/components/Button";

export default (props) => {
  const {
    className,
    title,
    titleId,
    buttonLabel,
    actions,
    isActionsHiddenOnMobile = false,
    children } = props

  return (
    <section
      className={clsx('section', 'container', className)}
      aria-labelledby={titleId}
    >
      <header className="section__header">
        <h2 className="section__title" id={titleId}>
          {title}
        </h2>
        {actions && (
          <div
            className={clsx("section__actions", {
              'hidden-mobile': isActionsHiddenOnMobile,
            })}
          >
            {actions}
          </div>
        )}
      </header>
      <div className="section__body">
        {children}
      </div>
      {buttonLabel && (<Button
        className="section__button"
        label={buttonLabel}
        href="/"
      />)}
    </section>
  )
}
