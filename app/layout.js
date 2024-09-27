import "./globals.css";

export const metadata = {
  title: "DTT Portfolio",
  description: "Duc Thang Tran Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
