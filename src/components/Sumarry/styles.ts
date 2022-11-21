import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 74rem;
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  div:nth-child(3) {
    background: var(--green-300);
    color: var(--shape);
  }

  div {
    background: var(--shape);
    margin-top: -4rem;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 0 5px 2px var(--yellow-500);

    h1 {
      padding: 1rem 0;
    }

    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

  }
`