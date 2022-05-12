import cacheImage from '../../utils/cacheImage';

/**
 * testing cacheImage module.
 * It will test to see if cacheImage work properly or not. It should return true and pass
 */

describe('testing cacheImage module', () => {
  it('testing to see if matteo-baddini image with width=1000 and height=300 exists. \n It should return true', () => {
    expect(cacheImage('matteo-badini', 1000, 300)).toBeTrue();
  });
});
