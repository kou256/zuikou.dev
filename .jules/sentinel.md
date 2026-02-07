# Sentinel Journal

## 2025-02-12 - VitePress CSP Constraints
**Vulnerability:** The application cannot enforce a strict Content Security Policy (specifically `script-src: 'self'`) because VitePress generates critical inline scripts for hydration and theme handling.
**Learning:** Modern static site generators often inject inline scripts without easy nonce support, making strict CSP implementation challenging without complex build modifications.
**Prevention:** For now, `unsafe-inline` is required for `script-src`. Future improvements could involve a custom build plugin to inject nonces into the generated HTML.
