'use strict';
const __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
const __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const sharp_1 = __importDefault(require('sharp'));
const resizeFunc = (filename, width, height) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      yield (0, sharp_1.default)(`./images/full/${filename}.jpg`)
        .resize({
          width: +width,
          height: +height
        })
        .toFile(`./images/thumb/${filename}-${width}-${height}.jpg`);
    } catch (err) {
      console.log('encountered an error!');
      throw err;
    }
  });
exports.default = resizeFunc;
