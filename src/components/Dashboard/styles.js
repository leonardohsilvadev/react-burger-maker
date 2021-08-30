import styled from 'styled-components'

export const BurgerTable = styled.div`
  max-width: 75rem;
  margin: 0 auto;
`

export const BurgerTableHeading = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-weight: bold;
  padding: 0.75rem;
  border-bottom: 0.188rem solid #333;
`

export const OrderId = styled.div`
  width: 5%;
`

export const Field = styled.div`
  width: 15%;
`

export const BurgerTableRows = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

export const BurgerTableRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 0.75rem;
  border-bottom: 0.063rem solid #CCC;
`

export const OrderNumber = styled.div`
  width: 5%;
`

export const ListContainer = styled.ul`
  padding: 0;
`

export const ListItem = styled.li``

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Select = styled.select`
  padding: 1rem 0.75rem;
  margin-right: 0.75rem;
`

export const Option = styled.option``

export const Button = styled.button`
  background-color: #222;
  color: #FCBA03;
  font-weight: bold;
  border: 0.125rem solid #222;
  padding: 0.625rem;
  font-size: 1rem;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.5s;
  margin-left: 0.75rem;

  &:hover {
    background-color: transparent;
    color: #222;
  }
`