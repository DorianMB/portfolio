import { motion } from 'framer-motion';
import { useCountUp } from '@/lib/utils'
import { SectionProps } from '@/lib/models';
import {
  Rocket,
  Moon,
  Code,
  Coffee,
  Bug,
  Pizza,
  SquareTerminal,
} from 'lucide-react';

export default function Stats({ containerVariants, itemVariants }: SectionProps) {

    const achievements = [
        { number: 750000, label: "Lignes de code écrites", icon: <Code className="h-8 w-8 text-[#fca311]" /> },
        { number: 10, label: "Projets complétés", icon: <Rocket className="h-8 w-8 text-[#fca311]" /> },
        { number: 1800, label: "Cafés consommés", icon: <Coffee className="h-8 w-8 text-[#fca311]" /> },
        { number: 50, label: "Bugs quantiques résolus", icon: <Bug className="h-8 w-8 text-[#fca311]" /> },
        { number: 500, label: "Pizzas commandées en urgence", icon: <Pizza className="h-8 w-8 text-[#fca311]" /> },
        { number: 100, label: "Nuits blanches passées à coder", icon: <Moon className="h-8 w-8 text-[#fca311]" /> },
        { number: 666, label: "Projets personnels commencés", icon: <SquareTerminal className="h-8 w-8 text-[#fca311]" /> },
        { number: 200, label: "Heures passées sur Stack Overflow", icon: <svg className="h-8 w-8 fill-[#fca311]" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Stack Overflow</title><path d="M15.725 0l-1.72 1.277 6.39 8.588 1.716-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.465l-.905 1.94 9.702 4.517.904-1.94-9.701-4.517zm-1.85 4.86l-.44 2.093 10.473 2.201.44-2.092-10.473-2.203zM1.89 15.47V24h19.19v-8.53h-2.133v6.397H4.021v-6.396H1.89zm4.265 2.133v2.13h10.66v-2.13H6.154Z" /></svg> },
      ];

    return (
        <motion.section
            className="py-20 relative z-50"
            initial="hidden"
            whileInView="visible"
            id="stats"
            viewport={{ once: true }}
            variants={containerVariants}
        >
            <motion.h2
                className="text-4xl font-bold mb-12 text-center text-[#fca311]"
                variants={itemVariants}
            >
                Mon Univers en quelques chiffres
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                            <span ref={ref} className="text-2xl md:text-4xl font-bold text-[#fca311]">
                                {count.toString()}
                            </span>
                            <span className="text-center text-[#e5e5e5]">{achievement.label}</span>
                        </motion.div>
                    )
                })}
            </div>
        </motion.section>
    )
}