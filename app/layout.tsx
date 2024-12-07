import { AnalyticsWrapper } from "@/components/Analytics";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Navbar";
import "@/styles/globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
      </head>
      <body>
        <div>
          <Header />
          <main className="bg-page-gradient pt-navigation-height">
            {children}
          </main>
          <Footer />
        </div>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
