import { Card, CardContent } from '@/components/ui/card';
import { Code, Palette, Users, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const aboutHighlights = [
    {
      icon: Code,
      title: 'Network Technology',
      description: 'Network systems architecture and Linux administration'
    },
    {
      icon: Palette,
      title: 'Security Systems',
      description: 'Network and OS security, threat prevention and analysis'
    },
    {
      icon: Users,
      title: 'System Administration',
      description: 'Linux system management and infrastructure maintenance'
    },
    {
      icon: Lightbulb,
      title: 'System Protection',
      description: 'Implementing security measures against cyber threats'
    }
  ];

  return (
    <section id="about" className="py-20 bg-background"> {/* Hapus background secondary jika tidak perlu */}
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About Me
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Computer Science student specializing in Network Technology at Bina Nusantara University.
              Focused on network systems, security infrastructure, and Linux environments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> {/* Ubah grid cols sedikit */}
            {aboutHighlights.map((item, index) => {
              const IconComp = item.icon;
              return (
                <Card
                  key={index}
                  className="border-border/50 hover:border-primary/30 transition-colors duration-200"
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 mx-auto w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform"> {/* Tambah efek hover */}
                      <IconComp className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-1 text-sm">{item.title}</h3> {/* Ubah margin bottom */}
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p> {/* Tambah leading */}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            {/* Card Education bisa dibiarkan atau sedikit diubah style padding/marginnya */}
            <Card className="border-border/50 max-w-md mx-auto"> {/* Ubah max-width */}
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Education</h3>
                <div className="text-center space-y-1">
                  <p className="font-medium">Bina Nusantara University</p>
                  <p className="text-sm text-muted-foreground">Bachelor of Computer Science</p>
                  <p className="text-sm text-muted-foreground">Network Technology • Expected 2027</p> {/* Ubah format tahun */}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;