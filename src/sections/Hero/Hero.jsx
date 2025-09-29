import './Hero.scss'
import clsx from 'clsx'
import Button from "@/components/Button";
import Icon from "@/components/Icon";

const Hero = (props) => {
  const shopButtonTitle = 'Shop Now'
  const titleId = 'hero-title';
  const heroTitle = "FAMCS IS A FAMILY. A FAMILY WITH UNIQUE STYLE";
  const heroDescription = "Find clothes and accessories that truly reflect what you love: become a part of FAMCS fashion.";
  const brandsNames = [
    'versace',
    'zara',
    'gucci',
    'prada',
    'calvin-klein',
  ]
  const statsLabels = [
    {
      'number': '10+',
      'label': 'International Brands',
    },
    {
      'number': '2,000+',
      'label': 'High-Quality Products',
    },
    {
      'number': '5,000+',
      'label': 'Happy Customers',
    },
  ]

  return (
    <section className="hero" aria-labelledby={titleId}>
      <div className="hero__body">
        <div className="hero__content">
          <h1 className="hero__title h1">
            {heroTitle}
          </h1>
          <p className="hero__description">
            {heroDescription}
          </p>
          <Button
            className="hero__button"
            label="Shop Now"
            href="/"
          />
          <div className="hero__stats">
            {statsLabels.map(({ number, label}) => (
              <div className="hero__stat">
                <h3 className="hero__stat__number">
                  {number}
                </h3>
                <p className="hero__stat__label">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="hero__pano">
          <Icon
            className="hero__pano-astroid hero__pano-astroid-left"
            name="astroid"
            hasFill
          />
          <Icon
            className="hero__pano-astroid hero__pano-astroid-right"
            name="astroid"
            hasFill
          />
        </div>
      </div>
      <div className="hero__brands">
        {brandsNames.map((item, i) => (
          <Icon
            className="hero__brands-icon"
            name={item}
            hasFill
            key={i}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero