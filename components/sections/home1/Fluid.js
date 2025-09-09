"use client";
import Link from "next/link";
export default function Fluid() {
  return (
    <>
      <section className="fluid-section-one">
        <div className="outer-container clearfix">
          <div className="content-column">
            <div className="icon-box">
              <img
                style={{ width: "200px", height: "auto" }}
                src="/assets/images/apple (1).png"
                alt=""
              />
            </div>
            <div className="inner-column">
              <div className="sec-title">
                <h2 style={{ color: "#613e31" }}>Попробуйте историю на вкус</h2>
                <div className="separate"></div>
                <div className="text">
                  Мы производим только натуральные и отечественные продукты,
                  созданные по национальным рецептам. Каждый наш напиток — это
                  часть культуры и традиций, переданных через поколения. От
                  освежающего шербета до питательного курута и других уникальных
                  вкусов — всё это сделано с уважением к природе и родной земле.
                </div>
              </div>
              <div className="buttons">
                <img
                  src="/assets/images/oimoLeft (1).png"
                  alt=""
                  className="oimoLeft"
                />
                <Link href="#" className="theme-btn ">
                  Все продукты
                </Link>
                <img
                  src="/assets/images/oimoRigth (1).png"
                  alt=""
                  className="oimoRigth"
                />
              </div>
            </div>
          </div>

          <div
            className="image-column"
            style={{
              backgroundImage: "url(assets/images/resource/image-1.jpg)",
            }}
          >
            <figure className="image-box">
              <img src="assets/images/block6 (1).jpg" alt="" />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
