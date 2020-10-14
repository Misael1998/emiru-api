module.exports = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        message: "Access denied",
        error: {
          message: `User with ${req.user.role} role is not authorize to access this resource`,
        },
      });
    }
  };
};
