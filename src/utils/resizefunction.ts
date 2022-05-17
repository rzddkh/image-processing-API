import sharp from 'sharp';

const resizeFunc = async (
  filename: string,
  width: string,
  height: string
): Promise<void> => {
  try {
    await sharp(`./images/full/${filename}.jpg`)
      .resize({
        width: +width,
        height: +height
      })
      .toFile(`./images/thumb/${filename}-${width}-${height}.jpg`);
  } catch (err) {
    console.log('encountered an error!');
    throw err;
  }
};

export default resizeFunc;
