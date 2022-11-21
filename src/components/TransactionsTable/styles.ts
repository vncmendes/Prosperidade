import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
`
export const Table = styled.table`
  width: 100%;
  border-spacing: 0 0.5rem;
  
  thead {
    th {
      color: var(--text-body);
      font-weight: 400;
      text-align: left;
      padding: 1rem 2rem;
      line-height: 1.5rem;
    }
  }

  tbody {

    tr {
      border-radius: 4px;
    }
      
      td {
        padding: 1rem 2rem;
        background: var(--shape);
        color: var(--text-body);

        &:first-child {
          color: var(--text-title);
        }

        &.deposit {
          color: var(--green-300)
        }

        &.withdraw {
          color: var(--red-1000)
        }
      }
  }
  
`