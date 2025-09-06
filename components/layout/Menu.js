import Link from "next/link";
// import { useRouter } from "next/router"

export default function Menu() {
  // const router = useRouter()

  return (
    <>
      <ul className="navigation">
        <li className="dropdown">
          <Link href="/">Главная</Link>
        </li>
        <li className="dropdown">
          <Link href="about">О нас</Link>
        </li>
        <li className="dropdown">
          <Link href="menu">Продукция</Link>
        </li>
        <li className="dropdown">
          <Link href="gallery">Новости</Link>
        </li>
        <li className="dropdown">
          <Link href="blog-classic">Вакансий</Link>
        </li>
        <li className="dropdown">
          <Link href="blog-classic">Партнёрам</Link>
        </li>
        <li>
          <Link href="contact">Контакты</Link>
        </li>
      </ul>
    </>
  );
}
