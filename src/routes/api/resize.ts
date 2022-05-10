import sharp from "sharp";
import express from 'express';

const imageProcess = (url : string) => {

    const filename: string = (url).split('?')[1].split('&')[0].split('=')[1];
    const height: number = + (url).split('?')[1].split('&')[2].split('=')[1];
    const width: number = + (url).split('?')[1].split('&')[1].split('=')[1];
    sharp(`./images/full/${filename}.jpg`).resize({width: width, height: height}).toFile(`./images/thumb/${filename}.jpg`);
}

const pug = (req : express.Request, res : express.Response, next : Function) : void => {
    imageProcess(req.url);
    next();
}

export default pug;
export {
    imageProcess
};
