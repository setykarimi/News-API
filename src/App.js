import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './Components/Layout/Layout';
import NewsAdd from './Components/News/Add/NewsAdd';
import DetailsPage from './Pages/DetailsPage';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/' element=<HomePage /> />
          <Route path='/details/:id' element=<DetailsPage /> />
          <Route path='/news/add' element=<NewsAdd /> />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;  
