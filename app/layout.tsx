import '@/app/ui/global.css';
import { latin } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${latin.className} antialiased`}>{children}</body>
    </html>
  );
}
