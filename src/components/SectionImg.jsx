import heroImg from '../assets/airpods.avif'

export default function HeroImg () {
  return (
    <img src={heroImg} alt="Hero Image" className='h-96 max-w-[1280px] w-full  object-cover mx-auto' />
  )
}