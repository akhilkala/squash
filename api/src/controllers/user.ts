import bcrypt from "bcrypt";
import User from "../models/User";
import {
  generateAccessToken,
  generateMailToken,
  HTTPError,
  HttpStatusCode,
  route,
  verifyMailToken,
} from "../utils/utilities";

export const register = route(async (req, res) => {
  const { name, email, password } = req.body;
  const existingUser = await User.findOne({ email });

  if (!!existingUser)
    throw new HTTPError(HttpStatusCode.BAD_REQUEST, "Email already in use");

  const user = await new User({
    name,
    email,
    password,
  }).save();

  const mailToken = generateMailToken({ id: user._id });
  console.log(mailToken);

  res.sendStatus(200);
});

export const login = route(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");
  if (!user)
    throw new HTTPError(HttpStatusCode.NOT_FOUND, "Invalid email or password");

  const check = await bcrypt.compare(password, user.password);
  if (!check)
    throw new HTTPError(
      HttpStatusCode.UNAUTHORIZED,
      "Invalid email or password"
    );

  if (!user.verified)
    throw new HTTPError(HttpStatusCode.UNAUTHORIZED, "User not verified");

  const accessToken = generateAccessToken({ id: user._id });
  res.status(200).json({ accessToken });
});

export const verify = route(async (req, res, next) => {
  try {
    const user = verifyMailToken(req.params.token);
    //@ts-ignore
    await User.updateOne({ _id: user.id }, { verified: true });
    res.sendStatus(200);
  } catch (err) {
    next(new HTTPError(HttpStatusCode.BAD_REQUEST, "Invalid Token"));
  }
});
