import './Banner.scss'
import Button from "@/components/Button"
import Icon from "@/components/Icon";

const Banner = () => {

  const titleId = 'banner-title'

  return (
    <section
      className="banner container"
      aria-labelledby={titleId}
    >
      <div className="banner__inner">
        <h2 className="banner__title" id={titleId}>
          STAY UP TO DATE ABOUT OUR LATEST OFFERS
        </h2>
        <div className="banner__actions">
          <div className="banner__search">
            <Icon
              className="banner__search-icon"
              name="email"
              hasFill
              width={24}
              height={24}
            />
            <input
              className="banner__search-input"
              type="email"
              placeholder="Enter your email address"
            />
          </div>
          <Button
            className="banner__button"
            label="Subscribe to Newsletter"
            href="/"
          />
        </div>

      </div>
    </section>
  )
}

export default Banner