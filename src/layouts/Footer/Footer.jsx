import './Footer.scss'
import Socials from "@/components/Socials";

const Footer = (props) => {
  const menuItems = [
    {
      title: 'Company',
      links: [
        'About',
        'Features',
        'Works',
        'Career'
      ],
    },
    {
      title: 'Help',
      links: [
        'Customer Support',
        'Delivery Details',
        'Terms & Conditions',
        'Privacy Policy'
      ],
    },
    {
      title: 'Faq',
      links: [
        'Account',
        'Manage Deliveries',
        'Orders',
        'Payments'],
    },
    {
      title: 'Resources',
      links: [
        'Free eBooks',
        'Development Tutorial',
        'How to - Blog',
        'Youtube Playlist',
      ],
    },
  ]

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__main">
          <div className="footer__info">
            <h4 className="footer__info-title h2">
              FAMCS.CO
            </h4>
            <p className="footer__info-description">
              We have clothes that suits your style and which you’re proud to wear. From women to men.
            </p>
            <Socials />
          </div>
          <nav className="footer__menu">
            {menuItems.map(({ title, links }, index) => (
              <div className="footer__menu-column" key={index}>
                <a className="footer__menu-title h6" href="/">{title.toUpperCase()}</a>
                {links.length > 0 && (
                  <ul className="footer__menu-list">
                    {links.map((link, index) => (
                      <li className="footer__menu-item" key={index}>
                        <a className="footer__menu-link" href="/">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>
        </div>
        <div className="footer__copyright">
          <p>Famcs.co © 2000-2025, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
