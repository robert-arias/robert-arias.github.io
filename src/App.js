import Navigation from './components/navigation/navigation';
import Landing from './sections/landing';
import AboutMe from './sections/about-me';
import Resume from './sections/resume';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Landing />
      <main className='main'>
        <AboutMe />
        <Resume />
      </main>
    </div>
  );
}

export default App;
