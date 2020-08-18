export function initialize() {
  document.addEventListener('deviceready', onDeviceReady, false);
}
function onDeviceReady() {
  const statusBarPlugin = window.StatusBar;
  console.log(statusBarPlugin);
  statusBarPlugin.overlaysWebView(false);
  statusBarPlugin.styleLightContent();
  statusBarPlugin.backgroundColorByHexString("#281e36");
}
