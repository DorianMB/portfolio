import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    X,
} from 'lucide-react';

export default function ModalProject({project, setSelectedProject}: {project: any, setSelectedProject: (value: any) => void}) {
    return (
        <AnimatePresence>
                {project !== null && (
                    <motion.div
                        layoutId={`project-${project.id}`}
                        className="fixed inset-0 z-[800] flex items-center justify-center p-4 bg-black bg-opacity-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-[#14213d] w-full max-w-4xl rounded-lg overflow-y-hidden relative z-[800]"
                            layoutId={`project-content-${project.id}`}
                        >
                            <motion.img
                                layoutId={`project-image-${project.id}`}
                                src={project.image}
                                alt={project.title}
                                className="w-full h-64 md:h-96 object-cover"
                            />
                            <div className="p-6 overflow-y-scroll max-h-[60vh]">
                                <motion.h3
                                    layoutId={`project-title-${project.id}`}
                                    className="text-2xl font-bold text-[#fca311] mb-4"
                                >
                                    {project.title}
                                </motion.h3>
                                <motion.p
                                    layoutId={`project-description-${project.id}`}
                                    className="text-[#e5e5e5] mb-4"
                                >
                                    {project.description}
                                </motion.p>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-[#e5e5e5] mb-4 max-h-96 overflow-y-auto"
                                >
                                    <ul className='list-disc list-inside'>
                                        {project.actions.map((action: string) => (
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
                                    {project.team}
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="flex flex-wrap gap-2 mb-4"
                                >
                                    {project.technologies.map((tech: string, index: number) => (
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
    )
}