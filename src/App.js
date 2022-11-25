import { Route, Routes } from 'react-router-dom';
import '@/App.scss';
import Layout from '@/components/Layout/Layout';
import NewsAdd from '@/components/News/Add/NewsAdd';
import DetailsPage from '@/pages/DetailsPage';
import HomePage from '@/pages/HomePage';
import LoginPage from '@/pages/LoginPage';
import Authprovider from '@/provider/AuthProvider';

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
