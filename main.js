const path = require("path");
/*
 * Project: Milestone 1
 * File Name: main.js
 * Description:
 *
 * Created Date:
 * Author:
 *
 */

const IOhandler = require("./IOhandler");
const zipFilePath = path.join(__dirname, "myfile.zip");
const pathUnzipped = path.join(__dirname, "unzipped");
const pathProcessed = path.join(__dirname, "grayscaled");

async function main() {
  await IOhandler.unzip(zipFilePath, pathUnzipped);
  let pngFiles = await IOhandler.readDir(pathUnzipped);
  for (const pngFile of pngFiles) {
    await IOhandler.grayScale(
      path.join(pathUnzipped, pngFile),
      path.join(pathProcessed, pngFile)
    );
  }
}

main();
