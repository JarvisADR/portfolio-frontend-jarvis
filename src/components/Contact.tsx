import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, Instagram, Github, MapPin, Calendar } from 'lucide-react';
import { ContactForm } from './ContactForm';

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
    <section id="contact" className="py-20 border-t border-border/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Connect
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hubungi saya melalui salah satu metode di bawah ini, atau kirimkan
              pesan langsung melalui formulir.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {contactOptions.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <Card
                    key={index}
                    className="border-border/50 hover:border-primary/30 transition-colors group"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 rounded-lg bg-primary/10 transition-transform group-hover:scale-110">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm">{method.label}</h4>
                          <a
                            href={method.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-muted-foreground hover:text-primary transition-colors truncate block underline-offset-2 hover:underline"
                          >
                            {method.value}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="space-y-4">
              <Card className="border-border/50 bg-card/80">
                <CardContent className="p-5 space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-medium text-sm mb-0.5">Location</h4>
                      <p className="text-sm text-muted-foreground">Jakarta, Indonesia</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Calendar className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-medium text-sm mb-2">Available for</h4>
                      <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Internship opportunities</li>
                        <li>Collaborative projects</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/80">
                <CardContent className="p-5">
                  <h4 className="font-medium text-sm mb-4">
                    Send a direct message:
                    </h4>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;