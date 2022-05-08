import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Create a thunk for loading flight data
export const fetchFlight = createAsyncThunk("flight/fetchFlight", async () => {
  const response = await fetch("https://api.spacexdata.com/v3/launches").then(
    (res) => res.json()
  );
  return response;
});

const flightSlice = createSlice({
  name: "Flight",
  initialState: {
    allFlights: [],
    dataFetchStatus: 'idle',
  },
  reducers: {
    setAllFlights: (state, { payload }) => {
      state.allFlights = [...payload];
    },
  },
  extraReducers: (builder) => {
      builder.addCase(fetchFlight.fulfilled, (state, action) => {
      state.allFlights = action.payload;
      state.dataFetchStatus = "success";
    });
    builder.addCase(fetchFlight.pending, (state, action) => {
      state.dataFetchStatus = "pending";
    });
  },
});

export const { setAllFlights } = flightSlice.actions;

export default flightSlice.reducer;
