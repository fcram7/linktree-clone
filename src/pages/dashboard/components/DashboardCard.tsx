interface card {
  linksLength: number | undefined
}

const DashboardCard = ({ linksLength }: card) => {
  return ( 
    <>
      <article className="dashboard-card border rounded-xl border-neutral-300 bg-neutral-100">
        <div className="dashboard-card-content px-3 py-5 flex flex-col gap-4">
          <h5>Links Created</h5>
          <h1>{linksLength}</h1>
        </div>
      </article>
    </>
   );
}
 
export default DashboardCard;