
function calc(value) {
  return eval(value || null);
}

if (typeof exports === "object")
    exports.calc = calc;
