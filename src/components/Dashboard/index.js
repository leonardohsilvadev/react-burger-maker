import { Option, Select } from "../BurgerForm/styles";
import { ActionsContainer, BurgerTable, BurgerTableHeading, BurgerTableRow, BurgerTableRows, Button, Field, ListContainer, ListItem, OrderId, OrderNumber } from "./styles";
import { api } from '../../utils/api'
import { useEffect, useState } from "react";

export const Dashboard = () => {
  const [orders, setOrders] = useState([])
  const [statusData, setStatusData] = useState([])
  // const [message, setMessage] = useState('')

  async function getOrders() {
    const url = 'burgers'

    await api
      .get(url)
      .then(({ data }) => setOrders(data))
      .catch(err => console.log('err: ', err)) 
  }

  async function getStatus() {
    const url = 'status'

    await api
      .get(url)
      .then(({ data }) => setStatusData(data))
      .catch(err => console.log('err: ', err))
  }

  async function handleChangeOrderStatus(id, status) {
    const url = `burgers/${id}`
    const data = {
      status
    }

    await api
      .patch(url, data)
      .then(() => {
        // this.handleMessage(`Order ${id} status succesfully updated!`)
        getOrders()
        })
      .catch(err => console.log('err: ', err))
  }

  async function handleDeleteOrder(id) {
    const url = `burgers/${id}`

    await api
      .delete(url)
      .then(() => {
        // this.handleMessage(`Order ${id} succesfully canceled!`)
        getOrders()
        })
      .catch(err => console.log('err: ', err))
  }

  useEffect(() => {
    getOrders()
    getStatus()
  }, [])

  return (
    <>
      {orders.map(({ id, name, bread, meat, optionals, status }) => (
        <BurgerTable key={id}>
          <BurgerTableHeading>
            <OrderId>#</OrderId>
            <Field>Client</Field>
            <Field>Bread</Field>
            <Field>Meat</Field>
            <Field>Optionals</Field>
            <Field>Actions</Field>
          </BurgerTableHeading>

          <BurgerTableRows>
            <BurgerTableRow>
              <OrderNumber>{id}</OrderNumber>
              <Field>{name}</Field>
              <Field>{bread}</Field>
              <Field>{meat}</Field>
              <Field>
                <ListContainer>
                  {optionals.map((optional, index) => <ListItem key={index}>{optional}</ListItem>)}
                </ListContainer>
              </Field>
              <ActionsContainer>
                <Select name="status" value={status} onChange={({ target: { value } }) => handleChangeOrderStatus(id, value)}>
                  {statusData.map(({ id, type }) => <Option key={id} value={type}>{type}</Option>)}
                </Select>
                <Button onClick={() => handleDeleteOrder(id)}>Cancel</Button>
              </ActionsContainer>
            </BurgerTableRow>
          </BurgerTableRows>
        </BurgerTable>
      ))}
    </>
  )
}