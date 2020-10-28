module.exports = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(...req.user.roles)) {
      return res.status(403).json({
        message: "Access denied",
        error: {
          message: `User with ${req.user.roles.join(
            " "
          )} role/s is not authorize to access this resource`,
        },
      });
    }
    next();
  };
};
