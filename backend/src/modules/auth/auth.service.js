const jwt = require("jsonwebtoken");
const User = require("../../models/User");
const bcrypt = require("bcryptjs");

const registerUserService =
  async ({
    name,
    email,
    password,
  }) => {
    const existingUser =
      await User.findOne({
        email,
      });

    if (existingUser) {
      throw new Error(
        "Email already registered"
      );
    }

   const hashedPassword =
  await bcrypt.hash(password, 10);

const user = await User.create({
  name,
  email,
  password: hashedPassword,
  status: "pending",
});

    return {
  id: user._id,
  name: user.name,
  email: user.email,
  status: user.status,
  role: user.role,
  createdAt: user.createdAt,
};
  };

  const getPendingUsersService =
  async () => {
    return await User.find({
      status: "pending",
    }).select(
      "-password"
    );
  };

const loginUserService = async ({
  email,
  password,
}) => {
  const user =
    await User.findOne({
      email,
    });

  if (!user) {
    throw new Error(
      "Invalid email or password"
    );
  }

  const isPasswordMatch =
    await bcrypt.compare(
      password,
      user.password
    );

  if (!isPasswordMatch) {
    throw new Error(
      "Invalid email or password"
    );
  }

  if (
    user.status !== "approved"
  ) {
    throw new Error(
      "Your account is awaiting admin approval"
    );
  }

  const token = jwt.sign(
    {
      userId: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn:
        process.env.JWT_EXPIRES_IN,
    }
  );

  return {
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status,
    },
  };
};

const approveUserService =
  async ({
    id,
    role,
  }) => {
    const user =
      await User.findById(id);

    if (!user) {
      throw new Error(
        "User not found"
      );
    }

    user.status =
      "approved";

    user.role = role;

    await user.save();

    return {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status,
    };
  };

module.exports = {
  registerUserService,
  loginUserService,
  getPendingUsersService,
  approveUserService,
};