const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const authorizationHeader = req.headers.authorization;

  const token = authorizationHeader && authorizationHeader.split(' ')[1];

  if (!token) {
    res.json({
      status: 401,
      message: `You're Not Authorized To Use This Ressource! You Need To Make Sure To Add Authorization Header To The Request`,
    });
  }

  jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
    if (error) {
      res.json({
        status: 403,
        message: `Invalid Token, Access Forbidden!`,
      });
    } else {
      // const { role } = decoded;

      // if (role !== 'admin') {
      //   res.json({
      //     status: 403,
      //     message: 'You Need To Be An Admin To Use This Ressource!',
      //   });
      // } else {
        next();
      // }
    }
  });
};

module.exports = authMiddleware;
