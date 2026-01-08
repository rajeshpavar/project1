import axios from "axios";
import React, { useEffect, useState } from "react";

function Courses() {

  const [data,setData]=useState([]);

  const[product,setProduct]=useState([])

  const fetchData=async()=>{
    try {
      const res=await axios.get(  `https://itlearners-f748d-default-rtdb.firebaseio.com/category.json`);
    
      console.log(res.data);
     
      
      
      // setData(res.data);
      setData(Object.values(res.data))
      
    } catch (error) {
      console.error("Error fetching products:", error);

    }
  }

  const productAdd=async()=>{

    try {
        const pro=await axios.get(`https://itlearners-f748d-default-rtdb.firebaseio.com/products.json`


          
        );
        setProduct(Object.values(pro.data))
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }



useEffect(()=>{
  fetchData();
  productAdd()
},[])

 




  
  return (
    <div>
      <div className="container-fluid bg-primary py-5 mb-5 page-header">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h1 className="display-3 text-white animated slideInDown">
                Courses
              </h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a className="text-white" href="#">
                      Home
                    </a>
                  </li>
                  <li className="breadcrumb-item">
                    <a className="text-white" href="#">
                      Pages
                    </a>
                  </li>
                  <li
                    className="breadcrumb-item text-white active"
                    aria-current="page"
                  >
                    Courses
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* Header End */}
      {/* Categories Start */}
      <div className="container-xxl py-5 category">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Categories
            </h6>
            <h1 className="mb-5">Courses Categories</h1>
          </div>
          <div className="row">
            { 
           data.map((value)=>{
             return(
              <div
                  className="col-lg-6 col-md-12 wow zoomIn"
                  data-wow-delay="0.3s"
                >
                  <a className="position-relative d-block overflow-hidden" href>
                    <img className="img-fluid" src={value.img} alt />
                    <div
                      className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                      style={{ margin: 1 }}
                    >
                      <h5 className="m-0">{value.course}</h5>
                      <small className="text-primary">{value.price+"$"}</small>
                    </div>
                  </a>
                </div>
             )
           })
                }
          </div>
        </div>
      </div>
      {/* Categories Start */}
      {/* Courses Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Courses
            </h6>
            <h1 className="mb-5">Popular Courses</h1>
          </div>
          <div className="row g-4 justify-content-center">
            
           
            {
              product.map((pro)=>{
                
              return(
                   <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="course-item bg-light">
                <div className="position-relative overflow-hidden">
                  <img className="img-fluid" src={pro.img} alt />
                  <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                    <a
                      href="#"
                      className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end"
                      style={{ borderRadius: "30px 0 0 30px" }}
                    >
                      Read More
                    </a>
                    <a
                      href="#"
                      className="flex-shrink-0 btn btn-sm btn-primary px-3"
                      style={{ borderRadius: "0 30px 30px 0" }}
                    >
                      Join Now
                    </a>
                  </div>
                </div>
                <div className="text-center p-4 pb-0">
                  <h3 className="mb-0">{pro.price+"$"}</h3>
                  <div className="mb-3">
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small>(123)</small>
                  </div>
                  <h5 className="mb-4">
                    {pro.course}
                  </h5>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-user-tie text-primary me-2" />
                   {pro.name}
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-clock text-primary me-2" />
                    {pro.time}
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-user text-primary me-2" />
                    {pro.student}
                  </small>
                </div>
              </div>
              </div>
              )

              })
            }
           
          </div>
        </div>
      </div>
      {/* Courses End */}
    
    </div>
  );
}

export default Courses;
