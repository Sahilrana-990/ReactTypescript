import React, { useState } from "react";
import { useParams } from "react-router";
import { useAppSelecter } from "./featur";
import './components/componant.css'
import { ApiType } from "./reducers/HomeReducer";
import { TiTick } from "react-icons/ti";
import { BsCurrencyDollar } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
  Rating
} from "@mui/material";

export default function SingleProduct() {
  const { id } = useParams<{ id: string | undefined }>();

  const { all_api } = useAppSelecter((state) => {
    return state;
  });

  let singleProduct = all_api?.filter((val) =>
    val.id === Number(id) ? val : null
  );

  let data = singleProduct?.[0];

  let [color, setcolor] = useState(data?.color[0]);

  let RelatedData=all_api?.filter(val=>val.category===data?.category?val:null)
  return (
    <div>
      <div className="container my-5 single-product">
        <div className="row g-0 d-flex align-items-center">
          <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
            <img
              src={data?.image}
              alt=""
              className="image-single"
              
            />
          </div>

          <div className="col-lg-6 col-md-6">
            <h2 style={{ fontSize: "20px", color: "blue" }} className="m-2">
              {data?.title}
            </h2>
            <h4 className="m-2">
              <span style={{ color: "red" }}>Rate</span> :- <Rating value={data?.rating.rate} readOnly></Rating>
            </h4>
            <h3 style={{ fontSize: "20px" }} className="m-2">
              <span style={{ color: "red" }}>category</span> :- {data?.category}
            </h3>
            <h5 className="m-2">
              <span style={{ color: "red" }}>description</span> :-{" "}
              <span style={{ fontSize: "15px", fontFamily: "fira code" }}>
                {data?.description}
              </span>
            </h5>
            <h5 className="m-2">
              <span style={{ color: "red" }}>Price</span>:- {data?.price}<BsCurrencyDollar/>
            </h5>
            <div className="d-flex align-items-center m-2">
              <span style={{ color: "red", fontWeight: "500" }}>Color</span>
              {data?.color.map((val) => (
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    backgroundColor: val,
                    borderRadius: "50%",
                    margin: "10px",
                    textAlign: "center",
                    color:"white"
                  }}
                  key={val}
                  onClick={()=>setcolor(val)}
                >
                  {val === color ? <TiTick  /> : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-center" style={{textDecoration:"underline"}}>Related Product</h1>
        <div className="container">
        <div className="row my-5">
          {RelatedData?.map((val) => {
            return (
              <div className="col-lg-3 col-md-6 col-sm-6 g-4" key={val.id}>
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
    </div>
  );
}
