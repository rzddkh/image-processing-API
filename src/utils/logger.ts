import express from 'express';
import fs from 'fs';
import cacheImage from './cacheImage';
/**
 * it logs when the images has accessed and processed.
 */

const logger = (
  req: express.Request,
  res: express.Response,
  next: () => void
): void => {
  const { filename, height, width } = req.query;
  const date = new Date();
  const formatted_date =
    date.getFullYear() +
    '-' +
    (+date.getMonth() + 1) +
    '-' +
    date.getDay() +
    ' ' +
    date.getHours() +
    ':' +
    date.getMinutes() +
    ':' +
    date.getSeconds();

  let log = `\n\n[${formatted_date}]\n${filename}.jpg is requested at http:/${req.url}'`;

  if (cacheImage('' + filename, '' + width, '' + height)) {
    log += `\nImage already exists with width of ${width} and height of ${height} in "./images/thumb" folder. No need to resize! Image is accessed.`;
  } else {
    log += `\nImage needs to be resized. It is resized to width of ${width} and height of ${height}.\nIt is stored in "./images/thumb" folder under matteo-badini-${width}-${height}.jpg`;
  }

  fs.appendFile('./log-folder/resize_requests_log.txt', log, (err):void => {
    if (err) {
      console.log(err);
    }
  });
  console.log(log);
  next();
};

export default logger;
