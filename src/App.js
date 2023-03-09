
import './App.css';
import Header from "./components/Header";
import ReviewForm from "./components/ReviewForm";
import ReviewStats from "./components/ReviewStats";
import {ReviewProvider} from "./context/ReviewsContext";


function App() {
    return (
        <ReviewProvider>
            <>
                <Header/>
                <ReviewForm/>
                <ReviewStats/>
            </>
        </ReviewProvider>
  );
}

export default App;
