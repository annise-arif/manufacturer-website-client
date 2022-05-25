import React, { useEffect, useState } from "react";
import Tool from "./Tool";

const Tools = () => {
  const [services, setServices] = useState([]);

  useEffect(() =>{
    fetch('http://localhost:5000/services')
    .then(res=>res.json())
    .then(data => setServices(data))
  }, []);
  return (
    <div>
      <h1 className="text-teal-600 text-4xl text-center font-bold mt-16">
        Tools
      </h1>
      <div className="lg:px-12 md:px-8 sm:px-6 inline-grid lg:grid-cols-3 md:grid-cols-2 gap-10 w-full mx-auto mt-8">
        {services.map((service) => (
          <Tool key={service._id} service={service}></Tool>
        ))}
      </div>
    </div>
  );
};

export default Tools;
