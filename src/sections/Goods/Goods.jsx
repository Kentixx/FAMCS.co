import './Goods.scss'
import clsx from 'clsx'
import Section from "@/layouts/Section";
import goodsGroups from "@/sections/Goods/goodsGroups";
import getIdFromTitle from "@/utils/getIdFromTitle";
import ProductCard from "@/components/ProductCard";

const Goods = (props) => {
    return (
    <>
      {goodsGroups.map((goodsGroup, index) => (
        <Section
          className="goods__section"
          title={goodsGroup.title}
          titleId={getIdFromTitle(goodsGroup.title)}
          buttonLabel="View All"
          key={index}
        >
          {goodsGroup.items.map(
            ({ title, rating, price, imgSrc, oldPrice, percent }) => (
              <ProductCard
                title={title}
                imgSrc={imgSrc}
                price={price}
                rating={rating}
                oldPrice={oldPrice}
                percent={percent}
              />
            ))}
        </Section>
      ))}
    </>
  )
}

export default Goods