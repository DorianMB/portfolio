import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { Label } from './components/ui/label';
import {
  ChevronDown,
  Rocket,
  Star,
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
} from 'lucide-react';
import { useRef } from 'react';

const MotionCard = motion(Card);

export default function Portfolio() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const aboutSectionRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

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
      title: 'Cosmic E-commerce Platform',
      description: 'A full-stack e-commerce solution for intergalactic trade.',
      image: 'https://learn.g2.com/hubfs/iStock-1135541613.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      link: '/projects/cosmic-e-commerce',
    },
    {
      id: 2,
      title: 'Asteroid Management System',
      description:
        'A collaborative tool for tracking and managing near-Earth objects.',
      image: 'https://learn.g2.com/hubfs/iStock-1135541613.jpg',
      technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Chart.js'],
      link: '/projects/asteroid-management',
    },
    {
      id: 3,
      title: 'AI-powered Space Chatbot',
      description:
        'An intelligent chatbot for answering queries about space exploration.',
      image: 'https://learn.g2.com/hubfs/iStock-1135541613.jpg',
      technologies: ['Python', 'TensorFlow', 'Flask', 'React'],
      link: '/projects/space-chatbot',
    },
  ];

  const { scrollY } = useScroll();

  // Fonction pour générer des positions aléatoires
  const getRandomPosition = (min: number, max: number) =>
    ((Math.floor(Math.random() * (max - min + 1)) + min) / max) * 100;

  // Fonction pour générer un décalage Y avec scroll
  const getScrollTransform = (minScroll: number, maxScroll: number) =>
    useTransform(scrollY, [0, 500], [minScroll, maxScroll]);

  // Positions aléatoires pour chaque icône
  const iconsParallaxLeft = [
    {
      icon: <Rocket className="mr-2 h-8 w-8" />,
      top: getRandomPosition(0, 300),
      left: getRandomPosition(0, 300),
      y: getScrollTransform(0, 100),
    },
    {
      icon: <Eclipse className="mr-2 h-6 w-6" />,
      top: getRandomPosition(50, 400),
      left: getRandomPosition(50, 400),
      y: getScrollTransform(0, 150),
    },
    {
      icon: <Orbit className="mr-2 h-10 w-10" />,
      top: getRandomPosition(100, 500),
      left: getRandomPosition(100, 500),
      y: getScrollTransform(0, 200),
    },
    {
      icon: <Telescope className="mr-2 h-12 w-12" />,
      top: getRandomPosition(150, 600),
      left: getRandomPosition(150, 600),
      y: getScrollTransform(0, 250),
    },
    {
      icon: <Satellite className="mr-2 h-8 w-8" />,
      top: getRandomPosition(200, 700),
      left: getRandomPosition(200, 700),
      y: getScrollTransform(0, 300),
    },
    {
      icon: <MoonStar className="mr-2 h-8 w-8" />,
      top: getRandomPosition(250, 800),
      left: getRandomPosition(250, 800),
      y: getScrollTransform(0, 350),
    },
    {
      icon: <Sparkle className="mr-2 h-10 w-10" />,
      top: getRandomPosition(300, 900),
      left: getRandomPosition(300, 900),
      y: getScrollTransform(-100, 300),
    },
    {
      icon: <Sparkles className="mr-2 h-6 w-6" />,
      top: getRandomPosition(350, 1000),
      left: getRandomPosition(350, 1000),
      y: getScrollTransform(50, 400),
    },
    {
      icon: <Moon className="mr-2 h-14 w-14" />,
      top: getRandomPosition(400, 1100),
      left: getRandomPosition(400, 1100),
      y: getScrollTransform(-50, 300),
    },
    {
      icon: <StarIcon className="mr-2 h-6 w-6" />,
      top: getRandomPosition(450, 1200),
      left: getRandomPosition(450, 1200),
      y: getScrollTransform(0, 400),
    },
    {
      icon: <Rocket className="mr-2 h-8 w-8" />,
      top: getRandomPosition(0, 300),
      left: getRandomPosition(0, 300),
      y: getScrollTransform(0, 100),
    },
    {
      icon: <Eclipse className="mr-2 h-6 w-6" />,
      top: getRandomPosition(50, 400),
      left: getRandomPosition(50, 400),
      y: getScrollTransform(0, 150),
    },
    {
      icon: <Orbit className="mr-2 h-10 w-10" />,
      top: getRandomPosition(100, 500),
      left: getRandomPosition(100, 500),
      y: getScrollTransform(0, 200),
    },
    {
      icon: <Telescope className="mr-2 h-12 w-12" />,
      top: getRandomPosition(150, 600),
      left: getRandomPosition(150, 600),
      y: getScrollTransform(0, 250),
    },
    {
      icon: <Satellite className="mr-2 h-8 w-8" />,
      top: getRandomPosition(200, 700),
      left: getRandomPosition(200, 700),
      y: getScrollTransform(0, 300),
    },
    {
      icon: <MoonStar className="mr-2 h-8 w-8" />,
      top: getRandomPosition(250, 800),
      left: getRandomPosition(250, 800),
      y: getScrollTransform(0, 350),
    },
    {
      icon: <Sparkle className="mr-2 h-10 w-10" />,
      top: getRandomPosition(300, 900),
      left: getRandomPosition(300, 900),
      y: getScrollTransform(-100, 300),
    },
    {
      icon: <Sparkles className="mr-2 h-6 w-6" />,
      top: getRandomPosition(350, 1000),
      left: getRandomPosition(350, 1000),
      y: getScrollTransform(50, 400),
    },
    {
      icon: <Moon className="mr-2 h-14 w-14" />,
      top: getRandomPosition(400, 1100),
      left: getRandomPosition(400, 1100),
      y: getScrollTransform(-50, 300),
    },
    {
      icon: <StarIcon className="mr-2 h-6 w-6" />,
      top: getRandomPosition(450, 1200),
      left: getRandomPosition(450, 1200),
      y: getScrollTransform(0, 400),
    },
  ];

  const iconsParallaxRight = [
    {
      icon: <Rocket className="mr-2 h-8 w-8" />,
      top: getRandomPosition(0, 300),
      left: getRandomPosition(0, 300),
      y: getScrollTransform(0, 100),
    },
    {
      icon: <Eclipse className="mr-2 h-6 w-6" />,
      top: getRandomPosition(50, 400),
      left: getRandomPosition(50, 400),
      y: getScrollTransform(0, 150),
    },
    {
      icon: <Orbit className="mr-2 h-10 w-10" />,
      top: getRandomPosition(100, 500),
      left: getRandomPosition(100, 500),
      y: getScrollTransform(0, 200),
    },
    {
      icon: <Telescope className="mr-2 h-12 w-12" />,
      top: getRandomPosition(150, 600),
      left: getRandomPosition(150, 600),
      y: getScrollTransform(0, 250),
    },
    {
      icon: <Satellite className="mr-2 h-8 w-8" />,
      top: getRandomPosition(200, 700),
      left: getRandomPosition(200, 700),
      y: getScrollTransform(0, 300),
    },
    {
      icon: <MoonStar className="mr-2 h-8 w-8" />,
      top: getRandomPosition(250, 800),
      left: getRandomPosition(250, 800),
      y: getScrollTransform(0, 350),
    },
    {
      icon: <Sparkle className="mr-2 h-10 w-10" />,
      top: getRandomPosition(300, 900),
      left: getRandomPosition(300, 900),
      y: getScrollTransform(-100, 300),
    },
    {
      icon: <Sparkles className="mr-2 h-6 w-6" />,
      top: getRandomPosition(350, 1000),
      left: getRandomPosition(350, 1000),
      y: getScrollTransform(50, 400),
    },
    {
      icon: <Moon className="mr-2 h-14 w-14" />,
      top: getRandomPosition(400, 1100),
      left: getRandomPosition(400, 1100),
      y: getScrollTransform(-50, 300),
    },
    {
      icon: <StarIcon className="mr-2 h-6 w-6" />,
      top: getRandomPosition(450, 1200),
      left: getRandomPosition(450, 1200),
      y: getScrollTransform(0, 400),
    },
    {
      icon: <Rocket className="mr-2 h-8 w-8" />,
      top: getRandomPosition(0, 300),
      left: getRandomPosition(0, 300),
      y: getScrollTransform(0, 100),
    },
    {
      icon: <Eclipse className="mr-2 h-6 w-6" />,
      top: getRandomPosition(50, 400),
      left: getRandomPosition(50, 400),
      y: getScrollTransform(0, 150),
    },
    {
      icon: <Orbit className="mr-2 h-10 w-10" />,
      top: getRandomPosition(100, 500),
      left: getRandomPosition(100, 500),
      y: getScrollTransform(0, 200),
    },
    {
      icon: <Telescope className="mr-2 h-12 w-12" />,
      top: getRandomPosition(150, 600),
      left: getRandomPosition(150, 600),
      y: getScrollTransform(0, 250),
    },
    {
      icon: <Satellite className="mr-2 h-8 w-8" />,
      top: getRandomPosition(200, 700),
      left: getRandomPosition(200, 700),
      y: getScrollTransform(0, 300),
    },
    {
      icon: <MoonStar className="mr-2 h-8 w-8" />,
      top: getRandomPosition(250, 800),
      left: getRandomPosition(250, 800),
      y: getScrollTransform(0, 350),
    },
    {
      icon: <Sparkle className="mr-2 h-10 w-10" />,
      top: getRandomPosition(300, 900),
      left: getRandomPosition(300, 900),
      y: getScrollTransform(-100, 300),
    },
    {
      icon: <Sparkles className="mr-2 h-6 w-6" />,
      top: getRandomPosition(350, 1000),
      left: getRandomPosition(350, 1000),
      y: getScrollTransform(50, 400),
    },
    {
      icon: <Moon className="mr-2 h-14 w-14" />,
      top: getRandomPosition(400, 1100),
      left: getRandomPosition(400, 1100),
      y: getScrollTransform(-50, 300),
    },
    {
      icon: <StarIcon className="mr-2 h-6 w-6" />,
      top: getRandomPosition(450, 1200),
      left: getRandomPosition(450, 1200),
      y: getScrollTransform(0, 400),
    },
  ];

  // svg footer
  const svgFooter = [
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-2 h-6 w-6 fill-[#fca311] hover:fill-[#e5e5e5]"
    >
      <title>GitHub</title>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>,
    <Linkedin className="mx-2 h-6 w-6" />,
    <Mail className="mx-2 h-6 w-6" />,
  ];

  return (
    <div className="min-h-screen bg-[#000000] text-[#e5e5e5] w-screen">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover opacity-10"></div>
      </div>
      <header className="container mx-auto px-4 py-8 relative">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="flex items-center mb-4 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-20 h-20 mr-4 rounded-full overflow-hidden border-4 border-[#fca311] shadow-lg">
              <img
                src="https://www.peterallan.fr/media/2F0TGPZMT2F0040U0KEQQ0.jpg"
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
            transition={{ duration: 0.5 }}
          >
            <a href="#about" className="hover:text-[#fca311] transition-colors">
              About
            </a>
            <a
              href="#projects"
              className="hover:text-[#fca311] transition-colors"
            >
              Projects
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
              right: para.left + 'vw',
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
            transition={{ duration: 0.5 }}
          >
            Full Stack Developer
          </motion.h2>
          <motion.p
            className="text-2xl mb-8 text-[#e5e5e5]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Launching robust and scalable web applications into the digital
            universe
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-[#fca311] hover:bg-[#e5e5e5] text-[#000000] hover:text-[#14213d]"
              onClick={scrollToAbout}
            >
              <Rocket className="mr-2 h-4 w-4" />
              Explore My Work
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
            About Me
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants}>
              <p className="mb-4 text-lg text-[#e5e5e5]">
                I'm a passionate full stack developer with 5 years of experience
                in building web applications. My expertise spans both front-end
                and back-end technologies, allowing me to create comprehensive
                solutions for complex problems across the digital galaxy.
              </p>
              <p className="text-lg text-[#e5e5e5]">
                I love exploring new technologies and am always looking for ways
                to improve my skills and stay up-to-date with the latest
                industry trends in our ever-expanding digital universe.
              </p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-4 text-[#fca311]">
                Skills
              </h3>
              <ul className="grid grid-cols-2 gap-4">
                {[
                  'JavaScript',
                  'TypeScript',
                  'React',
                  'Node.js',
                  'Python',
                  'SQL',
                  'MongoDB',
                  'Docker',
                ].map((skill) => (
                  <motion.li
                    key={skill}
                    className="flex items-center bg-[#14213d] rounded-full px-4 py-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Star className="mr-2 text-[#fca311]" size={18} />
                    {skill}
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
            My Galaxy of Projects
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
                        className="bg-[#000000] text-[#fca311] border border-[#fca311]"
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
                      Launch Project
                      <Rocket className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardFooter>
              </MotionCard>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="contact"
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
            Contact Mission Control
          </motion.h2>
          <MotionCard
            className="max-w-md mx-auto bg-[#14213d] border border-[#fca311]"
            variants={itemVariants}
          >
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-center text-[#fca311]">
                Send a Transmission
              </CardTitle>
              <CardDescription className="text-center text-[#e5e5e5]">
                Ready to launch your next project? Send me a message!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[#fca311]">
                    Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="bg-[#000000] border-[#fca311] text-[#e5e5e5] placeholder-[#e5e5e5] focus:ring-[#fca311] focus:border-[#fca311]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#fca311]">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-[#000000] border-[#fca311] text-[#e5e5e5] placeholder-[#e5e5e5] focus:ring-[#fca311] focus:border-[#fca311]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[#fca311]">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="bg-[#000000] border-[#fca311] text-[#e5e5e5] placeholder-[#e5e5e5] focus:ring-[#fca311] focus:border-[#fca311] min-h-[100px]"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#fca311] hover:bg-[#e5e5e5] text-[#000000] hover:text-[#14213d]"
                >
                  Launch Message
                  <Rocket className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </MotionCard>
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
            {svgFooter.map((svgEle, index) => (
              <motion.a
                key={index}
                href="#"
                className="text-[#fca311] hover:text-[#e5e5e5] transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {svgEle}
              </motion.a>
            ))}
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-[#e5e5e5]"
          >
            &copy; 2023 Dorian Marques. All rights reserved across the galaxy.
          </motion.p>
        </div>
      </footer>
    </div>
  );
}
