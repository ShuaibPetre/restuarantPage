/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./icon2.jpg */ "./src/icon2.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./icon.jpg */ "./src/icon.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    font-size: 16px;
}

body {
    width: 100vw;
    height: 100vh;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    margin: 0;
    color: white;
    font-size: 16px;
}

#container {
    display: flex;
    flex-direction: column;
    gap: 10vh;
    margin: auto;
    align-items: center;
}
#header {
    text-align: center;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    gap: 5vh;
    width: 100vw;
}
#logo {
    font-size: 3rem;
    color: white;
    padding: 5px;
}
button {
    background: transparent;
    border: none;
    color: white;
    font-size: 4vw;
    padding: 5px;
    margin: 2vh;
}
.active {
    border-bottom: 2px solid;
}
button:hover {
    transform: translateY(-10%);
}
.maincontent {
    width: clamp(50px, 900px, 100%);
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    gap: 3vh;
    align-items: center;
    align-self: center;
}
.hometitle {
    color: white;
    font-size: 24vw;
    text-align: center;
}
.homeh3 {
    color: white;
    font-size: 32px;
    margin-top: -6vh;
    text-align: center;
    padding: 5vw;
}
.image3 {
    max-width: 40%;
    height: auto;
    width: auto\\9; /* ie8 */
    border-radius: 30%;
    position: relative;
    align-self: center;
}
.order {
    position: relative;
    font-size: 28px;
    align-self: center;
    text-align: center;
    background-color: rgba(144, 238, 144, 0.5);
    margin: 4vh;
    border-radius: 25%;
    padding: 20px;
}
.h2title {
    color: white;
    font-size: 6vw;
    text-align: center;
}
.banner {
    width: 40vw;
    position: relative;
    bottom: 60px;
}
.bannerP {
    width: 30vw;
    position: relative;
    bottom: 20px;
}
.subdiv {
    display: flex;
    flex-wrap: wrap;
    gap: 3vw;
    justify-content: center;
}
.subdiv1, .subdiv2, .subdiv3, .subdiv4 {
    display: flex;
}
.productimg {
    width: 40vw;
    height: auto;
    border-radius: 30%;
}
.subinfo {
    font-size: 24px;
    padding-right: 5vw;
    flex-basis: 40%;
    min-width: 40%;
}
.productimgsmall {
    padding-left: 6vw;
    flex-basis: 40%;
    min-width: 40%;
    max-height: 160px;
    size: 80%;
}

h3 {
    font-size: 6vw;
}
.price {
    position: relative;
    color: white;
    margin: 0;
    margin-top: -2vh;
    padding: 2vw;
    font-size: 22px;
}
.pricedel {
    font-size: 22px;
    margin: 0;
}
.info {
    width: 80%;
    font-size: 28px;
    text-align: left;
}
.griddiv {
    display: flex;
    flex-direction: column;
    gap: 2vh;
}
.phoneimg, .emailimg {
    width: 15vw;
}
.contactinfo {
    font-size: 24px;
    align-self: center;
}
@media (min-width: 800px) {
    body {
        background: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
        background-size: fill;
        background-position: center;
        background-attachment: fixed;
    }
    button {
        font-size: 20px;
    }
    .hometitle {
        font-size: 80px;
    }
    .homeh3 {
        font-size: 24px;
    }
    .banner, .bannerP {
        width: 10vw;
        position: relative;
        bottom: 30px;
    }
    .h2title {
        color: white;
        font-size: 3vw;
        text-align: center;
    }
    h3 {
        font-size: 3vw;
    }
    .subdiv {
        gap: 1vw;
    }
    .productimg {
        width: 12vw;
        height: auto;
        border-radius: 30%;
    }
    .pricedel {
        font-size: 16px;
    }
    .info {
        font-size: 20px;
    }
    .griddiv {
        flex-direction: row;
        justify-content: center;
    }
    .subdiv1, .subdiv2, .subdiv3, .subdiv4 {
        display: flex;
        flex-direction: column;
        flex-basis: 20%;
        min-width: 20%;
        align-items: center;
    }
    .subinfo {
        font-size: 14px;
        padding-right: 0;

    }
    .productimgsmall {
        padding-left: 0;
        max-height: 76px;
        width: 70%;
    }
    .order {
        position: relative;
        font-size: 20px;
        align-self: center;
        text-align: center;
        background-color: rgba(144, 238, 144, 0.5);
        margin: 4vh;
        border-radius: 25%;
        padding: 20px;
    }
    .phoneimg, .emailimg {
        width: 4vw;
    }
    .contactinfo {
        font-size: 24px;
        align-self: center;
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,mDAA4B;IAC5B,sBAAsB;IACtB,2BAA2B;IAC3B,4BAA4B;IAC5B,SAAS;IACT,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,YAAY;IACZ,mBAAmB;AACvB;AACA;IACI,kBAAkB;IAClB,8BAA8B;IAC9B,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,YAAY;AAChB;AACA;IACI,eAAe;IACf,YAAY;IACZ,YAAY;AAChB;AACA;IACI,uBAAuB;IACvB,YAAY;IACZ,YAAY;IACZ,cAAc;IACd,YAAY;IACZ,WAAW;AACf;AACA;IACI,wBAAwB;AAC5B;AACA;IACI,2BAA2B;AAC/B;AACA;IACI,+BAA+B;IAC/B,8BAA8B;IAC9B,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,mBAAmB;IACnB,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,eAAe;IACf,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,YAAY;AAChB;AACA;IACI,cAAc;IACd,YAAY;IACZ,aAAa,EAAE,QAAQ;IACvB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,kBAAkB;IAClB,0CAA0C;IAC1C,WAAW;IACX,kBAAkB;IAClB,aAAa;AACjB;AACA;IACI,YAAY;IACZ,cAAc;IACd,kBAAkB;AACtB;AACA;IACI,WAAW;IACX,kBAAkB;IAClB,YAAY;AAChB;AACA;IACI,WAAW;IACX,kBAAkB;IAClB,YAAY;AAChB;AACA;IACI,aAAa;IACb,eAAe;IACf,QAAQ;IACR,uBAAuB;AAC3B;AACA;IACI,aAAa;AACjB;AACA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;AACtB;AACA;IACI,eAAe;IACf,kBAAkB;IAClB,eAAe;IACf,cAAc;AAClB;AACA;IACI,iBAAiB;IACjB,eAAe;IACf,cAAc;IACd,iBAAiB;IACjB,SAAS;AACb;;AAEA;IACI,cAAc;AAClB;AACA;IACI,kBAAkB;IAClB,YAAY;IACZ,SAAS;IACT,gBAAgB;IAChB,YAAY;IACZ,eAAe;AACnB;AACA;IACI,eAAe;IACf,SAAS;AACb;AACA;IACI,UAAU;IACV,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;AACA;IACI,WAAW;AACf;AACA;IACI,eAAe;IACf,kBAAkB;AACtB;AACA;IACI;QACI,mDAA2B;QAC3B,qBAAqB;QACrB,2BAA2B;QAC3B,4BAA4B;IAChC;IACA;QACI,eAAe;IACnB;IACA;QACI,eAAe;IACnB;IACA;QACI,eAAe;IACnB;IACA;QACI,WAAW;QACX,kBAAkB;QAClB,YAAY;IAChB;IACA;QACI,YAAY;QACZ,cAAc;QACd,kBAAkB;IACtB;IACA;QACI,cAAc;IAClB;IACA;QACI,QAAQ;IACZ;IACA;QACI,WAAW;QACX,YAAY;QACZ,kBAAkB;IACtB;IACA;QACI,eAAe;IACnB;IACA;QACI,eAAe;IACnB;IACA;QACI,mBAAmB;QACnB,uBAAuB;IAC3B;IACA;QACI,aAAa;QACb,sBAAsB;QACtB,eAAe;QACf,cAAc;QACd,mBAAmB;IACvB;IACA;QACI,eAAe;QACf,gBAAgB;;IAEpB;IACA;QACI,eAAe;QACf,gBAAgB;QAChB,UAAU;IACd;IACA;QACI,kBAAkB;QAClB,eAAe;QACf,kBAAkB;QAClB,kBAAkB;QAClB,0CAA0C;QAC1C,WAAW;QACX,kBAAkB;QAClB,aAAa;IACjB;IACA;QACI,UAAU;IACd;IACA;QACI,eAAe;QACf,kBAAkB;IACtB;AACJ","sourcesContent":[":root {\n    font-size: 16px;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    background: url(./icon2.jpg);\n    background-size: cover;\n    background-position: center;\n    background-attachment: fixed;\n    margin: 0;\n    color: white;\n    font-size: 16px;\n}\n\n#container {\n    display: flex;\n    flex-direction: column;\n    gap: 10vh;\n    margin: auto;\n    align-items: center;\n}\n#header {\n    text-align: center;\n    background: rgba(0, 0, 0, 0.7);\n    display: flex;\n    flex-direction: column;\n    gap: 5vh;\n    width: 100vw;\n}\n#logo {\n    font-size: 3rem;\n    color: white;\n    padding: 5px;\n}\nbutton {\n    background: transparent;\n    border: none;\n    color: white;\n    font-size: 4vw;\n    padding: 5px;\n    margin: 2vh;\n}\n.active {\n    border-bottom: 2px solid;\n}\nbutton:hover {\n    transform: translateY(-10%);\n}\n.maincontent {\n    width: clamp(50px, 900px, 100%);\n    background: rgba(0, 0, 0, 0.7);\n    display: flex;\n    flex-direction: column;\n    gap: 3vh;\n    align-items: center;\n    align-self: center;\n}\n.hometitle {\n    color: white;\n    font-size: 24vw;\n    text-align: center;\n}\n.homeh3 {\n    color: white;\n    font-size: 32px;\n    margin-top: -6vh;\n    text-align: center;\n    padding: 5vw;\n}\n.image3 {\n    max-width: 40%;\n    height: auto;\n    width: auto\\9; /* ie8 */\n    border-radius: 30%;\n    position: relative;\n    align-self: center;\n}\n.order {\n    position: relative;\n    font-size: 28px;\n    align-self: center;\n    text-align: center;\n    background-color: rgba(144, 238, 144, 0.5);\n    margin: 4vh;\n    border-radius: 25%;\n    padding: 20px;\n}\n.h2title {\n    color: white;\n    font-size: 6vw;\n    text-align: center;\n}\n.banner {\n    width: 40vw;\n    position: relative;\n    bottom: 60px;\n}\n.bannerP {\n    width: 30vw;\n    position: relative;\n    bottom: 20px;\n}\n.subdiv {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 3vw;\n    justify-content: center;\n}\n.subdiv1, .subdiv2, .subdiv3, .subdiv4 {\n    display: flex;\n}\n.productimg {\n    width: 40vw;\n    height: auto;\n    border-radius: 30%;\n}\n.subinfo {\n    font-size: 24px;\n    padding-right: 5vw;\n    flex-basis: 40%;\n    min-width: 40%;\n}\n.productimgsmall {\n    padding-left: 6vw;\n    flex-basis: 40%;\n    min-width: 40%;\n    max-height: 160px;\n    size: 80%;\n}\n\nh3 {\n    font-size: 6vw;\n}\n.price {\n    position: relative;\n    color: white;\n    margin: 0;\n    margin-top: -2vh;\n    padding: 2vw;\n    font-size: 22px;\n}\n.pricedel {\n    font-size: 22px;\n    margin: 0;\n}\n.info {\n    width: 80%;\n    font-size: 28px;\n    text-align: left;\n}\n.griddiv {\n    display: flex;\n    flex-direction: column;\n    gap: 2vh;\n}\n.phoneimg, .emailimg {\n    width: 15vw;\n}\n.contactinfo {\n    font-size: 24px;\n    align-self: center;\n}\n@media (min-width: 800px) {\n    body {\n        background: url(./icon.jpg);\n        background-size: fill;\n        background-position: center;\n        background-attachment: fixed;\n    }\n    button {\n        font-size: 20px;\n    }\n    .hometitle {\n        font-size: 80px;\n    }\n    .homeh3 {\n        font-size: 24px;\n    }\n    .banner, .bannerP {\n        width: 10vw;\n        position: relative;\n        bottom: 30px;\n    }\n    .h2title {\n        color: white;\n        font-size: 3vw;\n        text-align: center;\n    }\n    h3 {\n        font-size: 3vw;\n    }\n    .subdiv {\n        gap: 1vw;\n    }\n    .productimg {\n        width: 12vw;\n        height: auto;\n        border-radius: 30%;\n    }\n    .pricedel {\n        font-size: 16px;\n    }\n    .info {\n        font-size: 20px;\n    }\n    .griddiv {\n        flex-direction: row;\n        justify-content: center;\n    }\n    .subdiv1, .subdiv2, .subdiv3, .subdiv4 {\n        display: flex;\n        flex-direction: column;\n        flex-basis: 20%;\n        min-width: 20%;\n        align-items: center;\n    }\n    .subinfo {\n        font-size: 14px;\n        padding-right: 0;\n\n    }\n    .productimgsmall {\n        padding-left: 0;\n        max-height: 76px;\n        width: 70%;\n    }\n    .order {\n        position: relative;\n        font-size: 20px;\n        align-self: center;\n        text-align: center;\n        background-color: rgba(144, 238, 144, 0.5);\n        margin: 4vh;\n        border-radius: 25%;\n        padding: 20px;\n    }\n    .phoneimg, .emailimg {\n        width: 4vw;\n    }\n    .contactinfo {\n        font-size: 24px;\n        align-self: center;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contactDOM: () => (/* binding */ contactDOM)
/* harmony export */ });
/* harmony import */ var _banner_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./banner.png */ "./src/banner.png");
/* harmony import */ var _phone_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./phone.png */ "./src/phone.png");
/* harmony import */ var _email_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email.png */ "./src/email.png");




