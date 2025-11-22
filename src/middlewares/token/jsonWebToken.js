import jwt from "jsonwebtoken"

export default function verifyJWT(req, res, next) {
    let token = req.headers["authorization"];
    if (!token) {
        return res.status(400).json({ message: "No token provided" })
    }
    token = token.split(" ")[1];
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded) {
            return res.status(403).json({ message: "Invalid Token" })
        }
        res.locals.token = decoded
        return next();
    } catch (err) {
        return res.status(403).json({ message: err.message })
    }
    
}