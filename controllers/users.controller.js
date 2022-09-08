
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

        res.send("Data Added Succes")
    } else {
        res.send("Plase!Give all the information")

    }
};



module.exports.updateOneUser = (req, res, next) => {
    const user = users.find((user) => user.Id === req.params.id);

    user.Id = req.params.id;
    user.gender = req.body.gender;
    user.name = req.body.name;
    user.contact = req.body.contact;
    user.address = req.body.address;
    user.photoUrl = req.body.photoUrl;
    users.push(user);
    fs.writeFileSync(path.resolve(__dirname, '../users.json'), JSON.stringify(users));

    res.send("Hitting the")
};



module.exports.updateMultipleUser = (req, res, next) => {
    res.send("Hitting the Multipe user Patch Route")
};



module.exports.deleteOneUser = (req, res, next) => {

    users = users.filter((user) => user.Id !== Number(req.params.id))
    fs.writeFileSync(path.resolve(__dirname, '../users.json'), JSON.stringify(users));
    res.send("Hitting the Delete One User Route")
};