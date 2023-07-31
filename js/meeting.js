const domain = 'meet.jit.si'; // Replace this with your Jitsi Meet domain
const options = {
    roomName: 'YourUniqueRoomName', // Replace this with your desired room name
    width: 800,
    height: 600,
    parentNode: document.querySelector('#jitsi-container')
};

const api = new JitsiMeetExternalAPI(domain, options);
