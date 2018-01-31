/**
 * Created by dl on 2018-01-31.
 */
var SimplePeer = require('simple-peer')
//var wrtc = require('wrtc')
const wrtc = require('electron-webrtc')()
const config = require('./config');

var peer3 = new SimplePeer({initiator: true, wrtc: wrtc})
peer3.on('signal', function (data) {
    // when peer1 has signaling data, give it to peer2 somehow
    console.log('signal');
})

peer3.on('connect', function () {
    // wait for 'connect' event before using the data channel
    console.log('peer3,connect');
    peer3.send('my name is peer3, i am connecting')
})