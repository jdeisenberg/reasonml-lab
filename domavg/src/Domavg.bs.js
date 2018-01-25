// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Js_exn                  = require("bs-platform/lib/js/js_exn.js");
var Pervasives              = require("bs-platform/lib/js/pervasives.js");
var Caml_format             = require("bs-platform/lib/js/caml_format.js");
var Js_primitive            = require("bs-platform/lib/js/js_primitive.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

function optFloat(str) {
  if (str) {
    var exit = 0;
    var fNum;
    try {
      fNum = Caml_format.caml_float_of_string(str[0]);
      exit = 1;
    }
    catch (raw_exn){
      var exn = Js_exn.internalToOCamlException(raw_exn);
      if (exn[0] === Caml_builtin_exceptions.failure) {
        if (exn[1] === "float_of_string") {
          return /* None */0;
        } else {
          throw exn;
        }
      } else {
        throw exn;
      }
    }
    if (exit === 1) {
      return /* Some */[fNum];
    }
    
  } else {
    return /* None */0;
  }
}

function getInputValue(el) {
  if (el) {
    return /* Some */[el[0].value];
  } else {
    return /* None */0;
  }
}

function setText(text, el) {
  if (el) {
    el[0].textContent = text;
    return /* () */0;
  } else {
    return /* () */0;
  }
}

function getNumValue(id) {
  return optFloat(getInputValue(Js_primitive.null_undefined_to_opt(document.getElementById(id))));
}

function avg(optX, optY) {
  if (optX && optY) {
    return /* Some */[(optX[0] + optY[0]) / 2.0];
  } else {
    return /* None */0;
  }
}

function calculate() {
  var outputElement = document.getElementById("output");
  var outputElement$1 = (outputElement == null) ? /* None */0 : [outputElement];
  var result = avg(getNumValue("input1"), getNumValue("input2"));
  if (result) {
    return setText(Pervasives.string_of_float(result[0]), outputElement$1);
  } else {
    return setText("", outputElement$1);
  }
}

var match = document.getElementById("calculate");

if (!(match == null)) {
  match.addEventListener("click", calculate);
}

exports.optFloat      = optFloat;
exports.getInputValue = getInputValue;
exports.setText       = setText;
exports.getNumValue   = getNumValue;
exports.avg           = avg;
exports.calculate     = calculate;
/* match Not a pure module */