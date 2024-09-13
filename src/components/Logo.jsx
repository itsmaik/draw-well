import logo from '../assets/draw-well.svg'

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <img
        src={logo}
        alt="Logo"
      />
    </div>
  )
}