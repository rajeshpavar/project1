import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminProduct() {
  const [product, setProduct] = useState([]);
  const [categarios,setCategarios]=useState([]);
  const [instructor,setInstructor]=useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      
      const objdata = await axios.get("https://itlearners-f748d-default-rtdb.firebaseio.com/products.json");
setProduct(Object.values(objdata.data));
      const categariosData=await axios.get("https://itlearners-f748d-default-rtdb.firebaseio.com/category.json");
      setCategarios(Object.values(categariosData.data));
      const instructorData=await axios.get(`https://itlearners-f748d-default-rtdb.firebaseio.com/instructor.json`);
      setInstructor(Object.values(instructorData.data));

    
    } catch (error) {
      console.error("Error fetching Data:", error);
    }
  };

  return (
    <>
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
            <div className="row g-3">
              
              {categarios.map((item,index)=>{
                 return(
                 <div
                    className="col-lg-6 col-md-12 wow zoomIn"
                    data-wow-delay="0.3s"
                    key={index}
                  >
                    <a
                      className="position-relative d-block overflow-hidden"
                      
                    >
                      <img className="img-fluid" style={{
                          height: "300px", width: "100%",objectFit: "cover",borderRadius: "5px" }} 
                          src={item.img} alt="" />
                      <div
                        className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                        style={{ margin: 1 }}
                      >
                        <h5 className="m-0">{item.course}</h5>
                        <small className="text-primary">{item.price}</small>
                      </div>
                    </a>
                  </div>)
              })}



                    {/* {categarios.map((item, index) => (
  <div
    className="col-lg-6 col-md-12 wow zoomIn"
    data-wow-delay="0.3s"
    key={index}
  >
    <a className="position-relative d-block overflow-hidden">
      <img className="img-fluid" src={item.img} alt="" />
      <div
        className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
        style={{ margin: 1 }}
      >
        <h5 className="m-0">{item.course}</h5>
        <small className="text-primary">{item.price}</small>
      </div>
    </a>
  </div>
))} */}
              

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
              {product.map((product)=>{


            return(
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="course-item bg-light">
                  <div className="position-relative overflow-hidden">
                    <img className="img-fluid" src={product.img} alt />
                    <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                     
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
                    <h3 className="mb-0">{product.price+"$"}</h3>
                    <div className="mb-3">
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small>(123)</small>
                    </div>
                    <h5 className="mb-4">
                      {product.course}
                    </h5>
                  </div>
                  <div className="d-flex border-top">
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-user-tie text-primary me-2" />
                    {product.name}
                    </small>
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-clock text-primary me-2" />
                    {product.time}
                    </small>
                    <small className="flex-fill text-center py-2">
                      <i className="fa fa-user text-primary me-2" />
                      {product.student}
                    </small>
                  </div>
                </div>
              </div>
            
            )

              })}
          </div>
          </div>
        </div>
        {/* Courses End */}
        {/* Testimonial Start */}

        {/* Testimonial End */}
      </div>

      
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Instructors
            </h6>
            <h1 className="mb-5">Expert Instructors</h1>
          </div>
          <div className="row g-4">
    
    {/* loop start here */}
      {instructor.map((data)=>{
        return(
           <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item bg-light">
                <div className="overflow-hidden">
                  <img className="img-fluid" src={data.img} alt='image' />
                </div>
                
                
                <div className="text-center p-4">
                  <h5 className="mb-0">{data.name}</h5>
                  <small>{data.designation}</small>
                   <div className="d-flex border-top">
                    <small className="flex-fill text-center border-end py-2">
                      {/* <i class="fa-solid fa-calendar-plus"/> */}
                      <i className="fa fa-solid fa-calendar-plus" />
                      <br />
                    {data.yearsOfExpriance+"Years of Expriance"} 
                    </small>
                   
                    <small className="flex-fill text-center py-2">
                      <i className="fa fa-user text-primary me-2" />
                      <br />
                      {data.student + " +students"}
                    </small>
                  </div>
                </div>
              </div>
            </div>
        )
      })}

          </div>
       </div>
          </div>
        
        
    </>
  );
}

export default AdminProduct;
