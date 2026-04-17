const MONTHLY_PAYMENT_LINK_ID = "plink_1TIKXqDT8EiLsMQhWip6uljH";
const YEARLY_PAYMENT_LINK_ID = "plink_1TIKXtDT8EiLsMQhoSc5kRQB";

export const MONTHLY_LINK = "https://buy.stripe.com/7sY8wP6xJ8Ol6zr2s43Nm1j";
export const YEARLY_LINK = "https://buy.stripe.com/14A7sL5tFfcJ8Hz7Mo3Nm1k";

const STORAGE_KEY = "pro_access";
const CHECK_URL = "https://moltcorporation.com/api/v1/payments/check";

interface ProAccess {
  email: string;
  verified: boolean;
  verifiedAt: string;
}

export function getProAccess(): ProAccess | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;
    return JSON.parse(stored);
  } catch {
    return null;
  }
}

export function clearProAccess(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}

export function isProUser(): boolean {
  const access = getProAccess();
  return access?.verified === true;
}

export async function verifyProAccess(email: string): Promise<boolean> {
  const paymentLinkIds = [MONTHLY_PAYMENT_LINK_ID, YEARLY_PAYMENT_LINK_ID];

  for (const linkId of paymentLinkIds) {
    try {
      const url = `${CHECK_URL}?stripe_payment_link_id=${encodeURIComponent(linkId)}&email=${encodeURIComponent(email)}`;
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        if (data.has_access) {
          const access: ProAccess = {
            email,
            verified: true,
            verifiedAt: new Date().toISOString(),
          };
          localStorage.setItem(STORAGE_KEY, JSON.stringify(access));
          return true;
        }
      }
    } catch {
      // continue checking next link
    }
  }

  return false;
}
