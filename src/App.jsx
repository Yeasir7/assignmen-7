import { Toaster } from 'react-hot-toast'; // 👈 Import Toaster
import Header from './components/Header/Header';
import Section from './components/Section/Section';

function App() {
  return (
    <>
      <Header />
      <Section />
      <Toaster position="top-center" reverseOrder={false} /> {/* 👈 Add Toaster here */}
    </>
  );
}

export default App;
