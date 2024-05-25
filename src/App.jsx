import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import './App.css'; 
import NavBar from './Components/NavBar.jsx';
import ItemListContainer from './Components/ItemListContainer.jsx';
import AppRouter from './router/AppRouter';


function App() {
  return (
    <div>
      <AppRouter />
      
      
    </div>
  );
}

export default App;
