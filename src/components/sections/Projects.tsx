import { AnimatePresence, motion } from 'framer-motion';
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
    X,
} from 'lucide-react';
import { SectionProps } from '@/lib/models'
import { useEffect, useState } from 'react';

const MotionCard = motion.create(Card);

export default function Projects({ containerVariants, itemVariants }: SectionProps) {

    const [selectedProject, setSelectedProject] = useState<number | null>(null);

    useEffect(() => {
        if (selectedProject !== null) {
          // Bloque le scroll
          document.body.style.overflow = 'hidden';
        } else {
          // Rétablit le scroll
          document.body.style.overflow = 'auto';
        }
    
        // Nettoie l'effet lors du démontage du composant
        return () => {
          document.body.style.overflow = 'auto';
        };
      }, [selectedProject]);

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
            actions: [
                'Création et setup des environnements front et back',
                'Chiffrage des développements',
                'Développement d\'interfaces',
                'Gestions d\'api interne et externe (DataGouv / Sepatools)',
                'Tests unitaires'
            ],
            team: '5 développeurs / 1 chef de projet / 1 product owner'
        },
        {
            id: 2,
            title: 'Développeur Front Angular| Rexel',
            description: `Amélioration et maintenance de plusieurs plateformes pour Rexel, BtoB, BtoC et Tests automatisés pour les applications mobiles`,
            image: 'https://www.smartbuildingsalliance.org/wp-content/uploads/2023/09/REXEL_vignette-portrait-membre-SBA.jpg',
            technologies: ['Angular', 'Overkiz', '.net'],
            actions: [
                'Création et setup des environnements front et back',
                'Chiffrage des développements',
                'Développement d\'interfaces',
                'Gestions d\'api interne et externe (DataGouv / Sepatools)',
                'Tests unitaires'
            ],
            team: '5 développeurs / 1 chef de projet / 1 product owner'
        },
        {
            id: 3,
            title: 'Développeur Front React | Nexans Asset Electrical',
            description: `Création d’une plateforme de simulation pour Nexans sur la base d’un projet open source de Cosmotech. 
      Gestion des données liés aux simulations pour importations, modifications et sauvegarde en amont.`,
            image: 'https://fret21.eu/wp-content/uploads/2020/11/NEXANS_Logo_CMYK-01-scaled.jpg',
            technologies: ['React'],
            actions: [
                'Création et setup des environnements front et back',
                'Chiffrage des développements',
                'Développement d\'interfaces',
                'Gestions d\'api interne et externe (DataGouv / Sepatools)',
                'Tests unitaires'
            ],
            team: '5 développeurs / 1 chef de projet / 1 product owner'
        },
        {
            id: 4,
            title: 'Développeur Mobile Hybride | Leyton travaux mobile',
            description: `Implémentation de la version mobile Hybride (iOS & Android) de l’application de suivi des travaux de particuliers 
      dans le secteur de Certificats d’Economie d’Energie (CEE) à destination de Leyton (usage interne et ouvert à ses partenaires)`,
            image: 'https://leyton.com/fr/wp-content/uploads/sites/4/2022/04/Construction_HiRes_02_1726x756px.jpg',
            technologies: ['Ionic', 'Angular', 'Java', 'Spring Boot', 'AWS'],
            actions: [
                'Création et setup des environnements front et back',
                'Chiffrage des développements',
                'Développement d\'interfaces',
                'Gestions d\'api interne et externe (DataGouv / Sepatools)',
                'Tests unitaires'
            ],
            team: '5 développeurs / 1 chef de projet / 1 product owner'
        },
        {
            id: 5,
            title: 'Lead Dev Junior Front| Hardis Group Projet Interne',
            description: `Application interne visant à regrouper les évaluations des partenaires et collaborateurs Hardis sur leur satisfaction au sein de l'entreprise.`,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCWTKXgnp88enCEJDdXfcs26aewS-EojjSEA&s',
            technologies: ['Angular', 'Java', 'Spring Boot'],
            actions: [
                'Création et setup des environnements front et back',
                'Chiffrage des développements',
                'Développement d\'interfaces',
                'Gestions d\'api interne et externe (DataGouv / Sepatools)',
                'Tests unitaires'
            ],
            team: '5 développeurs / 1 chef de projet / 1 product owner'
        },
        {
            id: 6,
            title: 'Développeur Front Vuejs  | Itelis',
            description: `Projet de création d’une plateforme digitale pour le compte d’Itelis et à destination de ses partenaires`,
            image: 'https://www.argusdelassurance.com/mediatheque/1/6/6/000012661_624x337_c.jpg',
            technologies: ['Drupal', 'VueJS'],
            actions: [
                'Création et setup des environnements front et back',
                'Chiffrage des développements',
                'Développement d\'interfaces',
                'Gestions d\'api interne et externe (DataGouv / Sepatools)',
                'Tests unitaires'
            ],
            team: '5 développeurs / 1 chef de projet / 1 product owner'
        },
        {
            id: 7,
            title: 'Développeur Full stak Java / Angular | Leyton travaux web',
            description: `Projet de création d’une application de suivi des travaux de particuliers dans le secteur de 
      Certificats d’Economie d’Energie (CEE) à destination de Leyton (usage interne et ouvert à ses partenaires)`,
            image: 'https://leyton.com/fr/wp-content/uploads/sites/4/2022/06/139.jpg',
            technologies: ['Java', 'Spring Boot', 'Angular', 'AWS'],
            actions: [
                'Création et setup des environnements front et back',
                'Chiffrage des développements',
                'Développement d\'interfaces',
                'Gestions d\'api interne et externe (DataGouv / Sepatools)',
                'Tests unitaires'
            ],
            team: '5 développeurs / 1 chef de projet / 1 product owner'
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
                                <Button
                                    variant="outline"
                                    className="w-full text-[#fca311] border-[#fca311] hover:bg-[#fca311] hover:text-[#000000]"
                                    onClick={($event) => {
                                        $event.preventDefault
                                        setSelectedProject(project.id)
                                    }}
                                >
                                    Détail de la mission
                                    <Rocket className="ml-2 h-4 w-4" />
                                </Button>
                            </CardFooter>
                        </div>
                    </MotionCard>
                ))}
            </div>

            <AnimatePresence>
                {selectedProject !== null && (
                    <motion.div
                        layoutId={`project-${selectedProject}`}
                        className="fixed inset-0 z-[800] flex items-center justify-center p-4 bg-black bg-opacity-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-[#14213d] w-full max-w-4xl rounded-lg overflow-hidden relative z-[800]"
                            layoutId={`project-content-${selectedProject}`}
                        >
                            <motion.img
                                layoutId={`project-image-${selectedProject}`}
                                src={projects[selectedProject - 1].image}
                                alt={projects[selectedProject - 1].title}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <motion.h3
                                    layoutId={`project-title-${selectedProject}`}
                                    className="text-2xl font-bold text-[#fca311] mb-4"
                                >
                                    {projects[selectedProject - 1].title}
                                </motion.h3>
                                <motion.p
                                    layoutId={`project-description-${selectedProject}`}
                                    className="text-[#e5e5e5] mb-4"
                                >
                                    {projects[selectedProject - 1].description}
                                </motion.p>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-[#e5e5e5] mb-4 max-h-96 overflow-y-auto"
                                >
                                    <ul className='list-disc list-inside'>
                                        {projects[selectedProject - 1].actions.map((action) => (
                                            <li>{action}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-[#e5e5e5] mb-4 max-h-96 overflow-y-auto"
                                >
                                    {projects[selectedProject - 1].team}
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="flex flex-wrap gap-2 mb-4"
                                >
                                    {projects[selectedProject - 1].technologies.map((tech, index) => (
                                        <Badge
                                            key={index}
                                            variant="secondary"
                                            className="bg-[#000000] text-[#fca311] border border-[#fca311]"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <Button
                                        variant="outline"
                                        className="text-[#ffffff] border-[#d21414] bg-[#d21414] hover:border-[#d21414] hover:bg-[#ffffff] hover:text-[#d21414] absolute top-1 right-1 p-1"
                                        onClick={() => setSelectedProject(null)}
                                    >
                                        <X className="h-4 w-4" />
                                    </Button>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.section>
    )
}