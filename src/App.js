
import './App.css';
import Header from "./components/Header";
import ReviewForm from "./components/ReviewForm";
import ReviewStats from "./components/ReviewStats";
import {ReviewProvider} from "./context/ReviewsContext";
import ReviewList from "./components/ReviewList";


function App() {
    return (
        <ReviewProvider>
            <>
                <Header/>
                <ReviewForm/>
                <ReviewStats/>
                <ReviewList/>
            </>
        </ReviewProvider>
  );
}

export default App;
