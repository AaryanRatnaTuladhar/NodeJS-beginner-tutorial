const jwt = require('jsonwebtoken');

verifyJWT = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (!authHeader?.startsWith('Bearer ')) return res.sendStatus(401);
    const token = authHeader.split(' ')[1];
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if (err) return res.sendStatus(403); // invalid token
            req.user = decoded.UserInfo.username;
            req.roles = decoded.UserInfo.roles;
            next();
        }
    );
}

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIasiwibmFtZSI6IkpvaG4gRG9lIiwic2FtaXAiOiJzYW1pcCIsInNhbWlwMSI6InNhbWlwIiwic2FtaXAyIjoic2FtaXAiLCJzYW1pcDMiOiJzYW1pcCIsInNhbWlwNCI6InNhbWlwIiwic2FtaXA1Ijoic2FtaXAiLCJpYXQiOjE1MTYyMzkwMjJ9.haYrm6wMelqYzKA6mmtg6YTBjL6Gq9gRdMGQzScStU

//frontend
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIasiwibmFtZSI6IkpvaG4gRG9lIiwic2FtaXAiOiJzYW1pcCIsInNhbWlwMSI6InNhbWlwIiwic2FtaXAyIjoic2FtaXAiLCJzYW1pcDMiOiJzYW1pcCIsInNhbWlwNCI6InNhbWlwIiwic2FtaXA1Ijoic2FtaXAiLCJpYXQiOj'asdf'E1MTYyMzkwMjJ9.haYrm6wMelqYzKA6mmtg6YTBjL6Gq9gRdMGQzScStUjd


module.exports = verifyJWT;