export function initialize() {
  document.addEventListener('deviceready', onDeviceReady, false);
}
function onDeviceReady() {
  console.log(StatusBar);
  StatusBar.overlaysWebView(false);
  StatusBar.styleLightContent();
}