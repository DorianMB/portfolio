import { useEffect, useState } from 'react';
import "@flaticon/flaticon-uicons/css/all/all.css";
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Button } from './components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './components/ui/card';
import { Badge } from './components/ui/badge';
import {
  ChevronDown,
  Rocket,
  Eclipse,
  Orbit,
  Telescope,
  Satellite,
  MoonStar,
  Sparkle,
  Sparkles,
  Moon,
  StarIcon,
  Linkedin,
  Mail,
  Code,
  Coffee,
  Bug,
  Pizza,
  SquareTerminal,
} from 'lucide-react';
import { useRef } from 'react';

const MotionCard = motion(Card);

const useCountUp = (end: number, duration: number = 2, start: number = 0) => {
  const [count, setCount] = useState(start)
  const nodeRef = useRef<HTMLSpanElement>(null)
  const isInView = useInView(nodeRef, { once: true })

  useEffect(() => {
    let startTime: number | null = null
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      setCount(Math.floor(progress * (end - start) + start))
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    if (isInView) {
      animationFrame = requestAnimationFrame(animate)
    }

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, start, isInView])

  return { count, ref: nodeRef }
}

export default function Portfolio() {

  const aboutSectionRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    if (aboutSectionRef.current) {
      aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

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

  const achievements = [
    { number: 750000, label: "Lignes de code écrites", icon: <Code className="h-8 w-8 text-[#fca311]" /> },
    { number: 10, label: "Projets complétés", icon: <Rocket className="h-8 w-8 text-[#fca311]" /> },
    { number: 1800, label: "Cafés consommés", icon: <Coffee className="h-8 w-8 text-[#fca311]" /> },
    { number: 50, label: "Bugs quantiques résolus", icon: <Bug className="h-8 w-8 text-[#fca311]" /> },
    { number: 500, label: "Pizzas commandées en urgence", icon: <Pizza className="h-8 w-8 text-[#fca311]" /> },
    { number: 100, label: "Nuits blanches passées à coder", icon: <Moon className="h-8 w-8 text-[#fca311]" /> },
    { number: 666, label: "Projets personnels commencés", icon: <SquareTerminal className="h-8 w-8 text-[#fca311]" /> },
    { number: 200, label: "Heures passées sur Stack Overflow", icon: <svg className="h-8 w-8 fill-[#fca311]" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Stack Overflow</title><path d="M15.725 0l-1.72 1.277 6.39 8.588 1.716-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.465l-.905 1.94 9.702 4.517.904-1.94-9.701-4.517zm-1.85 4.86l-.44 2.093 10.473 2.201.44-2.092-10.473-2.203zM1.89 15.47V24h19.19v-8.53h-2.133v6.397H4.021v-6.396H1.89zm4.265 2.133v2.13h10.66v-2.13H6.154Z"/></svg> },
  ]

  const { scrollY } = useScroll();

  // Fonction pour générer un décalage Y avec scroll
  const getRandomNum = (min: number, max: number, multi: number) => {
    const value = (Math.floor(Math.random() * (max - min + 1)) * multi);
    return value > 1 ? value : 1;
  };

  // Fonction pour générer des positions aléatoires
  const getRandomPosition = (min: number, max: number) =>
    ((Math.floor(Math.random() * (max - min + 1)) + min) / max) * 100;

  // Fonction pour générer un décalage Y avec scroll
  const getScrollTransform = (minScroll: number, maxScroll: number) => {
    return useTransform(scrollY, [0, 500], [getRandomNum(minScroll, 0, 1), getRandomNum(0, maxScroll, 1)]);
  }

  // Fonction pour générer un décalage Y avec scroll
  const getRotation = () => (Math.floor(Math.random() * (360 - 0 + 1)));

  // Positions aléatoires pour chaque icône
  let iconsParallaxLeft = [
    // part 1
    {
      icon: <Rocket className={`mr-2 h-4 w-4`} />,
      top: getRandomPosition(0, 2000),
      left: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <Eclipse className={`mr-2 h-4 w-4`} />,
      top: getRandomPosition(0, 2000),
      left: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <Orbit className={`mr-2 h-4 w-4`} />,
      top: getRandomPosition(0, 2000),
      left: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <Telescope className={`mr-2 h-4 w-4`} />,
      top: getRandomPosition(0, 2000),
      left: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <Satellite className={`mr-2 h-4 w-4`} />,
      top: getRandomPosition(0, 2000),
      left: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <MoonStar className={`mr-2 h-4 w-4`} />,
      top: getRandomPosition(0, 2000),
      left: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <Sparkle className={`mr-2 h-4 w-4`} />,
      top: getRandomPosition(0, 2000),
      left: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <Sparkles className={`mr-2 h-4 w-4`} />,
      top: getRandomPosition(0, 2000),
      left: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <Moon className={`mr-2 h-4 w-4`} />,
      top: getRandomPosition(0, 2000),
      left: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <StarIcon className={`mr-2 h-4 w-4`} />,
      top: getRandomPosition(0, 2000),
      left: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <i className={`fi fi-rs-world mr-2 flex scale-[1]`}></i>,
      top: getRandomPosition(0, 2000),
      left: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <i className={`fi fi-rs-galaxy-alt mr-2 flex scale-[1]`}></i>,
      top: getRandomPosition(0, 2000),
      left: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <i className={`fi fi-rs-space-shuttle mr-2 flex scale-[1]`}></i>,
      top: getRandomPosition(0, 2000),
      left: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <i className={`fi fi-rs-meteor mr-2 flex scale-[1]`}></i>,
      top: getRandomPosition(0, 2000),
      left: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <i className={`fi fi-rs-galaxy-star mr-2 flex scale-[1]`}></i>,
      top: getRandomPosition(0, 2000),
      left: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <i className={`fi fi-rs-ufo mr-2 flex scale-[1]`}></i>,
      top: getRandomPosition(0, 2000),
      left: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <i className={`fi fi-rs-user-astronaut mr-2 flex scale-[1]`}></i>,
      top: getRandomPosition(0, 2000),
      left: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    // part 2
    {
      icon: <Rocket className={`mr-2 h-8 w-8`} />,
      top: getRandomPosition(0, 2000),
      left: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <Eclipse className={`mr-2 h-8 w-8`} />,
      top: getRandomPosition(0, 2000),
      left: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <Orbit className={`mr-2 h-8 w-8`} />,
      top: getRandomPosition(0, 2000),
      left: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <Telescope className={`mr-2 h-8 w-8`} />,
      top: getRandomPosition(0, 2000),
      left: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <Satellite className={`mr-2 h-8 w-8`} />,
      top: getRandomPosition(0, 2000),
      left: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <MoonStar className={`mr-2 h-8 w-8`} />,
      top: getRandomPosition(0, 2000),
      left: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <Sparkle className={`mr-2 h-8 w-8`} />,
      top: getRandomPosition(0, 2000),
      left: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <Sparkles className={`mr-2 h-8 w-8`} />,
      top: getRandomPosition(0, 2000),
      left: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <Moon className={`mr-2 h-8 w-8`} />,
      top: getRandomPosition(0, 2000),
      left: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <StarIcon className={`mr-2 h-8 w-8`} />,
      top: getRandomPosition(0, 2000),
      left: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <i className={`fi fi-rs-world mr-2 flex scale-[2]`}></i>,
      top: getRandomPosition(0, 2000),
      left: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <i className={`fi fi-rs-galaxy-alt mr-2 flex scale-[2]`}></i>,
      top: getRandomPosition(0, 2000),
      left: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <i className={`fi fi-rs-space-shuttle mr-2 flex scale-[2]`}></i>,
      top: getRandomPosition(0, 2000),
      left: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <i className={`fi fi-rs-meteor mr-2 flex scale-[2]`}></i>,
      top: getRandomPosition(0, 2000),
      left: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <i className={`fi fi-rs-galaxy-star mr-2 flex scale-[2]`}></i>,
      top: getRandomPosition(0, 2000),
      left: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <i className={`fi fi-rs-ufo mr-2 flex scale-[2]`}></i>,
      top: getRandomPosition(0, 2000),
      left: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <i className={`fi fi-rs-user-astronaut mr-2 flex scale-[2]`}></i>,
      top: getRandomPosition(0, 2000),
      left: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    // part 3
    {
      icon: <Rocket className={`mr-2 h-12 w-12`} />,
      top: getRandomPosition(0, 2000),
      left: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <Eclipse className={`mr-2 h-12 w-12`} />,
      top: getRandomPosition(0, 2000),
      left: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <Orbit className={`mr-2 h-12 w-12`} />,
      top: getRandomPosition(0, 2000),
      left: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <Telescope className={`mr-2 h-12 w-12`} />,
      top: getRandomPosition(0, 2000),
      left: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <Satellite className={`mr-2 h-12 w-12`} />,
      top: getRandomPosition(0, 2000),
      left: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <MoonStar className={`mr-2 h-12 w-12`} />,
      top: getRandomPosition(0, 2000),
      left: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <Sparkle className={`mr-2 h-12 w-12`} />,
      top: getRandomPosition(0, 2000),
      left: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <Sparkles className={`mr-2 h-12 w-12`} />,
      top: getRandomPosition(0, 2000),
      left: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <Moon className={`mr-2 h-12 w-12`} />,
      top: getRandomPosition(0, 2000),
      left: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <StarIcon className={`mr-2 h-12 w-12`} />,
      top: getRandomPosition(0, 2000),
      left: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <i className={`fi fi-rs-world mr-2 flex scale-[4]`}></i>,
      top: getRandomPosition(0, 2000),
      left: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <i className={`fi fi-rs-galaxy-alt mr-2 flex scale-[4]`}></i>,
      top: getRandomPosition(0, 2000),
      left: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <i className={`fi fi-rs-space-shuttle mr-2 flex scale-[4]`}></i>,
      top: getRandomPosition(0, 2000),
      left: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <i className={`fi fi-rs-meteor mr-2 flex scale-[4]`}></i>,
      top: getRandomPosition(0, 2000),
      left: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <i className={`fi fi-rs-galaxy-star mr-2 flex scale-[4]`}></i>,
      top: getRandomPosition(0, 2000),
      left: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <i className={`fi fi-rs-ufo mr-2 flex scale-[4]`}></i>,
      top: getRandomPosition(0, 2000),
      left: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <i className={`fi fi-rs-user-astronaut mr-2 flex scale-[4]`}></i>,
      top: getRandomPosition(0, 2000),
      left: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
  ];

  let iconsParallaxRight = [
    // part 1
    {
      icon: <Rocket className={`mr-2 h-4 w-4`} />,
      top: getRandomPosition(0, 2000),
      right: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <Eclipse className={`mr-2 h-4 w-4`} />,
      top: getRandomPosition(0, 2000),
      right: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <Orbit className={`mr-2 h-4 w-4`} />,
      top: getRandomPosition(0, 2000),
      right: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <Telescope className={`mr-2 h-4 w-4`} />,
      top: getRandomPosition(0, 2000),
      right: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <Satellite className={`mr-2 h-4 w-4`} />,
      top: getRandomPosition(0, 2000),
      right: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <MoonStar className={`mr-2 h-4 w-4`} />,
      top: getRandomPosition(0, 2000),
      right: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <Sparkle className={`mr-2 h-4 w-4`} />,
      top: getRandomPosition(0, 2000),
      right: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <Sparkles className={`mr-2 h-4 w-4`} />,
      top: getRandomPosition(0, 2000),
      right: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <Moon className={`mr-2 h-4 w-4`} />,
      top: getRandomPosition(0, 2000),
      right: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <StarIcon className={`mr-2 h-4 w-4`} />,
      top: getRandomPosition(0, 2000),
      right: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <i className={`fi fi-rs-world mr-2 flex scale-[1]`}></i>,
      top: getRandomPosition(0, 2000),
      right: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <i className={`fi fi-rs-galaxy-alt mr-2 flex scale-[1]`}></i>,
      top: getRandomPosition(0, 2000),
      right: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <i className={`fi fi-rs-space-shuttle mr-2 flex scale-[1]`}></i>,
      top: getRandomPosition(0, 2000),
      right: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <i className={`fi fi-rs-meteor mr-2 flex scale-[1]`}></i>,
      top: getRandomPosition(0, 2000),
      right: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <i className={`fi fi-rs-galaxy-star mr-2 flex scale-[1]`}></i>,
      top: getRandomPosition(0, 2000),
      right: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <i className={`fi fi-rs-ufo mr-2 flex scale-[1]`}></i>,
      top: getRandomPosition(0, 2000),
      right: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <i className={`fi fi-rs-user-astronaut mr-2 flex scale-[1]`}></i>,
      top: getRandomPosition(0, 2000),
      right: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    // part 2
    {
      icon: <Rocket className={`mr-2 h-8 w-8`} />,
      top: getRandomPosition(0, 2000),
      right: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <Eclipse className={`mr-2 h-8 w-8`} />,
      top: getRandomPosition(0, 2000),
      right: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <Orbit className={`mr-2 h-8 w-8`} />,
      top: getRandomPosition(0, 2000),
      right: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <Telescope className={`mr-2 h-8 w-8`} />,
      top: getRandomPosition(0, 2000),
      right: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <Satellite className={`mr-2 h-8 w-8`} />,
      top: getRandomPosition(0, 2000),
      right: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <MoonStar className={`mr-2 h-8 w-8`} />,
      top: getRandomPosition(0, 2000),
      right: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <Sparkle className={`mr-2 h-8 w-8`} />,
      top: getRandomPosition(0, 2000),
      right: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <Sparkles className={`mr-2 h-8 w-8`} />,
      top: getRandomPosition(0, 2000),
      right: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <Moon className={`mr-2 h-8 w-8`} />,
      top: getRandomPosition(0, 2000),
      right: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <StarIcon className={`mr-2 h-8 w-8`} />,
      top: getRandomPosition(0, 2000),
      right: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <i className={`fi fi-rs-world mr-2 flex scale-[2]`}></i>,
      top: getRandomPosition(0, 2000),
      right: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <i className={`fi fi-rs-galaxy-alt mr-2 flex scale-[2]`}></i>,
      top: getRandomPosition(0, 2000),
      right: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <i className={`fi fi-rs-space-shuttle mr-2 flex scale-[2]`}></i>,
      top: getRandomPosition(0, 2000),
      right: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <i className={`fi fi-rs-meteor mr-2 flex scale-[2]`}></i>,
      top: getRandomPosition(0, 2000),
      right: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <i className={`fi fi-rs-galaxy-star mr-2 flex scale-[2]`}></i>,
      top: getRandomPosition(0, 2000),
      right: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <i className={`fi fi-rs-ufo mr-2 flex scale-[2]`}></i>,
      top: getRandomPosition(0, 2000),
      right: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <i className={`fi fi-rs-user-astronaut mr-2 flex scale-[2]`}></i>,
      top: getRandomPosition(0, 2000),
      right: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    // part 3
    {
      icon: <Rocket className={`mr-2 h-12 w-12`} />,
      top: getRandomPosition(0, 2000),
      right: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <Eclipse className={`mr-2 h-12 w-12`} />,
      top: getRandomPosition(0, 2000),
      right: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <Orbit className={`mr-2 h-12 w-12`} />,
      top: getRandomPosition(0, 2000),
      right: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <Telescope className={`mr-2 h-12 w-12`} />,
      top: getRandomPosition(0, 2000),
      right: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <Satellite className={`mr-2 h-12 w-12`} />,
      top: getRandomPosition(0, 2000),
      right: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <MoonStar className={`mr-2 h-12 w-12`} />,
      top: getRandomPosition(0, 2000),
      right: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <Sparkle className={`mr-2 h-12 w-12`} />,
      top: getRandomPosition(0, 2000),
      right: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <Sparkles className={`mr-2 h-12 w-12`} />,
      top: getRandomPosition(0, 2000),
      right: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <Moon className={`mr-2 h-12 w-12`} />,
      top: getRandomPosition(0, 2000),
      right: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <StarIcon className={`mr-2 h-12 w-12`} />,
      top: getRandomPosition(0, 2000),
      right: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <i className={`fi fi-rs-world mr-2 flex scale-[4]`}></i>,
      top: getRandomPosition(0, 2000),
      right: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <i className={`fi fi-rs-galaxy-alt mr-2 flex scale-[4]`}></i>,
      top: getRandomPosition(0, 2000),
      right: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <i className={`fi fi-rs-space-shuttle mr-2 flex scale-[4]`}></i>,
      top: getRandomPosition(0, 2000),
      right: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <i className={`fi fi-rs-meteor mr-2 flex scale-[4]`}></i>,
      top: getRandomPosition(0, 2000),
      right: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <i className={`fi fi-rs-galaxy-star mr-2 flex scale-[4]`}></i>,
      top: getRandomPosition(0, 2000),
      right: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <i className={`fi fi-rs-ufo mr-2 flex scale-[4]`}></i>,
      top: getRandomPosition(0, 2000),
      right: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
    {
      icon: <i className={`fi fi-rs-user-astronaut mr-2 flex scale-[4]`}></i>,
      top: getRandomPosition(0, 2000),
      right: getRandomPosition(0, 2000),
      y: getScrollTransform(0, 700),
      rotate: getRotation()
    },
  ];

  //skills
  const skills = [
    {
      name: 'Javascript',
      icon: <svg role="img" className="mx-2 h-6 w-6 fill-[#fca311]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>JavaScript</title><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" /></svg>
    },
    {
      name: 'HTML / CSS',
      icon: <svg role="img" className="mx-2 h-6 w-6 fill-[#fca311]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>CSS3</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" /></svg>
    },
    {
      name: 'Angular',
      icon: <svg role="img" className="mx-2 h-6 w-6 fill-[#fca311]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Angular</title><path d="M16.712 17.711H7.288l-1.204 2.916L12 24l5.916-3.373-1.204-2.916ZM14.692 0l7.832 16.855.814-12.856L14.692 0ZM9.308 0 .662 3.999l.814 12.856L9.308 0Zm-.405 13.93h6.198L12 6.396 8.903 13.93Z" /></svg>
    },
    {
      name: 'VueJS',
      icon: <svg role="img" className="mx-2 h-6 w-6 fill-[#fca311]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Vue.js</title><path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z" /></svg>
    },
    {
      name: 'React',
      icon: <svg role="img" className="mx-2 h-6 w-6 fill-[#fca311]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>React</title><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" /></svg>
    },
    {
      name: 'NodeJS',
      icon: <svg role="img" className="mx-2 h-6 w-6 fill-[#fca311]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Node.js</title><path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" /></svg>
    },
    {
      name: 'NestJS',
      icon: <svg role="img" className="mx-2 h-6 w-6 fill-[#fca311]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>NestJS</title><path d="M14.131.047c-.173 0-.334.037-.483.087.316.21.49.49.576.806.007.043.019.074.025.117a.681.681 0 0 1 .013.112c.024.545-.143.614-.26.936-.18.415-.13.861.086 1.22a.74.74 0 0 0 .074.137c-.235-1.568 1.073-1.803 1.314-2.293.019-.428-.334-.713-.613-.911a1.37 1.37 0 0 0-.732-.21zM16.102.4c-.024.143-.006.106-.012.18-.006.05-.006.112-.012.161-.013.05-.025.1-.044.149-.012.05-.03.1-.05.149l-.067.142c-.02.025-.031.05-.05.075l-.037.055a2.152 2.152 0 0 1-.093.124c-.037.038-.068.081-.112.112v.006c-.037.031-.074.068-.118.1-.13.099-.278.173-.415.266-.043.03-.087.056-.124.093a.906.906 0 0 0-.118.099c-.043.037-.074.074-.111.118-.031.037-.068.08-.093.124a1.582 1.582 0 0 0-.087.13c-.025.05-.043.093-.068.142-.019.05-.037.093-.05.143a2.007 2.007 0 0 0-.043.155c-.006.025-.006.056-.012.08-.007.025-.007.05-.013.075 0 .05-.006.105-.006.155 0 .037 0 .074.006.111 0 .05.006.1.019.155.006.05.018.1.03.15.02.049.032.098.05.148.013.03.031.062.044.087l-1.426-.552c-.241-.068-.477-.13-.719-.186l-.39-.093c-.372-.074-.75-.13-1.128-.167-.013 0-.019-.006-.031-.006A11.082 11.082 0 0 0 8.9 2.855c-.378.025-.756.074-1.134.136a12.45 12.45 0 0 0-.837.174l-.279.074c-.092.037-.18.08-.266.118l-.205.093c-.012.006-.024.006-.03.012-.063.031-.118.056-.174.087a2.738 2.738 0 0 0-.236.118c-.043.018-.086.043-.124.062a.559.559 0 0 1-.055.03c-.056.032-.112.063-.162.094a1.56 1.56 0 0 0-.148.093c-.044.03-.087.055-.124.086-.006.007-.013.007-.019.013-.037.025-.08.056-.118.087l-.012.012-.093.074c-.012.007-.025.019-.037.025-.031.025-.062.056-.093.08-.006.013-.019.02-.025.025-.037.038-.074.069-.111.106-.007 0-.007.006-.013.012a1.742 1.742 0 0 0-.111.106c-.007.006-.007.012-.013.012a1.454 1.454 0 0 0-.093.1c-.012.012-.03.024-.043.036a1.374 1.374 0 0 1-.106.112c-.006.012-.018.019-.024.03-.05.05-.093.1-.143.15l-.018.018c-.1.106-.205.211-.317.304-.111.1-.229.192-.347.273a3.777 3.777 0 0 1-.762.421c-.13.056-.267.106-.403.149-.26.056-.527.161-.756.18-.05 0-.105.012-.155.018l-.155.037-.149.056c-.05.019-.099.044-.148.068-.044.031-.093.056-.137.087a1.011 1.011 0 0 0-.124.106c-.043.03-.087.074-.124.111-.037.043-.074.08-.105.124-.031.05-.068.093-.093.143a1.092 1.092 0 0 0-.087.142c-.025.056-.05.106-.068.161-.019.05-.037.106-.056.161-.012.05-.025.1-.03.15 0 .005-.007.012-.007.018-.012.056-.012.13-.019.167C.006 7.95 0 7.986 0 8.03a.657.657 0 0 0 .074.31v.006c.019.037.044.075.069.112.024.037.05.074.08.111.031.031.068.069.106.1a.906.906 0 0 0 .117.099c.149.13.186.173.378.272.031.019.062.031.1.05.006 0 .012.006.018.006 0 .013 0 .019.006.031a1.272 1.272 0 0 0 .08.298c.02.037.032.074.05.111.007.013.013.025.02.031.024.05.049.093.073.137l.093.13c.031.037.069.08.106.118.037.037.074.068.118.105 0 0 .006.006.012.006.037.031.074.062.112.087a.986.986 0 0 0 .136.08c.043.025.093.05.142.069a.73.73 0 0 0 .124.043c.007.006.013.006.025.012.025.007.056.013.08.019-.018.335-.024.65.026.762.055.124.328-.254.6-.688-.036.428-.061.93 0 1.079.069.155.44-.329.763-.862 4.395-1.016 8.405 2.02 8.826 6.31-.08-.67-.905-1.041-1.283-.948-.186.458-.502 1.047-1.01 1.413.043-.41.025-.83-.062-1.24a4.009 4.009 0 0 1-.769 1.562c-.588.043-1.177-.242-1.487-.67-.025-.018-.031-.055-.05-.08-.018-.043-.037-.087-.05-.13a.515.515 0 0 1-.037-.13c-.006-.044-.006-.087-.006-.137v-.093a.992.992 0 0 1 .031-.13c.013-.043.025-.086.044-.13.024-.043.043-.087.074-.13.105-.298.105-.54-.087-.682a.706.706 0 0 0-.118-.062c-.024-.006-.055-.018-.08-.025l-.05-.018a.847.847 0 0 0-.13-.031.472.472 0 0 0-.13-.019 1.01 1.01 0 0 0-.136-.012c-.031 0-.062.006-.093.006a.484.484 0 0 0-.137.019c-.043.006-.086.012-.13.024a1.068 1.068 0 0 0-.13.044c-.043.018-.08.037-.124.056-.037.018-.074.043-.118.062-1.444.942-.582 3.148.403 3.787-.372.068-.75.148-.855.229l-.013.012c.267.161.546.298.837.416.397.13.818.247 1.004.297v.006a5.996 5.996 0 0 0 1.562.112c2.746-.192 4.996-2.281 5.405-5.033l.037.161c.019.112.043.23.056.347v.006c.012.056.018.112.025.162v.024c.006.056.012.112.012.162.006.068.012.136.012.204v.1c0 .03.007.067.007.098 0 .038-.007.075-.007.112v.087c0 .043-.006.08-.006.124 0 .025 0 .05-.006.08 0 .044-.006.087-.006.137-.006.018-.006.037-.006.055l-.02.143c0 .019 0 .037-.005.056-.007.062-.019.118-.025.18v.012l-.037.174v.018l-.037.167c0 .007-.007.02-.007.025a1.663 1.663 0 0 1-.043.168v.018c-.019.062-.037.118-.05.174-.006.006-.006.012-.006.012l-.056.186c-.024.062-.043.118-.068.18-.025.062-.043.124-.068.18-.025.062-.05.117-.074.18h-.007c-.024.055-.05.117-.08.173a.302.302 0 0 1-.019.043c-.006.006-.006.013-.012.019a5.867 5.867 0 0 1-1.742 2.082c-.05.031-.099.069-.149.106-.012.012-.03.018-.043.03a2.603 2.603 0 0 1-.136.094l.018.037h.007l.26-.037h.006c.161-.025.322-.056.483-.087.044-.006.093-.019.137-.031l.087-.019c.043-.006.086-.018.13-.024.037-.013.074-.02.111-.031.62-.15 1.221-.354 1.798-.595a9.926 9.926 0 0 1-3.85 3.142c.714-.05 1.426-.167 2.114-.366a9.903 9.903 0 0 0 5.857-4.68 9.893 9.893 0 0 1-1.667 3.986 9.758 9.758 0 0 0 1.655-1.376 9.824 9.824 0 0 0 2.61-5.268c.21.98.272 1.99.18 2.987 4.474-6.241.371-12.712-1.346-14.416-.006-.013-.012-.019-.012-.031-.006.006-.006.006-.006.012 0-.006 0-.006-.007-.012 0 .074-.006.148-.012.223a8.34 8.34 0 0 1-.062.415c-.03.136-.068.273-.105.41-.044.13-.093.266-.15.396a5.322 5.322 0 0 1-.185.378 4.735 4.735 0 0 1-.477.688c-.093.111-.192.21-.292.31a3.994 3.994 0 0 1-.18.155l-.142.124a3.459 3.459 0 0 1-.347.241 4.295 4.295 0 0 1-.366.211c-.13.062-.26.118-.39.174a4.364 4.364 0 0 1-.818.223c-.143.025-.285.037-.422.05a4.914 4.914 0 0 1-.297.012 4.66 4.66 0 0 1-.422-.025 3.137 3.137 0 0 1-.421-.062 3.136 3.136 0 0 1-.415-.105h-.007c.137-.013.273-.025.41-.05a4.493 4.493 0 0 0 .818-.223c.136-.05.266-.112.39-.174.13-.062.248-.13.372-.204.118-.08.235-.161.347-.248.112-.087.217-.18.316-.279.105-.093.198-.198.291-.304.093-.111.18-.223.26-.334.013-.019.026-.044.038-.062.062-.1.124-.199.18-.298a4.272 4.272 0 0 0 .334-.775c.044-.13.075-.266.106-.403.025-.142.05-.278.062-.415.012-.142.025-.285.025-.421 0-.1-.007-.199-.013-.298a6.726 6.726 0 0 0-.05-.415 4.493 4.493 0 0 0-.092-.415c-.044-.13-.087-.267-.137-.397-.05-.13-.111-.26-.173-.384-.069-.124-.137-.248-.211-.366a6.843 6.843 0 0 0-.248-.34c-.093-.106-.186-.212-.285-.317a3.878 3.878 0 0 0-.161-.155c-.28-.217-.57-.421-.862-.607a1.154 1.154 0 0 0-.124-.062 2.415 2.415 0 0 0-.589-.26Z" /></svg>
    },
    {
      name: 'NuxtJS',
      icon: <svg role="img" className="mx-2 h-6 w-6 fill-[#fca311]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Nuxt.js</title><path d="M13.4642 19.8295h8.9218c.2834 0 .5618-.0723.8072-.2098a1.5899 1.5899 0 0 0 .5908-.5732 1.5293 1.5293 0 0 0 .216-.783 1.529 1.529 0 0 0-.2167-.7828L17.7916 7.4142a1.5904 1.5904 0 0 0-.5907-.573 1.6524 1.6524 0 0 0-.807-.2099c-.2833 0-.5616.0724-.807.2098a1.5904 1.5904 0 0 0-.5907.5731L13.4642 9.99l-2.9954-5.0366a1.5913 1.5913 0 0 0-.591-.573 1.6533 1.6533 0 0 0-.8071-.2098c-.2834 0-.5617.0723-.8072.2097a1.5913 1.5913 0 0 0-.591.573L.2168 17.4808A1.5292 1.5292 0 0 0 0 18.2635c-.0001.2749.0744.545.216.783a1.59 1.59 0 0 0 .5908.5732c.2454.1375.5238.2098.8072.2098h5.6003c2.219 0 3.8554-.9454 4.9813-2.7899l2.7337-4.5922L16.3935 9.99l4.3944 7.382h-5.8586ZM7.123 17.3694l-3.9083-.0009 5.8586-9.8421 2.9232 4.921-1.9572 3.2892c-.7478 1.1967-1.5972 1.6328-2.9163 1.6328z" /></svg>
    },
    {
      name: 'MySQL',
      icon: <svg role="img" className="mx-2 h-6 w-6 fill-[#fca311]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>MySQL</title><path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z" /></svg>
    },
    {
      name: 'MongoDB',
      icon: <svg role="img" className="mx-2 h-6 w-6 fill-[#fca311]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>MongoDB</title><path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" /></svg>
    },
    {
      name: 'Ionic',
      icon: <svg role="img" className="mx-2 h-6 w-6 fill-[#fca311]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Ionic</title><path d="M22.922 7.027l-.103-.23-.169.188c-.408.464-.928.82-1.505 1.036l-.159.061.066.155a9.745 9.745 0 0 1 .75 3.759c0 5.405-4.397 9.806-9.806 9.806-5.409 0-9.802-4.397-9.802-9.802 0-5.405 4.402-9.806 9.806-9.806 1.467 0 2.883.319 4.2.947l.155.075.066-.155a3.767 3.767 0 0 1 1.106-1.453l.197-.159-.225-.117A11.905 11.905 0 0 0 12.001.001c-6.619 0-12 5.381-12 12s5.381 12 12 12 12-5.381 12-12c0-1.73-.361-3.403-1.078-4.973zM12 6.53A5.476 5.476 0 0 0 6.53 12 5.476 5.476 0 0 0 12 17.47 5.476 5.476 0 0 0 17.47 12 5.479 5.479 0 0 0 12 6.53zm10.345-2.007a2.494 2.494 0 1 1-4.988 0 2.494 2.494 0 0 1 4.988 0z" /></svg>
    },
    {
      name: 'Tailwind',
      icon: <svg role="img" className="mx-2 h-6 w-6 fill-[#fca311]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Tailwind CSS</title><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" /></svg>
    },
    {
      name: 'Figma',
      icon: <svg role="img" className="mx-2 h-6 w-6 fill-[#fca311]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Figma</title><path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z" /></svg>
    },
    {
      name: 'Docker',
      icon: <svg role="img" className="mx-2 h-6 w-6 fill-[#fca311]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Docker</title><path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z" /></svg>
    },
  ];

  //icons footer
  const iconsFooter = [
    {
      icon: <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-2 h-6 w-6 fill-[#fca311] hover:fill-[#e5e5e5]"
      >
        <title>GitHub</title>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>,
      url: 'https://github.com/DorianMB'
    },
    {
      icon: <Linkedin className="mx-2 h-6 w-6" />,
      url: 'https://www.linkedin.com/in/dorian-marques-braga-854a14128/'
    },
    {
      icon: <Mail className="mx-2 h-6 w-6" />,
      url: 'mailto:dorian.marques.2e7@gmail.com'
    },
  ];

  //Adjustment of the number of icons according to the screen size
  const screenWidth = window.screen.width;

  if (screenWidth <= 1500 && screenWidth >= 1000) {
    iconsParallaxLeft = iconsParallaxLeft.slice(0, Math.floor(iconsParallaxLeft.length / 1.5));
    iconsParallaxRight = iconsParallaxRight.slice(0, Math.floor(iconsParallaxRight.length / 1.5));
  } else if (screenWidth < 1000) {
    iconsParallaxLeft = iconsParallaxLeft.slice(0, Math.floor(iconsParallaxLeft.length / 2));
    iconsParallaxRight = iconsParallaxRight.slice(0, Math.floor(iconsParallaxRight.length / 2));
  }

  return (
    <div className="min-h-screen bg-[#000000] text-[#e5e5e5] w-full overflow-x-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover opacity-10"></div>
      </div>
      <header className="container mx-auto px-4 py-8 relative">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="flex items-center mb-4 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="relative w-20 h-20 mr-4 rounded-full overflow-hidden border-4 border-[#fca311] shadow-lg">
              <img
                src="https://media.licdn.com/dms/image/v2/C5603AQEJ2oFs_spU9g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1583250393013?e=1732147200&v=beta&t=XyOkyW37mzQ0ERc5FkjN0BJc9l4Vb__ZZd90IlHCjLs"
                alt="Dorian Marques"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#fca311] to-[#e5e5e5]">
              Dorian Marques
            </h1>
          </motion.div>
          <motion.nav
            className="space-x-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <a href="#about"
               className="hover:text-[#fca311] transition-colors">
              A propos de moi
            </a>
            <a
              href="#projects"
              className="hover:text-[#fca311] transition-colors"
            >
              Projets
            </a>
            <a
              href="#contact"
              className="hover:text-[#fca311] transition-colors"
            >
              Contact
            </a>
          </motion.nav>
        </div>
      </header>

      <main className="container mx-auto px-4 relative">
        {/* Parallax Emojis */}
        {iconsParallaxLeft.map((para) => (
          <motion.div
            className={`absolute blur-[2px]`}
            style={{
              y: para.y,
              top: para.top / 1.5 + 'vh',
              left: para.left + 'vw',
              rotate: para.rotate + 'deg',
            }}
          >
            {para.icon}
          </motion.div>
        ))}
        {iconsParallaxRight.map((para) => (
          <motion.div
            className={`absolute blur-[2px]`}
            style={{
              y: para.y,
              top: para.top / 1.5 + 'vh',
              right: para.right + 'vw',
              rotate: para.rotate + 'deg',
            }}
          >
            {para.icon}
          </motion.div>
        ))}
        <section
          id="top"
          className="py-20 text-center flex flex-col justify-center h-section-top relative z-50"
        >
          <motion.h2
            className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#fca311] to-[#e5e5e5]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Full Stack Développeur
          </motion.h2>
          <motion.p
            className="text-2xl mb-8 text-[#e5e5e5] text-stroke"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Lançons ensemble des sites et des applications robustes dans l'univers Internet
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-[#fca311] hover:bg-[#e5e5e5] text-[#000000] hover:text-[#14213d]"
              onClick={scrollToAbout}
            >
              <Rocket className="mr-2 h-4 w-4" />
              Explorez mon travail
            </Button>
          </motion.div>
          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="mx-auto text-[#fca311]" size={32} />
          </motion.div>
        </section>

        <motion.section
          id="about"
          ref={aboutSectionRef}
          className="py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl font-bold mb-8 text-center text-[#fca311]"
            variants={itemVariants}
          >
            A propos de moi
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div variants={itemVariants}>
              <p className="mb-4 text-lg text-[#e5e5e5]">
                Je suis Dorian Marques Braga, développeur fullstack avec une expertise notable dans les 4 grandes technologies JS (Angular / Vue / React, NodeJS).
                Titulaire d’un Master en ingénierie numérique de l’Institut de l’internet et du multimédia à Paris, j’ai acquis une solide formation académique.
                Depuis le début de ma carrière, j’ai travaillé chez Hardis Group, où j’ai contribué à de nombreux projets internes et externes,
                collaborant avec de grandes entreprises. Ces missions m’ont permis de développer des compétences variées et approfondies.
              </p>
              <p className="text-lg text-[#e5e5e5]">
                Fort de cinq ans d’expérience, je maîtrise l’ensemble du cycle de développement, de la conception technique à la livraison du projet.
                Mes compétences en design d'interface / expérience utilisateur et mon expérience en développement agile me permettent de répondre
                efficacement aux besoins des clients. Je suis également certifié en UX/UI et en développement NodeJS, ce qui renforce ma capacité à créer
                des solutions innovantes et performantes.
              </p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-4 text-[#fca311]">
                Compétences
              </h3>
              <ul className="grid grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <motion.li
                    key={skill.name}
                    className="flex items-center bg-[#14213d] rounded-full px-4 py-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill.icon}
                    {skill.name}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="projects"
          className="py-20"
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

        <motion.section
          className="py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl font-bold mb-12 text-center text-[#fca311]"
            variants={itemVariants}
          >
            Mon Univers en quelques chiffres
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const { count, ref } = useCountUp(achievement.number)
              return (
                <motion.div
                  key={index}
                  className="bg-[#14213d] p-6 rounded-lg border border-[#fca311] flex flex-col items-center justify-center space-y-4"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(252, 163, 17, 0.3)' }}
                >
                  {achievement.icon}
                  <span ref={ref} className="text-4xl font-bold text-[#fca311]">
                    {count.toLocaleString()}
                  </span>
                  <span className="text-center text-[#e5e5e5]">{achievement.label}</span>
                </motion.div>
              )
            })}
          </div>
        </motion.section>
      </main>

      <footer className="bg-[#000000] py-8 mt-20 border-t border-[#14213d]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="flex justify-center space-x-4 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {iconsFooter.map((svgEle, index) => (
              <motion.a
                key={index}
                href={svgEle.url}
                className="text-[#fca311] hover:text-[#e5e5e5] transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {svgEle.icon}
              </motion.a>
            ))}
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-[#e5e5e5]"
          >
            &copy; 2024 Dorian Marques. All rights reserved across the galaxy.
          </motion.p>
        </div>
      </footer>
    </div>
  );
}
