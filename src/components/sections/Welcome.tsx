import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  ChevronDown,
  Rocket,
} from 'lucide-react';
import { scrollTo } from '@/lib/utils'

export default function Welcome() {
  return (
    <motion.section
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
        className="text-2xl mb-8 text-[#e5e5e5] drop-shadow"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Propulsons ensemble vos projets web vers de nouveaux horizons
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <Button
          size="lg"
          className="bg-[#fca311] hover:bg-[#e5e5e5] text-[#000000] hover:text-[#14213d]"
          onClick={() => scrollTo('about')}
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
    </motion.section>
  )
}