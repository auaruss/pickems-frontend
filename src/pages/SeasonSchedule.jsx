
import DisplayOneWeek from '../components/DisplayOneWeek/DisplayOneWeek';

const END_WEEK = 18;

// generates an array with the numbers 1 through END_WEEK (gotta be a positive int)
const WEEKS = [...Array(END_WEEK).keys()].map(n=>n+1)

export default function SeasonSchedule() {
  return (
    <main>
      {
        WEEKS.map(
          (week) => <DisplayOneWeek week={week} key={week} />
        )
      }  
    </main>
  )
}
