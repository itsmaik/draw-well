import heroImg from '../assets/macbook.avif'

export default function HeroImg () {
  return (
    <img src={heroImg} alt="Hero Image" className='h-screen max-w-[1440px] w-full object-cover mx-auto' />
  )
}