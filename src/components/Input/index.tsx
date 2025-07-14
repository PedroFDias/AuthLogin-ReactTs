import './input.css'
import type { ReactNode, ChangeEvent  } from 'react';

type InputProps = {
    placeholder?: string;
    type?: string;
    icon: ReactNode;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export function Input({ placeholder, type ='text', icon, onChange }: InputProps){
    return(
        <div className='box'>
            <input onChange={onChange} type={type} className='input' required/>
            <label className='label'>{placeholder}</label>
            {icon}
        </div>
    );
}