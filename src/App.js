import MainNavPage from './components/MainNavPage';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import './styles/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ParksSearchSection from './components/ParksSearchSection';

library.add(fas, far, fab)

function App() {
    
    ParksSearchSection();

    return (
        <MainNavPage />
    );
}

export default App;
