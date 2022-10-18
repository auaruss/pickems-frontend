import Select from 'react-select';
import teams from '../../pages/data/teams.json';
import { useState, useRef } from 'react' 
import { useMutation } from '@apollo/client'
import selectionStyles from './selectionStyles';
import './AddGameCard.css';
import { ADD_GAME_MUTATION } from '../../mutations/game-mutations';

export default function AddGameCard({ weekId }) {
  const selectHomeInputRef = useRef();
  const selectAwayInputRef = useRef();
  const [home, setHome] = useState('');
  const [away, setAway] = useState('');

  const [addGame] = useMutation(ADD_GAME_MUTATION, {
    variables: {
      home,
      away,
      winner: home,
      weekId
    },
    refetchQueries: [
      'GetGamesByWeekId'
    ]
  });


  const clearInputs = () => {
    // Not sure why clearValue doesnt work here, but this seems to work.
    // Would like a more elegant solution.
    selectHomeInputRef.current.selectOption(0)
    selectAwayInputRef.current.selectOption(0)
  };

  return (
    <form className='game-card' onSubmit={(e) => {
      e.preventDefault()
      try {
        addGame();
        clearInputs();
      } catch (e) {
        // handle your error state here
      }
    }}>
      <Select
        ref={selectHomeInputRef}
        options={teams.map(team => ({
          value: team.code,
          label: team.name
        }))}
        onChange={team => setAway(team.value)}
        styles={selectionStyles}
      />
      <p className="add-at">@</p>
      <Select
        ref={selectAwayInputRef}
        options={teams.map(team => ({
          value: team.code,
          label: team.name
        }))}
        onChange={team => setHome(team.value)}
        styles={selectionStyles}
      />
      <button type="submit">add game to season</button>
    </form>
  );
}
