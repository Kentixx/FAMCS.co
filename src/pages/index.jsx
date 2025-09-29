import Hero from '@/sections/Hero'
import Button from '@/components/Button'
import Field from '@/components/Field'
import Goods from "@/sections/Goods";

export const metadata = {
  title: 'Home',
}

export default () => {
  return (
    <>
      <Hero />
      <Goods />
    </>
  )
}
