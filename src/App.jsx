import { AddSub, EditSub, SubDetail, SubList } from './pages';
import './App.css'
import { Route,  Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';


function App() {


  return (
  <div className="container">
    <h1>React.js CRUD Operation</h1>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SubList />}></Route>
      <Route path='/subject/create' element={<AddSub />}></Route>
      <Route path='/subject/edit/:id' element={<EditSub />}></Route>
      <Route path='/subject/detail/:id' element={<SubDetail />}></Route>
      </Routes>
      </BrowserRouter>
  </div>
  );
}

export default App