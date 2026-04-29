import DataUriParser from "datauri/parser.js"; // Library to convert buffer to data URI
import path from "path"; // Node.js path utilities

const getBuffer = (file: any) => {
  const parser = new DataUriParser(); // Create parser instance
  const extName = path.extname(file.originalname).toString(); // Get file extension (.png, .jpg, etc)
  return parser.format(extName, file.buffer); // Convert buffer to data URI
};

export default getBuffer;
