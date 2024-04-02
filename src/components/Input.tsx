import { ChangeEvent } from 'react';

interface input {
  placeholder: string,
  type: string,
  value: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
}

const Input = ({ placeholder, type, value, onChange }: input) => {
  return ( 
    <>
      <input 
        type={type} 
        placeholder={placeholder} 
        value={value}
        onChange={onChange}
        className="form-input px-3 py-4 rounded-xl border border-neutral-500 focus:outline-sky-600"
      />
    </>
   );
}
 
export default Input;