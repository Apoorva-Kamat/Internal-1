import React from 'react'


const Home = () => {
  return (
    <>
    <div className='abc'>
      <img src="https://therightustorage.blob.core.windows.net/assets/guide/onlinestudy-2.jpg" alt="loading.." height= "500px"/>
      <h2>EMPOWERING YOUNG MINDS</h2>
     </div>
     <div className="container">
            <div className="row-md">
                <div className="col-md-15">
                    <div className="card">
                        
                      <div className="card-body">
                     <h5> Become lifelong learners with India's best teachers,engaging video lessons and personalised learning journeys.</h5>
                      </div>
                      <div className="card">
                      <div className="card-body">Admissions open for 2023-2024 <br></br>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJQIvn7LU3VmJ0iTKPyEFCxJaqgSOL1CfgOA&usqp=CAU"
                       alt="loading"
                       height="35px"/>
                       {""} Contact us : 3546768980
                      
                      </div>

                      </div>
                      </div>
                      </div>
                      </div>
                      </div>
                      <div className="container">
            <div className="row">
                <div className="col-md-9">
                    <div className="card">
                        
                      <div className="card-body1">
                      <img src="https://labarberiainstitute.com/wp-content/themes/labarberia/_/img/enrollment-icon.png" alt="loading" height="50px"/>
             
                        {" "} Global Education network
                        <h3 className="card-title" >Book your Free Session </h3>
                           <h5 className="card-title">Learn from India's best teachers</h5>
                          
                        <p className="card-text">
                          <h5>
                          <label >Name:</label>
                          <input type="text"  placeholder="Enter your name"></input>
                          </h5>
                          <h5>
                          <label >Phone Number:</label>
                          <input type="text" placeholder="Enter your phone number"></input>
                          </h5>
                          <h5>
                          <label >Email-Id:</label>
                          <input type="text"placeholder="Enter your E-Mail Id"></input>
                          </h5>
                        </p>
                        <a href="/course" class="card-link">
                      <button type="button" class="btn btn-primary">Login</button> 
                      </a>
                      </div>
                     </div>
                       </div>
                    </div>
                </div>
                      
    </>
  )
}

export default Home