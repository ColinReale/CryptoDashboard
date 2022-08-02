import NewsFeed from "./components/NewsFeed";
import CurrencyConverter from "./components/CurrencyConverter";


const App = () => {
  return (
    //  div that contains my components
    <div className="app">
        <h1>Crypto Dashboard</h1>
      <CurrencyConverter />
    </div>
  )
}

export default App;
