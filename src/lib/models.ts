export type ContainerVariants = {
    hidden: {
        opacity: number;
    };
    visible: {
        opacity: number;
        transition: {
            staggerChildren: number;
        };
    };
};

export type ItemVariants = {
    hidden: {
        y: number;
        opacity: number;
    };
    visible: {
        y: number;
        opacity: number;
    };
};

export type SectionProps = {containerVariants: ContainerVariants, itemVariants: ItemVariants}
