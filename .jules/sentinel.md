## 2024-04-10 - VitePress Content Security Policy Constraints
**Vulnerability:** Weak Content Security Policy (CSP) or difficulty implementing a strict CSP.
**Learning:** VitePress architecture fundamentally relies on inline scripts and styles for its core functionality and component rendering. Generating a strict CSP that blocks `'unsafe-inline'` will break the site.
**Prevention:** When adding a CSP to a VitePress project (e.g., via Firebase Hosting headers), explicitly include `'unsafe-inline'` for both `script-src` and `style-src` directives to ensure the site remains functional, while still restricting other directives like `object-src` and `base-uri`.
