import Link from "next/link";
import Menu from "../Menu";
import MobileMenu from "../MobileMenu";
import Image from "next/image";
export default function Header1({
  scroll,
  handlePopup,
  handleMobileMenu,
  handleSidebar,
}) {
  return (
    <>
      {/* Main Header*/}
      <header
        className={`main-header header-style-one ${
          scroll ? "fixed-header" : ""
        }`}
      >
        {/* Header Upper */}

        <div className="header-upper">
          <div className="auto-container clearfix">
            <div className="pull-left logo-box">
              <div className="logo">
                <Link href="/">
                  <Image
                    src="/assets/images/logoHeader.png"
                    alt="Logo"
                    width={120}
                    height={60}
                  />
                </Link>
              </div>
            </div>

            <div className="nav-outer clearfix">
              {/*Mobile Navigation Toggler*/}
              <div className="mobile-nav-toggler">
                <span
                  className="icon flaticon-menu"
                  onClick={handleMobileMenu}
                ></span>
              </div>
              {/* Main Menu */}
              <nav className="main-menu navbar-expand-md">
                <Menu />
              </nav>
            </div>
          </div>
        </div>

        <div className="sticky-header">
          <div className="auto-container clearfix">
            <div className="logo pull-left">
              <Link href="/">
                <Image
                  src="/assets/images/logoHeader.png"
                  alt="Logo"
                  width={120}
                  height={60}
                />
              </Link>
            </div>
            <div className="pull-right">
              <nav className="main-menu">
                <Menu />
              </nav>
            </div>
          </div>
        </div>

        {/*End Header Upper*/}
        <MobileMenu handleMobileMenu={handleMobileMenu} />
      </header>
      {/* End Main Header */}
    </>
  );
}
