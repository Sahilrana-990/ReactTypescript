import React, { useEffect } from "react";
import "./componant.css";

import { getapi } from "../reducers/HomeReducer";
import { useAppDispatch, useAppSelecter } from "../featur";
import { NavLink } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
} from "@mui/material";

export default function FeaturesProduct() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getapi()); //call api for featured product
  }, []);

  const { featuredProducts, isLoading } = useAppSelecter((state) => state);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="feature-main">
      <h1 className="my-2">Feature Products</h1>
      <div className="container">
        <div className="row m-auto">
          {featuredProducts?.map((val) => {
            return (
              <div className="col-lg-3 col-md-6 col-sm-6 g-2" key={val.id}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height={200}
                    image={val.image}
                    style={{ objectFit: "contain" }}
                  />
                  
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {val.category}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Veniam laboriosam explicabo repellat enim, sint natus!
                      Possimus harum minus doloremque quisquam.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <NavLink to={`/singleproduct/${val.id}`}><Button variant="contained">View</Button></NavLink>
                  </CardActions>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

{
  /* <NavLink to={`/singleproduct/${val.id}`}>
                  <img
                    src={val.image}
                    alt=""
                    className="fe-img p-1 img-fluid"
                    style={{ objectFit: "contain" }}
                  />
                  <span className="d-flex align-items-end justify-content-center bg-primary m-5 rounded text-white">
                    {val.category}
                  </span>
                </NavLink> */
}
