import './RatingView.scss'
import starsFilledImgSrc from '@/assets/icons/stars-filled.svg'

const RatingView = (props) => {
  const {
    rating = 5,
    label,
    isBig = false,
  } = props

  const ariaLabel = `Rating: ${rating} stars`
  const starsWidth = isBig ? 139 : 114;
  const starsHeight = isBig ? 23 : 19;

  return (
    <div
      className="rating-view"
      aria-label={ariaLabel}
      title={ariaLabel}
      style={{
        '--ratingViewValue': rating,
      }} // inline атрибут style для передачи css-переменной значения value
    >
      <div className="rating-view__stars">
        <img
          className="rating-view__stars-filled"
          src={starsFilledImgSrc}
          width={starsWidth}
          height={starsHeight}
          alt=""
        />
      </div>
      {label && (
        <div className="rating-view__label">
          {label + '/5'}
        </div>
      )}
    </div>
  )
}

export default RatingView