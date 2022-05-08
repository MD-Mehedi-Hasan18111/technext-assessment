import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { fetchFlight, setAllFlights } from "./redux/slice";

function App() {
  const dispatch = useDispatch();
  const Flights = useSelector((state) => state.flightSlice.allFlights);

  useEffect(() => {
    dispatch(fetchFlight());
  }, []);

  console.log(Flights);

  return <div></div>;
}

export default App;
