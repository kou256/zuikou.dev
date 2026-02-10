# 🛡️ Sentinel's Journal

## 2025-02-12 - Missing Security Headers in Firebase Hosting

**Vulnerability:** The application was deployed to Firebase Hosting without any explicit HTTP security headers (HSTS, X-Frame-Options, etc.), leaving users vulnerable to man-in-the-middle attacks, clickjacking, and MIME-sniffing.
**Learning:** Static site generators like VitePress often require explicit server configuration for security headers as they don't have a backend to set them dynamically. Implementing a strict Content Security Policy (CSP) is challenging due to VitePress's reliance on inline scripts and styles for hydration, necessitating 'unsafe-inline' unless complex build-time hashing is implemented.
**Prevention:** Always include a `headers` configuration block in `firebase.json` for static sites to enforce security policies at the CDN edge.
