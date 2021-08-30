import styled from 'styled-components'

export const Nav = styled.div`
  background-color: #222;
   border-bottom: 0.25rem solid #111;
   padding: 0.938rem;
   display: flex;
   align-items: center;

   a {
    color: #FCBA03;
    font-size: 2rem;
    text-decoration: none;
    margin: 0.75rem;
    transition: 0.5s;

    &:hover {
      color: #FFF;
    }
   }
`

export const Logo = styled.img`
  width: 5rem;
  height: 5rem;
`