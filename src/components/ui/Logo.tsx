import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="text-xl md:text-2xl font-semibold text-gray-400 relative"
    >
      <span className="font-medium">V</span>
<span className="font-serif">R</span>
    </Link>
  );
}
