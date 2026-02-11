---
title: Observability
---

### Overview
Prometheus scrapes Blackbox Exporter metric `/probe` for `probe_success`, probing `/health/usps`,   
and Grafana visualizes that. Discord alerts sent when 'probe_success' = 0 (failure)