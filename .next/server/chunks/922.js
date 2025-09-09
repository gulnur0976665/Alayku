exports.id = 922;
exports.ids = [922];
exports.modules = {

/***/ 2560:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3231))

/***/ }),

/***/ 4349:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6938, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1653, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6721, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3886, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2950, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 904, 23))

/***/ }),

/***/ 9160:
/***/ (() => {



/***/ }),

/***/ 7153:
/***/ (() => {



/***/ }),

/***/ 3231:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Error404)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2337);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_slider_GallerySlider1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(553);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1736);
/* __next_internal_client_entry_do_not_use__ default auto */ 



function Error404() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
            headerStyle: 1,
            footerStyle: 1,
            breadcrumbTitle: "404 Error",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                    className: "error-section",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "auto-container",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "image",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "assets/images/resource/error.png",
                                    alt: ""
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                children: "Page Not Found"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/",
                                className: "theme-btn btn-style-two clearfix",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "icon"
                                    }),
                                    "Return To Home"
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                    className: "gallery-section",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "outer-container",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_slider_GallerySlider1__WEBPACK_IMPORTED_MODULE_2__["default"], {})
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 1736:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./components/elements/BackToTop.js

function BackToTop({ scroll }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: scroll && /*#__PURE__*/ jsx_runtime_.jsx("a", {
            className: "scroll-to-top scroll-to-target d-block",
            href: "#top",
            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                className: "fas fa-angle-up"
            })
        })
    });
}

;// CONCATENATED MODULE: ./components/elements/DataBg.js


function DataBg() {
    (0,react_.useEffect)(()=>{
        const elements = document.querySelectorAll("[data-bg]");
        elements.forEach((element)=>{
            element.style.backgroundImage = `url(${element.getAttribute("data-bg")})`;
        });
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
}

// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.19_react-dom@18.2.0_react@18.2.0__react@18.2.0_sass@1.92.0/node_modules/next/link.js
var next_link = __webpack_require__(2337);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/layout/Breadcrumb.js


function Breadcrumb({ breadcrumbTitle }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
            className: "page-title",
            style: {
                backgroundImage: "url(assets/images/background/6.jpg)"
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "pattern-layer",
                    style: {
                        backgroundImage: "url(assets/images/background/pattern-7.png)"
                    }
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "auto-container",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            children: breadcrumbTitle
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "page-breadcrumb",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        children: "home"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: breadcrumbTitle
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/layout/SearchPopup.js

function SearchPopup({ isPopup, handlePopup }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            id: "search-popup",
            className: `search-popup-wrap ${isPopup ? "search-active" : ""}`,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "search-popup",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "close-search style-two",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "flaticon-multiply",
                            onClick: handlePopup
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "close-search",
                        onClick: handlePopup,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "flaticon-up-arrow-1"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("form", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "search",
                                    name: "search-field",
                                    placeholder: "Search Here"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    type: "submit",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fa fa-search"
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./components/layout/Sidebar.js


function Sidebar({ isSidebar, handleSidebar }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `xs-sidebar-group info-group info-sidebar ${isSidebar ? "isActive" : ""}`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "xs-overlay xs-bg-black",
                    onClick: handleSidebar
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "xs-sidebar-widget",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "sidebar-widget-container",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "widget-heading",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "#",
                                    className: "close-side-widget",
                                    onClick: handleSidebar,
                                    children: "X"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "sidebar-textwidget",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "sidebar-info-contents",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "content-inner",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "logo",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/images/logo.png",
                                                        alt: ""
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "content-box",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                        children: "About Us"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "text",
                                                        children: "The argument in favor of using filler text goes something like this: If you use real content in the Consulting Process, anytime you reach a review point you’ll end up reviewing and negotiating the content itself and not the design."
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                        href: "contact",
                                                        className: "theme-btn btn-style-one clearfix",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "icon"
                                                            }),
                                                            "Consultation"
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "contact-info",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                        children: "Contact Info"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        className: "list-style-one",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "icon fa fa-location-arrow"
                                                                    }),
                                                                    "Chicago 12, Melborne City, USA"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "icon fa fa-phone"
                                                                    }),
                                                                    "(111) 111-111-1111"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "icon fa fa-envelope"
                                                                    }),
                                                                    "foodily@gmail.com"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "icon fa fa-clock-o"
                                                                    }),
                                                                    "Week Days: 09.00 to 18.00 Sunday: Closed"
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "social-box",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "facebook",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            className: "fa fa-facebook-f"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "twitter",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            className: "fa fa-twitter"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "linkedin",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            className: "fa fa-linkedin"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "instagram",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            className: "fa fa-instagram"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "youtube",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            className: "fa fa-youtube"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.19_react-dom@18.2.0_react@18.2.0__react@18.2.0_sass@1.92.0/node_modules/next/navigation.js
var navigation = __webpack_require__(356);
;// CONCATENATED MODULE: ./components/layout/Menu.js
/* __next_internal_client_entry_do_not_use__ default auto */ 


