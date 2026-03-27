import React from 'react';

interface Props {
  password: string;
}

const getStrength = (password: string) => {
  let score = 0;

  if (password.length >= 6) score++;
  if (password.match(/[A-Z]/)) score++;
  if (password.match(/[0-9]/)) score++;
  if (password.match(/[^A-Za-z0-9]/)) score++;

  return score;
};

const PasswordStrength: React.FC<Props> = ({ password }) => {
  const strength = getStrength(password);

  const colors = ['bg-red-500', 'bg-orange-400', 'bg-yellow-400', 'bg-green-500'];
  const labels = ['Weak', 'Fair', 'Good', 'Strong'];

  return (
    <div className="mt-2">
      
      <div className="flex gap-1 mb-1">
        {[1,2,3,4].map((i) => (
          <div
            key={i}
            className={`h-2 flex-1 rounded ${
              i <= strength ? colors[strength - 1] : 'bg-gray-200'
            }`}
          />
        ))}
      </div>

      {password && (
        <p className="text-xs text-gray-600">
          Strength: {labels[strength - 1] || 'Very Weak'}
        </p>
      )}
    </div>
  );
};

export default PasswordStrength;