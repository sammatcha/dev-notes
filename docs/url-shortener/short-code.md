---
title: Short Code
---

### How short codes are generated

Short codes are generated in `GenerateShortURL` in `pkg/utils/short_url.go`

1. Generate 8 random bytes using Go's crypto/rand package.
2. Encode the bytes using URL-safe Base64.
3. Remove trailing '=' padding characters.
4. Store the resulting value as `short_url` in database.