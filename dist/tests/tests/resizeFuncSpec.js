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
const resizefunction_1 = __importDefault(require('../../utils/resizefunction'));
const promises_1 = __importDefault(require('fs/promises'));
const sharp_1 = __importDefault(require('sharp'));
describe('testing resizeFunc suite', () => {
  const filename = 'matteo-badini';
  const height = 300;
  const width = 300;
  it('testing to see if resize make the file and height and width are as expected.\n height and width should be both 300', () =>
    __awaiter(void 0, void 0, void 0, function* () {
      // resizing using sharp
      yield (0, resizefunction_1.default)('matteo-badini', 300, 300);
      // getting image meta datausing sharp
      const imageMeta = yield (0, sharp_1.default)(
        `./images/thumb/${filename}-${width}-${height}.jpg`
      ).metadata();
      // testing to see if width and height are as expected
      expect(imageMeta.width).toBe(300);
      expect(imageMeta.height).toBe(300);
    }));
  // removing the resized image from the filesystem
  afterAll(() => {
    promises_1.default.unlink(
      `./images/thumb/${filename}-${width}-${height}.jpg`
    );
  });
});
