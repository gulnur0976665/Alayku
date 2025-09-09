"use client";
import Link from "next/link";
export default function Juice() {
  return (
    <>
      {/* Juice Section */}
      <section className="juice-section">
        <div
          className="pattern-layer"
          style={{ backgroundImage: "url(assets/images/background/1.png)" }}
        ></div>

        <div className="auto-container">
          <div className="row clearfix">
            {/* Image Column */}
            <div className="image-column col-lg-7 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="image">
                  <img src="assets/images/kurut1.png" alt="" />
                  <img src="assets/images/sherbet.png" alt="" />
                  <img src="assets/images/chalap.png" alt="" />
                </div>
              </div>
              <img src="assets/images/apple.png" alt="" className="img11" />
              <img src="assets/images/abrikos.png" alt="" className="img12" />
              <img src="assets/images/kurut.png" alt="" className="img13" />
              <img src="assets/images/sli.png" alt="" className="img14" />
            </div>

            {/* Content Column */}
            <div className="content-column col-lg-5 col-md-12 col-sm-12">
              <div className="inner-column">
                {/* Sec Title */}
                <div className="sec-title">
                  <div className="title">Алайку</div>
                  <h2 style={{ color: "#613e31" }}>
                    Натуральные продукты родной земли
                  </h2>
                  <div className="separate"></div>
                  <div className="text">
                    Курут, Чалап и Шербет — национальные напитки, созданные из
                    местного сырья по традиционным рецептам. В каждом вкусе —
                    только натуральные ингредиенты, забота о вашем здоровье и
                    уважение к нашим корням
                  </div>
                </div>
                <div className="buttons">
                  <img
                    src="/assets/images/oimoLeft.png"
                    alt=""
                    className="oimoLeft"
                  />
                  <Link href="#" className="theme-btn ">
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
          </div>
        </div>
      </section>
      {/* End Juice Section */}
    </>
  );
}
