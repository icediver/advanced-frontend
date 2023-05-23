import {FC, Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './styles/global.scss'
import {classNames} from "shared/lib/helpers/classNames/classNames";
import {useTheme} from "app/providers/theme-provider";
import {AboutPage} from "pages/about-page";
import {MainPage} from "pages/main-page";


const App: FC = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Main Page</Link>
            <Link to={'/about'}>About</Link>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                            <Route path={'/about'} element={<AboutPage/>}/>
                            <Route path={'/'} element={<MainPage/>}/>
                    </Routes>
                </Suspense>

        </div>
    );
};

export default App;