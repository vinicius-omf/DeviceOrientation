window.onload = onReady;

function onReady(){
  if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', deviceOrientationHandler, false);
    document.getElementById("doeSupported").innerText = "Supported!";
  }
}


if (window.DeviceOrientationEvent) {
  console.log("DeviceOrientation is supported");
  window.addEventListener('deviceorientation', function(eventData) {});
}

function deviceOrientationHandler(){
  alert();
}