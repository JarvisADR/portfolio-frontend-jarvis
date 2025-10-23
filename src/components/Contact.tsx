import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Instagram, Github, MapPin, Calendar } from 'lucide-react';

const ContactSection = () => {
  const contactOptions = [
    {
      icon: Mail,
      label: 'Email',
      value: 'jarvis.adriel@binus.ac.id',
      href: 'mailto:jarvis.adriel@binus.ac.id',
      description: 'Best way to reach me for professional inquiries'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+62 812 8950 0267',
      href: 'tel:+6281289500267',
      description: 'Available for calls during business hours'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@_jarvis.a_',
      href: 'https://instagram.com/_jarvis.a_',
      description: 'Follow my journey and projects'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'JarvisADR',
      href: 'https://github.com/JarvisADR',
      description: 'Check out my code and contributions'
    }
  ];

  return (
    <section id="contact" className="py-20 border-t border-border/10"> {/* Tambah border top */}
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Connect
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Feel free to reach out for opportunities, collaborations, or just a chat. {/* Ubah sedikit teks */}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8"> {/* Ubah gap */}
            {/* Contact Methods */}
            <div className="space-y-4">
              {contactOptions.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <Card
                    key={index}
                    className="border-border/50 hover:border-primary/30 transition-colors group"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4"> {/* Tambah space */}
                        <div className="p-2 rounded-lg bg-primary/10 transition-transform group-hover:scale-110"> {/* Tambah hover effect */}
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm">{method.label}</h4>
                          <a
                            href={method.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-muted-foreground hover:text-primary transition-colors truncate block underline-offset-2 hover:underline" // Tambah underline
                          >
                            {method.value}
                          </a>
                          {/* Optional: Add description back if needed */}
                          {/* <p className="text-xs text-muted-foreground/70 mt-1">{method.description}</p> */}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Additional Info */}
            <div className="space-y-4">
              <Card className="border-border/50 bg-card/80"> {/* Ubah background */}
                <CardContent className="p-5"> {/* Ubah padding */}
                  <div className="flex items-start space-x-3 mb-2"> {/* Kurangi margin bottom */}
                    <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" /> {/* Tambah shrink */}
                    <div>
                      <h4 className="font-medium text-sm mb-0.5">Location</h4> {/* Kurangi margin bottom */}
                      <p className="text-sm text-muted-foreground">Jakarta, Indonesia</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/80">
                <CardContent className="p-5">
                  <div className="flex items-start space-x-3">
                    <Calendar className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-medium text-sm mb-2">Available for</h4>
                      <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside"> {/* Ganti styling list */}
                        <li>Internship opportunities</li>
                        <li>Collaborative projects</li>
                        <li>Technical discussions</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button
                className="w-full"
                size="lg"
                asChild
              >
                <a href="mailto:jarvis.adriel@binus.ac.id">
                  <Mail className="w-4 h-4 mr-2" />
                  Send me an Email {/* Ubah teks */}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;