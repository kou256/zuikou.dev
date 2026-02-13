## 2025-02-13 - [Security Headers Gap]
**Vulnerability:** Missing `firebase.json` resulted in deployment without security headers (HSTS, CSP, X-Frame-Options, etc.).
**Learning:** Static site hosting platforms like Firebase often default to insecure headers unless explicitly configured via platform-specific files.
**Prevention:** Always verify deployment configuration files (`firebase.json`, `vercel.json`, `netlify.toml`) exist and enforce security headers.
