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
const express_1 = __importDefault(require('express'));
const cacheImage_1 = __importDefault(require('../../utils/cacheImage'));
const resizefunction_1 = __importDefault(require('../../utils/resizefunction'));
// resizes an image
const resize = express_1.default.Router();
resize.get('/resize', (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const filename = req.query.filename;
    const width = req.query.width;
    const height = req.query.height;
    // check to see if the file exists if so we just send the file
    // if not we resize the image and create the new image and then we send it
    try {
      if ((0, cacheImage_1.default)(filename, width, height)) {
        console.log('image already exists!');
      } else {
        // resize the image if doesnt exist
        yield (0, resizefunction_1.default)(filename, width, height);
        console.log("image doesn't exist, it is being processed.");
      }
      // send the file
      res.sendFile(`./images/thumb/${filename}-${width}-${height}.jpg`, {
        root: '.'
      });
    } catch (err) {
      res.send(`${err}`);
    }
  })
);
exports.default = resize;
