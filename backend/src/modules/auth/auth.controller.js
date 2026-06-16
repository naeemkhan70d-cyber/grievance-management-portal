const {
  registerUserService,
  loginUserService,
  getPendingUsersService,
  approveUserService,
} = require(
  "./auth.service"
);

const registerUser =
  async (req, res) => {
    try {
      const {
        name,
        email,
        password,
      } = req.body;

      const user =
        await registerUserService({
          name,
          email,
          password,
        });

      res.status(201).json({
        success: true,
        message:
          "Registration request submitted successfully",
        data: user,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message:
          error.message,
      });
    }
  };

  const loginUser =
  async (req, res) => {
    try {
      const {
        email,
        password,
      } = req.body;

      const user =
        await loginUserService({
          email,
          password,
        });

      res.status(200).json({
        success: true,
        message:
          "Login successful",
        data: user,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message:
          error.message,
      });
    }
  };


  const getPendingUsers =
  async (req, res) => {
    try {
      const users =
        await getPendingUsersService();

      res.status(200).json({
        success: true,
        count: users.length,
        data: users,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message:
          error.message,
      });
    }
  };
  

const approveUser =
  async (req, res) => {
    try {
      const { id } = req.params;

      const { role } =
        req.body;

      const user =
        await approveUserService({
          id,
          role,
        });

      res.status(200).json({
        success: true,
        message:
          "User approved successfully",
        data: user,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message:
          error.message,
      });
    }
  };
module.exports = {
  registerUser,
  loginUser,
  getPendingUsers,
  approveUser,
};