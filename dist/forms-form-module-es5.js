(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forms-form-module"], {
    /***/
    "9TM8":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forms/basic-elements/basic-elements.component.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function TM8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"page-header\">\n  <h3 class=\"page-title\">\n    Form elements\n  </h3>\n  <nav aria-label=\"breadcrumb\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Forms</a></li>\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Form elements</li>\n    </ol>\n  </nav>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Default form</h4>\n        <p class=\"card-description\">\n          Basic form layout\n        </p>\n        <form class=\"forms-sample\">\n          <div class=\"form-group\">\n            <label for=\"exampleInputUsername1\">Username</label>\n            <input type=\"text\" class=\"form-control\" id=\"exampleInputUsername1\" placeholder=\"Username\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Email address</label>\n            <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Email\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleInputPassword1\">Password</label>\n            <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleInputConfirmPassword1\">Confirm Password</label>\n            <input type=\"password\" class=\"form-control\" id=\"exampleInputConfirmPassword1\" placeholder=\"Password\">\n          </div>\n          <div class=\"form-check form-check-flat form-check-primary\">\n            <label class=\"form-check-label\">\n              <input type=\"checkbox\" class=\"form-check-input\">\n              Remember me\n              <i class=\"input-helper\"></i>\n            </label>\n          </div>\n          <button type=\"submit\" class=\"btn btn-gradient-primary mr-2\">Submit</button>\n          <button class=\"btn btn-light\">Cancel</button>\n        </form>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Horizontal Form</h4>\n        <p class=\"card-description\">\n          Horizontal form layout\n        </p>\n        <form class=\"forms-sample\">\n          <div class=\"form-group row\">\n            <label for=\"exampleInputUsername2\" class=\"col-sm-3 col-form-label\">Email</label>\n            <div class=\"col-sm-9\">\n              <input type=\"text\" class=\"form-control\" id=\"exampleInputUsername2\" placeholder=\"Username\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label for=\"exampleInputEmail2\" class=\"col-sm-3 col-form-label\">Email</label>\n            <div class=\"col-sm-9\">\n              <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail2\" placeholder=\"Email\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label for=\"exampleInputMobile\" class=\"col-sm-3 col-form-label\">Mobile</label>\n            <div class=\"col-sm-9\">\n              <input type=\"text\" class=\"form-control\" id=\"exampleInputMobile\" placeholder=\"Mobile number\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label for=\"exampleInputPassword2\" class=\"col-sm-3 col-form-label\">Password</label>\n            <div class=\"col-sm-9\">\n              <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword2\" placeholder=\"Password\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label for=\"exampleInputConfirmPassword2\" class=\"col-sm-3 col-form-label\">Re Password</label>\n            <div class=\"col-sm-9\">\n              <input type=\"password\" class=\"form-control\" id=\"exampleInputConfirmPassword2\" placeholder=\"Password\">\n            </div>\n          </div>\n          <div class=\"form-check form-check-flat form-check-primary\">\n            <label class=\"form-check-label\">\n              <input type=\"checkbox\" class=\"form-check-input\">\n              Remember me\n              <i class=\"input-helper\"></i>\n            </label>\n          </div>\n          <button type=\"submit\" class=\"btn btn-gradient-primary mr-2\">Submit</button>\n          <button class=\"btn btn-light\">Cancel</button>\n        </form>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-12 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Basic form elements</h4>\n        <p class=\"card-description\">\n          Basic form elements\n        </p>\n        <form class=\"forms-sample\">\n          <div class=\"form-group\">\n            <label for=\"exampleInputName1\">Name</label>\n            <input type=\"text\" class=\"form-control\" id=\"exampleInputName1\" placeholder=\"Name\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail3\">Email address</label>\n            <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail3\" placeholder=\"Email\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleInputPassword4\">Password</label>\n            <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword4\" placeholder=\"Password\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleSelectGender\">Gender</label>\n              <select class=\"form-control\" id=\"exampleSelectGender\">\n                <option>Male</option>\n                <option>Female</option>\n              </select>\n            </div>\n          <div class=\"form-group\">\n            <label>File upload</label>\n            <input type=\"file\" name=\"img[]\" class=\"file-upload-default\">\n            <div class=\"input-group col-xs-12\">\n              <input type=\"text\" class=\"form-control file-upload-info\" disabled placeholder=\"Upload Image\">\n              <span class=\"input-group-append\">\n                <button class=\"file-upload-browse btn btn-gradient-primary\" type=\"button\">Upload</button>\n              </span>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleInputCity1\">City</label>\n            <input type=\"text\" class=\"form-control\" id=\"exampleInputCity1\" placeholder=\"Location\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleTextarea1\">Textarea</label>\n            <textarea class=\"form-control\" id=\"exampleTextarea1\" rows=\"4\"></textarea>\n          </div>\n          <button type=\"submit\" class=\"btn btn-gradient-primary mr-2\">Submit</button>\n          <button class=\"btn btn-light\">Cancel</button>\n        </form>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Input size</h4>\n        <p class=\"card-description\">\n          Add classes like <code>.form-control-lg</code> and <code>.form-control-sm</code>.\n        </p>\n        <div class=\"form-group\">\n          <label>Large input</label>\n          <input type=\"text\" class=\"form-control form-control-lg\" placeholder=\"Username\" aria-label=\"Username\">\n        </div>\n        <div class=\"form-group\">\n          <label>Default input</label>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Username\" aria-label=\"Username\">\n        </div>\n        <div class=\"form-group\">\n          <label>Small input</label>\n          <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"Username\" aria-label=\"Username\">\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Select size</h4>\n        <p class=\"card-description\">\n          Add classes like <code>.form-control-lg</code> and <code>.form-control-sm</code>.                    \n        </p>\n        <div class=\"form-group\">\n          <label for=\"exampleFormControlSelect1\">Large select</label>\n          <select class=\"form-control form-control-lg\" id=\"exampleFormControlSelect1\">\n            <option>1</option>\n            <option>2</option>\n            <option>3</option>\n            <option>4</option>\n            <option>5</option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"exampleFormControlSelect2\">Default select</label>\n          <select class=\"form-control\" id=\"exampleFormControlSelect2\">\n            <option>1</option>\n            <option>2</option>\n            <option>3</option>\n            <option>4</option>\n            <option>5</option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"exampleFormControlSelect3\">Small select</label>\n          <select class=\"form-control form-control-sm\" id=\"exampleFormControlSelect3\">\n            <option>1</option>\n            <option>2</option>\n            <option>3</option>\n            <option>4</option>\n            <option>5</option>\n          </select>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Basic input groups</h4>\n        <p class=\"card-description\">\n          Basic bootstrap input groups\n        </p>\n        <div class=\"form-group\">\n          <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\">@</span>\n            </div>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Username\" aria-label=\"Username\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text bg-primary text-white\">$</span>\n            </div>\n            <input type=\"text\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\">\n            <div class=\"input-group-append\">\n              <span class=\"input-group-text\">.00</span>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\">$</span>\n            </div>\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\">0.00</span>\n            </div>\n            <input type=\"text\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"input-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Recipient's username\" aria-label=\"Recipient's username\">\n            <div class=\"input-group-append\">\n              <button class=\"btn btn-sm btn-gradient-primary\" type=\"button\">Search</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"input-group\">\n            <div ngbDropdown class=\"input-group-prepend\">\n              <button ngbDropdownToggle class=\"btn btn-sm btn-outline-primary\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown</button>\n              <div ngbDropdownMenu class=\"dropdown-menu\">\n                <a class=\"dropdown-item\">Action</a>\n                <a class=\"dropdown-item\">Another action</a>\n                <a class=\"dropdown-item\">Something else here</a>\n                <div role=\"separator\" class=\"dropdown-divider\"></div>\n                <a class=\"dropdown-item\">Separated link</a>\n              </div>\n            </div>\n            <input type=\"text\" class=\"form-control\" aria-label=\"Text input with dropdown button\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"input-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Find in facebook\" aria-label=\"Recipient's username\">\n            <div class=\"input-group-append\">\n              <button class=\"btn btn-sm btn-facebook\" type=\"button\">\n                <i class=\"mdi mdi-facebook\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Checkbox Controls</h4>\n        <p class=\"card-description\">Checkbox and radio controls (default appearance is in primary color)</p>\n        <form>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <div class=\"form-check\">\n                  <label class=\"form-check-label\">\n                    <input type=\"checkbox\" class=\"form-check-input\">\n                    Default\n                    <i class=\"input-helper\"></i>\n                  </label>\n                </div>\n                <div class=\"form-check\">\n                  <label class=\"form-check-label\">\n                    <input type=\"checkbox\" class=\"form-check-input\" checked>\n                    Checked\n                    <i class=\"input-helper\"></i>\n                  </label>\n                </div>\n                <div class=\"form-check\">\n                  <label class=\"form-check-label\">\n                    <input type=\"checkbox\" class=\"form-check-input\" disabled>\n                    Disabled\n                    <i class=\"input-helper\"></i>\n                  </label>\n                </div>\n                <div class=\"form-check\">\n                  <label class=\"form-check-label\">\n                    <input type=\"checkbox\" class=\"form-check-input\" disabled checked>\n                    Disabled checked\n                    <i class=\"input-helper\"></i>\n                  </label>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <div class=\"form-check\">\n                  <label class=\"form-check-label\">\n                    <input type=\"radio\" class=\"form-check-input\" name=\"optionsRadios\" id=\"optionsRadios1\" value=\"\">\n                    Default\n                    <i class=\"input-helper\"></i>\n                  </label>\n                </div>\n                <div class=\"form-check\">\n                  <label class=\"form-check-label\">\n                    <input type=\"radio\" class=\"form-check-input\" name=\"optionsRadios\" id=\"optionsRadios2\" value=\"option2\" checked>\n                    Selected\n                    <i class=\"input-helper\"></i>\n                  </label>\n                </div>\n                <div class=\"form-check\">\n                  <label class=\"form-check-label\">\n                    <input type=\"radio\" class=\"form-check-input\" name=\"optionsRadios2\" id=\"optionsRadios3\" value=\"option3\" disabled>\n                    Disabled\n                    <i class=\"input-helper\"></i>\n                  </label>\n                </div>\n                <div class=\"form-check\">\n                  <label class=\"form-check-label\">\n                    <input type=\"radio\" class=\"form-check-input\" name=\"optionsRadio2\" id=\"optionsRadios4\" value=\"option4\" disabled checked>\n                    Selected and disabled\n                    <i class=\"input-helper\"></i>\n                  </label>\n                </div>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class=\"card-body\">\n        <p class=\"card-description\">Add class <code>.form-check-{{ '{' }}color{{ '}' }}</code> for checkbox and radio controls in theme colors</p>\n        <form>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <div class=\"form-check form-check-primary\">\n                  <label class=\"form-check-label\">\n                    <input type=\"checkbox\" class=\"form-check-input\" checked>\n                    Primary\n                    <i class=\"input-helper\"></i>\n                  </label>\n                </div>\n                <div class=\"form-check form-check-success\">\n                  <label class=\"form-check-label\">\n                    <input type=\"checkbox\" class=\"form-check-input\" checked>\n                    Success\n                    <i class=\"input-helper\"></i>\n                  </label>\n                </div>\n                <div class=\"form-check form-check-info\">\n                  <label class=\"form-check-label\">\n                    <input type=\"checkbox\" class=\"form-check-input\" checked>\n                    Info\n                    <i class=\"input-helper\"></i>\n                  </label>\n                </div>\n                <div class=\"form-check form-check-danger\">\n                  <label class=\"form-check-label\">\n                    <input type=\"checkbox\" class=\"form-check-input\" checked>\n                    Danger\n                    <i class=\"input-helper\"></i>\n                  </label>\n                </div>\n                <div class=\"form-check form-check-warning\">\n                  <label class=\"form-check-label\">\n                    <input type=\"checkbox\" class=\"form-check-input\" checked>\n                    Warning\n                    <i class=\"input-helper\"></i>\n                  </label>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <div class=\"form-check form-check-primary\">\n                  <label class=\"form-check-label\">\n                    <input type=\"radio\" class=\"form-check-input\" name=\"ExampleRadio1\" id=\"ExampleRadio1\" checked>\n                    Primary\n                    <i class=\"input-helper\"></i>\n                  </label>\n                </div>\n                <div class=\"form-check form-check-success\">\n                  <label class=\"form-check-label\">\n                    <input type=\"radio\" class=\"form-check-input\" name=\"ExampleRadio2\" id=\"ExampleRadio2\" checked>\n                    Success\n                    <i class=\"input-helper\"></i>\n                  </label>\n                </div>\n                <div class=\"form-check form-check-info\">\n                  <label class=\"form-check-label\">\n                    <input type=\"radio\" class=\"form-check-input\" name=\"ExampleRadio3\" id=\"ExampleRadio3\" checked>\n                    Info\n                    <i class=\"input-helper\"></i>\n                  </label>\n                </div>\n                <div class=\"form-check form-check-danger\">\n                  <label class=\"form-check-label\">\n                    <input type=\"radio\" class=\"form-check-input\" name=\"ExampleRadio4\" id=\"ExampleRadio4\" checked>\n                    Danger\n                    <i class=\"input-helper\"></i>\n                  </label>\n                </div>\n                <div class=\"form-check form-check-warning\">\n                  <label class=\"form-check-label\">\n                    <input type=\"radio\" class=\"form-check-input\" name=\"ExampleRadio5\" id=\"ExampleRadio5\" checked>\n                    Warning\n                    <i class=\"input-helper\"></i>\n                  </label>\n                </div>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-12 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Inline forms</h4>\n        <p class=\"card-description\">\n          Use the <code>.form-inline</code> class to display a series of labels, form controls, and buttons on a single horizontal row\n        </p>\n        <form class=\"form-inline\">\n          <label class=\"sr-only\" for=\"inlineFormInputName2\">Name</label>\n          <input type=\"text\" class=\"form-control mb-2 mr-sm-2\" id=\"inlineFormInputName2\" placeholder=\"Jane Doe\">\n        \n          <label class=\"sr-only\" for=\"inlineFormInputGroupUsername2\">Username</label>\n          <div class=\"input-group mb-2 mr-sm-2\">\n            <div class=\"input-group-prepend\">\n              <div class=\"input-group-text\">@</div>\n            </div>\n            <input type=\"text\" class=\"form-control\" id=\"inlineFormInputGroupUsername2\" placeholder=\"Username\">\n          </div>\n          <div class=\"form-check mx-sm-2\">\n            <label class=\"form-check-label\">\n              <input type=\"checkbox\" class=\"form-check-input\" checked>\n              Remember me\n              <i class=\"input-helper\"></i>\n            </label>\n          </div>\n          <button type=\"submit\" class=\"btn btn-gradient-primary mb-2\">Submit</button>\n        </form>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-12 grid-margin\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Horizontal Two column</h4>\n        <form class=\"form-sample\">\n          <p class=\"card-description\">\n            Personal info\n          </p>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group row\">\n                <label class=\"col-sm-3 col-form-label\">First Name</label>\n                <div class=\"col-sm-9\">\n                  <input type=\"text\" class=\"form-control\" />\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group row\">\n                <label class=\"col-sm-3 col-form-label\">Last Name</label>\n                <div class=\"col-sm-9\">\n                  <input type=\"text\" class=\"form-control\" />\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group row\">\n                <label class=\"col-sm-3 col-form-label\">Gender</label>\n                <div class=\"col-sm-9\">\n                  <select class=\"form-control\">\n                    <option>Male</option>\n                    <option>Female</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group row\">\n                <label class=\"col-sm-3 col-form-label\">Date of Birth</label>\n                <div class=\"col-sm-9\">\n                  <input class=\"form-control\" placeholder=\"dd/mm/yyyy\"/>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group row\">\n                <label class=\"col-sm-3 col-form-label\">Category</label>\n                <div class=\"col-sm-9\">\n                  <select class=\"form-control\">\n                    <option>Category1</option>\n                    <option>Category2</option>\n                    <option>Category3</option>\n                    <option>Category4</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group row\">\n                <label class=\"col-sm-3 col-form-label\">Membership</label>\n                <div class=\"col-sm-4\">\n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input type=\"radio\" class=\"form-check-input\" name=\"membershipRadios\" id=\"membershipRadios1\" value=\"\" checked>\n                      Free\n                      <i class=\"input-helper\"></i>\n                    </label>\n                  </div>\n                </div>\n                <div class=\"col-sm-5\">\n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input type=\"radio\" class=\"form-check-input\" name=\"membershipRadios\" id=\"membershipRadios2\" value=\"option2\">\n                      Professional\n                      <i class=\"input-helper\"></i>\n                    </label>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <p class=\"card-description\">\n            Address\n          </p>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group row\">\n                <label class=\"col-sm-3 col-form-label\">Address 1</label>\n                <div class=\"col-sm-9\">\n                  <input type=\"text\" class=\"form-control\" />\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group row\">\n                <label class=\"col-sm-3 col-form-label\">State</label>\n                <div class=\"col-sm-9\">\n                  <input type=\"text\" class=\"form-control\" />\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group row\">\n                <label class=\"col-sm-3 col-form-label\">Address 2</label>\n                <div class=\"col-sm-9\">\n                  <input type=\"text\" class=\"form-control\" />\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group row\">\n                <label class=\"col-sm-3 col-form-label\">Postcode</label>\n                <div class=\"col-sm-9\">\n                  <input type=\"text\" class=\"form-control\" />\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group row\">\n                <label class=\"col-sm-3 col-form-label\">City</label>\n                <div class=\"col-sm-9\">\n                  <input type=\"text\" class=\"form-control\" />\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group row\">\n                <label class=\"col-sm-3 col-form-label\">Country</label>\n                <div class=\"col-sm-9\">\n                  <select class=\"form-control\">\n                    <option>America</option>\n                    <option>Italy</option>\n                    <option>Russia</option>\n                    <option>Britain</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>";
      /***/
    },

    /***/
    "Ttn+":
    /*!******************************************************************!*\
      !*** ./src/app/forms/basic-elements/basic-elements.component.ts ***!
      \******************************************************************/

    /*! exports provided: BasicElementsComponent */

    /***/
    function Ttn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasicElementsComponent", function () {
        return BasicElementsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_basic_elements_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./basic-elements.component.html */
      "9TM8");
      /* harmony import */


      var _basic_elements_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./basic-elements.component.scss */
      "k56A");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BasicElementsComponent = /*#__PURE__*/function () {
        function BasicElementsComponent() {
          _classCallCheck(this, BasicElementsComponent);
        }

        _createClass(BasicElementsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BasicElementsComponent;
      }();

      BasicElementsComponent.ctorParameters = function () {
        return [];
      };

      BasicElementsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-basic-elements',
        template: _raw_loader_basic_elements_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_basic_elements_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BasicElementsComponent);
      /***/
    },

    /***/
    "eckZ":
    /*!**************************************!*\
      !*** ./src/app/forms/form.module.ts ***!
      \**************************************/

    /*! exports provided: FormModule */

    /***/
    function eckZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormModule", function () {
        return FormModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _basic_elements_basic_elements_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./basic-elements/basic-elements.component */
      "Ttn+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var routes = [{
        path: 'basic-elements',
        component: _basic_elements_basic_elements_component__WEBPACK_IMPORTED_MODULE_3__["BasicElementsComponent"]
      }];

      var FormModule = /*#__PURE__*/_createClass(function FormModule() {
        _classCallCheck(this, FormModule);
      });

      FormModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_basic_elements_basic_elements_component__WEBPACK_IMPORTED_MODULE_3__["BasicElementsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]]
      })], FormModule);
      /***/
    },

    /***/
    "k56A":
    /*!********************************************************************!*\
      !*** ./src/app/forms/basic-elements/basic-elements.component.scss ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function k56A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1zL2Jhc2ljLWVsZW1lbnRzL2Jhc2ljLWVsZW1lbnRzLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=forms-form-module-es5.js.map