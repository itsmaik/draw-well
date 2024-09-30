import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="flex items-center space-x-1">
      <Link to={`/contact`}>
        <span className="font-semibold">Contact Us</span>
      </Link>
    </div>
  )
}