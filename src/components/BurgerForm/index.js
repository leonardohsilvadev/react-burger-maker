import { useEffect, useState } from "react";
import { CheckboxContainer, CheckboxInput, CheckboxTitle, Form, Input, InputContainer, InputLabel, Option, OptionalsContainer, Select, Submit } from "./styles";
import { api } from '../../utils/api'
import { Message } from "../Message";

export const BurgerForm = () => {
  const [breads, setBreads] = useState([])
  const [meats, setMeats] = useState([])
  const [optionals, setOptionals] = useState([])
  const [name, setName] = useState('')
  const [bread, setBread] = useState('')
  const [meat, setMeat] = useState('')
  const [message, setMessage] = useState('')

  async function getIngredients() {
    const url = 'ingredients'

    await api
    .get(url)
    .then(({ data: { meats, optionals, breads } }) => {
      setBreads(breads)
      setMeats(meats)
      setOptionals(optionals.map(o => ({ ...o, checked: false })))
      })
    .catch(err => console.log('err: ', err)) 
  }

  async function handleAddBurger(e) {
    e.preventDefault();
    const url = 'burgers'
    const data = {
      name,
      meat,
      bread,
      optionals: optionals.filter(({ checked }) => checked).map(({ type }) => type),
      status: 'Requested'
    }

    await api
      .post(url, data)
      .then(() => {
        setName('')
        setBread('')
        setMeat('')
        setOptionals(optionals.map(o => ({ ...o, checked: false })))
        handleSuccessMessage()
      })
      .catch(err => console.log('err: ', err))
  }

  function handleChangeBread(value) {
    setBread(value)
  }

  function handleChangeMeat(value) {
    setMeat(value)
  }

  function handleCheckOptional(index) {
    const optionalsCopy = [...optionals]
    const selectedOptional = optionalsCopy[index]
    selectedOptional.checked = !selectedOptional.checked
    setOptionals(optionalsCopy)
  }

  function handleSuccessMessage() {
    setMessage('Order successfully placed')
    setTimeout(() => {
      setMessage('')
    }, 3000)
  }

  useEffect(() => {
    getIngredients()
  }, [])

  return (
    <>
      {message && <Message message={message} />}
      <Form onSubmit={handleAddBurger}>
        <InputContainer>
          <InputLabel>Name</InputLabel>
          <Input
            type="text"
            name="name"
            value={name}
            placeholder="Enter your name"
            onChange={({ target: { value } }) => setName(value)}
          />
        </InputContainer>

        <InputContainer>
          <InputLabel>Choose the bread</InputLabel>
          <Select name="bread" value={bread} onChange={({ target: { value } }) => handleChangeBread(value)}>
            <Option value=""></Option>
            {breads.map(({ id, type }) => <Option key={id} value={type}>{type}</Option>)}
          </Select>
        </InputContainer>

        <InputContainer>
          <InputLabel>Choose the meat</InputLabel>
          <Select name="meat" value={meat} onChange={(({ target: { value } }) => handleChangeMeat(value))}>
            <Option value=""></Option>
            {meats.map(({ id, type }) => <Option key={id} value={type}>{type}</Option>)}
          </Select>
        </InputContainer>

        <InputContainer>
          <InputLabel>Choose the optionals</InputLabel>
          <OptionalsContainer>
          {optionals.map(({ id, type, checked }, index) => (
            <CheckboxContainer key={id} onClick={() => handleCheckOptional(index)}>
              <CheckboxInput type="checkbox" name={type} value={type} checked={checked} readOnly />
              <CheckboxTitle>{type}</CheckboxTitle>
            </CheckboxContainer>
          ))}
          </OptionalsContainer>
        </InputContainer>

        <InputContainer>
          <Submit type="submit" value="place order" />
        </InputContainer>
      </Form>
    </>
  )
}