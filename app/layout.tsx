import React from "react";

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
