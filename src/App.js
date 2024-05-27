import React,{useState} from 'react'

function App(){
  const [val, setVal] = useState('');

  const get_data=()=>{
    fetch('http://localhost:3003/web')
    .then((res)=>res.json())
    .then(res=>{
      localStorage.setItem('data',JSON.stringify(res))
      const stored=localStorage.getItem('data');
      setVal(JSON.parse(stored));
      
    })
  };
   
  return (
    <div>
      <h1>데이터 가져오기</h1>
      <button className='INU' onClick={get_data}>INU</button>
      <pre>{val ? JSON.stringify(val, null, 2) : null}</pre>

    </div>
  )
}

export default App