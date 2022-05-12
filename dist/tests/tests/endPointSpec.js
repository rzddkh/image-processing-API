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
const supertest_1 = __importDefault(require('supertest'));
const index_1 = __importDefault(require('../../index'));
/**
 * testing suite for server and endpoint connections
 */
const request = (0, supertest_1.default)(index_1.default);
describe('testing suite for server', () => {
  // testing / endpoint for server to see if server at '/' connected
  it('testing "/" endpoint to see if we are connected to server. \n Should return status 200', () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const response = yield request.get('/');
      expect(response.status).toBe(200);
    }));
  // testing /resize endpoint functionality for matteo-badini picture and resizing it to width of 1000 and height of 500
  it('testing "/resize" functionality if we get an image back. \n Response type should be "image/jpeg"', () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const response = yield request.get(
        '/resize?filename=matteo-badini&width=1000&height=500'
      );
      expect(response.type).toBe('image/jpeg');
    }));
  it('testing "/resize" end point to fail with bad input. \n We should get text (error message) instead of image as response type', () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const response = yield request.get(
        '/resize?filename=matteobadini&width=1000&height=500'
      );
      expect(response.type).toBe('text/html');
    }));
});
