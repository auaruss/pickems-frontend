import { BrowserRouter as Router, Route, Routes} from  'react-router-dom';
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import SeasonSchedule from './pages/SeasonSchedule'
import SeasonOverview from './pages/SeasonOverview'
import ManagePlayers from './pages/ManagePlayers'
import PlayerInfo from './pages/PlayerInfo'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/season-schedule" element={<SeasonSchedule />}></Route>
        <Route path="/season-overview" element={<SeasonOverview />}></Route>
        <Route path="/manage-players" element={<ManagePlayers />}></Route>
        <Route path="/player-info" element={<PlayerInfo />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  )
}

export default App;
