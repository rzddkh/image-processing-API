'use strict';
const __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const cacheImage_1 = __importDefault(require('../../utils/cacheImage'));
/**
 * testing cacheImage module.
 * It will test to see if cacheImage work properly or not. It should return true and pass
 */
describe('testing cacheImage module', () => {
  it('testing to see if matteo-baddini image with width=1000 and height=300 exists. \n It should return true', () => {
    expect((0, cacheImage_1.default)('matteo-badini', 1000, 300)).toBeTrue();
  });
});
