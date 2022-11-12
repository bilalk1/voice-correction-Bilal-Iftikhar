module.exports = (req, res, next) => {
    const { headers: { authorization: token } } = req;
    // if (!token) res.status(403).json("Token is missing");
    try {
       // Integrate the verify function from the auth service
    }
    catch (error) {
        return res.status(401).json(error)
    }

    next();
};
