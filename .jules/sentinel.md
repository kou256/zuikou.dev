# Sentinel Journal

## 2026-02-20 - Missing Firebase Security Configuration
**Vulnerability:** The project was missing `firebase.json` despite being hosted on Firebase, meaning no security headers (HSTS, CSP, etc.) were being sent.
**Learning:** Even static sites need explicit security configuration. Relying on default hosting behavior is insufficient for modern security standards.
**Prevention:** Always verify the presence of hosting configuration files (`firebase.json`, `netlify.toml`, etc.) and audit the headers they serve.
