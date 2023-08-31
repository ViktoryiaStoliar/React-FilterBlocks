import JobPage from "./Page/JobPage/JobPage"
import { Route, Routes } from 'react-router-dom';
import VacancePage from "./Page/VacancyPage/VacancePage";


function App() {

  return (
    <>
      <Routes>
        <Route path={'/'} element={<JobPage />} />
        <Route path={'/vacancy/:id'} element={<VacancePage />} />
      </Routes>
    </>
  )
}

export default App
