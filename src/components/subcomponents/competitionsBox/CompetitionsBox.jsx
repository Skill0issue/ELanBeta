import './CompetitionsBox.scss'

const CompetitionsBox = ({info}) => {
  return (
    <div
      id="CompetitionsBox"  className="inline-block border-solid border-2 border-rose-800"
    >
      <h2>{info.title}</h2>
      <p>{info.description}</p>
    </div>
  );
}

export default CompetitionsBox