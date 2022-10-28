import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './Components/Layout/Layout';
import NewsAdd from './Components/News/Add/NewsAdd';
import DetailsPage from './Pages/DetailsPage';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import Authprovider from './Provider/AuthProvider';

function App() {
  return (
    <div className="App">
      <Authprovider>
        <Layout>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/details/:id' element={<DetailsPage />} />
            <Route path='/news/add' element={<NewsAdd />} />
            <Route path='/login' element={<LoginPage />} />
          </Routes>
        </Layout>
      </Authprovider>
    </div>
  );
}

export default App;  
