import resizeFunc from '../../utils/resizefunction';
import fs from 'fs/promises';
import sharp from 'sharp';

describe('testing resizeFunc suite', (): void => {
  const filename = 'matteo-badini';
  const height = '300';
  const width = '300';

  it('testing to see if resize make the file and height and width are as expected.\n height and width should be both 300', async (): Promise<void> => {
    // resizing using sharp
    await resizeFunc('matteo-badini', width, height);
    // getting image meta datausing sharp
    const imageMeta = await sharp(
      `./images/thumb/${filename}-${width}-${height}.jpg`
    ).metadata();
    // testing to see if width and height are as expected
    expect(imageMeta.width).toBe(300);
    expect(imageMeta.height).toBe(300);
  });

  // removing the resized image from the filesystem
  afterAll((): void => {
    fs.unlink(`./images/thumb/${filename}-${width}-${height}.jpg`);
  });
});
