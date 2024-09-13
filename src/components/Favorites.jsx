import { FaHeart } from "react-icons/fa";

export default function Favorites() {
  return (
    <div className="flex items-center space-x-1">
      <FaHeart className="text-gray-600" />
      <span>favorites</span>
    </div>
  )
}