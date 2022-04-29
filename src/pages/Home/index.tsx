import { Checkbox, TextField, Button } from '@mui/material';
import { useState } from 'react';
import Input from '../../components/Input';

import MainTable from '../../components/MainTable';
import SelectionBox from '../../components/SelectionBox';
import { Container, Content, TableContainer, Title, TableTitle, TableContent, ButtonContainer } from './styles';

const Home = () => {
  const [age, setAge] = useState(0);
  const [heigth, setHeigth] = useState(0);
  const [weight, setWeight] = useState(0);
  const [gender, setGender] = useState('');
  const [apHi, setApHi] = useState(0);
  const [apLo, setApLo] = useState(0);
  const [cholesterol, setCholesterol] = useState('');
  const [glucose, setGlucose] = useState('');
  const [smoking, setSmoking] = useState(false);
  const [alcohol, setAlcohol] = useState(false);
  const [physical, setPhysical] = useState(false);

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

  const rowsObjective = [
    createRow('Age', <TextField value={age} onChange={(e: any) => setAge(e.target.value)} required id="outlined-basic" type="number" label="years" variant="outlined" />),
    createRow('Height', <TextField value={heigth} onChange={(e: any) => setHeigth(e.target.value)} required id="outlined-basic" type="number" label="cm" variant="outlined" />),
    createRow('Weight', <TextField value={weight} onChange={(e: any) => setWeight(e.target.value)} required id="outlined-basic" type="number" label="kg" variant="outlined" />),
    createRow('Gender', <SelectionBox value={gender} onChange={(e: any) => setGender(e.target.value)} label='gender' rows={rowsGender}></SelectionBox>),
  ];
  
  const rowsExamination = [
    createRow('Systolic blood pressure', <Input label="years" value={apHi} onChange={(e: any) => setApHi(e.target.value)}/>),
    createRow('Diastolic blood pressure', <Input label="years" value={apLo} onChange={(e: any) => setApLo(e.target.value)}/>),
    createRow('Cholesterol', <SelectionBox value={cholesterol} onChange={setCholesterol} label='level' rows={rowsLevel}></SelectionBox>),
    createRow('Glucose', <SelectionBox value={glucose} onChange={setGlucose} label='level' rows={rowsLevel}></SelectionBox>),
  ];

  const rowsSubjective = [
    createRow('Smoking', <Checkbox checked={smoking} onChange={() => setSmoking(smoking ? false : true)}/>),
    createRow('Alcohol intake', <Checkbox checked={alcohol} onChange={() => setAlcohol(alcohol ? false : true)}/>),
    createRow('Physical activity', <Checkbox checked={physical} onChange={() => setPhysical(physical ? false : true)}/>),
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