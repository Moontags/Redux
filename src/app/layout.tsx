import { ReduxProvider } from "../redux/Provider";
import "./globals.css";

export const metadata = {
  title: "Next.js Redux Counter",
  description: "A simple counter using Redux Toolkit in Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
