import { useState } from "react";
import emailJs from '@emailjs/browser'
export default function Contact() {
  const tabStyles =
    "relative  list-none w-full md:w-[40%] h-15 flex items-center justify-center  text-white font-['Silkscreen'] bg-[url('./assets/img/button.png')] bg-size-[length:100%_100%] bg-cover bg-center bg-no-repeat  p-2 transition border-purple-700 hover:bg-[url('./assets/img/button-hover.png')] hover:bg-size-[length:100%_100%] hover:bg-cover hover:bg-center hover:bg-no-repeat  outline-none";
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const templateParams = {
        from_name: name,
        email: email,
        message: message,
    }
    //@ts-ignore
    function sendEmail(e){
        e.preventDefault();

        if(name === '' || email === '' || message === ''){
            alert("Preencha todos os campos");
            return;
        }
        emailJs.send('service_ozwimhy', 'template_r260bid', templateParams, 'CMuv3zN8fOMN3pIE8')
        .then((response) => {
            console.log('Email enviado com sucesso!', response.status, response.text);
            alert("Email enviado com sucesso!");
            setName("");
            setEmail("");
            setMessage("");
        }, (error) => {
            console.log('Erro ao enviar email:', error);
            alert("Erro ao enviar email");
        });
    }
  return (

    <div className="font-['JetBrains_mono'] flex flex-col gap-4 w-full md:p-4 mt-[-1.5rem]">
      <p className="text-2xl font-bold text-left">Entre em Contato</p>
      <br />
      <hr className="golden"/>
      <br />
      <div className="rpgui-container framed-golden py-6 px-4 flex flex-col items-center gap-4 w-full font-['JetBrains_mono']">
        <form
          action=""
          onSubmit={sendEmail}
          className="w-[95%] flex flex-col items-center gap-4 mt-3"
        >
          <input
            type="text"
            placeholder="Digite Seu Nome"
            className="rpgui-container framed-grey"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
          <input
            type="text"
            placeholder="Digite Seu Email"
            className="rpgui-container framed-grey"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <textarea
            name=""
            id=""
            placeholder="Sua Mensagem"
            className="rpgui-container h-[300px] framed-grey"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            required
          />
          <button className={tabStyles} type="submit" value="enviar">Enviar</button>
        </form>
      </div>
    </div>
  );
}
