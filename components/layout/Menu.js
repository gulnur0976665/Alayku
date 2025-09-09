"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
  const pathname = usePathname(); // Азыркы URL'ди алат

  const menuLeft = [
    { name: "Главная", path: "/" },
    { name: "О нас", path: "#" },
    { name: "Продукция", path: "#" },
    { name: "Новости", path: "#" },
    { name: "Вакансий", path: "#" },
    { name: "Партнёрам", path: "#" },
    { name: "Контакты", path: "#" },
  ];

  return (
    <ul className="navigation">
      {menuLeft.map((item) => (
        <li key={item.name} className={pathname === item.path ? "active" : ""}>
          <Link href={item.path}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
}
