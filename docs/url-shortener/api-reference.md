---
title: API Reference
---

### POST `/shorten`
Shortens a long URL and saves it to the database.

**Request**
- Method: `POST`
- Content-Type: `application/x-www-form-urlencoded`
- Body: `url={long-url}`

**Response**
Returns plain text:
```
Shortened URL here: abc123x7z
```
**Errors**
- `400` - missing or empty URL
- `500` - failed to generate short code or DB error

### GET `/:shortURL`
Used for redirect to original link
- Method: `GET`
- URL Parameter: `:shortURL` (the short code)

**Response**
- `302` redirect to the original long URL

**Errors**
- `404` - short URL not found
- `500` - failed to retrieve URL from database
