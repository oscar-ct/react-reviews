
import './App.css';
import Header from "./components/Header";
import ReviewForm from "./components/ReviewForm";
import ReviewStats from "./components/ReviewStats";
import {ReviewProvider} from "./context/ReviewsContext";
import ReviewList from "./components/ReviewList";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import About from "./components/About";
import AboutLink from "./components/AboutLink";
import HomeLink from "./components/HomeLink";


function App() {
    return (
        <ReviewProvider>
            <Router>
                <Routes>
                    <Route exact path="/" element={
                        <>
                            <Header title="Reviews"/>
                            <ReviewForm/>
                            <ReviewStats/>
                            <ReviewList/>
                            <AboutLink title="About"/>
                        </>
                    }>
                    </Route>
                    <Route path="/about" element={
                        <>
                            <About/>
                            <HomeLink/>
                        </>
                    }>
                    </Route>
                </Routes>
            </Router>

        </ReviewProvider>
  );
}

export default App;
