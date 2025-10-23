import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Mail, Instagram } from 'lucide-react';
import heroBackground from '@/assets/security-background.jpg';

const HeroSection = () => {
  const handleScrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative text-center"> {/* Tambahkan text-center di sini */}
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{backgroundImage: `url(${heroBackground})`}}
      ></div>

      {/* Konten ditengah */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Jarvis Adriel
            </h1>
            <p className="text-xl md:text-2xl text-primary mb-4">
              Computer Science Student
            </p>
            {/* Sedikit penyesuaian kelas */}
            <p className="text-lg text-muted-foreground max-w-xl mx-auto"> {/* Max-width sedikit diubah */}
              Network Technology • Security Infrastructure • Linux Systems
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              onClick={() => handleScrollToSection('projects')}
              className="px-8"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => handleScrollToSection('contact')}
              className="px-8"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6 mb-16">
            <a
              href="https://github.com/JarvisADR"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="mailto:jarvis.adriel@binus.ac.id"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com/_jarvis.a_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram Profile"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>

          {/* Scroll down indicator */}
          <button
            onClick={() => handleScrollToSection('about')}
            className="animate-bounce mx-auto block p-2 rounded-full hover:bg-primary/10 transition-colors"
            aria-label="Scroll to About section"
          >
            <ArrowDown className="w-6 h-6 text-foreground" /> {/* Tambah text color */}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;