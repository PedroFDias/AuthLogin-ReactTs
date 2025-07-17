import { motion } from "framer-motion";

export function Titulo({ titulo }: { titulo?: string}) {
    return (
        <motion.h1
            animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
                duration: 5,
                ease: "linear",
                repeat: Infinity,
            }}
            style={{
                backgroundImage: `linear-gradient(90deg, rgba(11,134,172,1), #5e2de6b7, rgba(11,134,172,1))`,
                backgroundSize: "200% 100%",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
            }}
            className='title'
        >
            {titulo}
        </motion.h1>
    );
}