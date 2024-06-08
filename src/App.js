import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddTodo from './Components/AddTodo';
import SearchTodo from './Components/SearchTodo';
import DeleteTodo from './Components/DeleteTodo';
import ViewAll from './Components/ViewAll';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddTodo/>}/>
      <Route path="/search" element={<SearchTodo/>}/>
      <Route path="/delete" element={<DeleteTodo/>}/>
      <Route path="/view" element={<ViewAll/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
