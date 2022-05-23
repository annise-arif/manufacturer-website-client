import React from 'react';
import Tool from './Tool';


const services = [
    
   {
    _id: 1,
    name: "GSB 550 Impact Drill",
    image: "https://i.ibb.co/TWyYGcZ/tool1.jpg",
    description: "Powerful 550 watt motor and 13 mm keyed chuck auxiliary handle and depth stop Fully ball bearing mounted construction for a long lifetime",
    minOrderQuantity: 150,
    availableQuantity: 24000,
    price: 180,
   },
   {
    _id: 2,
    name: "GSB 550 Impact Drill",
    image: "https://i.ibb.co/TWyYGcZ/tool1.jpg",
    description: "Powerful 550 watt motor and 13 mm keyed chuck auxiliary handle and depth stop Fully ball bearing mounted construction for a long lifetime",
    minOrderQuantity: 150,
    availableQuantity: 24000,
    price: 180,
   },
   {
    _id: 3,
    name: "GSB 550 Impact Drill",
    image: "https://i.ibb.co/TWyYGcZ/tool1.jpg",
    description: "Powerful 550 watt motor and 13 mm keyed chuck auxiliary handle and depth stop Fully ball bearing mounted construction for a long lifetime",
    minOrderQuantity: 150,
    availableQuantity: 24000,
    price: 180,
   },
   {
    _id: 4,
    name: "GSB 550 Impact Drill",
    image: "https://i.ibb.co/TWyYGcZ/tool1.jpg",
    description: "Powerful 550 watt motor and 13 mm keyed chuck auxiliary handle and depth stop Fully ball bearing mounted construction for a long lifetime",
    minOrderQuantity: 150,
    availableQuantity: 24000,
    price: 180,
   },
   {
    _id: 5,
    name: "GSB 550 Impact Drill",
    image: "https://i.ibb.co/TWyYGcZ/tool1.jpg",
    description: "Powerful 550 watt motor and 13 mm keyed chuck auxiliary handle and depth stop Fully ball bearing mounted construction for a long lifetime",
    minOrderQuantity: 150,
    availableQuantity: 24000,
    price: 180,
   },
   {
    _id: 6,
    name: "GSB 550 Impact Drill",
    image: "https://i.ibb.co/TWyYGcZ/tool1.jpg",
    description: "Powerful 550 watt motor and 13 mm keyed chuck auxiliary handle and depth stop Fully ball bearing mounted construction for a long lifetime",
    minOrderQuantity: 150,
    availableQuantity: 24000,
    price: 180,
   },
   
]
const Tools = () => {
    return (
        <div>
        <h1 className='text-teal-600 text-4xl text-center font-bold mt-16'>Tools</h1>
            <div className='inline-grid lg:grid-cols-3 md:grid-cols-2 gap-10 w-full mx-auto mt-8'>
                {
                    services.map(service => <Tool
                    key={service._id}
                    service={service}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;