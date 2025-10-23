import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const AppHeader = () => {
  const [headerScrolled, setHeaderScrolled] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setHeaderScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);
  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${ // Tambah ease-in-out
      headerScrolled ? 'bg-background/90 backdrop-blur-lg border-b border-border/50' : 'bg-transparent' // Ubah opacity, blur, border color, dan state tidak scrolled
    }`}>
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between"> {/* Atur tinggi header */}
        <div className="text-lg font-semibold text-foreground tracking-tight"> {/* Ubah style font */}
          Jarvis Adriel
        </div>

        <div className="hidden md:flex items-center space-x-6"> {/* Ubah space */}
          {/* Ubah button menjadi link atau style berbeda */}
          <button
            onClick={() => handleNavClick('about')}
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            About
          </button>
          <button
            onClick={() => handleNavClick('projects')}
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => handleNavClick('skills')}
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Skills
          </button>
          <Button
            onClick={() => handleNavClick('contact')}
            size="sm"
            variant="ghost"
            className="text-primary hover:bg-primary/10"
          >
            Contact
          </Button>
        </div>

        {/* Mobile menu button - Gunakan icon */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          <Menu className="w-5 h-5" /> {/* Gunakan Menu icon */}
        </Button>
      </nav>
    </header>
  );
};

export default AppHeader;