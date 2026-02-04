# Sentinel Journal

## 2024-05-22 - Missing Security Headers in Firebase Configuration
**Vulnerability:** The `firebase.json` configuration lacked standard security headers (HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy), exposing the application to clickjacking, MIME sniffing, and other common web vulnerabilities.
**Learning:** Static sites hosted on Firebase do not include these headers by default. While CSP is also important, it requires careful configuration to avoid breaking functionality (e.g. styles, scripts, external APIs), so start with the safer headers first.
**Prevention:** Always verify `firebase.json` includes a `headers` section with `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, and `Strict-Transport-Security`.
