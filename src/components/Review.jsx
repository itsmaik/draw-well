import StarRating from "./StarRating";

export default function Review({ username, rating, description }) {
  return (
    <div className="border-t py-4">
      <div className="flex items-center justify-between">
        <p className="font-bold">{username}</p>
        <StarRating rating={rating} />
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}