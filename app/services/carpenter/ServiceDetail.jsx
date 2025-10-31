"use client";

import ServiceDetail from "../details/ServiceDetail";

// Thin wrapper so any leftover imports of the carpenter-specific file
// delegate to the single canonical ServiceDetail under services/details.
export default function CarpenterServiceDetail(props) {
  return <ServiceDetail {...props} />;
}
