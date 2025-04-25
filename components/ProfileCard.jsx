import React from 'react';
import Image from 'next/image';

const ProfileCard = ({username , email, img}) => {
  return (
    <div className="flex items-center p-4 max-w-sm space-x-4">
      <div className="relative">
        <div className='w-16  h-16 rounded-full overflow-hidden relative'>
        <Image
          src={img}
          alt="User Profile"
          fill
          sizes="(max-width: 768px) 48px, 64px"
          className="object-cover"
        />
        </div>
        {/* Camera icon overlay */}
        <div className="absolute bottom-0 right-0  bg-white  rounded-full shadow ">
          <Image
            src="/cam.svg"
            alt="Camera Icon"
            width={16}
            height={16}
          />
        </div>
      </div>

      <div>
        <h2 className="text-md font-light text-gray-800">{username}</h2>
        <p className="text-sm text-gray-600">{email}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
