import './botaoSubmit.css'

type Button = {
    type?: string;
    texto?: string;
};

export function BotaoSubmit({texto, type = 'text'} : Button){
    return(
        <input className='botao' type={type} value={texto}></input>        
    );
}