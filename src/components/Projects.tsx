import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Figma, Play } from 'lucide-react';

const myProjectsData = [
  {
    title: 'ASPHATL 9: REJENDS',
    type: 'HCI Project • Individual',
    description: 'Responsive frontend website for a racing game, focusing on intuitive user interface and engaging user experience based on Human-Computer Interaction principles.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    impact: [
      'Translated high-energy game feel into clean, navigable design',
      'Structured information architecture for quick access to key details',
      'Created seamless user journey from landing to conversion'
    ],
    links: [
      { type: 'github', url: 'https://github.com/JarvisADR/asphatl-rejends-website.git', label: 'Github Repository' },
      { type: 'figma', url: 'https://www.figma.com/design/2VgEcv1Z9GMFsMAgiTsxyn/HCI-Project?node-id=0-1&t=kEDztMaae6ARDsJV-1', label: 'Figma Design' }
    ],
    gradient: 'from-blue-500 to-purple-600'
  },
  {
    title: 'SMARTRASH',
    type: 'AI Project • Group',
    description: 'Machine learning application that classifies waste as organic or non-organic in real-time via camera input, aimed at improving recycling efficiency.',
    technologies: ['Machine Learning', 'AI Integration', 'UI/UX Design', 'Real-time Processing'],
    impact: [
      'Translated AI concept into user-friendly application',
      'Co-led system design and user flow definition',
      'Integrated AI model into intuitive interface'
    ],
    links: [
      { type: 'demo', url: 'https://drive.google.com/file/d/1huuWbKnayZra55xjT7XMv3egV12AmGSp/view?usp=sharing', label: 'Video Demo' }
    ],
    gradient: 'from-green-500 to-emerald-600'
  },
  {
    title: "McDonald's Redesign",
    type: 'HCI Project • Group Leader',
    description: "Led a team to redesign the McDonald's mobile app, addressing key usability issues like complicated ordering process and lack of search functionality.",
    technologies: ['Figma', 'User Research', 'SUS & UEQ', 'Prototyping'],
    impact: [
      'Simplified user flow, reducing ordering steps significantly',
      'Designed prominent search bar solving key usability issue',
      'Led design process from ideation to high-fidelity prototype'
    ],
    links: [
      { type: 'figma', url: 'https://www.figma.com/design/uBlWnvVsqreNQZ6wd7Y1Db/Redesign-McDonald-s-Mobile-App?node-id=0-1&t=c6YiVrqu0JwpQYyy-1', label: 'Figma Prototype' }
    ],
    gradient: 'from-red-500 to-yellow-500'
  },
  {
    title: "Domino's Redesign",
    type: 'HCI Project • Group (In Progress)',
    description: "Proactive redesign of Domino's Pizza app to address usability pain points and modernize the interface for a smoother ordering experience.",
    technologies: ['Figma', 'User Research', 'Prototyping', 'Collaborative Design'],
    impact: [
      'Designed core ordering and customization flow',
      'Simplified menu navigation and pizza customization',
      'Created cleaner, more visual path to checkout'
    ],
    links: [
      { type: 'figma', url: 'https://www.figma.com/design/eyBPJ408WmahGnWZRMHBxH/DOMINO-PIZZA-APP?node-id=0-1&t=xhrJZfw5RGbFlNvV-1', label: 'Figma Prototype' }
    ],
    gradient: 'from-blue-600 to-red-600',
    status: 'In Progress'
  }
];

const getLinkIcon = (linkType: string) => {
  switch (linkType) {
    case 'github': return Github;
    case 'figma': return Figma;
    case 'demo': return Play;
    default: return ExternalLink;
  }
};


const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my work in HCI, AI integration, and user experience design.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto"> {/* Ubah gap */}
          {myProjectsData.map((project, index) => ( // Gunakan nama variabel baru
            <Card
              key={index}
              className="border-border/50 hover:border-primary/30 transition-all duration-300 ease-in-out hover:shadow-lg" // Tambah transisi dan shadow on hover
            >
              {/* Gradient bar di atas */}
              <div className={`h-1.5 bg-gradient-to-r ${project.gradient} rounded-t-lg`}></div> {/* Buat rounded */}

              <CardHeader className="pt-5 pb-3"> {/* Ubah padding */}
                <div className="flex items-start justify-between mb-1"> {/* Tambah margin bottom */}
                  <div>
                    <CardTitle className="text-lg mb-1">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-xs font-medium text-muted-foreground"> {/* Tambah text color */}
                      {project.type}
                      {project.status && (
                        <Badge variant="secondary" className="ml-2 text-xs font-normal"> {/* Ubah font weight */}
                          {project.status}
                        </Badge>
                      )}
                    </CardDescription>
                  </div>
                  {/* Maybe add an icon or something here later? */}
                </div>
                <p className="text-foreground/80 text-sm mt-2"> {/* Ubah text color */}
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="mb-4">
                  {/* <h4 className="text-xs font-semibold mb-2 text-muted-foreground uppercase tracking-wider">Technologies Used</h4> */} {/* Judul kecil bisa ditambahkan */}
                  <div className="flex flex-wrap gap-1.5"> {/* Ubah gap */}
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs px-2 py-0.5"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-3"> {/* Tambah margin top */}
                  {project.links.map((link, linkIndex) => {
                    const IconComponent = getLinkIcon(link.type);
                    return (
                      <Button
                        key={linkIndex}
                        variant="outline"
                        size="sm"
                        className="text-xs h-8"
                        asChild
                      >
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          <IconComponent className="w-3 h-3 mr-1" /> {/* Ubah margin */}
                          {link.label}
                        </a>
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;