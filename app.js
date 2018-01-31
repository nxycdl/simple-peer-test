var SimplePeer = require('simple-peer')
//var wrtc = require('wrtc')
const wrtc = require('electron-webrtc')()
const config = require('./config');

var peer1 = new SimplePeer({initiator: true, wrtc: wrtc})
var peer2 = new SimplePeer({wrtc: wrtc})
wrtc.on('error', function (err) {
    console.log(err)
})
wrtc.on('error', function (err, source) {
    console.error(err)
})

peer1.on('signal', function (data) {
    // when peer1 has signaling data, give it to peer2 somehow
    peer2.signal(data)
})

peer2.on('signal', function (data) {
    // when peer2 has signaling data, give it to peer1 somehow
    peer1.signal(data)
})

peer1.on('connect', function () {
    // wait for 'connect' event before using the data channel
    console.log('peer1,connect');
    peer1.send('my name is peer1, i am connecting')
})

peer2.on('connect', function () {
    // wait for 'connect' event before using the data channel
    peer2.send('my name is peer2, i am connecting')
})


peer2.on('data', function (data) {
    // got a data channel message
    console.log('got a message from peer1: ' + data)
})