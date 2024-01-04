import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Routing from './routing/Routing';
import Header from './components/Header';
import { ThemeProvider } from './ThemeContext';
import CookiesPopup from './components/CookiesPopup';

const App: React.FC = () => {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <Header />
                <Routes>
                    {Routing.map(({ path, element }, key) => (
                        <Route key={key} path={path} element={element} />
                    ))}
                </Routes>
                <CookiesPopup/>
                {/* <Footer /> */}
            </BrowserRouter>
        </ThemeProvider>
                
    );
}

export default App
