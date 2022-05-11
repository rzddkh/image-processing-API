import sharp from 'sharp';
import express from 'express';
import { access } from 'node:fs/promises';

const resize = express.Router();

resize.get('/images/resize', async (req, res) => {
  const filename: string = req.query.filename as unknown as string;
  const width: string = req.query.width as unknown as string;
  const height: string = req.query.height as unknown as string;

  //check to see if the file exists if so we just send the file
  //if not we resize the image and create the new image and then we send it
  try {
    await access(`./images/thumb/${filename}-${width}-${height}.jpg`);
    console.log('image already exists!');
  } catch {
    console.error('image will be resized!');
    await sharp(`./images/full/${filename}.jpg`)
      .resize({ width: +width, height: +height })
      .toFile(`./images/thumb/${filename}-${width}-${height}.jpg`);
  }
  res.sendFile(`./images/thumb/${filename}-${width}-${height}.jpg`, {
    root: '.'
  });
});

export default resize;
