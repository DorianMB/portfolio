import { scrollTo } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Header() {

    return (
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
                            src="https://media.licdn.com/dms/image/v2/C5603AQEJ2oFs_spU9g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1583250392944?e=1741219200&v=beta&t=uC453lt0fp2u-vt9FODhot7zJAnf2bnyUWX7sxqKElk"
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
                    <a onClick={() => scrollTo('about')}
                        className="hover:text-[#fca311] hover:cursor-pointer transition-colors">
                        A propos de moi
                    </a>
                    <a
                        onClick={() => scrollTo('projects')}
                        className="hover:text-[#fca311] hover:cursor-pointer transition-colors"
                    >
                        Projets
                    </a>
                    <a
                        onClick={() => scrollTo('stats')}
                        className="hover:text-[#fca311] hover:cursor-pointer transition-colors"
                    >
                        Quelques chiffres
                    </a>
                </motion.nav>
            </div>
        </header>
    )
}