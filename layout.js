import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="mn">
      <body className="bg-gray-100 p-6">{children}</body>
    </html>
  );
}
