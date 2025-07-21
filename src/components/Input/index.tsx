import './input.css'
import type { ReactNode, ChangeEvent  } from 'react';
import { motion } from "framer-motion";

type InputProps = {
    placeholder?: string;
    type?: string;
    icon: ReactNode;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    delay?: number
};

export function Input({ placeholder, type ='text', icon, onChange , delay}: InputProps){
    return(
        <motion.div 
            initial={{opacity:0, scale:0.9}}
            animate={{opacity:1, scale:1}}
            transition={{ duration: 0.5, delay: delay, ease: 'backOut' }}
            className='box'>
            <input onChange={onChange} type={type} className='input' placeholder=" " required/>
            <label className='label'>{placeholder}</label>
            {icon}
        </motion.div>
    );
}