import { useState } from 'react'
import DisplayOneWeek from '../components/DisplayOneWeek/DisplayOneWeek';
import selectionStyles from '../components/AddGameCard/selectionStyles';
import Select from 'react-select';

const END_WEEK = 18;

// generates an array with the numbers 1 through END_WEEK (gotta be a positive int)
const WEEKS = [...Array(END_WEEK).keys()].map(n=>n+1)

export default function SeasonSchedule() {
  const [week, setWeek ] = useState(1);

  return (
    <main>
      <Select
        options={WEEKS.map(week => ({
          value: week,
          label: `Week ${week}`
        }))}
        onChange={week => setWeek(week.value)}
        styles={selectionStyles}
        defaultValue="Week 1"
      />
      <DisplayOneWeek week={week} />
    </main>
  )
}
