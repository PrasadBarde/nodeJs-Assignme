const fs = require("fs/promises");
const myFileWriter = async (fileName, fileContent) => {
  try {
    await fs.writeFile(fileName, fileContent);
  } catch (err) {
    console.log("not able to write the file");
  }
};
const myFileReader = async (fileName) => {
  try {
    const data = await fs.readFile(fileName, { encoding: "utf8" });
    console.log(data);
  } catch (err) {
    console.log("not able to read the file");
  }};
const myFileUpdater = async (fileName, fileContent) => {
  try {
    await fs.writeFile(fileName, fileContent);
  } catch (err) {
    console.log("not able to update the file");
  }
};
const myFileDeleter = async (fileName) => {
  try {
    await fs.unlink(fileName);
    console.log("File deleted!");
  } catch (err) {
    console.log("File cant be deleted");
  }};
module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter };
