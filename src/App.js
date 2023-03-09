
import './App.css';
import Header from "./components/Header";
import ReviewForm from "./components/ReviewForm";
import ReviewStats from "./components/ReviewStats";
import {ReviewProvider} from "./context/ReviewsContext";
import ReviewList from "./components/ReviewList";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
    return (
        <ReviewProvider>
            <Router>
                <Routes>
                    <Route exact path="/" element={
                        <>
                            <Header/>
                            <ReviewForm/>
                            <ReviewStats/>
                            <ReviewList/>
                        </>
                    }>
                    </Route>
                </Routes>
            </Router>
        </ReviewProvider>
  );
}

export default App;
