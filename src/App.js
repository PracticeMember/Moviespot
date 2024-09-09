
import './App.css';
import './index.css';
import { Header, Footer } from "./Components/index"
import { AllRoutes } from "./Routers/AllRoutes"

function App() {
  return (
    <div className='dark:bg-slate-700'>
      <Header />
      <main>
        <AllRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
