////////////////////////////////
/// Morgenpost Custom Scripts //
////////////////////////////////

function numberFormat(num) {
  var y = x.toString().split('.');
  if(x > 9999) {y[0] = y[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');}
  return y.join(','); 
}

module.exports = {
  numberFormat : numberFormat
}