"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 1200,
  loop: true,
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

export default function Banner() {
  return (
    <>
      {/* Banner Section */}
      <section className="banner-section">
        <div
          className="pattern-layer"
          style={{
            backgroundImage: "url(assets/images/main-slider/pattern-1.png)",
          }}
        ></div>
        <Swiper {...swiperOptions} className="main-slider-carousel ">
          {/* Slide */}
          <SwiperSlide>
            <div
              className="slide"
              style={{
                backgroundImage: 'url("/assets/images/homebg2.png")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "110vh",
              }}
            >
              <div className="icon-layer-one">
                <img src="assets/images/abrikos.png" alt="" />
              </div>
              <div className="icon-layer-two">
                {" "}
                <img src="assets/images/apple.png" alt="" />
              </div>
              <div className="auto-container">
                <div className="row clearfix">
                  {/* Content Column */}
                  <div className="content-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column">
                      <h1>
                        <span className="first-letter">
                          Попробуйте историю на вкус
                        </span>
                      </h1>
                      <div className="text">
                        Органика — это не просто отсутствие ГМО и химии. Это
                        простая философия: жить в гармонии с природой и выбирать
                        лучшее для здоровья.
                      </div>
                      <div className="btns-box">
                        <Link
                          href="menu"
                          className="theme-btn btn-style-one clearfix"
                        >
                          <span
                            style={{ paddingLeft: "25px", color: "#613e31" }}
                          >
                            Стань партнёром
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Image Column */}
                  <div className="image-column col-lg-6 col-md-12 col-sm-12">
                    <div className="image">
                      <img src="assets/images/sherbet.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2*/}
          <SwiperSlide>
            <div
              className="slide"
              style={{
                backgroundImage: 'url("/assets/images/homebg1.png")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100vh",
              }}
            >
              <div className="icon-layer-two1">
                <img src="assets/images/kurut.png" alt="" />
              </div>
              <div className="auto-container">
                <div className="row clearfix">
                  {/* Content Column */}
                  <div className="content-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column">
                      <h1>
                        <span className="first-letter">
                          Попробуйте историю на вкус
                        </span>
                      </h1>
                      <div className="text">
                        Органика — это не просто отсутствие ГМО и химии. Это
                        простая философия: жить в гармонии с природой и выбирать
                        лучшее для здоровья.
                      </div>
                      <div className="btns-box">
                        <Link
                          href="menu"
                          className="theme-btn btn-style-one clearfix"
                        >
                          <span
                            style={{ paddingLeft: "25px", color: "#613e31" }}
                          >
                            Стань партнёром
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Image Column */}
                  <div className="image-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column">
                      <div className="image">
                        <img src="assets/images/kurut1.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Slide3 */}
          <SwiperSlide>
            <div
              className="slide style-two"
              style={{
                backgroundImage: 'url("/assets/images/homebg3.png")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100vh",
              }}
            >
              <div
                className="icon-layer-two2"
                style={{
                  backgroundImage: "url(assets/images/sli.png)",
                }}
              ></div>
              <div className="auto-container">
                <div className="row clearfix">
                  {/* Content Column */}
                  <div className="content-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column">
                      <h1>
                        <span className="first-letter">
                          Попробуйте историю на вкус
                        </span>
                      </h1>
                      <div className="text">
                        Органика — это не просто отсутствие ГМО и химии. Это
                        простая философия: жить в гармонии с природой и выбирать
                        лучшее для здоровья.
                      </div>
                      <div className="btns-box">
                        <Link
                          href="menu"
                          className="theme-btn btn-style-one clearfix"
                        >
                          <span
                            style={{ paddingLeft: "25px", color: "#613e31" }}
                          >
                            Стань партнёром
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Image Column */}
                  <div className="image-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column">
                      <div className="image">
                        <img src="assets/images/chalap.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      {/* End Banner Section */}
    </>
  );
}
