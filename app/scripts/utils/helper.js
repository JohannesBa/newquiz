///////////////////////
/// helper functions //
///////////////////////

function isUndefined(obj) {
  return typeof obj === 'undefined';
}

function isNumeric(number) {
  if(isUndefined(number)){
    return false;
  }
  return !isNaN(number) && isFinite(number);
}

module.exports = {
  isUndefined : isUndefined,
  isNumeric : isNumeric
}