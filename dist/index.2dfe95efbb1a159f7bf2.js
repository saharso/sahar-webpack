(self["webpackChunksahar_webpack"] = self["webpackChunksahar_webpack"] || []).push([["index"],{

/***/ 767:
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 294);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ 935);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ 727);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ 550);




function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "/another"
  }, "go somewhere else"));
}

const Another = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(() => __webpack_require__.e(/*! import() */ "src_Another_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./Another.jsx */ 641)));

const Loader = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "loading...");

const appRouting = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {
  exact: true,
  path: "/",
  render: App
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {
  path: "/another",
  render: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: Loader
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Another, null))
})));
react_dom__WEBPACK_IMPORTED_MODULE_1__.render(appRouting, document.getElementById("root"));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__(767)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYWhhci13ZWJwYWNrLy4vc3JjL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJBbm90aGVyIiwiUmVhY3QiLCJMb2FkZXIiLCJhcHBSb3V0aW5nIiwiUmVhY3RET00iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxHQUFULEdBQWM7QUFDVixzQkFBTywyRUFBSztBQUFHLFFBQUksRUFBQztBQUFSLHlCQUFMLENBQVA7QUFDSDs7QUFDRCxNQUFNQyxPQUFPLGdCQUFHQyx1Q0FBQSxDQUFXLE1BQU0sc0lBQWpCLENBQWhCOztBQUNBLE1BQU1DLE1BQU0sR0FBRyxtQkFBSywyRUFBcEI7O0FBRUEsTUFBTUMsVUFBVSxnQkFDZCxpREFBQywyREFBRCxxQkFDRSxpREFBQyxvREFBRCxxQkFDRSxpREFBQyxtREFBRDtBQUFPLE9BQUssTUFBWjtBQUFhLE1BQUksRUFBQyxHQUFsQjtBQUFzQixRQUFNLEVBQUVKO0FBQTlCLEVBREYsZUFFRSxpREFBQyxtREFBRDtBQUFPLE1BQUksRUFBQyxVQUFaO0FBQXVCLFFBQU0sRUFBRSxtQkFBSSxpREFBQywyQ0FBRDtBQUFVLFlBQVEsRUFBRUc7QUFBcEIsa0JBQTRCLGlEQUFDLE9BQUQsT0FBNUI7QUFBbkMsRUFGRixDQURGLENBREY7QUFTQUUsNkNBQUEsQ0FBZ0JELFVBQWhCLEVBQTRCRSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBNUIsRSIsImZpbGUiOiJpbmRleC4yZGZlOTVlZmJiMWExNTlmN2JmMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1N1c3BlbnNlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgUm91dGUsIFN3aXRjaCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmZ1bmN0aW9uIEFwcCgpe1xuICAgIHJldHVybiA8ZGl2PjxhIGhyZWY9XCIvYW5vdGhlclwiPmdvIHNvbWV3aGVyZSBlbHNlPC9hPjwvZGl2PlxufVxuY29uc3QgQW5vdGhlciA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KCcuL0Fub3RoZXIuanN4JykpO1xuY29uc3QgTG9hZGVyID0gKCk9PiA8ZGl2PmxvYWRpbmcuLi48L2Rpdj5cblxuY29uc3QgYXBwUm91dGluZyA9IChcbiAgPFJvdXRlcj5cbiAgICA8U3dpdGNoPlxuICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgcmVuZGVyPXtBcHB9IC8+XG4gICAgICA8Um91dGUgcGF0aD1cIi9hbm90aGVyXCIgcmVuZGVyPXsoKT0+PFN1c3BlbnNlIGZhbGxiYWNrPXtMb2FkZXJ9PjxBbm90aGVyLz48L1N1c3BlbnNlPn0gLz5cbiAgICA8L1N3aXRjaD5cbiAgPC9Sb3V0ZXI+XG4pO1xuXG5SZWFjdERPTS5yZW5kZXIoYXBwUm91dGluZywgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpKTsiXSwic291cmNlUm9vdCI6IiJ9