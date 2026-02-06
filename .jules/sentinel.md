## 2026-02-06 - Missing Security Headers in Firebase Hosting
**Vulnerability:** The `firebase.json` configuration lacked standard security headers like HSTS, X-Content-Type-Options, X-Frame-Options, and Referrer-Policy.
**Learning:** Default Firebase Hosting configurations do not automatically include these headers; they must be explicitly defined.
**Prevention:** Always audit `firebase.json` for the `headers` section and ensure a "secure by default" policy is applied to all routes.
