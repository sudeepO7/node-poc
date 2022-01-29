const authToken = 'sudeep';
const onRequest = (req, res, next) => {
    const auth = req.headers['authorization'];
    if (auth && auth === authToken) {
        next();
    } else {
        res.send({
            success: false,
            message: 'Please provide valid Auth token'
        });
        return ;
    }
}
module.exports = onRequest
