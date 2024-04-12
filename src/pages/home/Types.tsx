import TypeCard from './components/TypeCard';

const Types = () => {
  return ( 
    <section className="types py-36 px-[7%] h-full w-full">
      <div className="types-content">
        <h1 className="font-mono text-3xl sm:text-4xl lg:text-6xl text-center">Types of links</h1>

        <div className="links-types mt-8 flex flex-col gap-6">
          <TypeCard 
            title="Socials"
            list={
              <div className="font-mono text-2xl flex flex-col gap-2">
                <p>Github</p>
                <p>LinkedIn</p>
              </div>
            }
          />

          <TypeCard 
            title="Personal Portfolio"
            list={
              <div className="font-mono text-2xl flex flex-col gap-2">
                <p>BookFinder App</p>
                <p>Prodassist</p>
                <p>Coffeeshop App</p>
              </div>
            }
          />
        </div>
      </div>
    </section>
   );
}
 
export default Types;