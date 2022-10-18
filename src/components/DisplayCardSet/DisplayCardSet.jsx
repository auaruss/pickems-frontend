import { useQuery } from '@apollo/client';
import ExistingGameCard from '../ExistingGameCard/ExistingGameCard';
import { GET_GAMES_BY_WEEK_ID } from '../../queries/game-queries';


export default function DisplayCardSet({ weekId }) {
  const { loading, error, data } = useQuery(GET_GAMES_BY_WEEK_ID, {
    variables: { weekId }
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return (
    <>
    {!loading && !error && data.getGamesByWeekId.map(
        game => (
        <ExistingGameCard
          home={game.home}
          away={game.away}
          className={"game-card"} 
        />
        ))}
    </>
  )
}
