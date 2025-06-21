export const sendOtp = async (phone) => {
  console.log(`Mock OTP sent to ${phone}`);
  return true;
};

export const verifyOtp = async (phone, otp) => {
  console.log(`Mock verify for ${phone} with OTP ${otp}`);
  return otp === '1234'; // Always succeeds if OTP is '1234'
};
