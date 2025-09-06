"use client";
import Link from "next/link";
export default function Recipe() {
  return (
    <>
      {/* Recipe Section */}
      <section className="recipe-section">
        <div className="icon-layer-one">
          <img src="/assets/images/apple.png" alt="" />
        </div>
        <div className="icon-layer-two">
          <img src="/assets/images/abrikos.png" alt="" />
        </div>
        <div className="icon-layer-three">
          <img src="/assets/images/apple.png" alt="" />
        </div>
        <div className="auto-container">
          {/* Sec Title */}
          <div className="sec-title centered">
            <div className="title">Алайку</div>
            <h2 style={{ color: "#613e31" }}>Польза напитка Шербет</h2>
            <div className="separate"></div>
          </div>
          <div className="inner-container">
            <div
              className="circle-layer"
              style={{
                backgroundImage: "url(assets/images/icons/circles.png)",
              }}
            ></div>
            <div className="row clearfix">
              {/* Left Column */}
              <div className="left-column col-lg-5 col-md-6 col-sm-12">
                <div className="inner-column">
                  {/* Recipe Block */}
                  <div className="recipe-block">
                    <div className="inner-box">
                      <div className="icon">
                        <img src="/assets/images/abrikos.png" alt="" />
                      </div>
                      <h6>
                        <Link href="menu">
                          Богат витаминами и антиоксидантами
                        </Link>
                      </h6>
                      <div className="text">
                        Традиционный шербет, содержит витамин A, витамин C,
                        каротиноиды, эфирные масла и органические кислоты — это
                        мощный природный комплекс для иммунитета и защиты клеток
                        от старения.
                      </div>
                    </div>
                  </div>

                  {/* Recipe Block */}
                  <div className="recipe-block">
                    <div className="inner-box">
                      <div className="icon">
                        <img src="/assets/images/apple.png" alt="" />
                      </div>
                      <h6>
                        <Link href="menu">
                          Улучшает обмен веществ и пищеварение
                        </Link>
                      </h6>
                      <div className="text">
                        Приготовление без длительной тепловой обработки
                        позволяет сохранить витамины и натуральные вещества,
                        которые способствуют нормализации обмена, помогают
                        справиться с дисбактериозом и поддерживают
                        пищеварительную систему.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image Column */}
              <div className="image-column col-lg-2 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="image">
                    <img src="assets/images/sherbet.png" alt="" />
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="right-column col-lg-5 col-md-6 col-sm-12">
                <div className="inner-column">
                  {/* Recipe Block / Style Two */}
                  <div className="recipe-block style-two">
                    <div className="inner-box">
                      <div className="icon">
                        <img src="/assets/images/apple.png" alt="" />
                      </div>
                      <h6>
                        <Link href="menu">
                          Поддерживает сердечно-сосудистую систему и обмен
                          кальция
                        </Link>
                      </h6>
                      <div className="text">
                        Шербет может улучшать работу сердца, печени и почек, а
                        также способствует усвоению кальция — важного минерала
                        для костей, зубов и мышц.
                      </div>
                    </div>
                  </div>

                  {/* Recipe Block / Style Two */}
                  <div className="recipe-block style-two">
                    <div className="inner-box">
                      <div className="icon">
                        <img src="/assets/images/abrikos.png" alt="" />
                      </div>
                      <h6>
                        <Link href="menu">
                          Утешает и освежает, дарит энергию
                        </Link>
                      </h6>
                      <div className="text">
                        Благодаря природным сахарам, лёгким углеводам и
                        биоактивным веществам шербет тонизирует, бодрит,
                        повышает настроение и помогает быстро восстановиться
                        после физической или умственной нагрузки
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Recipe Section */}
    </>
  );
}
