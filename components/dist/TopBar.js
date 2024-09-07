// src/components/TopBar.tsx
"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var free_brands_svg_icons_1 = require("@fortawesome/free-brands-svg-icons");
var TopBar_module_scss_1 = require("./styles/TopBar.module.scss");
var TopBar = function () {
    var _a = react_1.useState(false), isMenuOpen = _a[0], setIsMenuOpen = _a[1];
    var _b = react_1.useState(false), isSocialMenuOpen = _b[0], setIsSocialMenuOpen = _b[1];
    var toggleMenu = function () { return setIsMenuOpen(!isMenuOpen); };
    var toggleSocialMenu = function () {
        setIsSocialMenuOpen(!isSocialMenuOpen);
    };
    var cancelMenu = function () {
        setIsSocialMenuOpen(!isSocialMenuOpen);
    };
    react_1.useEffect(function () {
        var handleScrollLock = function () {
            if (isMenuOpen || isSocialMenuOpen) {
                document.body.style.overflow = "hidden";
            }
            else {
                document.body.style.overflow = "auto";
            }
        };
        handleScrollLock(); // Run the function initially when the component is mounted
        return function () {
            document.body.style.overflow = "auto"; // Clean up on unmount
        };
    }, [isMenuOpen, isSocialMenuOpen]);
    react_1.useEffect(function () {
        var handleResize = function () {
            if (window.innerWidth >= 769 && isSocialMenuOpen) {
                setIsSocialMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        // Check the width when the component mounts
        handleResize();
        return function () {
            window.removeEventListener('resize', handleResize);
        };
    }, [isSocialMenuOpen]);
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: TopBar_module_scss_1["default"].topBar },
            react_1["default"].createElement("div", { className: TopBar_module_scss_1["default"].hambug },
                react_1["default"].createElement("div", { className: TopBar_module_scss_1["default"].hamburger, onClick: toggleMenu },
                    react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: isMenuOpen ? free_solid_svg_icons_1.faTimes : free_solid_svg_icons_1.faBars })),
                react_1["default"].createElement("div", { className: TopBar_module_scss_1["default"].hamburger, onClick: toggleSocialMenu },
                    react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: isSocialMenuOpen ? free_solid_svg_icons_1.faTimes : free_solid_svg_icons_1.faShareAlt }),
                    " ")),
            react_1["default"].createElement("div", { className: " " + (isSocialMenuOpen ? TopBar_module_scss_1["default"].showSocialMenu : TopBar_module_scss_1["default"].showSocial) },
                react_1["default"].createElement("div", { className: "  " + (isSocialMenuOpen ? TopBar_module_scss_1["default"].showSocialMenu1 : TopBar_module_scss_1["default"].contactInfo) },
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("span", null,
                            react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faClock }),
                            " Mon - Sun 0900 - 2100")),
                    react_1["default"].createElement("span", null,
                        react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faPhone }),
                        " (212) 746-2152"),
                    react_1["default"].createElement("span", null,
                        react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faEnvelope }),
                        " hartlspine@med.cornell.edu")),
                react_1["default"].createElement("div", { className: "  " + (isSocialMenuOpen ? TopBar_module_scss_1["default"].showSocialMenu2 : TopBar_module_scss_1["default"].socialMedia) },
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("a", { href: "#" },
                            react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faFacebookF }))),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("a", { href: "#" },
                            react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faLinkedinIn }))),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("a", { href: "#" },
                            react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faPinterestP }))),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("a", { href: "#" },
                            react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faTwitter }))),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("a", { href: "#" },
                            react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faInstagram }))))))));
};
exports["default"] = TopBar;
