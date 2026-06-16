const roleMiddleware =
  (...allowedRoles) => {
    return (
      req,
      res,
      next
    ) => {

      console.log(
        "USER ROLE:",
        req.user.role
      );

      console.log(
        "ALLOWED ROLES:",
        allowedRoles
      );

      if (
        !allowedRoles.includes(
          req.user.role
        )
      ) {
        return res.status(403).json({
          success: false,
          message:
            "Access forbidden",
        });
      }

      next();
    };
  };

module.exports =
  roleMiddleware;