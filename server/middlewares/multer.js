import multer from "multer";

  



// Set storage options
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../clozet/public/uploadimg'); // Ensure this path is correct
  },
  filename: (req, file, cb) => {
    const suffix = Date.now();
    cb(null, suffix + '-' + file.originalname + file.fileSize +  file.fieldSize); },
});

// Increase file size limit (for example, 10MB for file uploads)
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024,  // Set file size limit to 10MB
    fieldSize: 10 * 1024 * 1024, // Set field size limit to 10MB (if applicable)
  }
}); // Use .single() if you are uploading a single file

export default upload;

