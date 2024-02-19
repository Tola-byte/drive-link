import { DownloadAppNow } from "@/components/AppDownload/DownloadApp";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { HeroSection } from "@/components/Hero/Hero";
import { HowItWork } from "@/components/HowItWorks/HowWorks";
import { YDriveLink } from "@/components/WhyDriveLink/WhyDriveLnk";

export default function Home() {
  return (
    <main className="m-auto pt-10">
      <Header />
      <HeroSection />
      <HowItWork/>
      <YDriveLink />
      <DownloadAppNow />
      <Footer/>
    </main>
  );
}
