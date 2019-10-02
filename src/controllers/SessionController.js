const User = require('../models/User');

//index, show, store, update, destroy
module.exports = {
    async store(res, res) {
        const { email } = req.body.email;
        let user = await User.findOne({ email: email });

        if (!user) {
            user = await User.create({ email });
        }
        
        return res.json(user);
    }
};