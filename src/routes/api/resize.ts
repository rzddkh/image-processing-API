import express from 'express';
import cacheImage from '../../utils/cacheImage';
import resizeFunc from '../../utils/resizefunction';
// resizes an image

const resize = express.Router();

resize.get('/resize', async (req, res) => {
  const filename = req.query.filename as unknown as string;
  const width = req.query.width as unknown as number;
  const height = req.query.height as unknown as number;

  // check to see if the file exists if so we just send the file
  // if not we resize the image and create the new image and then we send it
  try {
    if (cacheImage(filename, width, height)) {
      console.log('image already exists!');
    } else {
      // resize the image if doesnt exist
      await resizeFunc(filename, width, height);
      console.log("image doesn't exist, it is being processed.");
    }
    // send the file
    res.sendFile(`./images/thumb/${filename}-${width}-${height}.jpg`, {
      root: '.'
    });
  } catch (err) {
    res.send(`${err}`);
  }
});

export default resize;
