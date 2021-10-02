import { useSelector } from "react-redux";

const Digimons = () => {
  const { digimons } = useSelector((state) => state);
  return (
    <div>
      <ul>
        {digimons.map((digimon, index) => {
          return (
            <li key={index}>
              <img src={digimon.img} alt={digimon.name} />
              {digimon.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Digimons;
