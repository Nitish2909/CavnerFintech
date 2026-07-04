import { config } from "../config/index.js";
import { maskPhone } from "./otp.js";

// MSG91 is a popular Indian OTP/SMS provider. We use its REST API.
// Docs: https://docs.msg91.com
export const sendOtpSms = async (phone, otp) => {
  const { authKey, senderId, templateId } = config.msg91;

  if (!authKey) {
    console.warn(`[MSG91 not configured] OTP SMS to ${maskPhone(phone)}: ${otp}`);
    return { success: true, dev: true, otp };
  }

  const url = `https://control.msg91.com/api/v5/otp`;
  const body = {
    template_id: templateId,
    authkey: authKey,
    mobile: phone,
    otp,
    sender: senderId,
  };

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`MSG91 send failed: ${text}`);
  }
  const data = await res.json();
  return { success: true, data };
};

export const verifyOtpSms = async (phone, otp) => {
  const { authKey } = config.msg91;
  if (!authKey) {
    // dev fallback: handled by our own Otp model
    return { success: true, dev: true };
  }
  const url = `https://control.msg91.com/api/v5/otp/verify?authkey=${authKey}&mobile=${phone}&otp=${otp}`;
  const res = await fetch(url);
  const data = await res.json();
  if (data.type !== "success") throw new Error("Invalid OTP");
  return { success: true };
};
