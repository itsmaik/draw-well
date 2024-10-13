import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function StarRating({ rating }) {
  const totalStars = 5;

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= totalStars; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-gray-600 mt-3 text-xl" />); // Filled star
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-600 mt-3 text-xl" />); // Empty star
      }
    }
    return stars;
  };

  return <div className="flex">{renderStars()}</div>;
}

export default StarRating;
