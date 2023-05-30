import logo from './logo.svg';
import './App.css';
import { main } from './files/main'
import React, { PureComponent, useCallback, useRef, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getLineData } from './adapters/getLineData';
import {Input} from 'reactstrap'

let data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function App() {
  let fileReader;
  const [data, setData] = useState([]);
  const [lines, setLines] = useState([]);
  const newLineName = useRef('');
console.log( newLineName.current.value)
  const handleFileRead = (e) => {
    setData(getLineData(fileReader.result, newLineName.current.value))
    setLines(prev => [...prev, newLineName.current.value])
  }
  const handleFileChosen = (file) => {
    if(!file) return
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead
    fileReader.readAsText(file)
  }
  return (
    <div>
      <Input
        type='file'
        accept='.txt'
        onChange={e => handleFileChosen(e.target.files[0])}
      />
      <input
        className='form-control'
        placeholder='Имя новой диаграммы'
        type='text'
        ref={newLineName}
      />
      <LineChart
        width={1000}
        height={800}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {lines[lines.length-1] && <Line
        key={lines[lines.length-1]}
          type="monotone"
          dataKey={lines[lines.length-1]}
          stroke="#8884d8"
          activeDot={{ r: 1 }}
        />}
       
        {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
      </LineChart>
    </div>
  );
}

export default App;
