---
title: API Endpoints
slug: api-endpoints
---

#### POST `/api/postage`
Calculates postage for letter envelopes based on weight and machinability. Uses hardcoded rates for retail pricing and USPS API for metered pricing.

**Request:**
```json
{
    "weight": 1.0,
    "nonMachinable": false
}
```
**Response:**
```json
{
    "hardcoded": {
        "breakdown": [
            {
                "type": "forever",
                "quantity": 1
            }
        ],
        "total": 0.78
    },
    "metered": {
        "totalBasePrice": 0.74,
        "rates": [{...}]
    }
}
```

#### GET `/health/usps`
Checks USPS API connectivity

#### GET `/healthz`
Basic health check

#### GET `/readyz`
Readiness check 