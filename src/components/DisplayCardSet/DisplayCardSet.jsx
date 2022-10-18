import { useQuery } from '@apollo/client';
import ExistingGameCard from '../ExistingGameCard/ExistingGameCard';

export default function DisplayCardSet({ getGamesQuery }) {
  const { loading, error, data, refetch } = useQuery(getGamesQuery)

  if (loading) return <p>Loading...</p>
  if (error) refetch()
  if (error) return <p>Error!</p>

  return (
    <>
    {!loading && !error && data.getGamesByWeekId.map(
        (game, index) => (
        <ExistingGameCard
          home={game.home}
          away={game.away}
          className={"game-card"} 
          key={index}
        />
        ))}
    </>
  )
}
