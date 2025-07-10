import "./globals.css";
import { ReduxProvider } from "@/redux/provider";
import { DarkModeProvider } from "@/providers/DarkModeProvider";

export const metadata = {
  title: "Personalized Dashboard",
  description: "News, Movies, Social Feed",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <ReduxProvider>
          <DarkModeProvider>
            {children}
          </DarkModeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
