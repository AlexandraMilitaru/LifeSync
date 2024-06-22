import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (_req, _file, cb) {
        cb(null, 'public/images');
    },
    filename: function (_req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname);
    }
});

export const uploadMiddleware = multer({ storage: storage });