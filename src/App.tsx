import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { CssBaseline } from '@mui/material'

import NavBar from '@components/navbar/navbar'

import TablePage from '@pages/table/table'

import './styles/main.scss'

const App = () => (
    <Router>
        <CssBaseline>
            <NavBar />

            <Routes>
                <Route path="/" element={<TablePage />} />
            </Routes>
        </CssBaseline>
    </Router>
)

export default App
