import { useAppContext } from '../../hooks/useAppContext';
import './styles.scss';

const Combat = () => {
  const { characters } = useAppContext();
  return (
    <div className="combat">
      {characters.length > 0 ? (
        characters.map((character) => (
          <h1 key={character.id} className="combat-title">
            <img src={character.images.sm} alt={character.name} />
            {character.name}
          </h1>
        ))
      ) : (
        <h1 className="title">Escolha algum personagem</h1>
      )}
    </div>
  );
};

export default Combat;
