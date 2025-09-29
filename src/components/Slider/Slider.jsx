import 'swiper/css'
// до подключения собственных стилей компонента для того, чтобы управлять стилями слайдера
import './Slider.scss'
import SliderNavigation from "./components/SliderNavigation";
import clsx from "clsx"

const defaultSliderParams = {
  slidesPerView: 5,
  slidesPerGroup: 5,
  spaceBetween: 30,
  breakpoints: {
    0: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    481: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 20,
    },
    1024: {
      spaceBetween: 20,
      allowTouchMove: false,
    },
    1441: {
      spaceBetween: 30,
      allowTouchMove: false,
    },
  } // адаптив по принципу mobile-first
} // свойства из библиотеки Swiper

const Slider = (props) => {
  const {
    children,
    navigationTargetElementId = null,
    // связка DOM-элемента с конкретным слайдером
    sliderParams = defaultSliderParams,
    isBeyondTheViewportOnMobileS,
    // для отображения карточки с выступом viewport-а на мобилке, как на макете
    hasScrollbarOnMobile = true,
    navigationPosition = "",
    /**
     * '' (default) | 'abs-bottom'
     */
    navigationMode,
    navigationJustifyContent,
    isNavigationHiddenMobile = true,
  } = props

  return (
    <div
      className={clsx('slider', {
        'slider--beyond-the-viewport-on-mobile-s': isBeyondTheViewportOnMobileS,
      })}
      data-js-slider={JSON.stringify({
        sliderParams,
        navigationTargetElementId})}
    >
      <div className="slider__swiper swiper" data-js-slider-swiper="">
        <ul className="slider__list swiper-wrapper">
          {children.map((slide, index) => (
            <li className="slider__item swiper-slide" key={index}>
              {slide}
            </li>
          ))}
        </ul>
      </div>

      {!navigationTargetElementId && (
        <SliderNavigation
          className="slider__navigation"
          mode={navigationMode}
          position={navigationPosition}
          isHiddenMobile={isNavigationHiddenMobile}
          justifyContent={navigationJustifyContent}
        />
      )}

      {hasScrollbarOnMobile && (
        <div
          className="slider__scrollbar visible-mobile"
          data-js-slider-scrollbar=""
        />
      )}
    </div>
  )
}

export default Slider