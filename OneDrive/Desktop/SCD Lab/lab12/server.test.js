const request = require("supertest");
const app = require('./routes/User');
const mongoose = require('mongoose');

describe("Test the root path", () => {
    test("It should response the POST method", () => 
    {
    const response = request(app).post("http://localhost:8000/User/add"
    ).send ({
    "Name": "Mahad",
    "Email": "mahad@gmail.com",
    "Age": 211,
    "Contact": 023
    })
    expect(response.statusCode).toBe(200);
    })

   describe("Test ",()=>
    {
        test("It should response the POST method",()=>
        {
            const response=request(app).delete("http://localhost:8000/User/:id"
            ).send({
                "id" : "1345476578"
            })
    expect(response.statusCode).toBe(200);
    })
    })
    
    test("It should response the POST method", () => 
    {
    const response = request(app).post("http://localhost:8000/User/add"
    ).send ({
    "Name": "Mahad"
    })
    expect(response.statusCode).toBe(200);
    })
    
    })