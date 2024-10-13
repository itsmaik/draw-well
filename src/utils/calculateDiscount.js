export default function Discount(price, discount) {
  const res = (price - discount) / price * 100;
  return res.toFixed(0)
}