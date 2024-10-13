import logo from '../assets/draw-well.svg'
import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Link to={`/`}>
        <img
          src={logo}
          alt="Logo"
        />
      </Link>

    </div>
  )
}