import { useState } from 'react'
import CustomInput from './ui/CustomInput';

function Inputs() {
  const [input, setInput] = useState('');

  return (
    <div className='flex flex-col space-y-4'>
        <CustomInput
            value={input}
            onChange={(e)=>{setInput(e.target.value)}}
            placeholder="Input Field"
            design={'basic'}
        />
        <CustomInput
            value={input}
            onChange={(e)=>{setInput(e.target.value)}}
            placeholder="Input Field"
            design={'search'}
        />
        <CustomInput
            value={input}
            onChange={(e)=>{setInput(e.target.value)}}
            placeholder="Input Field"
            design={'label'}
            label={'Floating Label'}
        />

        <CustomInput
            value={input}
            onChange={(e)=>{setInput(e.target.value)}}
            placeholder="Input Field"
            design={'label-more'}
            label={'Floating Label'}
            labelMore={'this is kang'}
        />
    </div>
  )
}

export default Inputs
