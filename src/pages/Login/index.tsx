import './Login.css'
import { Input } from '../../components/Input'
import { BotaoSubmit } from '../../components/BotaoSubmit';
import { CircleUserRound, LockKeyhole } from 'lucide-react'
import { ReactTyped } from "react-typed"
import { Link } from "react-router-dom";
import { useState } from 'react';
import { api } from '../../services/api'

export function Login(){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function submetido(e: React.FormEvent){
        e.preventDefault()
        
        try{
            const response = await api.post('/login',
                {
                    email: email,
                    password: senha
                }
            )
            console.log('Resposta da API:', response.data);
        }
        catch{
            console.log("erro")
        }
    }

    return(
        <div className='divLogin'> 
            <div className='leftSide'>
                <img src="../../public/assets/img/mobile-encryption-animate.svg" alt="" />
            </div>
            
            <form className='form' onSubmit={submetido}>
                <h1 className='title'>Login</h1>
                <ReactTyped
                    strings={['Olá, faça o login para continuar.']}
                    typeSpeed={50}
                />
                <div className='inputs'>
                    <Input onChange={(e) => setEmail(e.target.value)} type='text' placeholder='Email' icon={<CircleUserRound className='icon' color='rgb(11, 134, 172)'></CircleUserRound>}/>
                    <Input onChange={(e) => setSenha(e.target.value)} type='password' placeholder='Senha' icon={<LockKeyhole className='icon' color='rgb(11, 134, 172)'></LockKeyhole>}></Input>
                    Sem conta?
                <Link className='linkRegistrar' rel="icon" to="/register"> Criar agora!</Link>
                </div>
                <BotaoSubmit type='submit' texto='Logar'/>
            </form>


            <svg className="fundoCiano"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0,0 L50,80 L74,85 L100,77 L100,30 L70,5 L100,5 L100,100 L0,100 Z "
                    fill="rgb(11, 162, 172)"
                />
            </svg>



        </div>
    );
}