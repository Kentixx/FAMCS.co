import './Reviews.scss'
import clsx from 'clsx'
import Slider from "@/components/Slider";
import reviewItems from "./reviewItems";
import ReviewCard from "@/components/ReviewCard";
import Section from "@/layouts/Section";
import SliderNavigation from "@/components/Slider/components/SliderNavigation";

const Reviews = (props) => {
  const {
    className,
  } = props

  const sliderNavigationId = "reviews-slider-navigation"

  return (
    <Section
      className="reviews section"
      // actions={(
      //   <SliderNavigation
      //     mode="tile"
      //     id={sliderNavigationId}
      //   />
      // )}
    >
      <div className="reviews__header">
        <h2>Our Happy Customers</h2>
      </div>
      <div className="reviews__content">
        {reviewItems.map((reviewItem, index) => (
          <ReviewCard
            {...reviewItem}
            key={index}
          />
        ))}
      </div>
      <p className="reviews__description h5">
        Your own review may be here :)
      </p>
    </Section>
  )
}

export default Reviews