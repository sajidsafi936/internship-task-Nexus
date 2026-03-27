import React, { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const OTP: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);
  const navigate = useNavigate();
  const location = useLocation();

  const role = location.state?.role || 'entrepreneur';

  // handle typing
  const handleChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // move forward
    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  // handle backspace
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  // handle paste
  const handlePaste = (e: React.ClipboardEvent) => {
    const paste = e.clipboardData.getData('text').slice(0, 6);
    if (!/^\d+$/.test(paste)) return;

    const newOtp = paste.split('');
    setOtp([...newOtp, '', '', '', '', ''].slice(0, 6));

    newOtp.forEach((_, i) => {
      if (inputsRef.current[i]) {
        inputsRef.current[i]!.value = newOtp[i];
      }
    });
  };

  const handleVerify = () => {
    const finalOtp = otp.join('');

    if (finalOtp.length !== 6) return;

    // ✅ fake verification
    if (finalOtp === '123456') {
      navigate(
        role === 'entrepreneur'
          ? '/dashboard/entrepreneur'
          : '/dashboard/investor'
      );
    } else {
      alert('Invalid OTP');
    }
  };

  const isValid = otp.every((digit) => digit !== '');

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      
      <div className="bg-white p-8 rounded-xl w-96 shadow-lg">
        
        <h2 className="text-2xl font-bold text-center mb-2">
          Verify OTP
        </h2>

        <p className="text-sm text-gray-500 text-center mb-6">
          Enter the 6-digit code sent to your email
        </p>

        {/* OTP BOXES */}
        <div
          className="flex justify-between mb-6"
          onPaste={handlePaste}
        >
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              ref={(el) => (inputsRef.current[index] = el)}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-12 h-12 border rounded-lg text-center text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ))}
        </div>

        {/* BUTTON */}
        <button
          onClick={handleVerify}
          disabled={!isValid}
          className={`w-full py-2 rounded-lg text-white transition ${
            isValid
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-gray-300 cursor-not-allowed'
          }`}
        >
          Verify
        </button>

      </div>

    </div>
  );
};

export default OTP;