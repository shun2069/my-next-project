import "./globals.css";
import Header from "./_compornents/Header"; // コンポーネントのパスが正しいか確認
import Footer from "./_compornents/Footer"; // コンポーネントのパスが正しいか確認

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header /> {/* Headerコンポーネントを正しく呼び出す */}
        {children} {/* childrenがbody内に含まれる */}
        <Footer />
      </body>
    </html>
  );
}