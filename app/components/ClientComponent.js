"use client";

import { useRouter } from "next/navigation";

export default function ClientComponent() {
  const router = useRouter();
  return (
    <div>
      <h1>Client Component</h1>
    </div>
  );
}
