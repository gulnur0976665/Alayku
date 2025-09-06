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
          <Link href="#">About</Link>
        </li>
        <li className="dropdown">
          <Link href="#">Menu</Link>
        </li>
      </ul>
    </>
  );
}
