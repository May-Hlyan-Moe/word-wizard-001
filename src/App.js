import './App.css';
import Dictionary01 from './Dictionary01';

function App() {
  return (
    <div className="App">
      <h1 className='text-center'>
        WORD WIZARD
      </h1>
      <main>
        <Dictionary01 defaultkeyword="hello" />
      </main>
      <footer className='text-center'>
        coded by <a href='https://may-hlyan-moe.netlify.app/'>May Hlyan Moe</a>
      </footer>
    </div>
  );
}

export default App;
