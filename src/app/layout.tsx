import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fruits App",
  description: "A simple app to display a list of fruits",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="py-0-5 px-1">
          <h1 className="m-0">Fruits App</h1>
          <div className="me">
            Built by
            <a
              href="https://github.com/danieldrave"
              target="_blank"
              className="ml-0-25"
            >
              Daniel Drave
            </a>
          </div>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
