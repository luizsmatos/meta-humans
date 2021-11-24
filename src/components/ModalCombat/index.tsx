import { useEffect, useState } from 'react';
import { useAppContext } from '../../hooks/useAppContext';
import Metahumans from '../../types';
import Details from '../Details';
import Modal from '../Modal';

import './styles.scss';

const ModalCombat = () => {
  const { modalCombat, handleModalCombatClose, characters } = useAppContext();
  const [winner, setWinner] = useState({} as Metahumans);

  useEffect(() => {
    if (characters.length === 2) {
      const stats = Object.keys(characters[0].powerstats);
      let firstCharacterWins = 0;
      let secondCharacterWins = 0;

      stats.forEach((stat) => {
        if (characters[0].powerstats[stat] > characters[1].powerstats[stat]) {
          firstCharacterWins += 1;
        } else {
          secondCharacterWins += 1;
        }
      });

      const whoWon =
        firstCharacterWins > secondCharacterWins
          ? characters[0]
          : characters[1];

      setWinner(whoWon);
    }
  }, [characters]);

  return (
    <Modal isOpen={modalCombat} setIsOpen={handleModalCombatClose}>
      <section className="modal-combat">
        <div className="winner">
          <h2>
            Vencedor: <span>{winner?.name}</span>
          </h2>
        </div>
        <section className="characters">
          {characters[0] && <Details detailsMetaHuman={characters[0]} />}
          {characters[1] && <Details detailsMetaHuman={characters[1]} />}
        </section>
      </section>
    </Modal>
  );
};

export default ModalCombat;
