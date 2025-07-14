import './register.css'
import { Input } from '../../components/Input';
import { CircleUserRound, LockKeyhole } from 'lucide-react'
import { ReactTyped } from "react-typed"
import { BotaoSubmit } from '../../components/BotaoSubmit';
import { Link } from 'react-router-dom'
import { useState, useEffect} from 'react';

export function Register(){

    const [email, setEmail] = useState('');
    const [senha,setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    const aoSalvar = (event: React.FormEvent) =>{
        event.preventDefault()
        console.log(`Formulario submetido!\nemail: ${email}, senha: ${senha}, confirmar senha: ${confirmarSenha}`)
    }

    return(
        <div className='divRegister'>
            <div className='leftSide'>
                <img src="../../public/assets/img/mobile-encryption-animate.svg" alt="" />
            </div>
            <form className='form' onSubmit={aoSalvar}>
                <h1 className='title'>Register</h1>
                <ReactTyped
                    strings={['Olá, preencha o formulário abaixo e registre-se.']}
                    typeSpeed={50}
                />
                <div className='inputs'>
                    <Input onChange={(e) => setEmail(e.target.value)} type='text' placeholder='Email' icon={<CircleUserRound className='icon' color='rgb(11, 134, 172)'></CircleUserRound>}/>
                    <Input onChange={(e) => setSenha(e.target.value)} type='password' placeholder='Senha' icon={<LockKeyhole className='icon' color='rgb(11, 134, 172)'></LockKeyhole>}></Input>
                    <Input onChange={(e) => setConfirmarSenha(e.target.value)} type='password' placeholder='Repita a senha' icon={<LockKeyhole className='icon' color='rgb(11, 134, 172)'></LockKeyhole>}></Input>
                    Já é cadastrado?
                    <Link className='linkRegistrar' rel="icon" to="/"> Logar agora!</Link>
                </div>
                <BotaoSubmit type='submit' texto='Registrar-se'/>
                
            </form>
            
            <svg className="fundoCiano"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0,0 L50,80 L74,85 L100,77 L100,30 L65,5 L100,5 L100,100 L0,100 Z "
                    fill="rgb(11, 161, 172)"
                />
            </svg>
                        
        </div>
        
    );
}