import './CompetitionsBox.scss'

const CompetitionsBox = ({info}) => {
  console.log(info.src) //Debugging
  return (
    <div
      id="CompetitionsBox"  className="items-center inline-block border-2 border-solid group border-rose-800"
    >
      <img src={info.src} alt={info.title} className='object-cover w-screen h-32 mx-auto mb-4 aspect-video rounded-xl'/>
      <h2 className='text-center '>{info.title}</h2>
      <p className='min-h-full line-clamp-[4] group-hover:line-clamp-none transform transition-[line-clamp] '>{info.description}</p>
    </div>
  );
}

export default CompetitionsBox