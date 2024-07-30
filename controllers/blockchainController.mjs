export const getBlockchain = (req, res, next) => {
    res.status(200).json({success: true, statusCode: 200, data: 'Detta funkar'})
}