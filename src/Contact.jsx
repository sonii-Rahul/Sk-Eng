import React, { useState } from "react";

const Contact = () => {
  const [data, setdata] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const Inputdata = (events) => {
    const { name, value } = events.target;

    setdata((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const formSubmit = (props) => {
    props.preventDefault();
    alert(`My name is ${data.fullname}. My mobile number is ${data.phone}. and email is ${data.email}, And i want to say that ${data.msg}`);
    setdata({
      fullname: "",
      phone: "",
      email: "",
      msg: "",
    });
  };

  return (
    <>
      <div className="my-3">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput2" class="form-label">
                  FullName
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput2"
                  autoComplete="off"
                  name="fullname"
                  value={data.fullname}
                  onChange={Inputdata}
                  placeholder="Enter your Name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput3" class="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput3"
                  autoComplete="off"
                  name="phone"
                  value={data.phone}
                  onChange={Inputdata}
                  placeholder="mobile number"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  autoComplete="off"
                  name="email"
                  value={data.email}
                  onChange={Inputdata}
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  autoComplete="off"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={Inputdata}
                ></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
