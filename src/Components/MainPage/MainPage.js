import React, {useState} from "react";
import { MainContainer, Form, Input } from "./styles";

function MainPage() {
const [nome, setNome] = useState("")
const [idade, setIdade] = useState("")
const [email, setEmail]= useState("")

const onChangeNome=(event)=>{
setNome(event.target.value)
}
const onChangeIdade=(event)=>{
  setIdade(event.target.value)
  }
  const onChangeEmail=(event)=>{
    setEmail(event.target.value)
    }
    const dados =()=> {
      const usuario ={
      nome: nome,
      idade: idade,
      email: email
}; 
setNome("");
setIdade("");
setEmail("");
return console.log(usuario)    
}
  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Nome:
          <Input value={nome} onChange={onChangeNome}/>
        </label>
        <label>
          Idade:
          <Input value={idade} onChange={onChangeIdade}/>
        </label>
        <label>
          E-mail:
          <Input value={email} onChange={onChangeEmail}/>
        </label>
        <button onClick={dados}>Enviar dados</button>
      </Form>
    </MainContainer>
  );
}

export default MainPage;
