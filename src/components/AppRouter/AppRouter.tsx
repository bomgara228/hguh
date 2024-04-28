import { Route, Routes } from 'react-router-dom'
import { lazy } from 'react';

const Main = lazy(() => import('../../pages/Main/Main'))
const Home = lazy(() => import('../../pages/Home/Home'));

export const AppRouter = () => (
    <main>
        <Routes>
            <Route path='/main' element={<Main />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='*' element={<div>404</div>}></Route>
        </Routes>
    </main>
)