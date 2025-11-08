# Messaging Architecture and Specification (gregc.io)

## 1. Purpose and Scope
This document defines the end‑to‑end messaging strategy for gregc.io across mailbox (human mail), transactional (app‑generated) email, unsubscribe flows, deliverability, and client integrations. It covers architecture, domains/DNS, API contracts, templates, testing, security, and roadmap.

## 2. High‑Level Architecture
- Primary mailbox provider: Fastmail (custom domain `gregc.io`)
- Transactional sender: Resend (sending subdomain `mail.gregc.io`)
- Frontend: Next.js (web), Expo (mobile)
- Email templates: React Email (`@react-email/components`) rendered via Resend
- API: Next.js App Route at `POST /api/email/send`
- Landing/utility routes:
  - `email.gregc.io` → 308 redirect to Fastmail web (middleware)
  - `/email` local landing with quick links
  - `/unsubscribe` placeholder page for opt‑out compliance

## 3. Domains and DNS
- Root domain: `gregc.io` (mailbox)
  - MX: `in1-smtp.messagingengine.com` (prio 10)
  - MX: `in2-smtp.messagingengine.com` (prio 20)
  - SPF (TXT @): `v=spf1 include:spf.messagingengine.com -all`
  - DKIM (CNAMEs): `fm1._domainkey`, `fm2._domainkey`, `fm3._domainkey` → Fastmail targets
  - DMARC (TXT `_dmarc`): start `p=none; rua=mailto:dmarc@gregc.io; fo=1`; move to `p=quarantine`→`p=reject` after monitoring
- Transactional subdomain: `mail.gregc.io` (Resend)
  - MX: `send.mail` → `feedback-smtp.us-east-1.amazonaws.com` (prio 10)
  - SPF (TXT host `send.mail`): `v=spf1 include:amazonses.com -all`
  - DKIM (TXT `resend._domainkey.mail`): value provided by Resend (`p=MI…`)
  - DMARC (TXT `_dmarc.mail`): `v=DMARC1; p=none;`
- Subdomain strategy
  - `email.gregc.io`: user entrypoint (redirect to Fastmail, serve `/unsubscribe` and `/email` locally)
  - `mail.gregc.io`: reserved for app‑generated email; never used as human inbox

## 4. Environment Variables (web)
```
RESEND_API_KEY=…
RESEND_FROM=noreply@mail.gregc.io
```
Notes: `RESEND_FROM` must match a verified Resend domain. For local sanity checks, `onboarding@resend.dev` can be used temporarily.

## 5. API Contracts
### 5.1 Send Email
- Route: `POST /api/email/send`
- Request (JSON):
```
{
  "to": "you@example.com",
  "subject": "optional",
  "previewText": "optional",
  "name": "optional recipient display name",
  "replyTo": "optional-reply@example.com"
}
```
- Behavior:
  - Renders `WelcomeEmail` React component via Resend
  - Adds headers: `Reply-To` (if provided), `List-Unsubscribe` (mailto + https link to `/unsubscribe`)
- Responses:
  - `200 OK { id }`
  - `400 Bad Request` (missing fields)
  - `500 Internal Server Error` (invalid/missing config, unverified domain)

## 6. Templates
- Library: `@react-email/components`, `@react-email/render`
- Base example: `src/emails/WelcomeEmail.tsx`
- Styling: Tailwind classes supported within the email component (inlined by renderer)
- Guidance:
  - Keep layout simple, table-friendly; avoid heavy images by default
  - Include text fallback and a clear CTA
  - Ensure footer includes company address and unsubscribe link where applicable

## 7. Client Integrations
### 7.1 Desktop (Thunderbird)
- Auth: Fastmail App Password (IMAP/SMTP)
- IMAP: `imap.fastmail.com:993` SSL/TLS
- SMTP: `smtp.fastmail.com:465` SSL/TLS (or `587` STARTTLS)
- Username: full email; Password: app password
- CardDAV: `https://carddav.fastmail.com/`
- CalDAV: `https://caldav.fastmail.com/`

### 7.2 Android (Thunderbird or Gmail IMAP)
- Preferred: Thunderbird on Android with IMAP settings above
- Contacts/Calendar sync via DAVx⁵ (CardDAV/CalDAV endpoints as above)

### 7.3 Web
- `email.gregc.io` → Fastmail web redirect, with local `/email` landing page

## 8. Compliance, Privacy, Security
- Consent & Unsubscribe
  - Always include List-Unsubscribe (mailto + HTTPS link)
  - `/unsubscribe` route processes opt‑outs (future: add API + persistence)
- Identity
  - From domain must be DKIM‑signed and aligned with SPF/DMARC
- Policy
  - DMARC rollout: `none` → `quarantine` → `reject` after alignment verified
  - Consider BIMI once DMARC at enforcement (verified mark required)
- Secrets
  - Store API keys only in environment variables (never commit)
  - Use provider app passwords (not primary passwords) for IMAP/SMTP

## 9. Deliverability
- Warmup: start with low volume, no link tracking, avoid URL shorteners
- Segregate sender types: transactional on `mail.gregc.io`, human on `gregc.io`
- Headers: include `Reply-To`, `List-Unsubscribe`, and clear subject lines
- Monitoring: DMARC aggregate reports to `dmarc@gregc.io`

## 10. Testing & Tooling
- Local test page: `/send-test` (manual entry form)
- Network errors expose exact cause in `/api/email/send` response (check DevTools Network)
- DNS validation: `nslookup -type=txt` / `-type=mx` for hosts in question

## 11. Logging & Observability (planned)
- Capture send attempts/outcomes in application logs (status, recipient, template)
- Redact PII in logs; store only hashes or partial addresses where feasible
- Consider structured logging and alerting on error rates

## 12. Rate Limiting & Abuse Controls (planned)
- Per‑IP and per‑recipient rate limits on `/api/email/send`
- CAPTCHA or authenticated triggers for public forms
- Bounce/complaint handling via provider webhooks (future section)

## 13. Inbound & Replies (future)
- Options:
  - Fastmail rules → forward to inbound handler (e.g., API/Edge) for automation
  - Resend inbound webhooks (if/when available) for replies to transactional addresses
- Normalize MIME → store in DB (headers, text, HTML, attachments metadata)

## 14. Roadmap
- Build unsubscribe API + persistence (list membership, reason codes)
- Add additional templates (password reset, verification, receipts)
- Implement digest emails and AI‑assisted triage (local embeddings + LLM)
- DMARC enforcement + BIMI
- Bounce/complaint webhooks and suppression list

## 15. Appendix: Quick Setup Checklist
1) Fastmail DNS (MX, SPF, DKIM, DMARC) → Verified
2) Resend domain `mail.gregc.io` (MX, SPF, DKIM, DMARC) → Verified
3) `web/.env.local` → `RESEND_API_KEY`, `RESEND_FROM`
4) Test `/send-test` → email received
5) `email.gregc.io` mapped in Vercel → redirect works; `/unsubscribe` accessible
6) Thunderbird desktop + Android configured; DAVx⁵ sync enabled
