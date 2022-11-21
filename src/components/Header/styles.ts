import styled from 'styled-components';
import { transparentize } from 'polished';

export const Container = styled.header`
  width: 100%;
  padding: 2rem 0 8rem 0;

  background: var(--green-400);

  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const Content = styled.div`
  width: 100%;
  max-width: 74rem;
`

export const NavContainer = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;

  h1 {
      font-size: 3rem;
      font-family: 'Dancing Script', sans-serif;
    }

  div {

    button {
      float: right;
      border: 1px solid transparent;
      border-radius: 8px;
      background: var(--green-500);
      padding: 1rem 2rem;
      color: white;
      outline: 0;
      transition: filter 1s;

      &:hover {
        background: ${transparentize(0.9, "#00B37E")};
        border-color: var(--gray-100);
      }
    }
  }

  div:nth-child(2) {
    display: flex;
    justify-content: center;

    img {
      width: 10rem;
      height: 10rem;
      object-fit: cover;
    }

  }
`

//COMEÇO DOS ESTILOS DO MODAL//
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  h1 {
    padding: 1rem 0;
  }

  input {
    margin: 0.25rem 0;
    padding: 1rem;
    background: var(--background);
    border: 1px solid var(--gray-300);
    border-radius: 8px;
    outline: 0;
  }

  & + input {
    margin-top: 0.5rem;
  }

  button[type=submit] {
    margin: 0.5rem 0;
    padding: 1rem;
    border: 1px solid var(--gray-300);
    border-radius: 8px;
    background-color: var(--green-300);
    color: var(--shape);
    transition: filter 0.1s;

    &:hover {
      filter: brightness(0.9);
      /* background: ${transparentize(0.3, "#00B37E")}; */
    }
  }
`

export const TransactionBoxActions = styled.div`
  display: flex;
  gap: 0.5rem;
`
interface ButtonBoxActionsProps {
  isActive: boolean,
  activeColor: 'red' | 'green';
}

const colors = {
  red: '#E52E40',
  green: '#00966e'
}

export const BoxActions = styled.button<ButtonBoxActionsProps>`
  width: 100%;
  padding: 1rem;
  margin: 0.25rem 0;
  border-radius: 8px;
  border: 1px solid var(--gray-300);

  background: ${(props) => props.isActive
    ? transparentize(0.5, colors[props.activeColor])
    : 'transparent'};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  img {
  width: 24px;
  height: 24px;
}
`
//FIM DOS ESTILOS DO MODAL//


