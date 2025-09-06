import Link from "next/link";
export default function Footer1() {
  return (
    <>
      {/* Main Footer */}
      <footer className="main-footer">
        <div
          className="pattern-layer-one"
          style={{
            backgroundImage: "url(assets/images/resource/footer-pattern-1.png)",
          }}
        ></div>
        <div
          className="pattern-layer-two"
          style={{
            backgroundImage: "url(assets/images/resource/footer-pattern-2.png)",
          }}
        ></div>
        <div
          className="pattern-layer-three"
          style={{
            backgroundImage: "url(assets/images/background/pattern-6.png)",
          }}
        ></div>
        <div className="auto-container">
          {/* Widgets Section */}
          <div className="widgets-section">
            <div className="row clearfix">
              {/* Big Column */}
              <div className="big-column col-lg-6 col-md-12 col-sm-12">
                <div className="row clearfix">
                  {/*Footer Column*/}
                  <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                    <div className="footer-widget contact-widget">
                      <h6>Связаться с нами</h6>
                      <div className="text">
                        6Fifth Avenue 5501, Broadway, New York Morris Street
                        London 1234
                      </div>
                      <ul className="contact-list">
                        <li>
                          <span className="icon fa fa-send"></span>Your mail @
                          gmail.com
                        </li>
                        <li>
                          <span className="icon fa fa-phone"></span>
                          <Link href="tel:+123-4567-89000">
                            (123) 4567 89000
                          </Link>
                        </li>
                        <li>
                          <span className="icon fa fa-instagram"></span>
                          <Link href="#">instagram</Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/*Footer Column*/}
                  <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                    <div className="footer-widget links-widget">
                      <h6>Полезные ссылки</h6>
                      <ul className="footer-list">
                        <li>
                          <Link href="/">Главная</Link>
                        </li>
                        <li>
                          <Link href="#">О нас</Link>
                        </li>
                        <li>
                          <Link href="#">Продукция</Link>
                        </li>
                        <li>
                          <Link href="#">Новости</Link>
                        </li>
                        <li>
                          <Link href="#">Вакансий</Link>
                        </li>
                        <li>
                          <Link href="#">Партнёрам</Link>
                        </li>
                        <li>
                          <Link href="#">Контакты</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Big Column */}
            </div>
          </div>
          <div className="footer-bottom">
            <div className="copyright">
              &copy; 2024 foodily All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
