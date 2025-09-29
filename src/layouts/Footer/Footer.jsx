import './Footer.scss'
import Socials from "@/components/Socials";

const Footer = (props) => {
  const menuItems = [
    {
      title: 'COMPANY',
      links: ['About', 'Features', 'Works', 'Career'],
    },
    {
      title: 'HELP',
      links: ['Genres', 'Trending', 'New Release', 'Popular'],
    },
    {
      title: 'FAQ',
      links: ['Genres', 'Trending', 'New Release', 'Popular'],
    },
    {
      title: 'RESOURCES',
      links: ['Contact Us'],
    },
  ]
  const extraLinks = ['Terms of Use', 'Privacy Policy', 'Cookie Policy']

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__main">
          <div className="footer__info">
            <h4 className="footer__info-title">FAMCS.CO</h4>
            <p>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
            <Socials />
          </div>
          <nav className="footer__menu">
            {menuItems.map(({ title, links }, index) => (
              <div className="footer__menu-column" key={index}>
                <a className="footer__menu-title h6" href="/">{title}</a>
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
