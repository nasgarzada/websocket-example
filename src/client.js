"use strict";


import io from "socket.io-client";

const LOCAL = "http://localhost:8080"

const socket = io(LOCAL, {
    transports: ["websocket"],
    path: "/v1/ws/notification",
    query: {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
        "customerId": "9000012133"
    }
});

socket.on("connect", () => {
    console.log(socket.id); 
});

socket.on("disconnect", () => {
    console.log(socket.id); 
});


socket.on('message', data => {
    console.log(data);
});

socket.on('notification', (data) => {
    console.log(`${data}`);
});

socket.on('hello', (data) => {
    console.log(`${data}`);
})