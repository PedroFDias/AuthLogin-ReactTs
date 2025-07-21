import './register.css'
import { Input } from '../../components/Input';
import { CircleUserRound, LockKeyhole, Mail } from 'lucide-react'
import { ReactTyped } from "react-typed"
import { BotaoSubmit } from '../../components/BotaoSubmit';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { api } from '../../services/api'
import { toast } from 'react-toastify';
import { Peca } from '../../components/PecasCaixa';
import { Titulo } from '../../components/TituloColorido'
import { motion } from "framer-motion";


export function Register() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function Registrar(e: React.FormEvent) {
        e.preventDefault()

        try {
            const response = await api.post('/register',
                {
                    name: nome,
                    email: email,
                    password: senha
                }
            )
            toast.success("Registrado com sucesso!")
            console.log(response.data)
        }
        catch {
            toast.error("Erro ao cadastrar usuário!")
        }
    }

    return (

        <motion.div 
            initial={{ scaleY: 0.9, opacity: 1 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 0.5}}
            style={{ transformOrigin: 'center' }} 
            className='divRegister'
            >
            <div className='divInterna'>
                <motion.div 
                    initial={{y:25 }}
                    animate={{y: 0}}
                    transition={{ duration: 1, delay:0.3, ease: 'easeInOut' }}
                    className='leftSide'>
                    <img src="/assets/img/mobile-encryption-animate.svg" alt="" />
                </motion.div>

                <form className='form' onSubmit={Registrar}>
                    <Titulo titulo='Registrar'  />
                    <ReactTyped
                        strings={['Olá, preencha o formulário abaixo e registre-se.']}
                        typeSpeed={50}
                    />
                    <div className='inputs'>
                        <Input delay={0.3} onChange={(e) => setNome(e.target.value)} type='nome' placeholder='Nome' icon={<CircleUserRound className='icon' color='rgb(11, 134, 172)'></CircleUserRound>}></Input>
                        <Input delay={0.5} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' icon={<Mail className='icon' color='rgb(11, 134, 172)'></Mail>} />
                        <Input delay={0.7} onChange={(e) => setSenha(e.target.value)} type='password' placeholder='Senha' icon={<LockKeyhole className='icon' color='rgb(11, 134, 172)'></LockKeyhole>}></Input>
                    </div>
                    <motion.div 
                        initial={{opacity:0, scale:0.9}}
                        animate={{opacity:1, scale:1}}
                        transition={{duration:0.5, delay:0.9}}
                        className='linkPagina'>
                        <span>Já é cadastrado?&nbsp;</span>
                        <Link rel="icon" to="/">Logar agora!</Link>
                    </motion.div>
                    <BotaoSubmit delay={1.2} type='submit' texto='Registrar-se' />

                </form>

            </div>
            <Peca forma='M5,50 L95,50 L95,95 L5,95 Z' cor='#5e2de6b7' />
            <Peca forma='M5,5 L95,5 L95,50 L5,50 Z' cor='rgb(11, 134, 172)' />
        </motion.div>

    );
}