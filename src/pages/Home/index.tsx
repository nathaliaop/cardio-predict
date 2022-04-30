import { Checkbox, Button } from '@mui/material';
import { useState } from 'react';
import Input from '../../components/Input';

import api from '../../services/api'

import MainTable from '../../components/MainTable';
import SelectionBox from '../../components/SelectionBox';
import { Container, Content, TableContainer, Title, TableTitle, TableContent, Form } from './styles';
import DateSelector from '../../components/DateSelector';

const Home = () => {
  const d = new Date();
  const newDate = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const [date, setDate] = useState(newDate);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [gender, setGender] = useState(1);
  const [apHi, setApHi] = useState(0);
  const [apLo, setApLo] = useState(0);
  const [cholesterol, setCholesterol] = useState(1);
  const [glucose, setGlucose] = useState(1);
  const [smoking, setSmoking] = useState(0);
  const [alcohol, setAlcohol] = useState(0);
  const [physical, setPhysical] = useState(0);
  const [prediction, setPrediction] = useState('Preencha os campos abaixo');

  // unique id in each child
  // ReactDOM.render no longer getSupportedCodeFixes, use createRoot instead
  // deploy do front
  // loading for response

  const sendMessage = async (e: any) => {
    e.preventDefault();

    if (date === null || height === null || weight === null || gender === null || apHi === null || apLo === null || cholesterol === null || glucose === null) {
      // toastify
      alert('Preencha todos os campos')
      return
    }

    api.post('/predict', {
      year: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDate(),
      height: height,
      weight: weight,
      gender: gender,
      ap_hi: apHi,
      ap_lo: apLo,
      cholesterol: cholesterol,
      gluc: glucose,
      smoke: smoking,
      alco: alcohol,
      active: physical
    })
    .then((response: any) => {
      alert('Cadastro efetuado com sucesso');
      if (response.data === 0) {
        setPrediction('Saudável');
      }
      if (response.data === 1) {
        setPrediction('Em risco');
      }
    })
    .catch((error: any) => {
      console.error(error);
      alert('Ocorreu um erro! Tente novamente.');
    });
  }

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

  const handleDate = (date: any) => {
    setDate(date);
  }

  const rowsObjective = [
    createRow('Date of Birth', <DateSelector value={date} onChange={(date: any) => setDate(date)} newDate={newDate}></DateSelector>),
    createRow('Height', <Input label='cm' value={height} onChange={(e: any) => setHeight(e.target.value)} />),
    createRow('Weight', <Input label='kg' value={weight} onChange={(e: any) => setWeight(e.target.value)} />),
    createRow('Gender', <SelectionBox label='gender' value={gender} onChange={(e: any) => setGender(e.target.value)} rows={rowsGender}></SelectionBox>),
  ];

  const rowsExamination = [
    createRow('Systolic blood pressure', <Input label='' value={apHi} onChange={(e: any) => setApHi(e.target.value)} />),
    createRow('Diastolic blood pressure', <Input label='' value={apLo} onChange={(e: any) => setApLo(e.target.value)} />),
    createRow('Cholesterol', <SelectionBox label='level' value={cholesterol} onChange={(e: any) => setCholesterol(e.target.value)} rows={rowsLevel}></SelectionBox>),
    createRow('Glucose', <SelectionBox label='level' value={glucose} onChange={(e: any) => setGlucose(e.target.value)} rows={rowsLevel}></SelectionBox>),
  ];

  const rowsSubjective = [
    createRow('Smoking', <Checkbox checked={(smoking === 0? false : true)} onChange={() => setSmoking(smoking ? 0 : 1)} />),
    createRow('Alcohol intake', <Checkbox checked={(alcohol === 0? false : true)} onChange={() => setAlcohol(alcohol ? 0 : 1)} />),
    createRow('Physical activity', <Checkbox checked={(physical === 0? false : true)} onChange={() => setPhysical(physical ? 0 : 1)} />),
  ];

  return (
    <Container>
      <Title>Risco de doenças cardiovasculares</Title>
      <h1>{prediction}</h1>
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
            <Form onSubmit={sendMessage}>
              <Button type='submit' variant='contained'>Calculate</Button>
            </Form>
          </TableContent>
        </TableContainer>
      </Content>
    </Container>
  );
}

export default Home;