function contactDOM() {
    const maindiv = document.querySelector('.maincontent');

    const title = document.createElement('h2');
    title.textContent = 'Contact Us';
    title.classList.add('h2title');
    maindiv.replaceChildren(title);

    const mybanner = new Image;
    mybanner.src = _banner_png__WEBPACK_IMPORTED_MODULE_0__;
    mybanner.classList.add('bannerP');
    maindiv.appendChild(mybanner);

    const subdiv = document.createElement('div');
    subdiv.classList.add('subdiv');
    maindiv.appendChild(subdiv)

    const img1 = new Image;
    img1.src = _phone_png__WEBPACK_IMPORTED_MODULE_1__;
    img1.classList.add('phoneimg')
    subdiv.appendChild(img1);

    const phone = document.createElement('div');
    phone.textContent = '083 641 1990';
    phone.classList.add('contactinfo');
    subdiv.appendChild(phone);

    const subdiv1 = document.createElement('div');
    subdiv1.classList.add('subdiv');
    maindiv.appendChild(subdiv1)

    const img2 = new Image;
    img2.src = _email_png__WEBPACK_IMPORTED_MODULE_2__;
    img2.classList.add('emailimg')
    subdiv1.appendChild(img2);

    const emailinfo = document.createElement('div');
    emailinfo.textContent = '083 641 1990';
    emailinfo.classList.add('contactinfo');
    subdiv1.appendChild(emailinfo);
}


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   homeDOM: () => (/* binding */ homeDOM)
/* harmony export */ });
/* harmony import */ var _image3_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image3.png */ "./src/image3.png");
/* harmony import */ var _banner_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./banner.png */ "./src/banner.png");


function homeDOM() {
    const maindiv = document.querySelector('.maincontent');
    
    // use your function!
    const title = document.createElement('h1');
    title.textContent = 'The Petre Dish';
    title.classList.add('hometitle');
    maindiv.replaceChildren(title);

    const mybanner = new Image;
    mybanner.src = _banner_png__WEBPACK_IMPORTED_MODULE_1__;
    mybanner.classList.add('banner');
    maindiv.appendChild(mybanner);

    const info = document.createElement('h3');
    info.textContent = 'Weekly seasonal fruit and veg healthboxes delivered every Tuesday!';
    info.classList.add('homeh3');
    maindiv.appendChild(info);

    const myImage = new Image;
    myImage.src = _image3_png__WEBPACK_IMPORTED_MODULE_0__;
    myImage.classList.add('image3')
    maindiv.appendChild(myImage);

    const order = document.createElement("BUTTON");
    //order.setAttribute('id', 'order');
    order.classList.add('order');
    order.textContent = 'ORDER NOW';
    maindiv.appendChild(order);

  }
  


