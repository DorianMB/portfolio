import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
    Rocket,
} from 'lucide-react';
import { SectionProps } from '@/lib/models'

const MotionCard = motion.create(Card);

export default function Projects({ containerVariants, itemVariants }: SectionProps) {

    // list of projects
    const projects = [
        {
            id: 1,
            title: 'Développeur Fullstack JS | La France mutualiste',
            description: `Création d'une plateforme de souscription pour assurance-vie et PER pour La France Mutualiste, 
      gestions du profilage des clients et recommandation d'un profil de gestion pour leur produit financier. 
      Gestion des signatures électroniques des contrats`,
            image: 'https://www.francetransactions.com/local/cache-vignettes/L392xH196/7146f9f25c2cdb8a96593ca815774c-4e243.png?1669044891',
            technologies: ['Vuejs', 'Vite', 'NodeJs', 'NestJS', 'Jest', 'MariaDB'],
            link: '/projects/lfm',
        },
        {
            id: 2,
            title: 'Développeur Front Angular| Rexel',
            description: `Amélioration et maintenance de plusieurs plateformes pour Rexel, BtoB, BtoC et Tests automatisés pour les applications mobiles`,
            image: 'https://www.smartbuildingsalliance.org/wp-content/uploads/2023/09/REXEL_vignette-portrait-membre-SBA.jpg',
            technologies: ['Angular', 'Overkiz', '.net'],
            link: '/projects/rexel',
        },
        {
            id: 3,
            title: 'Développeur Front React | Nexans Asset Electrical',
            description: `Création d’une plateforme de simulation pour Nexans sur la base d’un projet open source de Cosmotech. 
      Gestion des données liés aux simulations pour importations, modifications et sauvegarde en amont.`,
            image: 'https://fret21.eu/wp-content/uploads/2020/11/NEXANS_Logo_CMYK-01-scaled.jpg',
            technologies: ['React'],
            link: '/projects/nexans',
        },
        {
            id: 4,
            title: 'Développeur Mobile Hybride | Leyton travaux mobile',
            description: `Implémentation de la version mobile Hybride (iOS & Android) de l’application de suivi des travaux de particuliers 
      dans le secteur de Certificats d’Economie d’Energie (CEE) à destination de Leyton (usage interne et ouvert à ses partenaires)`,
            image: 'https://leyton.com/fr/wp-content/uploads/sites/4/2022/04/Construction_HiRes_02_1726x756px.jpg',
            technologies: ['Ionic', 'Angular', 'Java', 'Spring Boot', 'AWS'],
            link: '/projects/leyton-mobile',
        },
        {
            id: 5,
            title: 'Lead Dev Junior Front| Hardis Group Projet Interne',
            description: `Application interne visant à regrouper les évaluations des partenaires et collaborateurs Hardis sur leur satisfaction au sein de l'entreprise.`,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCWTKXgnp88enCEJDdXfcs26aewS-EojjSEA&s',
            technologies: ['Angular', 'Java', 'Spring Boot'],
            link: '/projects/collab',
        },
        {
            id: 6,
            title: 'Développeur Front Vuejs  | Itelis',
            description: `Projet de création d’une plateforme digitale pour le compte d’Itelis et à destination de ses partenaires`,
            image: 'https://www.argusdelassurance.com/mediatheque/1/6/6/000012661_624x337_c.jpg',
            technologies: ['Drupal', 'VueJS'],
            link: '/projects/itelis',
        },
        {
            id: 7,
            title: 'Développeur Full stak Java / Angular | Leyton travaux web',
            description: `Projet de création d’une application de suivi des travaux de particuliers dans le secteur de 
      Certificats d’Economie d’Energie (CEE) à destination de Leyton (usage interne et ouvert à ses partenaires)`,
            image: 'https://leyton.com/fr/wp-content/uploads/sites/4/2022/06/139.jpg',
            technologies: ['Java', 'Spring Boot', 'Angular', 'AWS'],
            link: '/projects/leyton',
        },
    ];

    return (
        <motion.section
            id="projects"
            className="py-20 relative z-50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
        >
            <motion.h2
                className="text-4xl font-bold mb-8 text-center text-[#fca311]"
                variants={itemVariants}
            >
                Ma Galaxie de Projets
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <MotionCard
                        key={project.id}
                        className="bg-[#14213d] overflow-hidden border border-[#fca311]"
                        variants={itemVariants}
                        whileHover={{
                            y: -10,
                            boxShadow: '0 0 25px rgba(252, 163, 17, 0.3)',
                        }}
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="flex flex-col justify-between h-content-card">
                            <CardHeader>
                                <CardTitle className="text-[#fca311]">
                                    {project.title}
                                </CardTitle>
                                <CardDescription className="text-[#e5e5e5]">
                                    {project.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, index) => (
                                        <Badge
                                            key={index}
                                            variant="secondary"
                                            className="bg-[#000000] text-[#fca311] border border-[#fca311] hover:bg-[#ffffff]"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter>
                                <a href={project.link} className="w-full">
                                    <Button
                                        variant="outline"
                                        className="w-full text-[#fca311] border-[#fca311] hover:bg-[#fca311] hover:text-[#000000]"
                                    >
                                        Détail de la mission
                                        <Rocket className="ml-2 h-4 w-4" />
                                    </Button>
                                </a>
                            </CardFooter>
                        </div>
                    </MotionCard>
                ))}
            </div>
        </motion.section>
    )
}