function Menu() {
    const pathname = (0,navigation.usePathname)(); // Азыркы URL'ди алат
    const menuLeft = [
        {
            name: "Главная",
            path: "/"
        },
        {
            name: "О нас",
            path: "#"
        },
        {
            name: "Продукция",
            path: "#"
        },
        {
            name: "Новости",
            path: "#"
        },
        {
            name: "Вакансий",
            path: "#"
        },
        {
            name: "Партнёрам",
            path: "#"
        },
        {
            name: "Контакты",
            path: "#"
        }
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: "navigation",
        children: menuLeft.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: pathname === item.path ? "active" : "",
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: item.path,
                    children: item.name
                })
            }, item.name))
    });
}

;// CONCATENATED MODULE: ./components/layout/MobileMenu.js
/* __next_internal_client_entry_do_not_use__ default auto */ 


const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar })=>{
    const [isActive, setIsActive] = (0,react_.useState)({
        status: false,
        key: "",
        subMenuKey: ""
    });
    const handleToggle = (key, subMenuKey = "")=>{
        if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
            setIsActive({
                status: false,
                key: "",
                subMenuKey: ""
            });
        } else {
            setIsActive({
                status: true,
                key,
                subMenuKey
            });
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "mobile-menu",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "menu-backdrop",
                    onClick: handleMobileMenu
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "close-btn",
                    onClick: handleMobileMenu,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "icon flaticon-multiply"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                    className: "menu-box",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "nav-logo",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "assets/images/logohe.png",
                                    alt: "",
                                    title: ""
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "menu-outer",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "collapse navbar-collapse show clearfix",
                                id: "navbarSupportedContent",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "navigation",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            className: isActive.key == 1 ? "dropdown current" : "dropdown",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/",
                                                    children: "Home"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    style: {
                                                        display: `${isActive.key == 1 ? "block" : "none"}`
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/",
                                                                children: "Home One"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "index-2",
                                                                children: "Home Two"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "index-3",
                                                                children: "Home Three"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "index-4",
                                                                children: "Home Four"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn",
                                                    onClick: ()=>handleToggle(1),
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "fa fa-angle-right"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            className: isActive.key == 2 ? "dropdown current" : "dropdown",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/#",
                                                    children: "About"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    style: {
                                                        display: `${isActive.key == 2 ? "block" : "none"}`
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "about",
                                                                children: "About"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "team",
                                                                children: "Team"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "restaurant",
                                                                children: "Restaurant"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn",
                                                    onClick: ()=>handleToggle(2),
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "fa fa-angle-right"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            className: isActive.key == 3 ? "dropdown current" : "dropdown",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/#",
                                                    children: "Menu"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    style: {
                                                        display: `${isActive.key == 3 ? "block" : "none"}`
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "menu",
                                                                children: "Menu"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "milkshake",
                                                                children: "Milk Shake"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "frappe",
                                                                children: "Frappe"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "boba-tea",
                                                                children: "Boba Tea"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "slushy",
                                                                children: "Slushy"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn",
                                                    onClick: ()=>handleToggle(3),
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "fa fa-angle-right"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            className: isActive.key == 4 ? "dropdown current" : "dropdown",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/#",
                                                    children: "Gallery"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    style: {
                                                        display: `${isActive.key == 4 ? "block" : "none"}`
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "gallery",
                                                                children: "Gallery"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "gallery-2",
                                                                children: "Gallery 02"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: isActive.key == 4 ? "dropdown-btn open" : "dropdown-btn",
                                                    onClick: ()=>handleToggle(4),
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "fa fa-angle-right"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            className: isActive.key == 5 ? "dropdown current" : "dropdown",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/#",
                                                    children: "Blog"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    style: {
                                                        display: `${isActive.key == 5 ? "block" : "none"}`
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "blog-classic",
                                                                children: "Blog Classic"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "blog-details2",
                                                                children: "Blog Single 02"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "blog-details",
                                                                children: "Blog Details"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/error",
                                                                children: "Not Found"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: isActive.key == 5 ? "dropdown-btn open" : "dropdown-btn",
                                                    onClick: ()=>handleToggle(5),
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "fa fa-angle-right"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/contact",
                                                children: "Contact"
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const layout_MobileMenu = (MobileMenu);

// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.19_react-dom@18.2.0_react@18.2.0__react@18.2.0_sass@1.92.0/node_modules/next/image.js
var next_image = __webpack_require__(5636);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/layout/header/Header1.js





function Header1({ scroll, handlePopup, handleMobileMenu, handleSidebar }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
            className: `main-header header-style-one ${scroll ? "fixed-header" : ""}`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "header-upper",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "auto-container clearfix",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "pull-left logo-box",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "logo",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "/assets/images/logohe.png",
                                            alt: "Logo",
                                            width: 120,
                                            height: 60
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "nav-outer clearfix",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "mobile-nav-toggler",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "icon flaticon-menu",
                                            onClick: handleMobileMenu
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                        className: "main-menu navbar-expand-md",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Menu, {})
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "sticky-header",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "auto-container clearfix",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "logo pull-left",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: "/assets/images/logoHeader.png",
                                        alt: "Logo",
                                        width: 120,
                                        height: 60
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "pull-right",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                    className: "main-menu",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Menu, {})
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(layout_MobileMenu, {
                    handleMobileMenu: handleMobileMenu
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/layout/footer/Footer1.js


function Footer1() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
            className: "main-footer",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "pattern-layer-one",
                    style: {
                        backgroundImage: "url(assets/images/resource/footer-pattern-1.png)"
                    }
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "pattern-layer-two",
                    style: {
                        backgroundImage: "url(assets/images/resource/footer-pattern-2.png)"
                    }
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "pattern-layer-three",
                    style: {
                        backgroundImage: "url(assets/images/background/pattern-6.png)"
                    }
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "auto-container",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "widgets-section",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "row clearfix",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "big-column col-lg-6 col-md-12 col-sm-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "row clearfix",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "footer-column col-lg-6 col-md-6 col-sm-12",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "footer-widget contact-widget",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            children: "Связаться с нами"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "text",
                                                            children: "6Fifth Avenue 5501, Broadway, New York Morris Street London 1234"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            className: "contact-list",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "icon fa fa-send"
                                                                        }),
                                                                        "Your mail @ gmail.com"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "icon fa fa-phone"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "tel:+123-4567-89000",
                                                                            children: "(123) 4567 89000"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "icon fa fa-instagram"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "#",
                                                                            children: "instagram"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "footer-column col-lg-6 col-md-6 col-sm-12",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "footer-widget links-widget",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            children: "Полезные ссылки"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            className: "footer-list",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "/",
                                                                        children: "Главная"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "#",
                                                                        children: "О нас"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "#",
                                                                        children: "Продукция"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "#",
                                                                        children: "Новости"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "#",
                                                                        children: "Вакансий"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "#",
                                                                        children: "Партнёрам"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "#",
                                                                        children: "Контакты"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "footer-bottom",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "copyright",
                                children: "\xa9 2024 All Rights Reserved."
                            })
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/layout/Layout.js
/* __next_internal_client_entry_do_not_use__ default auto */ 








function Layout({ headerStyle, footerStyle, headTitle, breadcrumbTitle, children, wrapperCls }) {
    const [scroll, setScroll] = (0,react_.useState)(0);
    // Mobile Menu
    const [isMobileMenu, setMobileMenu] = (0,react_.useState)(false);
    const handleMobileMenu = ()=>{
        setMobileMenu(!isMobileMenu);
        !isMobileMenu ? document.body.classList.add("mobile-menu-visible") : document.body.classList.remove("mobile-menu-visible");
    };
    // Popup
    const [isPopup, setPopup] = (0,react_.useState)(false);
    const handlePopup = ()=>setPopup(!isPopup);
    // Sidebar
    const [isSidebar, setSidebar] = (0,react_.useState)(false);
    const handleSidebar = ()=>setSidebar(!isSidebar);
    (0,react_.useEffect)(()=>{
        const WOW = __webpack_require__(1216);
        window.wow = new WOW.WOW({
            live: false
        });
        window.wow.init();
        document.addEventListener("scroll", ()=>{
            const scrollCheck = window.scrollY > 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        });
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(DataBg, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `page-wrapper ${wrapperCls ? wrapperCls : ""}`,
                id: "#top",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Header1, {
                        scroll: scroll,
                        isMobileMenu: isMobileMenu,
                        handleMobileMenu: handleMobileMenu,
                        handlePopup: handlePopup,
                        isSidebar: isSidebar,
                        handleSidebar: handleSidebar
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Sidebar, {
                        isSidebar: isSidebar,
                        handleSidebar: handleSidebar
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SearchPopup, {
                        isPopup: isPopup,
                        handlePopup: handlePopup
                    }),
                    breadcrumbTitle && /*#__PURE__*/ jsx_runtime_.jsx(Breadcrumb, {
                        breadcrumbTitle: breadcrumbTitle
                    }),
                    children,
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer1, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(BackToTop, {
                scroll: scroll
            })
        ]
    });
}


/***/ }),

/***/ 553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AwardSlider1)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3404);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4316);
/* __next_internal_client_entry_do_not_use__ default auto */ 


