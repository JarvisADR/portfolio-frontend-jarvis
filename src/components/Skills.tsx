import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Palette, Brain, Users, Terminal, ShieldCheck } from 'lucide-react';

const SkillsSection = () => {
  const skillGroups = [
    {
      title: 'Network Systems',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
      skills: ['Network Architecture', 'Linux Administration', 'System Configuration', 'Network Protocols', 'Infrastructure Management']
    },
    {
      title: 'Security & Protection',
      icon: ShieldCheck,
      color: 'from-purple-500 to-pink-500',
      skills: ['Network Security', 'OS Security', 'Threat Analysis', 'Penetration Testing', 'Security Auditing']
    },
    {
      title: 'System Administration',
      icon: Terminal,
      color: 'from-green-500 to-emerald-500',
      skills: ['Linux Administration', 'System Configuration', 'Infrastructure Management', 'Network Monitoring']
    },
    {
      title: 'Development & Soft Skills',
      icon: Users,
      color: 'from-orange-500 to-red-500',
      skills: ['Frontend Development', 'System Design', 'Team Leadership', 'Project Management', 'Communication'] // Tambah skill
    }
  ];

  const techStack = [
    'Linux', 'Network Security', 'System Administration', 'Git',
    'Penetration Testing', 'Network Protocols', 'Infrastructure Management',
    'HTML', 'CSS', 'JavaScript', 'Figma', 'React'
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technical expertise in network systems, security, and system administration.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10"> {/* Ubah grid */}
          {skillGroups.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={index}
                className="border-border/50 hover:border-primary/30 transition-colors group"
              >
                <CardHeader className="pb-2 pt-5"> {/* Ubah padding */}
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color} transition-transform group-hover:scale-105`}> {/* Ganti arah gradient, tambah efek hover */}
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <CardTitle className="text-base">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-2 pb-4"> {/* Ubah padding */}
                  <ul className="space-y-1 text-left ml-2"> {/* Ganti div ke ul, align left */}
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-xs text-muted-foreground list-disc list-inside"> {/* Gunakan list item */}
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Technology Stack */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-center text-lg">My Technology Stack</CardTitle> {/* Ubah judul */}
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 justify-center">
                {techStack.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-3 py-1 text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Experience Highlights bisa dibiarkan */}
        <div className="mt-10 grid grid-cols-3 gap-6 max-w-2xl mx-auto"> {/* Ubah max-width */}
          <Card className="border-border/50 text-center bg-card/50"> {/* Ubah background */}
            <CardContent className="p-5"> {/* Ubah padding */}
              <div className="text-3xl font-bold text-primary mb-1">4+</div>
              <div className="text-xs text-muted-foreground uppercase">Projects</div> {/* Uppercase */}
            </CardContent>
          </Card>
          <Card className="border-border/50 text-center bg-card/50">
            <CardContent className="p-5">
              <div className="text-3xl font-bold text-primary mb-1">1</div>
              <div className="text-xs text-muted-foreground uppercase">Leadership Role</div>
            </CardContent>
          </Card>
          <Card className="border-border/50 text-center bg-card/50">
            <CardContent className="p-5">
              <div className="text-3xl font-bold text-primary mb-1">2027</div>
              <div className="text-xs text-muted-foreground uppercase">Est. Graduation</div> {/* Ubah teks */}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;