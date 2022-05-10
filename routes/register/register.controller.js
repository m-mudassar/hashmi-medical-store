const {
    addUser
} = require('../../models/users.model');

async function postUser(req, res) {
    const email = await req.body.email;
    const password = await req.body.password;
    console.log(email);
    console.log(password);

    if (!email || !password) {
        return res.render('register', {
            error: "Empty email OR password field",
        })
    }
    if (await addUser(email, password)) {
        return res.render('register', {
            success: "Sign Up Success",
        })
    } else {
        return res.render('register', {
            error: "User already exists OR Something went wrong",
        })
    }
    // await res.json(`registering users with ${email} and ${password}....`);

}

module.exports = {
    postUser,
}