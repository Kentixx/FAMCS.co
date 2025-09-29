import './Header.scss'
import clsx from 'clsx'
import Logo from '@/components/Logo'
import Button from '@/components/Button'
import BurgerButton from '@/components/BurgerButton'
import Icon from '@/components/Icon'
import Socials from "@/components/Socials";
import Field from "@/components/Field";

export default (props) => {
  const menuItems = [
    {
      label: 'Shop',
      href: '/',
    },
    {
      label: 'On Sale',
      href: '/',
    },
    {
      label: 'New Arrivals',
      href: '/',
    },
    {
      label: 'Brands',
      href: '/',
    },
  ]

  return (
    <header className="header" data-js-overlay-menu="">
      <div className="header__inner container">
        <h4 className="header__title">
          FAMCS.CO
        </h4>
        <nav className="header__menu">
          <ul className="header__menu-list">
            {menuItems.map(({ label, href}) => (
              <li className="header__menu-item">
                <a className="header__menu-link" href={href}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="header__search">
            <Icon
              name="search"
              hasFill
              width={20}
              height={20}
            />
            <input
              className="header__search-input"
              type="text"
              placeholder="Search for products..."
            />
          </div>
          <div className="header__actions">
            <Icon
              name="basket"
              hasFill
              ariaLabel="Shopping cart"
              width={22}
              height={22}
            />
            <Icon
              name="profile"
              hasFill
              ariaLabel="Profile"
              width={22}
              height={22}
            />
          </div>
        </nav>
      </div>
    </header>
  )
}
