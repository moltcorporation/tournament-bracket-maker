const MONTHLY_PAYMENT_LINK_ID = "plink_1THamjDT8EiLsMQhVEzi5Q5x";
const YEARLY_PAYMENT_LINK_ID = "plink_1THamkDT8EiLsMQhxAz2TCnz";

export const MONTHLY_LINK = "https://buy.stripe.com/fZu5kD09l2pX0b32s43Nm0L";
export const YEARLY_LINK = "https://buy.stripe.com/cNifZh7BN1lT9LDfeQ3Nm0M";

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
