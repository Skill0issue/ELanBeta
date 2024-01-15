import {Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Competitions from './components/Competitions';
import Events from './components/Events';
import Team from './components/Team';
import Workshops from './components/Workshops';
import SocialCause from './components/SocialCause';
import Litfest from './components/Litfest'
function App() {

  return (
    <>
      <Routes>
      <Route exact path='/' element={<Home />} />
        <Route path='/Events' element={<Events />} />
        <Route path='/Competitions' element={<Competitions />} />
        <Route path='/Litfest' element={<Litfest />} />
        <Route path='/Workshops' element={<Workshops />} />
        <Route path='/Team' element={<Team />} />
        <Route path='/SocialCause' element={<SocialCause/>} />
      </Routes>
    </>
  )
}

export default App
