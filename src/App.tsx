import {FC, Suspense, useContext, useState} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import Counter from "./components/Counter";
import './styles/global.scss'
import AboutPage from "./pages/about-page/AboutPage";
import MainPage from "./pages/main=page/MainPage";
import {MainPageAsync} from "./pages/main=page/MainPage.async";
import {AboutPageAsync} from "./pages/about-page/AboutPage.async";
import {Theme, ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";


const App: FC = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Main Page</Link>
            <Link to={'/about'}>About</Link>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                            <Route path={'/about'} element={<AboutPageAsync/>}/>
                            <Route path={'/'} element={<MainPageAsync/>}/>
                    </Routes>
                </Suspense>

        </div>
    );
};

export default App;