import Link from "next/link";
// import { useRouter } from "next/router"

export default function Menu() {
  // const router = useRouter()

  return (
    <>
      <ul className="navigation left-nav clearfix">
        <li className="dropdown">
          <Link href="/">Home </Link>
        </li>
        <li className="dropdown">
          <Link href="#specials">Specials</Link>
        </li>
        <li className="dropdown">
          <Link href="#location">Locations</Link>
        </li>
        <li className="dropdown">
          <Link href="#menu">Menu</Link>
        </li>
      </ul>
    </>
  );
}
