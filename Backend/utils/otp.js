import crypto from "crypto";

export const generateOtp = (length = 6) => {
  const digits = "0123456789";
  let otp = "";
  const bytes = crypto.randomBytes(length);
  for (let i = 0; i < length; i++) {
    otp += digits[bytes[i] % 10];
  }
  return otp;
};

export const maskPhone = (phone) => {
  if (phone.length < 4) return "****";
  return phone.slice(0, 2) + "****" + phone.slice(-2);
};

export const maskEmail = (email) => {
  const [name, domain] = email.split("@");
  if (!domain) return email;
  const visible = name.slice(0, 2);
  return `${visible}${"*".repeat(Math.max(name.length - 2, 2))}@${domain}`;
};
