import DisplayCardSet from '../DisplayCardSet/DisplayCardSet';
import AddGameCard from '../AddGameCard/AddGameCard'
import { useQuery } from '@apollo/client';
import { getGamesByWeekIdBuilder, GET_WEEK_ID_BY_NUMBER } from '../../queries/game-queries';
import './DisplayOneWeek.css';

export default function DisplayOneWeek({
  week
}) {
  const {
    loading: weekIdLoading,
    error: weekIdError,
    data: weekIdData,
    refetch: weekIdRefetch
  } = useQuery(GET_WEEK_ID_BY_NUMBER, {
    variables: {
      weekNumber:week
    }
  });

  return (
    <div className="display-week">
      <h2 className="week-heading">Week {week}</h2>
      {                         // Since we don't want to display loading twice.
        (weekIdLoading) ? <></> // (Displayed down below.)
        : (weekIdError) ? <p>Error!</p>
        : <AddGameCard
            weekId={weekIdData.getWeekByNumber.id}
            getGamesRefreshName={`GetGamesByWeek${week}Id`}
          />
      }
      {
        (weekIdLoading) ? <p>Loading...</p>
        : (weekIdError) ? weekIdRefetch()
        : <DisplayCardSet
            getGamesQuery={
              getGamesByWeekIdBuilder(week)(weekIdData.getWeekByNumber.id)
            }
          />
      }

      {console.log(weekIdError)}
    </div>
  )
}
