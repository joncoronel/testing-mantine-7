import React from "react";

import "@mantine/core/styles/global.css";
import "@mantine/core/styles/UnstyledButton.css";
import "@mantine/core/styles/Button.css";
import "@mantine/core/styles/Paper.css";
import "@mantine/core/styles/Card.css";
import "@mantine/core/styles/Text.css";
import "@mantine/core/styles/Group.css";
import "@mantine/core/styles/InlineInput.css";
import "@mantine/core/styles/Input.css";
import "@mantine/core/styles/ActionIcon.css";
import "@mantine/core/styles/Tooltip.css";
import "@mantine/core/styles/Stepper.css";
import "@mantine/core/styles/Popover.css";
import "@mantine/core/styles/Combobox.css";
import "@mantine/core/styles/ScrollArea.css";
import "@mantine/core/styles/Switch.css";
import "@mantine/core/styles/ModalBase.css";
import "@mantine/core/styles/Modal.css";

import { MantineProvider, ColorSchemeScript } from "@mantine/core";

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body id="body">
        <MantineProvider
          defaultColorScheme="dark"
          theme={{
            fontFamily: "var(--font-best)",
          }}
        >
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}

export const runtime = "edge";