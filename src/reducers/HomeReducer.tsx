import { createSlice,CaseReducer, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import axios from "axios";
import { array } from "../ExtraArray";

// define types
export type StateValueTypes = {
  featuredProducts: ApiType[] ;
  all_api: ApiType[] ;
  isLoading: boolean;
  all_products:ApiType[];
};

export type ApiType = {
  category: string;
  color: Array<string>;
  description: string;
  id: number;
  image: string;
  isFeatured: boolean;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
};

export const getapi = createAsyncThunk("GetApi", async () => {
  const api = await axios.get("https://fakestoreapi.com/products");
  const res = await api.data;
  //Add some custom attribute in existing api
  const newMergeData = res.map((data: ApiType, i: number) => {
    return { ...data, ...array[i] };
  });

  return newMergeData;
});

const initialState: StateValueTypes = {
  featuredProducts: [],
  isLoading: true,
  all_api: [],
  all_products:[]
};
export const homeReducer = createSlice({
  name: "ecom",
  initialState,
  reducers: {
    UseReducers:(state, action) =>{
      state.all_products=action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getapi.fulfilled,
      (state, action: PayloadAction<ApiType[]>) => {
        const data = action.payload;
        state.featuredProducts = [...data].filter(
          (val) => val.isFeatured === true
        );
        state.all_api = [...data];
        state.all_products=[...data]
        state.isLoading = false;
      }
    );

    builder.addCase(getapi.pending, (state, action: PayloadAction<any>) => {
      state.isLoading = true;
    });
  },
});

export const { UseReducers } = homeReducer.actions;
