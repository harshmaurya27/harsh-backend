import { asyncHandler } from "../utils/asyncHadler.js";

const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "harsh codes",
  });
});

export { registerUser };
