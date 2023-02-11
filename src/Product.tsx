import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelecter } from "./featur";
import { GrClose } from "react-icons/gr";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
  Rating,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { getapi } from "./reducers/HomeReducer";
import { UseReducers } from "./reducers/HomeReducer";
import "./components/componant.css";
import { ApiType } from "./reducers/HomeReducer";
import { TiTick } from "react-icons/ti";

export default function Product() {
  //resource
  const { all_products, all_api } = useAppSelecter((state) => state);
  const dispatch = useAppDispatch();
  let [view, setview] = useState<string>("Grid");
  let [ColorClick, setColorClick] = useState<string | null>(null);

  useEffect(() => {
    dispatch(getapi());
  }, []);

  //All unique Category
  let newAllCategory = new Set(all_api?.map((val) => val.category));

  //All unique color
  let newAllColor = new Set(
    all_api?.map((val) => val.color.map((v2) => v2)).flat()
  );

  // All Titles
  let AllTitles = new Set(all_api?.map((val) => val.title));
  console.log(AllTitles);

  const titles = [
    "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "Mens Casual Premium Slim Fit T-Shirts ",
    "Mens Cotton Jacket",
    "Mens Casual Slim Fit",
    "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "Solid Gold Petite Micropave ",
    "White Gold Plated Princess",
    "Pierced Owl Rose Gold Plated Stainless Steel Double",
    "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    "MBJ Women's Solid Short Sleeve Boat Neck V ",
    "Opna Women's Short Sleeve Moisture",
    "DANVOUY Womens T Shirt Casual Cotton Short",
  ];

  //-------------------   define all function -----------------------------------------------------
  const changeDataThroughInput = (e: any) => {
    //using api debounce
    setTimeout(() => {
      const newdata = all_api?.filter((val) =>
        val.title
          .toLocaleLowerCase()
          .includes(e.target.value.toLocaleLowerCase())
          ? val
          : null
      );
      dispatch(UseReducers(newdata));
    }, 250);
  };

  const showFilterSection = () => {
    let ele: any = document.getElementById("filter");
    ele.setAttribute("style", "display:block;");
  };
  const hideFilterSection = () => {
    let ele: any = document.getElementById("filter");
    ele.setAttribute("style", "display:none");
  };

  //for category filter section
  const setCategoryData = (Categorytxt: any) => {
    const newCategoryProductData = all_api?.filter((val) =>
      val.category === Categorytxt.textContent ? val : null
    );
    dispatch(UseReducers(newCategoryProductData));
  };

  //for color filter section
  const setColorData = (selectedcolor: string) => {
    const newColoredProductData = all_api?.filter((val) =>
      val.color.includes(selectedcolor) ? val : null
    );
    dispatch(UseReducers(newColoredProductData));
    setColorClick(selectedcolor);
  };

  return (
    <div className="conatiner">
      <div className="row m-5">
        <div className="view-filter col-ld-4 col-md-4 col-sm-12 d-flex justify-content-around align-items-center ">
          <div>
            Grid{" "}
            <BsFillGrid3X3GapFill
              className="display-6"
              onClick={() => setview("Grid")}
            />
          </div>
          <div>
            List{" "}
            <FaList className="display-6" onClick={() => setview("List")} />
          </div>
        </div>
        <div className="input-filter col-lg-6 col-md-4 col-sm-12">
          <div>
            <input
              type="text"
              onChange={changeDataThroughInput}
              placeholder="search title..."
              style={{ width: "100%", padding: "5px" }}
            />
          </div>
        </div>
        <div className="main-filter col-lg-2 col-md-4 col-sm-12 mb-2 d-flex justify-content-end">
          <Button
            variant="contained"
            onClick={showFilterSection}
            className="main-button"
          >
            Filter
          </Button>
        </div>
      </div>

      <div id="filter">
        <GrClose className="filter-close" onClick={hideFilterSection} />

        <h3 className="d-flex justify-content-center text-primary">Filters</h3>
        {/* catergory filter section */}
        <div>
          CateGory:-
          <br />
          {Array.from(newAllCategory)?.map((val) => (
            <div key={val}>
              <button
                className="btn btn-primary"
                style={{ margin: "10px 20px", width: "200px" }}
                onClick={(e) => setCategoryData(e.target)}
              >
                {val}
              </button>
            </div>
          ))}
        </div>
        {/* color section filter */}
        <div className="conatiner">
          Color:-
          <div className="row m-auto">
            {Array.from(newAllColor).map((val) => (
              <div
                className="col-lg-4 m-2 d-flex align-items-center text-center display-6 text-white"
                key={val}
                style={{
                  backgroundColor: val,
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                }}
                onClick={() => setColorData(val)}
              >
                {val === ColorClick ? <TiTick /> : null}
              </div>
            ))}
          </div>
        </div>
        {/* Price Range section */}
        <div className="my-2 d-flex align-items-center">
          Title:-
          <select style={{width:"100px"}}>
            {
              Array.from(AllTitles).map(val=><option key={val} style={{width:"100px"}}>{val}</option>)
            }
          </select>
        </div>
      </div>

      <div>
        {view === "Grid" ? (
          <Gridview data={all_products} />
        ) : (
          <Listview data={all_products} />
        )}
      </div>
    </div>
  );
}

type viewtypes = {
  data: ApiType[] | null;
};
const Gridview = (props: viewtypes) => {
  return (
    <div className="container my-5">
      <div className="row m-auto">
        {props.data?.map((val) => {
          return (
            <div className="col-lg-3 col-md-6 col-sm-6 g-4" key={val?.id}>
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
                    {val.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {val.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <NavLink to={`/singleproduct/${val.id}`}>
                    <Button variant="contained">View</Button>
                  </NavLink>
                </CardActions>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Listview = (props: viewtypes) => {
  return (
    <div className="container my-5">
      <div className="row g-2 m-auto">
        {props.data?.map((val) => {
          return (
            <div
              key={val.id}
              className="col-lg-5 col-md-12 col-sm-12 mx-2 d-flex align-items-center justify-content-around"
              style={{ border: "2px solid black" }}
            >
              <div className="col-lg-5 col-md-4 col-sm-4">
                <img src={val.image} alt="" className="list-image" />
              </div>
              <div className="col-lg-5 col-md-8 col-sm-8">
                <div className="list-text m-1">{val.title}</div>
                <br />
                <Rating value={val.rating.rate} readOnly className="m-1" />
                <br />
                <NavLink to={`/singleproduct/${val.id}`}>
                  <Button variant="contained" className="m-1">
                    View
                  </Button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