/***/ }),

/***/ "./src/initialLoad.js":
/*!****************************!*\
  !*** ./src/initialLoad.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialLoad: () => (/* binding */ initialLoad)
/* harmony export */ });
const initialLoad = () => {
    const container = document.querySelector('#container');
    
    const header = document.createElement('div');
    header.setAttribute('id','header');
    container.appendChild(header);

    const legend = document.createElement('div');
    legend.setAttribute('id', 'legend');
    header.appendChild(legend);

    const homebtn = document.createElement("BUTTON");
    homebtn.setAttribute('id', 'home');
    homebtn.classList.add('headerbtns');
    homebtn.textContent = 'HOME';
    legend.appendChild(homebtn);

    const product = document.createElement("BUTTON");
    product.setAttribute('id', 'product');
    product.classList.add('headerbtns');
    product.textContent = 'PRODUCT';
    legend.appendChild(product);
    
    
    const contact = document.createElement("BUTTON");
    contact.setAttribute('id', 'contact');
    contact.classList.add('headerbtns');
    contact.textContent = 'CONTACT';
    legend.appendChild(contact);

    const maincontent = document.createElement('div')
    maincontent.classList.add('maincontent');
    maincontent.textContent = 'test'
    container.appendChild(maincontent)
}



/***/ }),

/***/ "./src/product.js":
/*!************************!*\
  !*** ./src/product.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   productDOM: () => (/* binding */ productDOM)
/* harmony export */ });
/* harmony import */ var _banner_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./banner.png */ "./src/banner.png");
/* harmony import */ var _image1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image1.png */ "./src/image1.png");
/* harmony import */ var _image2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image2.png */ "./src/image2.png");
/* harmony import */ var _image3_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image3.png */ "./src/image3.png");
/* harmony import */ var _image4_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./image4.png */ "./src/image4.png");
/* harmony import */ var _time1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./time1.png */ "./src/time1.png");
/* harmony import */ var _packing_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./packing.png */ "./src/packing.png");
/* harmony import */ var _delivery_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./delivery.png */ "./src/delivery.png");
/* harmony import */ var _repeat_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./repeat.png */ "./src/repeat.png");











function productDOM() 
{
    const maindiv = document.querySelector('.maincontent');
    
    const title = document.createElement('h2');
    title.textContent = 'OUR HEALTHBOX';
    title.classList.add('h2title');
    maindiv.replaceChildren(title);

    const mybanner = new Image;
    mybanner.src = _banner_png__WEBPACK_IMPORTED_MODULE_0__;
    mybanner.classList.add('bannerP');
    maindiv.appendChild(mybanner);

    const subdiv = document.createElement('div');
    subdiv.classList.add('subdiv');
    maindiv.appendChild(subdiv)

    const img1 = new Image;
    img1.src = _image1_png__WEBPACK_IMPORTED_MODULE_1__;
    img1.classList.add('productimg')
    subdiv.appendChild(img1);

    const img2 = new Image;
    img2.src = _image2_png__WEBPACK_IMPORTED_MODULE_2__;
    img2.classList.add('productimg')
    subdiv.appendChild(img2);

    const img3 = new Image;
    img3.src = _image3_png__WEBPACK_IMPORTED_MODULE_3__;
    img3.classList.add('productimg')
    subdiv.appendChild(img3);

    const img4 = new Image;
    img4.src = _image4_png__WEBPACK_IMPORTED_MODULE_4__;
    img4.classList.add('productimg')
    subdiv.appendChild(img4);
    
    const subscription = document.createElement('h3');
    subscription.textContent = 'Weekly Fruit and Veg Healthbox';
    subscription.classList.add('subscription');
    maindiv.appendChild(subscription);

    const order = document.createElement("BUTTON");
    //order.setAttribute('id', 'order');
    order.classList.add('order');
    order.classList.add('price');
    order.textContent = 'R160';
    maindiv.appendChild(order);

    const pricedel = document.createElement('h5');
    pricedel.textContent = 'FREE DELIVERY!';
    pricedel.classList.add('pricedel');
    maindiv.appendChild(pricedel);

    const info = document.createElement('div');
    info.textContent = 'Every Tuesday we offer a different variety of fruit and veg. We take orders and do confirmations every Monday. Each week our healthbox is based on season, variety and nutrition. We aim to help you budget your groceries as well as keep you healthy through a wide range of nutrients.';
    info.classList.add('info');
    maindiv.appendChild(info);

    const griddiv = document.createElement('div');
    griddiv.classList.add('griddiv');
    maindiv.appendChild(griddiv);

    const subdiv1 = document.createElement('div');
    subdiv1.classList.add('subdiv1');
    griddiv.appendChild(subdiv1);

    const subimg1 = new Image;
    subimg1.src = _time1_png__WEBPACK_IMPORTED_MODULE_5__;
    subimg1.classList.add('productimgsmall')
    subdiv1.appendChild(subimg1);

    const subinfo = document.createElement('div');
    subinfo.textContent = 'Every MONDAY we take orders. POP sent to whatsapp(or email) confirms order.';
    subinfo.classList.add('subinfo');
    subdiv1.appendChild(subinfo);

    const subdiv2 = document.createElement('div');
    subdiv2.classList.add('subdiv2');
    griddiv.appendChild(subdiv2);

    const subimg2 = new Image;
    subimg2.src = _packing_png__WEBPACK_IMPORTED_MODULE_6__;
    subimg2.classList.add('productimgsmall')
    subdiv2.appendChild(subimg2);

    const subinfo2 = document.createElement('div');
    subinfo2.textContent = 'Tuesday eeeeearly morning we source our produce. Then we do quality control and pack the healthboxes.';
    subinfo2.classList.add('subinfo');
    subdiv2.appendChild(subinfo2);

    const subdiv3 = document.createElement('div');
    subdiv3.classList.add('subdiv3');
    griddiv.appendChild(subdiv3);

    const subimg3 = new Image;
    subimg3.src = _delivery_png__WEBPACK_IMPORTED_MODULE_7__;
    subimg3.classList.add('productimgsmall')
    subdiv3.appendChild(subimg3);

    const subinfo3 = document.createElement('div');
    subinfo3.textContent = '9am we begin deliveries. This gets your fruit and veg to you as fresh as possible, while skipping a cold storage step.';
    subinfo3.classList.add('subinfo');
    subdiv3.appendChild(subinfo3);

    const subdiv4 = document.createElement('div');
    subdiv4.classList.add('subdiv4');
    griddiv.appendChild(subdiv4);

    const subimg4 = new Image;
    subimg4.src = _repeat_png__WEBPACK_IMPORTED_MODULE_8__;
    subimg4.classList.add('productimgsmall')
    subdiv4.appendChild(subimg4);

    const subinfo4 = document.createElement('div');
    subinfo4.textContent = 'Every week is a new box. With a new variety of fruit and veg. This helps with meal creativity.';
    subinfo4.classList.add('subinfo');
    subdiv4.appendChild(subinfo4);

    const order1 = document.createElement("BUTTON");
    order1.classList.add('order');
    order1.textContent = 'ORDER NOW';
    maindiv.appendChild(order1);
}


/***/ }),

/***/ "./src/banner.png":
/*!************************!*\
  !*** ./src/banner.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6e441c28bacd5df8d667.png";

/***/ }),

/***/ "./src/delivery.png":
/*!**************************!*\
  !*** ./src/delivery.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "971c259943789d174f35.png";

/***/ }),

/***/ "./src/email.png":
/*!***********************!*\
  !*** ./src/email.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d88be8abb4d8e8b443eb.png";

/***/ }),

/***/ "./src/icon.jpg":
/*!**********************!*\
  !*** ./src/icon.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e3c93256f63acdf82f63.jpg";

/***/ }),

/***/ "./src/icon2.jpg":
/*!***********************!*\
  !*** ./src/icon2.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "850fe5948fcc96c7f7de.jpg";

/***/ }),

/***/ "./src/image1.png":
/*!************************!*\
  !*** ./src/image1.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "351f89657b78b6e171bb.png";

/***/ }),

/***/ "./src/image2.png":
/*!************************!*\
  !*** ./src/image2.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1d8938c033283a208dbf.png";

/***/ }),

