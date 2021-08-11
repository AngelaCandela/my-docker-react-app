import Footer from "./components/Footer";
import Router from './routers/Router';

const App = () => (
    <div className="d-flex flex-column vh-100">
      <Router />
      <Footer />
    </div>
);

export default App;
