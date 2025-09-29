import './ReviewCard.scss'
import Badge from "@/components/Badge"
import RatingView from "@/components/RatingView"
import Icon from "@/components/Icon";

const ReviewCard = (props) => {
  const {
    name,
    isVerified = false,
    description,
    ratingValue,
  } = props

  return (
    <div className="review-card">
      <header className="review-card__header">
        <RatingView
          isBig
          rating={ratingValue}
        />
        <div className="review-card__author">
          <h4 className="review-card__author-name h6">{name}</h4>
          {isVerified && (
            <Icon
              className="review-card__author-verified-icon"
              name="verified-tick"
              hasFill
            />
          )}
        </div>
      </header>
      <div>
        <p className="review-card__description">
          {description}
        </p>
      </div>
    </div>
  )
}

export default ReviewCard