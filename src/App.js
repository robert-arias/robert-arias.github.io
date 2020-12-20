import Navigation from './components/navigation/navigation';
import Landing from './sections/landing';
import AboutMe from './sections/about-me';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Landing />
      <main className='wrapper'>
        <AboutMe />
      </main>
    </div>
  );
}

export default App;
