import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const font = JetBrains_Mono({ subsets: ["latin"] });

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Mental Math",
  description: "Practice mental math with simple arithmetic problems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${font.className} bg-black`}>
        <div className="my-8 h-full w-full bg-black flex flex-col items-center justify-center overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
