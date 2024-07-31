// middlewares/errorHandler.mjs
export const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ success: false, statusCode: 500, message: err.message });
};
