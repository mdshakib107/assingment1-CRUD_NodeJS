
const fs = require('fs');
const path = require('path');
const { v4: uuid } = require('uuid');

//read Data From json file.
let users = fs.readFileSync(path.resolve(__dirname, '../users.json'), 'utf8');
users = JSON.parse(users)

module.exports.getRandomUser = (req, res, next) => {
    const randomUser = users[Math.floor(Math.random() * users.length)]
    res.send(randomUser);
};



module.exports.getAllUser = (req, res, next) => {
    res.status(200).send(users);
};



module.exports.saveOneUser = (req, res, next) => {
    const { gender, name, contact, address, photoUrl } = req.body;
    const newUser = ({ Id: uuid(), ...req.body });

    if (gender && name && contact && address && photoUrl) {
        users.push(newUser);
        fs.writeFileSync(path.resolve(__dirname, '../users.json'), JSON.stringify(users));

        res.send(newUser)
    } else if (!gender) {
        res.send("Plase!Give all the Gender")

    }
    else if (!name) {
        res.send("Plase!Give all the name")

    }
    else if (!contact) {
        res.send("Plase!Give all the contact")

    }
    else if (!address) {
        res.send("Plase!Give all the address")

    }
    else if (!photoUrl) {
        res.send("Plase!Give all the photoUrl")

    }
};



module.exports.updateOneUser = (req, res, next) => {
    const user = users.find((user) => user.Id === req.params.id);

    user.gender = req.body.gender ? req.body.gender : user.gender;
    user.name = req.body.name ? req.body.name : user.name;
    user.contact = req.body.contact ? req.body.contact : user.contact;
    user.address = req.body.address ? req.body.address : user.address;
    user.photoUrl = req.body.photoUrl ? req.body.photoUrl : user.photoUrl;
    fs.writeFileSync(path.resolve(__dirname, '../users.json'), JSON.stringify(users));

    res.send(user)
};



module.exports.updateMultipleUser = (req, res, next) => {
    const user = users.map((user) => {
        user.gender = req.body.gender ? req.body.gender : user.gender;
        user.name = req.body.name ? req.body.name : user.name;
        user.contact = req.body.contact ? req.body.contact : user.contact;
        user.address = req.body.address ? req.body.address : user.address;
        user.photoUrl = req.body.photoUrl ? req.body.photoUrl : user.photoUrl;
    })
    fs.writeFileSync(path.resolve(__dirname, '../users.json'), JSON.stringify(users));

    res.send(users);
};



module.exports.deleteOneUser = (req, res, next) => {
    const user = users.find((user) => user.Id === req.params.id);
    console.log(user);

    if (user) {
        restUsers = users.filter((user) => user.Id !== req.params.id);
        fs.writeFileSync(path.resolve(__dirname, '../users.json'), JSON.stringify(restUsers));
        res.send("Delete Succeed!!");
    } else {
        res.send("There Is No user with Providing ID")
    }


};