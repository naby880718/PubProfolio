import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import "./assets/scss/base/reset.scss";
import UlsanCard from "./components/UlsanCard";
import Practice from "./routes/Practice";
import PracticeUhee from "./routes/PracticeUhee";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/ex">
					<Practice />
				</Route>
				<Route path="/exsample">
					<PracticeUhee />
				</Route>
				<Route path="/movie/:id">
					<Detail />
				</Route>
				<Route path="/">
					<UlsanCard />
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
