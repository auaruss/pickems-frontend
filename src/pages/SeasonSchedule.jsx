import teams from './data/teams'

const END_WEEK = 18;

// generates an array with the numbers 1 through END_WEEK (gotta be a positive int)
const WEEKS = [...Array(END_WEEK).keys()].map(n=>n+1)

export default function SeasonSchedule() {
  return (
    <div>
      <p>
        whoa look its the season schedule!<br/>
        add some games here <br/><br/><br/>
        <form>
          Add a game: <br/>
          <label>week: </label>
          <select name="weeks">
            {
              WEEKS.map(week => (
                <option value={week}>{ week }</option>
              ))
            }
          </select> <br/>
          <label>home team: </label>
          <select name="home-teams">
            {
              teams.map(team => (
                <option value={team.code}>{ team.name }</option>
              ))
            }
          </select>
          <br/>
          <label>home team: </label>
          <select name="away-teams">
            {
              teams.map(team => (
                <option value={team.code}>{ team.name }</option>
              ))
            }
          </select>
        </form>
      </p>
      <button>add game to season! (this doesnt work yet lol)</button>
    </div>
  )
}
