interface button {
  type?: "button" | "submit" | undefined,
  text: string
}

const Button = ({ type, text }: button) => {
  return ( 
    <>
      <button type={type} className="bg-neutral-600 transition ease-in-out duration-300 hover:bg-neutral-500 w-[18%] py-2 text-slate-100 rounded-lg">{text}</button>
    </>
   );
}
 
export default Button;