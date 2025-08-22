import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import LanguageBarrier from "@/Components/LanguageBarrier";
import Everything from "@/Components/Everything";
import Transcribe from "@/Components/Transcribe";

export default function Home() {
  return (
    <main className="m-[50px]">
      <Navbar />
      <Hero />
      <LanguageBarrier />
      <Everything />
      <Transcribe />
    </main>
  );
}
