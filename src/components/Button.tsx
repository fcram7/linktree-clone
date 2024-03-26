interface button {
  type?: "button" | "submit" | undefined,
  text: string,
  onClick?: () => void;
}

const Button = ({ type, text, onClick }: button) => {
  return ( 
    <>
      <button onClick={onClick} type={type} className="bg-neutral-600 transition ease-in-out duration-300 hover:bg-neutral-500 w-[100%] py-2 px-4 text-slate-100 rounded-lg">{text}</button>
    </>
   );
}
 
export default Button;