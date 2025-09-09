"use client";
import Link from "next/link";
export default function Beverage() {
  return (
    <>
      {/* Beverage Section */}
      <section className="beverage-section">
        <div className="icon-layer">
          <img src="assets/images/abrikos.png" alt="" />
        </div>
        <div className="auto-container">
          {/* Sec Title */}
          <div className="sec-title centered">
            <div className="title">Алайку</div>
            <h2 style={{ color: "#613e31" }}>Наша продукция</h2>
            <div className="separate"></div>
          </div>
          <div className="row clearfix">
            {/* Beverage Column */}
            <div className="beverage-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="image">
                  <Link href="#">
                    <img src="assets/images/chalap (1).png" alt="" />
                  </Link>
                </div>
                <div className="lower-content">
                  <h6>
                    <Link href="#">Чалап</Link>
                  </h6>
                  <div className="products">Перец</div>
                </div>
              </div>
            </div>

            {/* Beverage Column */}
            <div className="beverage-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="image">
                  <Link href="#">
                    <img src="assets/images/kurut1 (1).png" alt="" />
                  </Link>
                </div>
                <div className="lower-content">
                  <h6>
                    <Link href="#">Курут</Link>
                  </h6>
                  <div className="products">Аксерке</div>
                </div>
              </div>
            </div>

            {/* Beverage Column */}
            <div className="beverage-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="image">
                  <Link href="#">
                    <img src="assets/images/sherbet (1).png" alt="" />
                  </Link>
                </div>
                <div className="lower-content">
                  <h6>
                    <Link href="#">Шербет</Link>
                  </h6>
                  <div className="products">Яблоко</div>
                </div>
              </div>
            </div>

            {/* Beverage Column */}
            <div className="beverage-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="image">
                  <Link href="#">
                    <img src="assets/images/chalap1 (1).png" alt="" />
                  </Link>
                </div>
                <div className="lower-content">
                  <h6>
                    <Link href="#">Чалап</Link>
                  </h6>
                  <div className="products">Райхан</div>
                </div>
              </div>
            </div>

            {/* Beverage Column */}
            <div className="beverage-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="image">
                  <Link href="#">
                    <img src="assets/images/kurut2 (1).png" alt="" />
                  </Link>
                </div>
                <div className="lower-content">
                  <h6>
                    <Link href="#">Курут</Link>
                  </h6>
                  <div className="products">Чий</div>
                </div>
              </div>
            </div>

            {/* Beverage Column */}
            <div className="beverage-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="image">
                  <Link href="#">
                    <img src="assets/images/sherbet1 (1).png" alt="" />
                  </Link>
                </div>
                <div className="lower-content">
                  <h6>
                    <Link href="#">Шербет</Link>
                  </h6>
                  <div className="products">Яблоко-чернослив</div>
                </div>
              </div>
            </div>

            {/* Beverage Column */}
            <div className="beverage-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="image">
                  <Link href="#">
                    <img src="assets/images/chalap2 (1).png" alt="" />
                  </Link>
                </div>
                <div className="lower-content">
                  <h6>
                    <Link href="#">Чалап</Link>
                  </h6>
                  <div className="products">Бышма</div>
                </div>
              </div>
            </div>

            {/* Beverage Column */}
            <div className="beverage-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="image">
                  <Link href="#">
                    <img src="assets/images/kurut3 (1).png" alt="" />
                  </Link>
                </div>
                <div className="lower-content">
                  <h6>
                    <Link href="#">Курут</Link>
                  </h6>
                  <div className="products">Бакай</div>
                </div>
              </div>
            </div>
          </div>
          {/* Button Box */}

          <div className="buttons text-center">
            <img
              src="/assets/images/oimoLeft (1).png"
              alt=""
              className="oimoLeft"
            />
            <Link href="#" className="theme-btn ">
              <span style={{ paddingLeft: "25px" }}>
                Просмотреть все продукты
              </span>
            </Link>
            <img
              src="/assets/images/oimoRigth (1).png"
              alt=""
              className="oimoRigth"
            />
          </div>
        </div>
      </section>
      {/* End Beverage Section */}
    </>
  );
}
