const fs = require("fs/promises");
const fileName = "myfile.txt";
const updateFile = async (fileName, fileContent) => {
  try {
    const existingContent = await fs.readFile(fileName, "utf-8");
    const updatedContent = existingContent + ", " + fileContent;
    await fs.writeFile(fileName, updatedContent);
    return updatedContent;
  } catch (error) {
    console.error(`Error updating ${fileName}:`, error);
    throw error;
  }
};
module.exports = updateFile;
