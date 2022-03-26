import './App.css';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactWorks from './Components/ReactWorks/ReactWorks';
import PropsState from './Components/PropsVsState/PropsState';

function App() {
  return (
    <div className='container'>
      <h1 className='text-center'>Knife store</h1>
      <h5 className='text-center mb-2'>Sudu kop hobe</h5>
      <Header></Header>
      <ReactWorks></ReactWorks>
      <PropsState></PropsState>
    </div>
  );
}

export default App;
