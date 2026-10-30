/**
 * SECURITY & SANITIZATION UTILITIES
 * JABIR MAHMUD KAWSAR — Graphic Design Portfolio
 *
 * Implements defensive validation and sanitization against:
 * - CRLF Email Header Injection
 * - Cross-Site Scripting (XSS)
 * - Protocol Manipulation / Unsafe Redirects (javascript:, data:)
 */

/**
 * Sanitizes single-line form inputs (Name, Category) to prevent
 * CRLF (Carriage Return / Line Feed) injection in email headers/mailto URLs.
 */
export function sanitizeHeaderInput(input: string, maxLength: number = 100): string {
  if (!input) return '';
  // Strip newline characters (\r, \n) and control characters
  return input
    .replace(/[\r\n\x00-\x1F\x7F]/g, '')
    .trim()
    .slice(0, maxLength);
}

/**
 * Sanitizes multi-line body text with length clamping.
 */
export function sanitizeMessageBody(input: string, maxLength: number = 2500): string {
  if (!input) return '';
  // Strip null bytes and non-printable control characters except standard newlines and tabs
  return input
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '')
    .trim()
    .slice(0, maxLength);
}

/**
 * Validates that an external URL begins strictly with https:// or mailto:
 * Prevents protocol-relative URLs or javascript:/data: pseudo-protocols.
 */
export function isSafeUrl(url: string): boolean {
  if (!url || typeof url !== 'string') return false;
  const trimmed = url.trim().toLowerCase();
  return trimmed.startsWith('https://') || trimmed.startsWith('mailto:') || trimmed.startsWith('./') || trimmed.startsWith('#');
}

/**
 * Generates a hardened mailto: URI with sanitized components,
 * preventing email header injection and payload overflow.
 */
export function generateSafeMailto({
  recipientEmail,
  senderName,
  projectType,
  projectMessage,
}: {
  recipientEmail: string;
  senderName: string;
  projectType: string;
  projectMessage: string;
}): string {
  const safeRecipient = sanitizeHeaderInput(recipientEmail, 120);
  const safeName = sanitizeHeaderInput(senderName, 80);
  const safeType = sanitizeHeaderInput(projectType, 60);
  const safeBody = sanitizeMessageBody(projectMessage, 2000);

  const cleanSubject = `Design Inquiry: ${safeType || 'General'} — ${safeName || 'New Client'}`;
  const cleanBody = 
`Hello Jabir,

My name / brand: ${safeName || '[Your Name]'}
Project Category: ${safeType || '[Category]'}

Project Brief & Goals:
${safeBody || '[Please describe your project timeline, requirements, or vision here]'}

Best regards,
${safeName || ''}`.trim();

  return `mailto:${safeRecipient}?subject=${encodeURIComponent(cleanSubject)}&body=${encodeURIComponent(cleanBody)}`;
}
