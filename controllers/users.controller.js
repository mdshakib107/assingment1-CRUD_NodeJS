


module.exports.getRandomUser = (req, res, next) => {
    res.send('hitting random user route')
};



module.exports.getAllUser = (req, res, next) => {
    res.send('Hitting get all user route')
};



module.exports.saveOneUser = (req, res, next) => {
    res.send("Hitthing One User save Post Route")
};



module.exports.updateOneUser = (req, res, next) => {
    res.send("Hitting the One user Patch Route")
};



module.exports.updateMultipleUser = (req, res, next) => {
    res.send("Hitting the Multipe user Patch Route")
};



module.exports.deleteOneUser = (req, res, next) => {
    res.send("Hitting the Delete One User Route")
};