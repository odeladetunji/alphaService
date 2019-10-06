//Authentication middleware!

let verifyUser = (req, res, next) => {
    const comingHeader = req.headers['authorization'];
    if(typeof comingHeader !== undefined){
        const clientToken = comingHeader.split(' ')[1];
        req.token = clientToken;
        next();
    }else{
        res.sendStatus(403);
    }
}

//exporting module 
module.exports = {
    verifyUser: verifyUser
};