/***/ "./src/image3.png":
/*!************************!*\
  !*** ./src/image3.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9af0cfa97a56841dbb58.png";

/***/ }),

/***/ "./src/image4.png":
/*!************************!*\
  !*** ./src/image4.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2ddf580f352b05ad9757.png";

/***/ }),

/***/ "./src/packing.png":
/*!*************************!*\
  !*** ./src/packing.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c248f4e2143249328c2e.png";

/***/ }),

/***/ "./src/phone.png":
/*!***********************!*\
  !*** ./src/phone.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b7b348195031fd1b0c52.png";

/***/ }),

/***/ "./src/repeat.png":
/*!************************!*\
  !*** ./src/repeat.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "77e9df606dffff25f569.png";

/***/ }),

/***/ "./src/time1.png":
/*!***********************!*\
  !*** ./src/time1.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dab1c54dbbd1dfb3f82c.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _initialLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initialLoad */ "./src/initialLoad.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product */ "./src/product.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ "./src/contact.js");





(0,_initialLoad__WEBPACK_IMPORTED_MODULE_1__.initialLoad)();
(0,_home__WEBPACK_IMPORTED_MODULE_2__.homeDOM)();

const home = document.getElementById('home');
const product = document.getElementById('product');
const contact = document.getElementById('contact');

home.addEventListener("click", homefunc);
product.addEventListener("click", productfunc);
contact.addEventListener("click", contactfunc);

