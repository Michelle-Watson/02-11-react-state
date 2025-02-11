import './App.scss'
import Header from './components/Header'
import CardList from './components/CardList'
import CardForm from './components/CardForm';

function App() {
  return (
    <>
      <Header logo="BrainStation"/>
      <CardForm/>
      <CardList/>
    </>
  );
}

export default App;
