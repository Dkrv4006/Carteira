
import { Button, Container,TransactionButton } from "./style"
import  Modal  from 'react-modal'
import { FormEvent, useState } from "react";
import { api } from "../../Servers/api";


interface IProps {
  isNewTresictionOpenModal: boolean;
  hadleClose: () => void
}


export const NewTrasation: React.FC<IProps> = ({ isNewTresictionOpenModal,hadleClose}) => {
  const [title, setTitle] = useState('')
  const [valor, setvalor] = useState(0)
  const [category, setcategory] = useState('')
  const [type, settype] = useState('deposit')

  function handleTransection(e: FormEvent) {
    e.preventDefault()

    const data = {
      title,valor,category,type
  
    }

    api.post('/transaction', data)
    hadleClose()

    setTitle('')
    setcategory('')
    setvalor(0)

    
  };
  
  return (
      <Modal
      isOpen={isNewTresictionOpenModal}
      onRequestClose={hadleClose}
      overlayClassName="overlay"
      className="modal"
      >
        <button className="btn" onClick={hadleClose}>
        <i className="fa-solid fa-xmark"></i>
        </button>

    <Container onSubmit={handleTransection}>
      <h2>New transaction</h2>
      <input 
      type="text" 
      value={title}
      placeholder="Titulo"
      onChange={event => setTitle(event.target.value)}

      />
      <input type="Number" value={valor} placeholder="Valor" onChange={event => setvalor(Number(event.target.value))} />

      <TransactionButton>
        <Button 
          className="deposit"
          type="button"
          onClick={() => {settype('deposit')}}
          isType={ type === 'deposit'}
          color={'gren'}
        >
          <i className="fa-solid fa-arrow-trend-up"> </i> deposit
        </Button>

        <Button 
          className="withdraw"
          type="button"
          onClick={() => {settype('withdraw')}}
          isType={ type === 'withdraw'}
          color='red'
          >
          <i className="fa-solid fa-arrow-trend-down"></i> withdraw
        </Button>

      </TransactionButton>

      <input type="text" value={category} placeholder="Categotia" onChange={event => setcategory(event.target.value)} />
      <button className="buttonForm" type="submit">Salva</button>
    </Container>
      </Modal>
  )
}