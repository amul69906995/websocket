# Socket.IO Namespaces & Rooms Cheatsheet

```javascript
// Sending Events to a Specific Socket

// 1. Emit an event to this socket only:
socket.emit(eventName, data);

// 2. Send a message to this socket:
socket.send(data);

// --------------------------------------

// Sending Events to a Room (Excluding the Sending Socket)

// 1. Emit an event to all sockets in a specific room (excluding the sender):
socket.to(roomName).emit(eventName, data);

// 2. Send an event to a room:
socket.in(roomName).emit(eventName, data);

// --------------------------------------

// Sending Messages Between Sockets

// 1. Send a message from one socket to another socket by `socketId`:
socket.to(anotherSocketId).emit('hey', data);

// 2. Alternatively, use `in` to send a message to another socket:
socket.in(anotherSocketId).emit('hey', data);

// --------------------------------------

// Sending Messages from a Namespace

// 1. Emit an event to a room within a specific namespace:
io.of(aNamespace).to(roomName).emit(eventName, data);

// 2. Alternatively, use `in` to emit an event to a room within a namespace:
io.of(aNamespace).in(roomName).emit(eventName, data);

// --------------------------------------

// Sending Messages to an Entire Namespace

// 1. Emit an event to the entire default namespace:
io.emit(eventName, data);

// 2. Emit to the entire root namespace:
io.of('/').emit(eventName, data);

// 3. Emit an event to an entire custom namespace (e.g., `/admin`):
io.of('/admin').emit(eventName, data);

// --------------------------------------

// Notes:
// - Namespaces are used to create different communication channels on the same server.
// - Rooms are subdivisions within namespaces that allow broadcasting to a specific group of sockets.
// - Each socket has its own room identified by its `socket.id`, allowing you to send messages to individual sockets.

