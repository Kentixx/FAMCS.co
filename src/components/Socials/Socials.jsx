import './Socials.scss'
import clsx from 'clsx'
import Button from "@/components/Button";

const Socials = (props) => {
  const {
    className,
  } = props

  const logoLinks = [
    {
      href: '/',
      iconName: 'twitter',
    },
    {
      href: '/',
      iconName: 'facebook',
    },
    {
      href: '/',
      iconName: 'instagram',
    },
    {
      href: '/',
      iconName: 'github',
    },
  ]

  return (
    <div
      className={clsx(className, 'socials')}
    >
      {logoLinks.map(({ href, iconName }) => (
        <Button
          className="socials__button"
          href={href}
          iconName={iconName}
          hasFillIcon
        />
      ))}
    </div>
  )
}

export default Socials