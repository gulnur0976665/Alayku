export default function Deal() {
  return (
    <>
      {/* Deal Section */}
      <section
        className="deal-section"
        style={{ backgroundImage: "url(assets/images/fon4.jpg)" }}
      >
        <div
          className="top-pattern-layer"
          style={{
            backgroundImage: "url(assets/images/background/pattern-1.png)",
          }}
        ></div>
        <div
          className="bottom-pattern-layer"
          style={{
            backgroundImage: "url(assets/images/background/pattern-2.png)",
          }}
        ></div>
        <div className="auto-container">
          <div
            className="content-box"
            style={{
              backgroundImage: "url(assets/images/kurut.png)",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="box-inner">
              {/* Sec Title */}
              <div className="sec-title light centered">
                <div className="title">Алайку</div>
                <h2>
                  Станьте партнёром “Алайку Органикс” и вместе развивайте рынок
                  натуральных продуктов в Кыргызстане!
                </h2>
              </div>
              {/* Email Form */}
              <div className="email-form">
                <div className="email-title">
                  Отправьте нам Ваш email и мы с Вами свяжемся
                </div>
                <form method="post">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Введите e-mail"
                    />
                    <button type="submit" className="submit-btn">
                      <span className="icon flaticon-send"></span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Deal Section */}
    </>
  );
}
