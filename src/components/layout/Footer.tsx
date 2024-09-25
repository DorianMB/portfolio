import "@flaticon/flaticon-uicons/css/all/all.css";
import { motion } from 'framer-motion';
import {
  Linkedin,
  Mail,
} from 'lucide-react';

export default function Footer() {

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

  return (
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
  );
}
