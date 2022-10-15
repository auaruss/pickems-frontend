import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <p>hey whats up its the pickems app</p>
      <p>
        ur gonna need to add the season schedule before entering picks: <br/>
        <Link to='season-schedule'>Season Schedule</Link></p>
      <p>
        heres where ur gonna manage players <br/>
        <Link to='manage-players'>Manage Players</Link>
      </p>
      <p>
        hey heres where you can see player info maybe its a cool dropdown <br/>
        <Link to='player-info'>Player Info</Link>
      </p>
      <p>
        and for overview we could have <br/>
        <Link to='season-overview'>Season Overview</Link>
      </p>
    </div>
  )
}
