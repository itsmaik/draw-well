import heroImg from '../assets/ecommerce.avif'

export default function HeroImg () {
  return (
    <img src={heroImg} alt="Hero Image" className='max-h-[500px] max-w-[1440px] w-full object-cover object-bottom mx-auto' />
  )
}