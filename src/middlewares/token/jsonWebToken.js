import jwt from "jsonwebtoken"

export default function verifyJWT(req, res, next) {
    let token = req.header["authorization"];
    if (!token) {
        return res.status(400).json({ message: "No token provided" })
    }
    token = req.header["authorization"].replace("Bearer", "")
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(403).json({ message: "Invalid Token" })
        }
        res.locals.token = decoded
    } catch (err) {
        return res.status(403).json({ message: err.message })
    }
}