"use strict";

class FullScreenHandler {
  constructor() {
    let el = document.body;
    this.element = el;

    this.requestFullscreen = el.requestFullScreen || el.webkitRequestFullScreen
      || el.mozRequestFullScreen || el.msRequestFullScreen || FullScreenHandler._f11_wrap();

    this.exitFullscreen = el.exitFullscreen || el.webkitExitFullscreen
      || el.mozCancelFullScreen || el.msExitFullscreen || FullScreenHandler._f11_wrap();

    this.opened = false;
  }

  static _f11_wrap() {
    if (typeof window.ActiveXObject !== "undefined") {
      return function () {
        let wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
          wscript.SendKeys("{F11}");
        }
      };
    }
    else {
      return function() { console.error("F11 Wrapper can't works"); };
    }
  }

  open() {
    console.log("open screen")
    console.log(this.requestFullscreen)
    this.requestFullscreen.call(this.element);
    this.opened = true;
  }

  close () {
    console.log("exit screen")
    this.exitFullscreen.call();
    this.opened = false;
  }

  get isOpened() {
    return (document.fullscreenElement && document.fullscreenElement !== null) ||
      (document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
      (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
      (document.msFullscreenElement && document.msFullscreenElement !== null) || this.opened;
  }
}

export const FullScreen = new FullScreenHandler();
