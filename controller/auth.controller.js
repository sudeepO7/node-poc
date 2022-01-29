const authCred = 'sudeep';

const userLogin = (req, res) => {
    const { userName, password } = req.body;
    let response = null;
    if (userName && password) {
        if (userName === authCred &&
            password === authCred) {
            response = {
                success: true,
                message: 'Login successfull'
            };
        } else {
            response = {
                success: false,
                message: 'Invalid username/password'
            };
        }
    } else {
        response = {
            success: false,
            message: 'Invalid Request'
        };
    }
    return res.send(response);
};

module.exports = {
    userLogin
};
