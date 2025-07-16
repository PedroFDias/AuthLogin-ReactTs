import './peca.css'
import { motion } from 'framer-motion';

type Pecas = {
    forma?: string,
    cor?: string
}

export function Peca({ forma, cor }: Pecas) {
    return (
        <motion.svg className="fundo"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d={forma}
                fill={cor}
            />
        </motion.svg>
    );
}