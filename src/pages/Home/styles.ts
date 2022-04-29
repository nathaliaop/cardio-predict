import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 80%;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 30px;
  font-family: 'Roboto';
  height: 20%;
  padding: 2rem;
`;

export const TableContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;

export const TableContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 55%;
  height: 100%;
  padding: 1.5rem;
`;

export const TableTitle = styled.div`
  font-size: 30px;
  padding: 2rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 2rem;
`;