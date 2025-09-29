import './ProductCard.scss'
import clsx from 'clsx'
import Badge from '@/components/Badge'
import RatingView from "@/components/RatingView";
import { Image } from "minista";

const ProductCard = (props) => {
  const {
    title,
    imgSrc,
    rating,
    price,
    oldPrice,
    percent,
  } = props

  return (
    <a
      className="product-card"
      href='/'
      title={title}
    >
      <Image
        src={imgSrc}
        className="product-card__image"
      />
      <div className="product-card__body">
        <h6 className="product-card__title">{title}</h6>
        <RatingView
          rating={rating}
          label={rating}
        />
        <div className="product-card__pricing">
          <span className="product-card__price h5">{price}</span>
          {oldPrice != price && percent && (
            <>
              <span className="product-card__price-old h5">{oldPrice}</span>
              <Badge
                className="product-card__discount-badge"
                text={percent}
                mode="red"
              />
            </>
          )}
        </div>
      </div>
    </a>
  )
}

export default ProductCard