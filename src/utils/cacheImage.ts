import fs from 'fs';

/**
 * this module test to see if a file exists in a our ./image/thumb with desired width and height if so it will return true
 *  otherwise it will return false
 *
 * */

const cacheImage = (filename: string, width: number, height: number) => {
  return fs.existsSync(`./images/thumb/${filename}-${width}-${height}.jpg`);
};

export default cacheImage;
