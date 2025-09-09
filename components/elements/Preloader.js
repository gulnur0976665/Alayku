"use client";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      window.onload = () => {
        setLoading(false);
      };
    }
  }, []);

  if (!loading) return null;

  return <div className="preloader"></div>;
}
