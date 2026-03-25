import React, { useState } from 'react';
import { Mic, MicOff, Video, VideoOff, PhoneOff, Monitor } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const VideoCall: React.FC = () => {
  const navigate = useNavigate();

  const [micOn, setMicOn] = useState(true);
  const [cameraOn, setCameraOn] = useState(true);

  return (
    <div className="-m-6 h-[calc(100vh-64px)] flex flex-col bg-gray-100">

      {/* Top Bar */}
      <div className="flex justify-between items-center px-6 py-4 bg-white shadow">
        <div>
          <h1 className="text-lg font-semibold text-gray-900">
            Video Call
          </h1>
          <p className="text-sm text-gray-500">
            Meeting in progress...
          </p>
        </div>

        <button
          onClick={() => navigate('/meetings')}
          className="text-sm text-blue-600 hover:underline"
        >
          Back to Meetings
        </button>
      </div>

      {/* Video Section */}
      <div className="flex-1 grid grid-cols-2 gap-4 p-6">

        {/* User Video */}
        <div className="bg-black rounded-xl flex items-center justify-center text-white text-lg">
          You
        </div>

        {/* Other Participant */}
        <div className="bg-gray-800 rounded-xl flex items-center justify-center text-white text-lg">
          Participant
        </div>

      </div>

      {/* Bottom Controls */}
      <div className="bg-white py-4 flex justify-center items-center gap-6 shadow">

        {/* Mic Button */}
        <button
          onClick={() => setMicOn(!micOn)}
          className={`p-4 rounded-full ${
            micOn ? 'bg-gray-200' : 'bg-red-500 text-white'
          }`}
        >
          {micOn ? <Mic size={20} /> : <MicOff size={20} />}
        </button>

        {/* Camera Button */}
        <button
          onClick={() => setCameraOn(!cameraOn)}
          className={`p-4 rounded-full ${
            cameraOn ? 'bg-gray-200' : 'bg-red-500 text-white'
          }`}
        >
          {cameraOn ? <Video size={20} /> : <VideoOff size={20} />}
        </button>

        {/* Screen Share */}
        <button className="p-4 rounded-full bg-gray-200">
          <Monitor size={20} />
        </button>

        {/* End Call */}
        <button
          onClick={() => navigate('/meetings')}
          className="p-4 rounded-full bg-red-600 text-white"
        >
          <PhoneOff size={20} />
        </button>

      </div>
    </div>
  );
};

export default VideoCall;