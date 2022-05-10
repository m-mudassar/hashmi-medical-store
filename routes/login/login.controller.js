const {
    verifyUser
} = require('../../models/users.model');


async function loginUser(req, res) {
    const email = await req.body.email;
    const password = await req.body.password;
    console.log(email);
    console.log(password);

    if (!email || !password) {
        return res.render('login', {
            error: "Empty email OR password field",
        });
    }
    if (await verifyUser(email, password)) {
        return res.render('dashboard');
    } else {
        return res.render('login', {
            error: "something went wrong",
        });
    }
}

module.exports = {
    loginUser
}