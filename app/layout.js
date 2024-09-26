import "./globals.css";

export const metadata = {
  title: "DTT Portfolio",
  description: "Duc Thang Tran Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="h-screen bg-gradient-to-br from-pink-800 via-purple-800 to-blue-800 brightness-95">
          {children}
        </main>
      </body>
    </html>
  );
}
