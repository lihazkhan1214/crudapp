
import './App.css';
import AddUser from './componets/AddUser';
import NavBar from './componets/NavBar';
import CodeforInteriew from './componets/CodeforInteriew';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AllUser from './componets/AllUser';
import EditUser from './componets/EditUser';
function App() {
  return (
  <>
  <BrowserRouter>
<NavBar></NavBar>


<Routes>

<Route path="/" element={<CodeforInteriew/>}/>
<Route path="/all" element={<AllUser/>}/>
<Route path="/add" element={<AddUser/>}/>
<Route path="/edit/:id" element={<EditUser/>}/>
</Routes>

  </BrowserRouter>
 
  </>
  );
}

export default App;