function homefunc() {
    clear()
    home.classList.add('active');
    (0,_home__WEBPACK_IMPORTED_MODULE_2__.homeDOM)()
}
function productfunc() {
    clear()
    product.classList.add('active');
    (0,_product__WEBPACK_IMPORTED_MODULE_3__.productDOM)()
}
function contactfunc() {
    clear()
    contact.classList.add('active');
    (0,_contact__WEBPACK_IMPORTED_MODULE_4__.contactDOM)()
}
function clear() {
    product.classList.remove('active');
    home.classList.remove('active');
    contact.classList.remove('active');
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLG1HQUE4QjtBQUMxRSw0Q0FBNEMsaUdBQTZCO0FBQ3pFLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixtQ0FBbUM7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxvQkFBb0IsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sZ0NBQWdDLHNCQUFzQixHQUFHLFVBQVUsbUJBQW1CLG9CQUFvQixtQ0FBbUMsNkJBQTZCLGtDQUFrQyxtQ0FBbUMsZ0JBQWdCLG1CQUFtQixzQkFBc0IsR0FBRyxnQkFBZ0Isb0JBQW9CLDZCQUE2QixnQkFBZ0IsbUJBQW1CLDBCQUEwQixHQUFHLFdBQVcseUJBQXlCLHFDQUFxQyxvQkFBb0IsNkJBQTZCLGVBQWUsbUJBQW1CLEdBQUcsU0FBUyxzQkFBc0IsbUJBQW1CLG1CQUFtQixHQUFHLFVBQVUsOEJBQThCLG1CQUFtQixtQkFBbUIscUJBQXFCLG1CQUFtQixrQkFBa0IsR0FBRyxXQUFXLCtCQUErQixHQUFHLGdCQUFnQixrQ0FBa0MsR0FBRyxnQkFBZ0Isc0NBQXNDLHFDQUFxQyxvQkFBb0IsNkJBQTZCLGVBQWUsMEJBQTBCLHlCQUF5QixHQUFHLGNBQWMsbUJBQW1CLHNCQUFzQix5QkFBeUIsR0FBRyxXQUFXLG1CQUFtQixzQkFBc0IsdUJBQXVCLHlCQUF5QixtQkFBbUIsR0FBRyxXQUFXLHFCQUFxQixtQkFBbUIsc0JBQXNCLGtDQUFrQyx5QkFBeUIseUJBQXlCLEdBQUcsVUFBVSx5QkFBeUIsc0JBQXNCLHlCQUF5Qix5QkFBeUIsaURBQWlELGtCQUFrQix5QkFBeUIsb0JBQW9CLEdBQUcsWUFBWSxtQkFBbUIscUJBQXFCLHlCQUF5QixHQUFHLFdBQVcsa0JBQWtCLHlCQUF5QixtQkFBbUIsR0FBRyxZQUFZLGtCQUFrQix5QkFBeUIsbUJBQW1CLEdBQUcsV0FBVyxvQkFBb0Isc0JBQXNCLGVBQWUsOEJBQThCLEdBQUcsMENBQTBDLG9CQUFvQixHQUFHLGVBQWUsa0JBQWtCLG1CQUFtQix5QkFBeUIsR0FBRyxZQUFZLHNCQUFzQix5QkFBeUIsc0JBQXNCLHFCQUFxQixHQUFHLG9CQUFvQix3QkFBd0Isc0JBQXNCLHFCQUFxQix3QkFBd0IsZ0JBQWdCLEdBQUcsUUFBUSxxQkFBcUIsR0FBRyxVQUFVLHlCQUF5QixtQkFBbUIsZ0JBQWdCLHVCQUF1QixtQkFBbUIsc0JBQXNCLEdBQUcsYUFBYSxzQkFBc0IsZ0JBQWdCLEdBQUcsU0FBUyxpQkFBaUIsc0JBQXNCLHVCQUF1QixHQUFHLFlBQVksb0JBQW9CLDZCQUE2QixlQUFlLEdBQUcsd0JBQXdCLGtCQUFrQixHQUFHLGdCQUFnQixzQkFBc0IseUJBQXlCLEdBQUcsNkJBQTZCLFlBQVksc0NBQXNDLGdDQUFnQyxzQ0FBc0MsdUNBQXVDLE9BQU8sY0FBYywwQkFBMEIsT0FBTyxrQkFBa0IsMEJBQTBCLE9BQU8sZUFBZSwwQkFBMEIsT0FBTyx5QkFBeUIsc0JBQXNCLDZCQUE2Qix1QkFBdUIsT0FBTyxnQkFBZ0IsdUJBQXVCLHlCQUF5Qiw2QkFBNkIsT0FBTyxVQUFVLHlCQUF5QixPQUFPLGVBQWUsbUJBQW1CLE9BQU8sbUJBQW1CLHNCQUFzQix1QkFBdUIsNkJBQTZCLE9BQU8saUJBQWlCLDBCQUEwQixPQUFPLGFBQWEsMEJBQTBCLE9BQU8sZ0JBQWdCLDhCQUE4QixrQ0FBa0MsT0FBTyw4Q0FBOEMsd0JBQXdCLGlDQUFpQywwQkFBMEIseUJBQXlCLDhCQUE4QixPQUFPLGdCQUFnQiwwQkFBMEIsMkJBQTJCLFNBQVMsd0JBQXdCLDBCQUEwQiwyQkFBMkIscUJBQXFCLE9BQU8sY0FBYyw2QkFBNkIsMEJBQTBCLDZCQUE2Qiw2QkFBNkIscURBQXFELHNCQUFzQiw2QkFBNkIsd0JBQXdCLE9BQU8sNEJBQTRCLHFCQUFxQixPQUFPLG9CQUFvQiwwQkFBMEIsNkJBQTZCLE9BQU8sR0FBRyxtQkFBbUI7QUFDN3JOO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDalExQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2JvQztBQUNKO0FBQ0E7O0FBRWhDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsd0NBQVM7QUFDNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHVDQUFNO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSx1Q0FBTTtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNpQztBQUNHO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsd0NBQVM7QUFDNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQix3Q0FBTTtBQUN4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFxQjs7Ozs7Ozs7Ozs7Ozs7O0FDakNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DYTtBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0U7QUFDRTtBQUNDO0FBQ0Y7OztBQUdwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLHdDQUFTO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSx3Q0FBTTtBQUNyQjtBQUNBOztBQUVBO0FBQ0EsZUFBZSx3Q0FBTTtBQUNyQjtBQUNBOztBQUVBO0FBQ0EsZUFBZSx3Q0FBTTtBQUNyQjtBQUNBOztBQUVBO0FBQ0EsZUFBZSx3Q0FBTTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQix1Q0FBUztBQUMzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQix5Q0FBUztBQUMzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQiwwQ0FBUztBQUMzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQix3Q0FBUztBQUMzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdklBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDdUI7QUFDWDtBQUNNO0FBQ0E7QUFDdkMseURBQVc7QUFDWCw4Q0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksOENBQU87QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksb0RBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksb0RBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0dWFyYW50Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0dWFyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0dWFyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0dWFyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0dWFyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3R1YXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3R1YXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0dWFyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3R1YXJhbnQvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0dWFyYW50Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC8uL3NyYy9pbml0aWFsTG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0dWFyYW50Ly4vc3JjL3Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0dWFyYW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3R1YXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3R1YXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0dWFyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3R1YXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0dWFyYW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0dWFyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ljb24yLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaWNvbi5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5ib2R5IHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBtYXJnaW46IDA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuI2NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTB2aDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiNoZWFkZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNXZoO1xuICAgIHdpZHRoOiAxMDB2dztcbn1cbiNsb2dvIHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDVweDtcbn1cbmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDR2dztcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luOiAydmg7XG59XG4uYWN0aXZlIHtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XG59XG5idXR0b246aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAlKTtcbn1cbi5tYWluY29udGVudCB7XG4gICAgd2lkdGg6IGNsYW1wKDUwcHgsIDkwMHB4LCAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogM3ZoO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuLmhvbWV0aXRsZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMjR2dztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaG9tZWgzIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIG1hcmdpbi10b3A6IC02dmg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDV2dztcbn1cbi5pbWFnZTMge1xuICAgIG1heC13aWR0aDogNDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogYXV0b1xcXFw5OyAvKiBpZTggKi9cbiAgICBib3JkZXItcmFkaXVzOiAzMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5vcmRlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQ0LCAyMzgsIDE0NCwgMC41KTtcbiAgICBtYXJnaW46IDR2aDtcbiAgICBib3JkZXItcmFkaXVzOiAyNSU7XG4gICAgcGFkZGluZzogMjBweDtcbn1cbi5oMnRpdGxlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiA2dnc7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJhbm5lciB7XG4gICAgd2lkdGg6IDQwdnc7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvdHRvbTogNjBweDtcbn1cbi5iYW5uZXJQIHtcbiAgICB3aWR0aDogMzB2dztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm90dG9tOiAyMHB4O1xufVxuLnN1YmRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZ2FwOiAzdnc7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uc3ViZGl2MSwgLnN1YmRpdjIsIC5zdWJkaXYzLCAuc3ViZGl2NCB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5wcm9kdWN0aW1nIHtcbiAgICB3aWR0aDogNDB2dztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogMzAlO1xufVxuLnN1YmluZm8ge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1dnc7XG4gICAgZmxleC1iYXNpczogNDAlO1xuICAgIG1pbi13aWR0aDogNDAlO1xufVxuLnByb2R1Y3RpbWdzbWFsbCB7XG4gICAgcGFkZGluZy1sZWZ0OiA2dnc7XG4gICAgZmxleC1iYXNpczogNDAlO1xuICAgIG1pbi13aWR0aDogNDAlO1xuICAgIG1heC1oZWlnaHQ6IDE2MHB4O1xuICAgIHNpemU6IDgwJTtcbn1cblxuaDMge1xuICAgIGZvbnQtc2l6ZTogNnZ3O1xufVxuLnByaWNlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tdG9wOiAtMnZoO1xuICAgIHBhZGRpbmc6IDJ2dztcbiAgICBmb250LXNpemU6IDIycHg7XG59XG4ucHJpY2VkZWwge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBtYXJnaW46IDA7XG59XG4uaW5mbyB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5ncmlkZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAydmg7XG59XG4ucGhvbmVpbWcsIC5lbWFpbGltZyB7XG4gICAgd2lkdGg6IDE1dnc7XG59XG4uY29udGFjdGluZm8ge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgICBib2R5IHtcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGZpbGw7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICB9XG4gICAgYnV0dG9uIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgICAuaG9tZXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiA4MHB4O1xuICAgIH1cbiAgICAuaG9tZWgzIHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgIH1cbiAgICAuYmFubmVyLCAuYmFubmVyUCB7XG4gICAgICAgIHdpZHRoOiAxMHZ3O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJvdHRvbTogMzBweDtcbiAgICB9XG4gICAgLmgydGl0bGUge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogM3Z3O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIGgzIHtcbiAgICAgICAgZm9udC1zaXplOiAzdnc7XG4gICAgfVxuICAgIC5zdWJkaXYge1xuICAgICAgICBnYXA6IDF2dztcbiAgICB9XG4gICAgLnByb2R1Y3RpbWcge1xuICAgICAgICB3aWR0aDogMTJ2dztcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzMCU7XG4gICAgfVxuICAgIC5wcmljZWRlbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gICAgLmluZm8ge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICAgIC5ncmlkZGl2IHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICAgIC5zdWJkaXYxLCAuc3ViZGl2MiwgLnN1YmRpdjMsIC5zdWJkaXY0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZmxleC1iYXNpczogMjAlO1xuICAgICAgICBtaW4td2lkdGg6IDIwJTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgLnN1YmluZm8ge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG5cbiAgICB9XG4gICAgLnByb2R1Y3RpbWdzbWFsbCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgbWF4LWhlaWdodDogNzZweDtcbiAgICAgICAgd2lkdGg6IDcwJTtcbiAgICB9XG4gICAgLm9yZGVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0NCwgMjM4LCAxNDQsIDAuNSk7XG4gICAgICAgIG1hcmdpbjogNHZoO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyNSU7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgfVxuICAgIC5waG9uZWltZywgLmVtYWlsaW1nIHtcbiAgICAgICAgd2lkdGg6IDR2dztcbiAgICB9XG4gICAgLmNvbnRhY3RpbmZvIHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1EQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixTQUFTO0lBQ1QsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCO0FB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QTtRQUNJLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQiwwQ0FBMEM7UUFDMUMsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLGVBQWU7UUFDZixrQkFBa0I7SUFDdEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuYm9keSB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZDogdXJsKC4vaWNvbjIuanBnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHZoO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNoZWFkZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1dmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuI2xvZ28ge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogNHZ3O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIG1hcmdpbjogMnZoO1xcbn1cXG4uYWN0aXZlIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkO1xcbn1cXG5idXR0b246aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwJSk7XFxufVxcbi5tYWluY29udGVudCB7XFxuICAgIHdpZHRoOiBjbGFtcCg1MHB4LCA5MDBweCwgMTAwJSk7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAzdmg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuLmhvbWV0aXRsZSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAyNHZ3O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5ob21laDMge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgbWFyZ2luLXRvcDogLTZ2aDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1dnc7XFxufVxcbi5pbWFnZTMge1xcbiAgICBtYXgtd2lkdGg6IDQwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogYXV0b1xcXFw5OyAvKiBpZTggKi9cXG4gICAgYm9yZGVyLXJhZGl1czogMzAlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuLm9yZGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0NCwgMjM4LCAxNDQsIDAuNSk7XFxuICAgIG1hcmdpbjogNHZoO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNSU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcbi5oMnRpdGxlIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDZ2dztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uYmFubmVyIHtcXG4gICAgd2lkdGg6IDQwdnc7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiA2MHB4O1xcbn1cXG4uYmFubmVyUCB7XFxuICAgIHdpZHRoOiAzMHZ3O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogMjBweDtcXG59XFxuLnN1YmRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiAzdnc7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uc3ViZGl2MSwgLnN1YmRpdjIsIC5zdWJkaXYzLCAuc3ViZGl2NCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5wcm9kdWN0aW1nIHtcXG4gICAgd2lkdGg6IDQwdnc7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgYm9yZGVyLXJhZGl1czogMzAlO1xcbn1cXG4uc3ViaW5mbyB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgcGFkZGluZy1yaWdodDogNXZ3O1xcbiAgICBmbGV4LWJhc2lzOiA0MCU7XFxuICAgIG1pbi13aWR0aDogNDAlO1xcbn1cXG4ucHJvZHVjdGltZ3NtYWxsIHtcXG4gICAgcGFkZGluZy1sZWZ0OiA2dnc7XFxuICAgIGZsZXgtYmFzaXM6IDQwJTtcXG4gICAgbWluLXdpZHRoOiA0MCU7XFxuICAgIG1heC1oZWlnaHQ6IDE2MHB4O1xcbiAgICBzaXplOiA4MCU7XFxufVxcblxcbmgzIHtcXG4gICAgZm9udC1zaXplOiA2dnc7XFxufVxcbi5wcmljZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1hcmdpbi10b3A6IC0ydmg7XFxuICAgIHBhZGRpbmc6IDJ2dztcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbn1cXG4ucHJpY2VkZWwge1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuLmluZm8ge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcbi5ncmlkZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAydmg7XFxufVxcbi5waG9uZWltZywgLmVtYWlsaW1nIHtcXG4gICAgd2lkdGg6IDE1dnc7XFxufVxcbi5jb250YWN0aW5mbyB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcXG4gICAgYm9keSB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoLi9pY29uLmpwZyk7XFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGZpbGw7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICB9XFxuICAgIGJ1dHRvbiB7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIH1cXG4gICAgLmhvbWV0aXRsZSB7XFxuICAgICAgICBmb250LXNpemU6IDgwcHg7XFxuICAgIH1cXG4gICAgLmhvbWVoMyB7XFxuICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIH1cXG4gICAgLmJhbm5lciwgLmJhbm5lclAge1xcbiAgICAgICAgd2lkdGg6IDEwdnc7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBib3R0b206IDMwcHg7XFxuICAgIH1cXG4gICAgLmgydGl0bGUge1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgZm9udC1zaXplOiAzdnc7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgaDMge1xcbiAgICAgICAgZm9udC1zaXplOiAzdnc7XFxuICAgIH1cXG4gICAgLnN1YmRpdiB7XFxuICAgICAgICBnYXA6IDF2dztcXG4gICAgfVxcbiAgICAucHJvZHVjdGltZyB7XFxuICAgICAgICB3aWR0aDogMTJ2dztcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwJTtcXG4gICAgfVxcbiAgICAucHJpY2VkZWwge1xcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB9XFxuICAgIC5pbmZvIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgfVxcbiAgICAuZ3JpZGRpdiB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG4gICAgLnN1YmRpdjEsIC5zdWJkaXYyLCAuc3ViZGl2MywgLnN1YmRpdjQge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBmbGV4LWJhc2lzOiAyMCU7XFxuICAgICAgICBtaW4td2lkdGg6IDIwJTtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgLnN1YmluZm8ge1xcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcXG5cXG4gICAgfVxcbiAgICAucHJvZHVjdGltZ3NtYWxsIHtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDc2cHg7XFxuICAgICAgICB3aWR0aDogNzAlO1xcbiAgICB9XFxuICAgIC5vcmRlciB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0NCwgMjM4LCAxNDQsIDAuNSk7XFxuICAgICAgICBtYXJnaW46IDR2aDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1JTtcXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIH1cXG4gICAgLnBob25laW1nLCAuZW1haWxpbWcge1xcbiAgICAgICAgd2lkdGg6IDR2dztcXG4gICAgfVxcbiAgICAuY29udGFjdGluZm8ge1xcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGJhbm5lcmltZyBmcm9tICcuL2Jhbm5lci5wbmcnXG5pbXBvcnQgSW1hZ2UxIGZyb20gJy4vcGhvbmUucG5nJ1xuaW1wb3J0IEltYWdlMiBmcm9tICcuL2VtYWlsLnBuZydcblxuZnVuY3Rpb24gY29udGFjdERPTSgpIHtcbiAgICBjb25zdCBtYWluZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5jb250ZW50Jyk7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnQ29udGFjdCBVcyc7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnaDJ0aXRsZScpO1xuICAgIG1haW5kaXYucmVwbGFjZUNoaWxkcmVuKHRpdGxlKTtcblxuICAgIGNvbnN0IG15YmFubmVyID0gbmV3IEltYWdlO1xuICAgIG15YmFubmVyLnNyYyA9IGJhbm5lcmltZztcbiAgICBteWJhbm5lci5jbGFzc0xpc3QuYWRkKCdiYW5uZXJQJyk7XG4gICAgbWFpbmRpdi5hcHBlbmRDaGlsZChteWJhbm5lcik7XG5cbiAgICBjb25zdCBzdWJkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzdWJkaXYuY2xhc3NMaXN0LmFkZCgnc3ViZGl2Jyk7XG4gICAgbWFpbmRpdi5hcHBlbmRDaGlsZChzdWJkaXYpXG5cbiAgICBjb25zdCBpbWcxID0gbmV3IEltYWdlO1xuICAgIGltZzEuc3JjID0gSW1hZ2UxO1xuICAgIGltZzEuY2xhc3NMaXN0LmFkZCgncGhvbmVpbWcnKVxuICAgIHN1YmRpdi5hcHBlbmRDaGlsZChpbWcxKTtcblxuICAgIGNvbnN0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGhvbmUudGV4dENvbnRlbnQgPSAnMDgzIDY0MSAxOTkwJztcbiAgICBwaG9uZS5jbGFzc0xpc3QuYWRkKCdjb250YWN0aW5mbycpO1xuICAgIHN1YmRpdi5hcHBlbmRDaGlsZChwaG9uZSk7XG5cbiAgICBjb25zdCBzdWJkaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3ViZGl2MS5jbGFzc0xpc3QuYWRkKCdzdWJkaXYnKTtcbiAgICBtYWluZGl2LmFwcGVuZENoaWxkKHN1YmRpdjEpXG5cbiAgICBjb25zdCBpbWcyID0gbmV3IEltYWdlO1xuICAgIGltZzIuc3JjID0gSW1hZ2UyO1xuICAgIGltZzIuY2xhc3NMaXN0LmFkZCgnZW1haWxpbWcnKVxuICAgIHN1YmRpdjEuYXBwZW5kQ2hpbGQoaW1nMik7XG5cbiAgICBjb25zdCBlbWFpbGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbWFpbGluZm8udGV4dENvbnRlbnQgPSAnMDgzIDY0MSAxOTkwJztcbiAgICBlbWFpbGluZm8uY2xhc3NMaXN0LmFkZCgnY29udGFjdGluZm8nKTtcbiAgICBzdWJkaXYxLmFwcGVuZENoaWxkKGVtYWlsaW5mbyk7XG59XG5leHBvcnQge2NvbnRhY3RET019IiwiaW1wb3J0IEltYWdlMyBmcm9tICcuL2ltYWdlMy5wbmcnXG5pbXBvcnQgYmFubmVyaW1nIGZyb20gJy4vYmFubmVyLnBuZydcbmZ1bmN0aW9uIGhvbWVET00oKSB7XG4gICAgY29uc3QgbWFpbmRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluY29udGVudCcpO1xuICAgIFxuICAgIC8vIHVzZSB5b3VyIGZ1bmN0aW9uIVxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdUaGUgUGV0cmUgRGlzaCc7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnaG9tZXRpdGxlJyk7XG4gICAgbWFpbmRpdi5yZXBsYWNlQ2hpbGRyZW4odGl0bGUpO1xuXG4gICAgY29uc3QgbXliYW5uZXIgPSBuZXcgSW1hZ2U7XG4gICAgbXliYW5uZXIuc3JjID0gYmFubmVyaW1nO1xuICAgIG15YmFubmVyLmNsYXNzTGlzdC5hZGQoJ2Jhbm5lcicpO1xuICAgIG1haW5kaXYuYXBwZW5kQ2hpbGQobXliYW5uZXIpO1xuXG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgaW5mby50ZXh0Q29udGVudCA9ICdXZWVrbHkgc2Vhc29uYWwgZnJ1aXQgYW5kIHZlZyBoZWFsdGhib3hlcyBkZWxpdmVyZWQgZXZlcnkgVHVlc2RheSEnO1xuICAgIGluZm8uY2xhc3NMaXN0LmFkZCgnaG9tZWgzJyk7XG4gICAgbWFpbmRpdi5hcHBlbmRDaGlsZChpbmZvKTtcblxuICAgIGNvbnN0IG15SW1hZ2UgPSBuZXcgSW1hZ2U7XG4gICAgbXlJbWFnZS5zcmMgPSBJbWFnZTM7XG4gICAgbXlJbWFnZS5jbGFzc0xpc3QuYWRkKCdpbWFnZTMnKVxuICAgIG1haW5kaXYuYXBwZW5kQ2hpbGQobXlJbWFnZSk7XG5cbiAgICBjb25zdCBvcmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJCVVRUT05cIik7XG4gICAgLy9vcmRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ29yZGVyJyk7XG4gICAgb3JkZXIuY2xhc3NMaXN0LmFkZCgnb3JkZXInKTtcbiAgICBvcmRlci50ZXh0Q29udGVudCA9ICdPUkRFUiBOT1cnO1xuICAgIG1haW5kaXYuYXBwZW5kQ2hpbGQob3JkZXIpO1xuXG4gIH1cbiAgZXhwb3J0IHsgaG9tZURPTSB9O1xuIiwiY29uc3QgaW5pdGlhbExvYWQgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpO1xuICAgIFxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywnaGVhZGVyJyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZWdlbmQuc2V0QXR0cmlidXRlKCdpZCcsICdsZWdlbmQnKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobGVnZW5kKTtcblxuICAgIGNvbnN0IGhvbWVidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiQlVUVE9OXCIpO1xuICAgIGhvbWVidG4uc2V0QXR0cmlidXRlKCdpZCcsICdob21lJyk7XG4gICAgaG9tZWJ0bi5jbGFzc0xpc3QuYWRkKCdoZWFkZXJidG5zJyk7XG4gICAgaG9tZWJ0bi50ZXh0Q29udGVudCA9ICdIT01FJztcbiAgICBsZWdlbmQuYXBwZW5kQ2hpbGQoaG9tZWJ0bik7XG5cbiAgICBjb25zdCBwcm9kdWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkJVVFRPTlwiKTtcbiAgICBwcm9kdWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvZHVjdCcpO1xuICAgIHByb2R1Y3QuY2xhc3NMaXN0LmFkZCgnaGVhZGVyYnRucycpO1xuICAgIHByb2R1Y3QudGV4dENvbnRlbnQgPSAnUFJPRFVDVCc7XG4gICAgbGVnZW5kLmFwcGVuZENoaWxkKHByb2R1Y3QpO1xuICAgIFxuICAgIFxuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiQlVUVE9OXCIpO1xuICAgIGNvbnRhY3Quc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0Jyk7XG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdoZWFkZXJidG5zJyk7XG4gICAgY29udGFjdC50ZXh0Q29udGVudCA9ICdDT05UQUNUJztcbiAgICBsZWdlbmQuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG5cbiAgICBjb25zdCBtYWluY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWFpbmNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWFpbmNvbnRlbnQnKTtcbiAgICBtYWluY29udGVudC50ZXh0Q29udGVudCA9ICd0ZXN0J1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluY29udGVudClcbn1cbmV4cG9ydCB7IGluaXRpYWxMb2FkIH07XG4iLCJpbXBvcnQgYmFubmVyaW1nIGZyb20gJy4vYmFubmVyLnBuZydcbmltcG9ydCBJbWFnZTEgZnJvbSAnLi9pbWFnZTEucG5nJ1xuaW1wb3J0IEltYWdlMiBmcm9tICcuL2ltYWdlMi5wbmcnXG5pbXBvcnQgSW1hZ2UzIGZyb20gJy4vaW1hZ2UzLnBuZydcbmltcG9ydCBJbWFnZTQgZnJvbSAnLi9pbWFnZTQucG5nJ1xuaW1wb3J0IHN1YmltYWdlMSBmcm9tICcuL3RpbWUxLnBuZydcbmltcG9ydCBzdWJpbWFnZTIgZnJvbSAnLi9wYWNraW5nLnBuZydcbmltcG9ydCBzdWJpbWFnZTMgZnJvbSAnLi9kZWxpdmVyeS5wbmcnXG5pbXBvcnQgc3ViaW1hZ2U0IGZyb20gJy4vcmVwZWF0LnBuZydcblxuXG5mdW5jdGlvbiBwcm9kdWN0RE9NKCkgXG57XG4gICAgY29uc3QgbWFpbmRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluY29udGVudCcpO1xuICAgIFxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdPVVIgSEVBTFRIQk9YJztcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdoMnRpdGxlJyk7XG4gICAgbWFpbmRpdi5yZXBsYWNlQ2hpbGRyZW4odGl0bGUpO1xuXG4gICAgY29uc3QgbXliYW5uZXIgPSBuZXcgSW1hZ2U7XG4gICAgbXliYW5uZXIuc3JjID0gYmFubmVyaW1nO1xuICAgIG15YmFubmVyLmNsYXNzTGlzdC5hZGQoJ2Jhbm5lclAnKTtcbiAgICBtYWluZGl2LmFwcGVuZENoaWxkKG15YmFubmVyKTtcblxuICAgIGNvbnN0IHN1YmRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN1YmRpdi5jbGFzc0xpc3QuYWRkKCdzdWJkaXYnKTtcbiAgICBtYWluZGl2LmFwcGVuZENoaWxkKHN1YmRpdilcblxuICAgIGNvbnN0IGltZzEgPSBuZXcgSW1hZ2U7XG4gICAgaW1nMS5zcmMgPSBJbWFnZTE7XG4gICAgaW1nMS5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0aW1nJylcbiAgICBzdWJkaXYuYXBwZW5kQ2hpbGQoaW1nMSk7XG5cbiAgICBjb25zdCBpbWcyID0gbmV3IEltYWdlO1xuICAgIGltZzIuc3JjID0gSW1hZ2UyO1xuICAgIGltZzIuY2xhc3NMaXN0LmFkZCgncHJvZHVjdGltZycpXG4gICAgc3ViZGl2LmFwcGVuZENoaWxkKGltZzIpO1xuXG4gICAgY29uc3QgaW1nMyA9IG5ldyBJbWFnZTtcbiAgICBpbWczLnNyYyA9IEltYWdlMztcbiAgICBpbWczLmNsYXNzTGlzdC5hZGQoJ3Byb2R1Y3RpbWcnKVxuICAgIHN1YmRpdi5hcHBlbmRDaGlsZChpbWczKTtcblxuICAgIGNvbnN0IGltZzQgPSBuZXcgSW1hZ2U7XG4gICAgaW1nNC5zcmMgPSBJbWFnZTQ7XG4gICAgaW1nNC5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0aW1nJylcbiAgICBzdWJkaXYuYXBwZW5kQ2hpbGQoaW1nNCk7XG4gICAgXG4gICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBzdWJzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnV2Vla2x5IEZydWl0IGFuZCBWZWcgSGVhbHRoYm94JztcbiAgICBzdWJzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnc3Vic2NyaXB0aW9uJyk7XG4gICAgbWFpbmRpdi5hcHBlbmRDaGlsZChzdWJzY3JpcHRpb24pO1xuXG4gICAgY29uc3Qgb3JkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiQlVUVE9OXCIpO1xuICAgIC8vb3JkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdvcmRlcicpO1xuICAgIG9yZGVyLmNsYXNzTGlzdC5hZGQoJ29yZGVyJyk7XG4gICAgb3JkZXIuY2xhc3NMaXN0LmFkZCgncHJpY2UnKTtcbiAgICBvcmRlci50ZXh0Q29udGVudCA9ICdSMTYwJztcbiAgICBtYWluZGl2LmFwcGVuZENoaWxkKG9yZGVyKTtcblxuICAgIGNvbnN0IHByaWNlZGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgICBwcmljZWRlbC50ZXh0Q29udGVudCA9ICdGUkVFIERFTElWRVJZISc7XG4gICAgcHJpY2VkZWwuY2xhc3NMaXN0LmFkZCgncHJpY2VkZWwnKTtcbiAgICBtYWluZGl2LmFwcGVuZENoaWxkKHByaWNlZGVsKTtcblxuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvLnRleHRDb250ZW50ID0gJ0V2ZXJ5IFR1ZXNkYXkgd2Ugb2ZmZXIgYSBkaWZmZXJlbnQgdmFyaWV0eSBvZiBmcnVpdCBhbmQgdmVnLiBXZSB0YWtlIG9yZGVycyBhbmQgZG8gY29uZmlybWF0aW9ucyBldmVyeSBNb25kYXkuIEVhY2ggd2VlayBvdXIgaGVhbHRoYm94IGlzIGJhc2VkIG9uIHNlYXNvbiwgdmFyaWV0eSBhbmQgbnV0cml0aW9uLiBXZSBhaW0gdG8gaGVscCB5b3UgYnVkZ2V0IHlvdXIgZ3JvY2VyaWVzIGFzIHdlbGwgYXMga2VlcCB5b3UgaGVhbHRoeSB0aHJvdWdoIGEgd2lkZSByYW5nZSBvZiBudXRyaWVudHMuJztcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoJ2luZm8nKTtcbiAgICBtYWluZGl2LmFwcGVuZENoaWxkKGluZm8pO1xuXG4gICAgY29uc3QgZ3JpZGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdyaWRkaXYuY2xhc3NMaXN0LmFkZCgnZ3JpZGRpdicpO1xuICAgIG1haW5kaXYuYXBwZW5kQ2hpbGQoZ3JpZGRpdik7XG5cbiAgICBjb25zdCBzdWJkaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3ViZGl2MS5jbGFzc0xpc3QuYWRkKCdzdWJkaXYxJyk7XG4gICAgZ3JpZGRpdi5hcHBlbmRDaGlsZChzdWJkaXYxKTtcblxuICAgIGNvbnN0IHN1YmltZzEgPSBuZXcgSW1hZ2U7XG4gICAgc3ViaW1nMS5zcmMgPSBzdWJpbWFnZTE7XG4gICAgc3ViaW1nMS5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0aW1nc21hbGwnKVxuICAgIHN1YmRpdjEuYXBwZW5kQ2hpbGQoc3ViaW1nMSk7XG5cbiAgICBjb25zdCBzdWJpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3ViaW5mby50ZXh0Q29udGVudCA9ICdFdmVyeSBNT05EQVkgd2UgdGFrZSBvcmRlcnMuIFBPUCBzZW50IHRvIHdoYXRzYXBwKG9yIGVtYWlsKSBjb25maXJtcyBvcmRlci4nO1xuICAgIHN1YmluZm8uY2xhc3NMaXN0LmFkZCgnc3ViaW5mbycpO1xuICAgIHN1YmRpdjEuYXBwZW5kQ2hpbGQoc3ViaW5mbyk7XG5cbiAgICBjb25zdCBzdWJkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3ViZGl2Mi5jbGFzc0xpc3QuYWRkKCdzdWJkaXYyJyk7XG4gICAgZ3JpZGRpdi5hcHBlbmRDaGlsZChzdWJkaXYyKTtcblxuICAgIGNvbnN0IHN1YmltZzIgPSBuZXcgSW1hZ2U7XG4gICAgc3ViaW1nMi5zcmMgPSBzdWJpbWFnZTI7XG4gICAgc3ViaW1nMi5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0aW1nc21hbGwnKVxuICAgIHN1YmRpdjIuYXBwZW5kQ2hpbGQoc3ViaW1nMik7XG5cbiAgICBjb25zdCBzdWJpbmZvMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN1YmluZm8yLnRleHRDb250ZW50ID0gJ1R1ZXNkYXkgZWVlZWVhcmx5IG1vcm5pbmcgd2Ugc291cmNlIG91ciBwcm9kdWNlLiBUaGVuIHdlIGRvIHF1YWxpdHkgY29udHJvbCBhbmQgcGFjayB0aGUgaGVhbHRoYm94ZXMuJztcbiAgICBzdWJpbmZvMi5jbGFzc0xpc3QuYWRkKCdzdWJpbmZvJyk7XG4gICAgc3ViZGl2Mi5hcHBlbmRDaGlsZChzdWJpbmZvMik7XG5cbiAgICBjb25zdCBzdWJkaXYzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3ViZGl2My5jbGFzc0xpc3QuYWRkKCdzdWJkaXYzJyk7XG4gICAgZ3JpZGRpdi5hcHBlbmRDaGlsZChzdWJkaXYzKTtcblxuICAgIGNvbnN0IHN1YmltZzMgPSBuZXcgSW1hZ2U7XG4gICAgc3ViaW1nMy5zcmMgPSBzdWJpbWFnZTM7XG4gICAgc3ViaW1nMy5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0aW1nc21hbGwnKVxuICAgIHN1YmRpdjMuYXBwZW5kQ2hpbGQoc3ViaW1nMyk7XG5cbiAgICBjb25zdCBzdWJpbmZvMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN1YmluZm8zLnRleHRDb250ZW50ID0gJzlhbSB3ZSBiZWdpbiBkZWxpdmVyaWVzLiBUaGlzIGdldHMgeW91ciBmcnVpdCBhbmQgdmVnIHRvIHlvdSBhcyBmcmVzaCBhcyBwb3NzaWJsZSwgd2hpbGUgc2tpcHBpbmcgYSBjb2xkIHN0b3JhZ2Ugc3RlcC4nO1xuICAgIHN1YmluZm8zLmNsYXNzTGlzdC5hZGQoJ3N1YmluZm8nKTtcbiAgICBzdWJkaXYzLmFwcGVuZENoaWxkKHN1YmluZm8zKTtcblxuICAgIGNvbnN0IHN1YmRpdjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzdWJkaXY0LmNsYXNzTGlzdC5hZGQoJ3N1YmRpdjQnKTtcbiAgICBncmlkZGl2LmFwcGVuZENoaWxkKHN1YmRpdjQpO1xuXG4gICAgY29uc3Qgc3ViaW1nNCA9IG5ldyBJbWFnZTtcbiAgICBzdWJpbWc0LnNyYyA9IHN1YmltYWdlNDtcbiAgICBzdWJpbWc0LmNsYXNzTGlzdC5hZGQoJ3Byb2R1Y3RpbWdzbWFsbCcpXG4gICAgc3ViZGl2NC5hcHBlbmRDaGlsZChzdWJpbWc0KTtcblxuICAgIGNvbnN0IHN1YmluZm80ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3ViaW5mbzQudGV4dENvbnRlbnQgPSAnRXZlcnkgd2VlayBpcyBhIG5ldyBib3guIFdpdGggYSBuZXcgdmFyaWV0eSBvZiBmcnVpdCBhbmQgdmVnLiBUaGlzIGhlbHBzIHdpdGggbWVhbCBjcmVhdGl2aXR5Lic7XG4gICAgc3ViaW5mbzQuY2xhc3NMaXN0LmFkZCgnc3ViaW5mbycpO1xuICAgIHN1YmRpdjQuYXBwZW5kQ2hpbGQoc3ViaW5mbzQpO1xuXG4gICAgY29uc3Qgb3JkZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkJVVFRPTlwiKTtcbiAgICBvcmRlcjEuY2xhc3NMaXN0LmFkZCgnb3JkZXInKTtcbiAgICBvcmRlcjEudGV4dENvbnRlbnQgPSAnT1JERVIgTk9XJztcbiAgICBtYWluZGl2LmFwcGVuZENoaWxkKG9yZGVyMSk7XG59XG5leHBvcnQge3Byb2R1Y3RET019IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGluaXRpYWxMb2FkIH0gZnJvbSAnLi9pbml0aWFsTG9hZCc7XG5pbXBvcnQgeyBob21lRE9NIH0gZnJvbSAnLi9ob21lJztcbmltcG9ydCB7IHByb2R1Y3RET00gfSBmcm9tICcuL3Byb2R1Y3QnO1xuaW1wb3J0IHsgY29udGFjdERPTSB9IGZyb20gJy4vY29udGFjdCc7XG5pbml0aWFsTG9hZCgpO1xuaG9tZURPTSgpO1xuXG5jb25zdCBob21lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKTtcbmNvbnN0IHByb2R1Y3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdCcpO1xuY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0Jyk7XG5cbmhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhvbWVmdW5jKTtcbnByb2R1Y3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHByb2R1Y3RmdW5jKTtcbmNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNvbnRhY3RmdW5jKTtcblxuZnVuY3Rpb24gaG9tZWZ1bmMoKSB7XG4gICAgY2xlYXIoKVxuICAgIGhvbWUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgaG9tZURPTSgpXG59XG5mdW5jdGlvbiBwcm9kdWN0ZnVuYygpIHtcbiAgICBjbGVhcigpXG4gICAgcHJvZHVjdC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBwcm9kdWN0RE9NKClcbn1cbmZ1bmN0aW9uIGNvbnRhY3RmdW5jKCkge1xuICAgIGNsZWFyKClcbiAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIGNvbnRhY3RET00oKVxufVxuZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgcHJvZHVjdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBob21lLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIGNvbnRhY3QuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=