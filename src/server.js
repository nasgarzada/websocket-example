"use strict";

import { createServer } from "http";
import { Server } from "socket.io";
import { setInterval } from "timers";


const httpServer = createServer();

const io = new Server(httpServer, {
    path: "/v1/ws/notification",
    allowEIO3: true
});

let socketId = []

io.on("connect", (socket) => {
    console.log(`Socket connection established! ${socket.connected}`);
    let handshake = socket.handshake.query;
    console.log(`pushing`);
    socketId.push(socket.id);

    console.log(`socketIds ${socketId.toString()}`)
    console.log(`${JSON.stringify(handshake)}`);
});



function notifyUsers() {

    if (socketId.length > 0) {
        const element = socketId.pop();
        console.log('sending to ' + element);
        io.to(`${element}`).emit("notification", "you're the best");
    }

}

setInterval(()=>{
    notifyUsers();
}, 1000);

httpServer.listen(8080);
