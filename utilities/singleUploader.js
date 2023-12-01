const multer = require("multer");
const path = require("path");
const createError = require("http-errors");

function uploader(
  subfolder_path,
  allowed_file_types,
  max_file_size,
  error_msg
) {
  // subfolder_path = 'avatars' or 'attachments'
  // allowed_file_types = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf', 'application/msword', 'application/vnd.ms-excel']
  // max_file_size = 5000000 (1MB)
  // error_msg = 'Only .jpg, .jpeg or .png format allowed!'

  // select upload folder
  const UPLOADS_FOLDER = path.join(
    `${__dirname}/../public/uploads/${subfolder_path}`
  );

  // define the storage
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, UPLOADS_FOLDER);
    },
    filename: (req, file, cb) => {
      const fileExt = path.extname(file.originalname);
      const fileName =
        file.originalname
          .replace(fileExt, "")
          .toLowerCase()
          .split(" ")
          .join("-") +
        "-" +
        Date.now();

      cb(null, fileName + fileExt);
    },
  });

  // prepare the final multer upload object
  const upload = multer({
    storage: storage,
    limits: {
      fileSize: max_file_size,
    },
    fileFilter: (req, file, cb) => {
      if (allowed_file_types.includes(file.mimetype)) {
        // allow file type
        cb(null, true);
      } else {
        // reject file
        cb(createError(error_msg));
      }
    },
  });

  return upload;
}

module.exports = uploader;
