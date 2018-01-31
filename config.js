/**
 * Created by dl on 2018-01-31.
 */
module.exports = {
    wrctconfig: {
        initiator: false,
        channelConfig: {},
        channelName: '<random string>',
        config: {iceServers: [{url: 'stun:stun.l.google.com:19302'}]},
        constraints: {},
        offerConstraints: {},
        answerConstraints: {},
        reconnectTimer: false,
        sdpTransform: function (sdp) {
            return sdp
        },
        stream: false,
        trickle: true,
        wrtc: {}, // RTCPeerConnection/RTCSessionDescription/RTCIceCandidate
        objectMode: false
    }, democonfig: {
        "name": "A"
    }
}