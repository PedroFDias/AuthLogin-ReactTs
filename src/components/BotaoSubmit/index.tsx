import { div } from 'framer-motion/client';
import './botaoSubmit.css'
import { motion } from "framer-motion";

type Button = {
    type?: string;
    texto?: string;
    delay?: number
};

export function BotaoSubmit({ texto, type = 'text' , delay}: Button) {
    return (
        <motion.input
            initial={{ scale:0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay:delay }}
            className='botao' type={type} value={texto}></motion.input>
    );
}