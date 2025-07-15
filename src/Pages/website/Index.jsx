import React, { useEffect, useState } from "react";
import axios from "axios";

function Index() {

   const [product, setProduct] = useState([]);
  const [categarios,setCategarios]=useState([]);
  const [instructor,setInstructor]=useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const objdata = await axios.get("http://localhost:3000/products");
      setProduct(objdata.data);
      const categariosData=await axios.get("http://localhost:3000/category");
      setCategarios(categariosData.data);
        const instructorData=await axios.get(`http://localhost:5000/instructor`);
      setInstructor(instructorData.data);

     
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    // Initialize carousels after component mount
    if (window.jQuery) {
        // Header carousel
        window.jQuery(".header-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 1500,
            items: 1,
            dots: false,
            loop: true,
            nav: true,
            navText: [
                '<i class="bi bi-chevron-left"></i>',
                '<i class="bi bi-chevron-right"></i>'
            ]
        });
        window.jQuery(".testimonial-carousel").owlCarousel({
          autoplay: true,
          smartSpeed: 1000,
          center: true,
          margin: 24,
          dots: true,
          loop: true,
          nav: false,
          responsive: {
              0:{
                  items:1
              },
              768:{
                  items:2
              },
              992:{
                  items:3
              }
          }
      });
  }
}, []); 
  return (
      
   
   <div>
  <div className="container-fluid p-0 mb-5">
    <div className="owl-carousel header-carousel position-relative">
      <div className="owl-carousel-item position-relative">
        <img className="img-fluid" src="img/carousel-1.jpg" alt />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background: 'rgba(24, 29, 56, .7)'}}>
          <div className="container">
            <div className="row justify-content-start">
              <div className="col-sm-10 col-lg-8">
                <h5 className="text-primary text-uppercase mb-3 animated slideInDown">Best Online Courses</h5>
                <h1 className="display-3 text-white animated slideInDown">The Best Online Learning Platform</h1>
                <p className="fs-5 text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.</p>
                <a href className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                <a href className="btn btn-light py-md-3 px-md-5 animated slideInRight">Join Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="owl-carousel-item position-relative">
        <img className="img-fluid" src="img/carousel-2.jpg" alt />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background: 'rgba(24, 29, 56, .7)'}}>
          <div className="container">
            <div className="row justify-content-start">
              <div className="col-sm-10 col-lg-8">
                <h5 className="text-primary text-uppercase mb-3 animated slideInDown">Best Online Courses</h5>
                <h1 className="display-3 text-white animated slideInDown">Get Educated Online From Your Home</h1>
                <p className="fs-5 text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.</p>
                <a href className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                <a href className="btn btn-light py-md-3 px-md-5 animated slideInRight">Join Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Carousel End */}
  {/* Service Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-4">
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="service-item text-center pt-3">
            <div className="p-4">
              <i className="fa fa-3x fa-graduation-cap text-primary mb-4" />
              <h5 className="mb-3">Skilled Instructors</h5>
              <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="service-item text-center pt-3">
            <div className="p-4">
              <i className="fa fa-3x fa-globe text-primary mb-4" />
              <h5 className="mb-3">Online Classes</h5>
              <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="service-item text-center pt-3">
            <div className="p-4">
              <i className="fa fa-3x fa-home text-primary mb-4" />
              <h5 className="mb-3">Home Projects</h5>
              <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
          <div className="service-item text-center pt-3">
            <div className="p-4">
              <i className="fa fa-3x fa-book-open text-primary mb-4" />
              <h5 className="mb-3">Book Library</h5>
              <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Service End */}
  {/* About Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-5">
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{minHeight: 400}}>
          <div className="position-relative h-100">
            <img className="img-fluid position-absolute w-100 h-100" src="img/about.jpg" alt style={{objectFit: 'cover'}} />
          </div>
        </div>
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
          <h6 className="section-title bg-white text-start text-primary pe-3">About Us</h6>
          <h1 className="mb-4">Welcome to eLEARNING</h1>
          <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
          <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
          <div className="row gy-2 gx-4 mb-4">
            <div className="col-sm-6">
              <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />Skilled Instructors</p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />Online Classes</p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />International Certificate</p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />Skilled Instructors</p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />Online Classes</p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />International Certificate</p>
            </div>
          </div>
          <a className="btn btn-primary py-3 px-5 mt-2" href>Read More</a>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
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
  {/* Team Start */}
  
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
        
  {/* Team End */}
  {/* Testimonial Start */}
  <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container">
      <div className="text-center">
        <h6 className="section-title bg-white text-center text-primary px-3">Testimonial</h6>
        <h1 className="mb-5">Our Students Say!</h1>
      </div>
      <div className="owl-carousel testimonial-carousel position-relative">
        <div className="testimonial-item text-center">
          <img className="border rounded-circle p-2 mx-auto mb-3" src="img/testimonial-1.jpg" style={{width: 80, height: 80}} />
          <h5 className="mb-0">Client Name</h5>
          <p>Profession</p>
          <div className="testimonial-text bg-light text-center p-4">
            <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
          </div>
        </div>
        <div className="testimonial-item text-center">
          <img className="border rounded-circle p-2 mx-auto mb-3" src="img/testimonial-2.jpg" style={{width: 80, height: 80}} />
          <h5 className="mb-0">Client Name</h5>
          <p>Profession</p>
          <div className="testimonial-text bg-light text-center p-4">
            <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
          </div>
        </div>
        <div className="testimonial-item text-center">
          <img className="border rounded-circle p-2 mx-auto mb-3" src="img/testimonial-3.jpg" style={{width: 80, height: 80}} />
          <h5 className="mb-0">Client Name</h5>
          <p>Profession</p>
          <div className="testimonial-text bg-light text-center p-4">
            <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
          </div>
        </div>
        <div className="testimonial-item text-center">
          <img className="border rounded-circle p-2 mx-auto mb-3" src="img/testimonial-4.jpg" style={{width: 80, height: 80}} />
          <h5 className="mb-0">Client Name</h5>
          <p>Profession</p>
          <div className="testimonial-text bg-light text-center p-4">
            <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


  )
}

export default Index