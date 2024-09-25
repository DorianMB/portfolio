import "@flaticon/flaticon-uicons/css/all/all.css";
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Parallax from "@/components/sections/Parallax";
import Welcome from "@/components/sections/Welcome";
import About from "@/components/sections/About";
import { ContainerVariants, ItemVariants } from "@/lib/models";
import Projects from "@/components/sections/Projects";
import Stats from "@/components/sections/Stats";

export default function Portfolio() {

  const containerVariants: ContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: ItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="min-h-screen bg-[#000000] text-[#e5e5e5] w-full overflow-x-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover opacity-10"></div>
      </div>
      <Header></Header>

      <main className="container mx-auto px-4 relative">
        {/* Parallax Emojis */}
        <Parallax></Parallax>

        <Welcome></Welcome>

        <About containerVariants={containerVariants} itemVariants={itemVariants}></About>

        <Projects containerVariants={containerVariants} itemVariants={itemVariants}></Projects>

        <Stats containerVariants={containerVariants} itemVariants={itemVariants}></Stats>
      </main>

      <Footer></Footer>
    </div>
  );
}
