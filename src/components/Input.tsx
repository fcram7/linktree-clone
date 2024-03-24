interface input {
  placeholder: string,
  type: string
}

const Input = ({ placeholder, type }: input) => {
  return ( 
    <>
      <input type={type} placeholder={placeholder} className="form-input px-3 py-4 rounded-xl border border-neutral-500"  />
    </>
   );
}
 
export default Input;