const swiperOptions = {
    modules: [
        swiper_modules__WEBPACK_IMPORTED_MODULE_1__/* .Autoplay */ .pt,
        swiper_modules__WEBPACK_IMPORTED_MODULE_1__/* .Pagination */ .tl,
        swiper_modules__WEBPACK_IMPORTED_MODULE_1__/* .Navigation */ .W_
    ],
    slidesPerView: 5,
    // spaceBetween: 20,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    loop: true,
    // Navigation
    navigation: {
        nextEl: ".h1n",
        prevEl: ".h1p"
    },
    // Pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        575: {
            slidesPerView: 2
        },
        767: {
            slidesPerView: 3
        },
        991: {
            slidesPerView: 3
        },
        1199: {
            slidesPerView: 5
        },
        1350: {
            slidesPerView: 5
        }
    }
};
function AwardSlider1() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_2__/* .Swiper */ .tq, {
                ...swiperOptions,
                className: "theme_carousel owl-theme",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_2__/* .SwiperSlide */ .o5, {
                        className: "award-block-two",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "image",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/assets/assets/images/resource/award-4.png",
                                    alt: ""
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                children: [
                                    "Best consulting ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    " company"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_2__/* .SwiperSlide */ .o5, {
                        className: "award-block-two",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "image",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/assets/assets/images/resource/award-5.png",
                                    alt: ""
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                children: [
                                    "Best outsourcing ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    " advisors"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_2__/* .SwiperSlide */ .o5, {
                        className: "award-block-two",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "image",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/assets/assets/images/resource/award-6.png",
                                    alt: ""
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                children: [
                                    "Customer choice for ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    " support"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_2__/* .SwiperSlide */ .o5, {
                        className: "award-block-two",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "image",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/assets/assets/images/resource/award-7.png",
                                    alt: ""
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                children: [
                                    "Best consulting ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    " company"
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_2__/* .Swiper */ .tq, {
                ...swiperOptions,
                className: "gallery-carousel ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__/* .SwiperSlide */ .o5, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "gallery-block",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "inner-box",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("figure", {
                                    className: "image-box",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "assets/images/gallery/1.jpg",
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "overlay-box",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "overlay-inner",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "content",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "assets/images/gallery/1.jpg",
                                                        "data-fancybox": "gallery",
                                                        "data-caption": "",
                                                        className: "icon flaticon-plus"
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__/* .SwiperSlide */ .o5, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "gallery-block",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "inner-box",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("figure", {
                                    className: "image-box",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "assets/images/gallery/2.jpg",
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "overlay-box",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "overlay-inner",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "content",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "assets/images/gallery/2.jpg",
                                                        "data-fancybox": "gallery",
                                                        "data-caption": "",
                                                        className: "icon flaticon-plus"
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__/* .SwiperSlide */ .o5, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "gallery-block",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "inner-box",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("figure", {
                                    className: "image-box",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "assets/images/gallery/3.jpg",
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "overlay-box",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "overlay-inner",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "content",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "assets/images/gallery/3.jpg",
                                                        "data-fancybox": "gallery",
                                                        "data-caption": "",
                                                        className: "icon flaticon-plus"
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__/* .SwiperSlide */ .o5, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "gallery-block",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "inner-box",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("figure", {
                                    className: "image-box",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "assets/images/gallery/4.jpg",
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "overlay-box",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "overlay-inner",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "content",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "assets/images/gallery/4.jpg",
                                                        "data-fancybox": "gallery",
                                                        "data-caption": "",
                                                        className: "icon flaticon-plus"
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__/* .SwiperSlide */ .o5, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "gallery-block",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "inner-box",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("figure", {
                                    className: "image-box",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "assets/images/gallery/5.jpg",
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "overlay-box",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "overlay-inner",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "content",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "assets/images/gallery/5.jpg",
                                                        "data-fancybox": "gallery",
                                                        "data-caption": "",
                                                        className: "icon flaticon-plus"
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__/* .SwiperSlide */ .o5, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "gallery-block",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "inner-box",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("figure", {
                                    className: "image-box",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "assets/images/gallery/1.jpg",
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "overlay-box",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "overlay-inner",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "content",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "assets/images/gallery/1.jpg",
                                                        "data-fancybox": "gallery",
                                                        "data-caption": "",
                                                        className: "icon flaticon-plus"
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__/* .SwiperSlide */ .o5, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "gallery-block",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "inner-box",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("figure", {
                                    className: "image-box",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "assets/images/gallery/2.jpg",
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "overlay-box",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "overlay-inner",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "content",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "assets/images/gallery/2.jpg",
                                                        "data-fancybox": "gallery",
                                                        "data-caption": "",
                                                        className: "icon flaticon-plus"
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__/* .SwiperSlide */ .o5, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "gallery-block",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "inner-box",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("figure", {
                                    className: "image-box",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "assets/images/gallery/3.jpg",
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "overlay-box",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "overlay-inner",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "content",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "assets/images/gallery/3.jpg",
                                                        "data-fancybox": "gallery",
                                                        "data-caption": "",
                                                        className: "icon flaticon-plus"
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__/* .SwiperSlide */ .o5, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "gallery-block",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "inner-box",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("figure", {
                                    className: "image-box",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "assets/images/gallery/4.jpg",
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "overlay-box",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "overlay-inner",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "content",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "assets/images/gallery/4.jpg",
                                                        "data-fancybox": "gallery",
                                                        "data-caption": "",
                                                        className: "icon flaticon-plus"
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__/* .SwiperSlide */ .o5, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "gallery-block",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "inner-box",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("figure", {
                                    className: "image-box",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "assets/images/gallery/5.jpg",
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "overlay-box",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "overlay-inner",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "content",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "assets/images/gallery/5.jpg",
                                                        "data-fancybox": "gallery",
                                                        "data-caption": "",
                                                        className: "icon flaticon-plus"
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 766:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_font_google_target_css_path_app_layout_js_import_Inter_arguments_subsets_latin_weight_400_500_700_variableName_inter___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2386);
/* harmony import */ var next_font_google_target_css_path_app_layout_js_import_Inter_arguments_subsets_latin_weight_400_500_700_variableName_inter___WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_app_layout_js_import_Inter_arguments_subsets_latin_weight_400_500_700_variableName_inter___WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _node_modules_react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1381);
/* harmony import */ var _node_modules_react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var public_assets_css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8401);
/* harmony import */ var public_assets_css_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(public_assets_css_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var public_assets_css_responsive_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2482);
/* harmony import */ var public_assets_css_responsive_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(public_assets_css_responsive_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4075);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4119);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9266);
/* harmony import */ var swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_font__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6488);
/* harmony import */ var _lib_font__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_lib_font__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_font__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2744);
/* harmony import */ var _lib_font__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_lib_font__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lib_font__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2073);
/* harmony import */ var _lib_font__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_lib_font__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9702);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);






// import "swiper/css/navigation"




const metadata = {
    title: "Алайку",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("html", {
        lang: "en",
        className: `${(_lib_font__WEBPACK_IMPORTED_MODULE_8___default().variable)} ${(next_font_google_target_css_path_app_layout_js_import_Inter_arguments_subsets_latin_weight_400_500_700_variableName_inter___WEBPACK_IMPORTED_MODULE_9___default().className)} ${(_lib_font__WEBPACK_IMPORTED_MODULE_10___default().variable)} ${(_lib_font__WEBPACK_IMPORTED_MODULE_11___default().variable)}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                    href: "https://fonts.googleapis.com/css2?family=LillyBelle&display=swap",
                    rel: "stylesheet"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
                children: children
            })
        ]
    });
}


/***/ }),

/***/ 8040:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ loading)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./components/elements/Preloader.js

function Preloader() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "preloader"
        })
    });
}

;// CONCATENATED MODULE: ./app/loading.js


function loading() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Preloader, {})
    });
}


/***/ }),

/***/ 5168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7327);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\turdu\Downloads\Telegram Desktop\foodily_food_beverage_shop_react_next_js_2024_08_20_04_30_54_utc\foodily pack\foodily\app\not-found.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 651:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6668);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"30x30"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 2482:
/***/ (() => {



/***/ }),

/***/ 8401:
/***/ (() => {



/***/ })

};
;