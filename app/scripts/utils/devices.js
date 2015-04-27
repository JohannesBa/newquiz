///////////////////////
/// device detection //
///////////////////////

var oldBrowser, mobile, smartphone;

function initVars() {
  oldBrowser = !(('querySelector' in document) && ('localStorage' in window) && ('addEventListener' in window));
  mobile = !isUndefined(window.orientation);
  smartphone = /android.*mobile|mobile.*android|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

initVars();

module.exports = {
  oldBrowser : oldBrowser,
  mobile : mobile,
  smartphone : smartphone,
  reInit : initVars
}