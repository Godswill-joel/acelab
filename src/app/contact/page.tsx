"use client";

import { Suspense } from "react";
import ContactPageContent from "../contact/Contactpage";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading contact form...</div>}>
      <ContactPageContent />
    </Suspense>
  );
}
