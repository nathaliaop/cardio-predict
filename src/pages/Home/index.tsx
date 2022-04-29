import { Checkbox, TextField, Button } from '@mui/material';

import MainTable from '../../components/MainTable';
import SelectionBox from '../../components/SelectionBox';
import { Container, Content, TableContainer, Title, TableTitle, TableContent, ButtonContainer } from './styles';

const Home = () => {

  function createSelection(
    name: string,
    value: number,
  ) {
    return { name, value };
  }

  const rowsGender = [
    createSelection('female', 1),
    createSelection('male', 2),
  ];

  const rowsLevel = [
    createSelection('normal', 1),
    createSelection('above normal', 2),
    createSelection('well above normal', 3),
  ];

  function createRow(
    name: string,
    body: any,
  ) {
    return { name, body };
  }

  const rowsSubjective = [
    createRow('Smoking', <Checkbox />),
    createRow('Alcohol intake', <Checkbox />),
    createRow('Physical activity', <Checkbox />),
  ];

  const rowsObjective = [
    createRow('Age', <TextField required id="outlined-basic" type="number" label="years" variant="outlined" />),
    createRow('Height', <TextField required id="outlined-basic" type="number" label="cm" variant="outlined" />),
    createRow('Weight', <TextField required id="outlined-basic" type="number" label="kg" variant="outlined" />),
    createRow('Gender', <SelectionBox label='gender' rows={rowsGender}></SelectionBox>),
  ];

  const rowsExamination = [
    createRow('Systolic blood pressure', <TextField required id="outlined-basic" type="number" label="years" variant="outlined" />),
    createRow('Diastolic blood pressure', <TextField required id="outlined-basic" type="number" label="cm" variant="outlined" />),
    createRow('Cholesterol', <SelectionBox label='level' rows={rowsLevel}></SelectionBox>),
    createRow('Glucose', <SelectionBox label='level' rows={rowsLevel}></SelectionBox>),
  ];

  return (
    <Container>
      <Title>Risco de doenças cardiovasculares</Title>
      <h1>Em risco</h1>
      <Content>
        <TableContainer>
          <TableContent>
            <TableTitle>Objective</TableTitle>
            <MainTable title='Objective' rows={rowsObjective}></MainTable>
          </TableContent>
          <TableContent>
            <TableTitle>Examination</TableTitle>
            <MainTable title='Examination' rows={rowsExamination}></MainTable>
          </TableContent>
          <TableContent>
            <TableTitle>Subjective</TableTitle>
            <MainTable title='Subjective' rows={rowsSubjective}></MainTable>
            <ButtonContainer>
            <Button variant="contained">Calculate</Button>
            </ButtonContainer>
          </TableContent>
        </TableContainer>
      </Content>
    </Container>
  );
}

export default Home;