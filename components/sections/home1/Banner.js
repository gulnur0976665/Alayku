"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Banner() {
  const slides = [
    {
      image: "/assets/images/homebg2.png",
      mainImg: "/assets/images/sherbet.png",
      mainImg1: "/assets/images/sherbet1.png",
      mainImg2: "/assets/images/sherbet2.png",
      img1: "/assets/images/abrikos.png",
      img2: "/assets/images/apple.png",
    },
    {
      image: "/assets/images/homebg1.png",
      mainImg: "/assets/images/kurut1.png",
      mainImg1: "/assets/images/kurut2.png",
      mainImg2: "/assets/images/kurut3.png",
      img21: "/assets/images/kurut.png",
    },
    {
      image: "/assets/images/homebg3.png",
      mainImg: "/assets/images/chalap.png",
      mainImg1: "/assets/images/chalap1.png",
      mainImg2: "/assets/images/chalap2.png",
      img22: "/assets/images/sli.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="banner-section">
      <div
        className="pattern-layer"
        style={{
          backgroundImage: "url(assets/images/main-slider/pattern-1.png)",
        }}
      ></div>
      <div className="slides">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === activeIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div
              className={`icon-layer-one ${
                index === activeIndex ? "animate" : ""
              }`}
            >
              <img src={slide.img1} alt="" />
            </div>

            <div
              className={`icon-layer-two ${
                index === activeIndex ? "animate" : ""
              }`}
            >
              <img src={slide.img2} alt="" />
            </div>
            <div
              className={`icon-layer-two1 ${
                index === activeIndex ? "animate" : ""
              }`}
            >
              <img src={slide.img21} alt="" />
            </div>
            <div
              className={`icon-layer-two2 ${
                index === activeIndex ? "animate" : ""
              }`}
            >
              <img src={slide.img22} alt="" />
            </div>
            <div className="auto-container">
              <div className="content-column">
                <h1 className={index === activeIndex ? "animate" : ""}>
                  Попробуйте историю на вкус
                </h1>
                <p className={`text ${index === activeIndex ? "animate" : ""}`}>
                  Органика — это не просто отсутствие ГМО и химии.Это простая
                  философия: жить в гармонии с природой и выбирать лучшее для
                  здоровья.
                </p>
                <div
                  className={`btns-box ${
                    index === activeIndex ? "animate" : ""
                  }`}
                >
                  <div className="buttons">
                    <img
                      src="/assets/images/oimoLeft.png"
                      alt=""
                      className="oimoLeft"
                    />
                    <Link href="#" className="theme-btn">
                      Стань партнёром
                    </Link>
                    <img
                      src="/assets/images/oimoRigth.png"
                      alt=""
                      className="oimoRigth"
                    />
                  </div>
                </div>
              </div>
              <div className="images">
                <div className="image-column">
                  <img src={slide.mainImg1} alt={slide.title} />
                  <img src={slide.mainImg} alt={slide.title} />
                  <img src={slide.mainImg2} alt={slide.title} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
