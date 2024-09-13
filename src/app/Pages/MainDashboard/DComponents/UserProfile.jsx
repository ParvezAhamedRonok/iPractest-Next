"use client";
import React, { useEffect, useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { Button } from '.';
import { userProfileData } from '../data/dummy';
import { useStateContext } from '../../../../contexts/ContextProvider';
import avatar from '../../../../assets/images/Dashboard-Images/avatar.png';
import Image from 'next/image';


const UserProfile = ({ forLogOut, setDeleteConfirmPop, deleteConfirmPop }) => {
  const { currentColor } = useStateContext();
  //localstorage data states...
  const [UserProfileImg, setUserProfileImg] = useState("");
  const [userLoginEmail, setuserLoginEmail] = useState("");
  const [userLoginUserNname, setuserLoginUserName] = useState("");

  //useEffects.....
  useEffect(() => {
    setUserProfileImg(localStorage.getItem("UserProfileImg"));
    setuserLoginEmail(localStorage.getItem('userEmail'));
    setuserLoginUserName(localStorage.getItem("userName"));
  }, [])



  return (
    <>
      <div className="nav-item absolute sm:right-1 right-0  top-16 bg-sky-100 border-1 border-gray-300 dark:bg-[#42464D] p-6 rounded-lg w-auto overflow-auto">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg dark:text-gray-200 underline">User Profile</p>
          <Button
            icon={<MdOutlineCancel />}
            color="rgb(153, 171, 180)"
            bgHoverColor="light-gray"
            size="2xl"
            borderRadius="50%"
          />
        </div>
        <div className="flex gap-2 sm:gap-5 items-center mt-6 border-color border-b-1 pb-6 h-auto">
          {
            UserProfileImg ? <Image
              className="rounded-full sm:h-24 h-16 w-16 sm:w-24"
              src={UserProfileImg}
              alt="user-profile"
            /> : <Image
              className="rounded-full sm:h-24 h-16 w-16 sm:w-24"
              src={avatar}
              alt="user-profile"
            />
          }

          <div className='text-center'>
            <p className="text-[15px] sm:text-[17px] font-bold dark:text-gray-200"> {userLoginUserNname}</p>
            <div className="text-gray-500  text-[11px] font-semibold dark:text-gray-400"> {userLoginEmail}</div>
          </div>
        </div>
        <div>
          {userProfileData.map((item, index) => (
            <div key={index} className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]">
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className=" text-xl rounded-lg p-3 hover:bg-light-gray"
              >
                {item.icon}
              </button>

              <div>
                <p className="font-semibold dark:text-gray-200 ">{item.title}</p>
                <p className="text-gray-500 text-sm dark:text-gray-400"> {item.desc} </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3"
          onClick={forLogOut}
        >
          <Button
            color="white"
            bgColor={currentColor}
            text="Logout"
            borderRadius="10px"
            width="full"
          />
        </div>
        <div className="mt-1"
          onClick={() => {
            setDeleteConfirmPop(!deleteConfirmPop);
          }}
        >
          <Button
            color="white"
            bgColor="red"
            text="Delete Account"
            borderRadius="10px"
            width="full"
          />
        </div>

      </div>

    </>

  );
};

export default UserProfile;