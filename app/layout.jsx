import React from "react"

export const metadata = {
    title: "Tastin' - Find restaurants near you!",
    description: "Don't know where to eat? Visit us to find restaurants nearby!",
}

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
          <div id="root">{children}</div>
          <div id="modal-root"></div>
        </body>
      </html>
    )
}