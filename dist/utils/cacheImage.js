'use strict';
const __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const fs_1 = __importDefault(require('fs'));
/**
 * this module test to see if a file exists in a our ./image/thumb with desired width and height if so it will return true
 *  otherwise it will return false
 *
 * */
const cacheImage = (filename, width, height) => {
  return fs_1.default.existsSync(
    `./images/thumb/${filename}-${width}-${height}.jpg`
  );
};
exports.default = cacheImage;
