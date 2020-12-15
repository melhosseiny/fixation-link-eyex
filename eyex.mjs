import { Server } from 'socket.io';
import edge from 'edge-js';

const PORT = process.env.PORT || 80;

let io = new Server(PORT, {
  cors: {
    origin: '*'
  }
});

let EyeXFramework = edge.func('eyex.cs');

let payload = {
  x: 'random',
  onGazePoint: function(data, callback) {
    io.emit('news', data)
    callback(null, console.log(data))
  }
}

EyeXFramework(payload, function (error, result) {
    if (error) throw error;
    console.log(result);
});
