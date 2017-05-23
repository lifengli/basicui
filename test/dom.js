const { JSDOM } = require('jsdom');

const doc = new JSDOM('<!doctype html><html><head></head><body></body></html>');
const win = doc.defaultView;

global.document = doc;
global.window = win;
globalBubble(win);

function globalBubble(window) {
  if (window) {
    Object.keys(window).forEach((key) => {
      if (!window.prototype.hasOwnProperty.call(key)) {
        return;
      }
      if (key in global) {
        return;
      }
      global[key] = window[key];
    });
  }
}
