import express from 'express';
import cacheImage from '../../utils/cacheImage';
import resizeFunc from '../../utils/resizefunction';
import logger from '../../utils/logger';
// resizes an image

const resize = express.Router();

resize.get(
  '/resize',
  logger,
  async (req: express.Request, res: express.Response): Promise<void> => {
    const filename = req.query.filename as unknown as string;
    const width = req.query.width as unknown as string;
    const height = req.query.height as unknown as string;

    // check to see if the file exists if so we just send the file
    // if not we resize the image and create the new image and then we send it
    try {
      if (!cacheImage(filename, width, height)) {
        await resizeFunc(filename, width, height);
      }
      // send the file
      res.sendFile(`./images/thumb/${filename}-${width}-${height}.jpg`, {
        root: '.'
      });
    } catch (err) {
      res.send(`${err}`);
    }
  }
);

export default resize;
