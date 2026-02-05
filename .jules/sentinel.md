## 2026-02-05 - Missing Security Headers in Firebase Config
**Vulnerability:** The `firebase.json` configuration lacked standard security headers (HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy), which protect users from various attacks like clickjacking and MIME sniffing.
**Learning:** Even when documentation or memory suggests security controls are in place, they must be verified in the actual configuration files. Discrepancies between expected and actual state are common.
**Prevention:** Always audit configuration files like `firebase.json` manually or with automated tools to ensure security headers are explicitly defined.
