import sharp from "sharp";
const imageProcess = async (url : string) => {
    const urlParams=new URLSearchParams(url);
    const filename =(urlParams.get('/images?filename'));
    const width=(urlParams.get('width') as unknown) as number;
    const height =(urlParams.get('height') as unknown )as number;  
    //fs.writeFile(`./images/thumb/${filename}.jpg`,newImage);
   await sharp(`./images/full/${filename}.jpg`).resize({ width: +width, height: +height }).toFile(`./images/thumb/${filename}-thumb.jpg`);
}



export default imageProcess;

