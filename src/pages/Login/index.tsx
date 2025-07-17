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
            toast.error("Erro ao realizado login!")
        }
    }

    return (
        <motion.div
            initial={{ scaleY: 1.12, opacity: 1 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{ transformOrigin: 'center' }}
            className='divLogin'>
            <div className='divInterna'>
                <div className='leftSide'>
                    <img src="/assets/img/mobile-encryption-animate.svg" alt="" />
                </div>
                <form className='form' onSubmit={submetido}>
                    <Titulo titulo="Login" />

                    <ReactTyped
                        strings={['Olá, faça o login para continuar.']}
                        typeSpeed={50}
                    />
                    <div className='inputs'>
                        <Input delay={0.3} onChange={(e) => setEmail(e.target.value)} type='text' placeholder='Email' icon={<CircleUserRound className='icon' color='rgb(11, 134, 172)'></CircleUserRound>} />
                        <Input delay={0.5} onChange={(e) => setSenha(e.target.value)} type='password' placeholder='Senha' icon={<LockKeyhole className='icon' color='rgb(11, 134, 172)'></LockKeyhole>}></Input>

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

            {/**<Peca forma='M0,0 L18,29.5 L0,39 Z' direcaoX={[0,-10,0]} direcaoY={[0,-5,0]} />
            <Peca forma='M0,40 L19,30 L50,80 L40,100 L0,100Z' direcaoX={[0,-10,0]} direcaoY={[0,10,0]} />
            <Peca forma='M41,100 L50.5,81 L74,85 L87,100 Z' direcaoY={[0,10,0]}/>
            <Peca forma='M88,100 L75,85 L100,79 L100,100 ' direcaoX={[0,10,0]} direcaoY={[0,10,0]}/>
            <Peca forma='M0.5,0 L50,30 L100,0.5 Z' direcaoY={[0,-5,0]} />
            <Peca forma='M100,1.5 L100,30 L74,17 Z' direcaoX={[0,10,0]} />*/}

        </motion.div>


    );
}