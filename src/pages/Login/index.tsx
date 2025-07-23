import './Login.css';
import { Input } from '../../components/Input';
import { BotaoSubmit } from '../../components/BotaoSubmit';
import { CircleUserRound, LockKeyhole } from 'lucide-react';
import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import { Peca } from '../../components/PecasCaixa';
import { Titulo } from '../../components/TituloColorido'
import { motion } from "framer-motion";


export function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function submetido(e: React.FormEvent) {
        e.preventDefault()

        try {
            const response = await api.post('/login',
                {
                    email: email,
                    password: senha
                }
            )
            console.log('Resposta da API:', response.data);
            toast.success("Login realizado com sucesso!")
        }
        catch {
            console.log("erro")
            toast.error("Usuário não cadastrado!")
        }
    }
    

    return (
        <motion.div
            initial={{ scaleY: 1.12, opacity: 1 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease:'linear' }}
            style={{ transformOrigin: 'center' }}
            className='divLogin'>
            <div className='divInterna'>
                <motion.div 
                    initial={{opacity: 0, scale:0.9}}
                    animate={{opacity:1, scale:1}}
                    transition={{ duration: 1, delay:0.3, ease: 'backOut' }}
                    className='leftSide'>
                    <img src="/assets/img/mobile-encryption-animate.svg" alt="" />
                </motion.div>
                <form className='form' onSubmit={submetido}>
                    <Titulo titulo="Login" />

                    <ReactTyped
                        strings={['Olá, faça o login para continuar.']}
                        typeSpeed={50}
                    />
                    <div className='inputs'>
                        <Input delay={0.3} onChange={(e) => setEmail(e.target.value)} type='email' placeholder="Email" icon={<CircleUserRound className='icon' color='rgb(11, 134, 172)'></CircleUserRound>} />
                        <Input delay={0.5} onChange={(e) => setSenha(e.target.value)} type='password' placeholder="Password" icon={<LockKeyhole className='icon' color='rgb(11, 134, 172)'></LockKeyhole>}></Input>

                    </div>
                    <motion.div className='semConta'
                        initial={{opacity:0, scale:0.9}}
                        animate={{opacity:1, scale:1}}
                        transition={{duration:0.5, delay:0.8}}>
                        <span>Sem conta?&nbsp;</span>
                        <Link className='linkRegistrar' rel="icon" to="/register">Criar agora!</Link>
                    </motion.div>
                    <BotaoSubmit delay={1} type='submit' texto='Logar' />
                </form>
                

            </div>

            <Peca forma='M5,50 L95,50 L95,95 L5,95 Z' cor='#5e2de6b7' />
            <Peca forma='M5,5 L95,5 L95,50 L5,50 Z' cor='rgb(11, 134, 172)' />

        </motion.div>


    );
}