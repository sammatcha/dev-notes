---
title: Architecture
slug: architecture
---

```mermaid
graph TD;
    Frontend --> |POST| Backend-API-Server;
    Backend-API-Server -->|API Call| USPS-API;
    USPS-API -->|Response| Backend-API-Server;
    Backend-API-Server -->|Response| Frontend
   
```

