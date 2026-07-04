import { Resend } from "resend";
import { config } from "../config/index.js";
import { maskEmail } from "./otp.js";

const resend = config.resend.apiKey ? new Resend(config.resend.apiKey) : null;

export const sendOtpEmail = async (to, otp, purpose = "verification") => {
  const subject =
    purpose === "registration"
      ? "Verify your email - Cavner Fintech Registration"
      : purpose === "login"
      ? "Your Cavner Fintech Login OTP"
      : "Your Cavner Fintech Verification OTP";

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
      <div style="background: #0f766e; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
        <h1 style="color: #fff; margin: 0; font-size: 22px;">Cavner Wealth &amp; Fintech</h1>
      </div>
      <div style="background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
        <h2 style="color: #0f172a; margin-top: 0;">${subject}</h2>
        <p style="color: #334155; font-size: 15px;">Your One-Time Password (OTP) is:</p>
        <div style="text-align: center; margin: 24px 0;">
          <span style="font-size: 32px; font-weight: bold; letter-spacing: 6px; color: #0f766e; background: #fff; padding: 12px 24px; border-radius: 8px; border: 2px dashed #0f766e;">${otp}</span>
        </div>
        <p style="color: #475569; font-size: 14px;">This OTP is valid for 10 minutes. Do not share it with anyone.</p>
        <p style="color: #64748b; font-size: 13px; margin-top: 24px;">If you did not request this, please ignore this email.</p>
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;">
        <p style="color: #94a3b8; font-size: 12px;">Cavner Wealth &amp; Fintech | Securing India's Financial Future</p>
      </div>
    </div>
  `;

  if (!resend) {
    console.warn(`[Resend not configured] OTP email to ${maskEmail(to)}: ${otp}`);
    return { success: true, dev: true, otp };
  }

  const { data, error } = await resend.emails.send({
    from: config.resend.from,
    to,
    subject,
    html,
  });

  if (error) throw new Error(`Email send failed: ${error.message}`);
  return { success: true, id: data?.id };
};
