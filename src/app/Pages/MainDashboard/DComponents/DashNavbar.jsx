"use client";
import React, { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useRouter } from 'next/navigation';
import { FaFire } from "react-icons/fa";
import { isMobile } from "react-device-detect"

import avatar from '../../../../assets/images/Dashboard-Images/avatar.png';
import { Notification, UserProfile } from '.';
import { useStateContext } from '../../../../contexts/ContextProvider';
import PersonalMentor from './PersonalMentor';
import DeletePopUp from '../pages/DeletePopUp';
import { BsFillPeopleFill } from "react-icons/bs";
import UpgradeComponnt from "../../Payments/UpgradePayment/index.jsx"
import Image from 'next/image';
//end importings..............





const NavButton = ({ title, customFunc, icon, color, dotColor }) => (


  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const DashNavbar = () => {
  const history = useRouter();
  const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize, array, setArray, userPaymentStatusCheck, setuserPaymentStatusCheck } = useStateContext();
  //all localstorage data storing states......
  const [userCountryNmae, setUserCountryName] = useState();
  const [countryFlag, setcountryFlag] = useState("")
  const [LocallyUserProfileImg, setLocallyUserProfileImg] = useState("")

  const [openMentorPopUp, setOpenMentorPopUp] = useState(false);
  //for Showing the Delete confirm  popup to the user---
  const [deleteConfirmPop, setDeleteConfirmPop] = useState(false);
  //state for show user upgrade component if user want to upgrade Starter to expet----------------
  const [openUpgrateComponent, setopenUpgradeComponet] = useState(false);



  // console.log(Object.keys(array).length)
  useEffect(() => {
    //storing all localdata to states...
    setUserCountryName(localStorage.getItem("setCountry"));
    setcountryFlag(localStorage.getItem('setCountryFlag'));
    setLocallyUserProfileImg(localStorage.getItem("UserProfileImg"))



    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  const forLogOut = (e) => {
    localStorage.removeItem("userName");
    localStorage.removeItem('userEmail');
    localStorage.removeItem("loginTOken");
    localStorage.removeItem('setCountry');
    localStorage.removeItem('setCountryFlag')
    // localStorage.removeItem("userSignupInfo");
    // localStorage.removeItem("GoogleFacebookToken");
    history.push("/")
  }


  return (
    <>
      <div className="flex justify-between w-full p-2 md:ml-2 md:mr-2 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg  relative shadow-inner ">

        <NavButton className="sm:ml-0" title="Menu" customFunc={handleActiveMenu} color={currentColor} icon={<AiOutlineMenu />} />
        <div className="flex gap-2 sm:gap-3">
          {
            userPaymentStatusCheck == "Expert" && (<>
              <div>
                <TooltipComponent content="Personal Mentor" position="BottomCenter">
                  <div
                    className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg mt-1 mr-1 sm:mr-1"
                    onClick={() => { setOpenMentorPopUp(true) }}
                  >
                    <button className='p-1 rounded-[13px] gap-1 flex justify-center  align-middle text-center w-auto'>
                      <BsFillPeopleFill className='text-xl sm:text-2xl text-blue-700  font-bold bg-gray-100 rounded-[50%]' />
                      {/* {
                        !isMobile && (<p className='translate-y-[-2px] text-[9px]'>Personl Mentor</p>)
                      } */}
                    </button>
                  </div>
                </TooltipComponent>
              </div>
            </>)
          }
          {
            userPaymentStatusCheck == "Starter" && (<>
              <div>
                <TooltipComponent content="Upgrade into Expert" position="BottomCenter">
                  <div
                    className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg mt-1 mr-1 sm:mr-1"
                    onClick={() => { setopenUpgradeComponet(true) }}
                  >
                    <button className='p-1 rounded-[13px] gap-1 flex justify-center  align-middle text-center w-auto'>
                      <FaFire className='text-xl sm:text-2xl text-red-400  font-bold bg-gray-100 rounded-[50%]' />
                    </button>
                  </div>
                </TooltipComponent>
              </div>
            </>)
          }
          <div>
            <TooltipComponent content={userCountryNmae} position="BottomCenter">
              <div
                className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg mt-1 mr-1 sm:mr-3"
              >
                {
                  countryFlag && <Image src={countryFlag} alt="This is the flag of your country.."
                    className='  h-[22px] sm:h-[25px] mt-[5px] sm:mt-[3px] mb-[2px] rounded shadow-sm'
                    width={40}
                    height={33}
                  />
                }
                {/* <FaFire className="text-red-300 text-[37px]" /> */}
              </div>
            </TooltipComponent>
            {/* <div className='w-[20px] h-[20px] grid justify-center align-middle
               bg-sky-100 pt-1 rounded-[50%] z-[231] translate-y-[-15px] translate-x-[25px] text-[6px] font-bold text-blue'>
            {
              Object.keys(array).length
            }
          </div> */}
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            {/* call the below component for gettign all the GETAPI For The datePicker in fireball */}
            {/* <div className='invisible'>
            <DateGetAPI />
          </div> */}
            {
              !isMobile && (<button
                type="button"
                onClick={forLogOut} className="opacity-0.9  bg-[#007bff] w-[35px] sm:w-[90px] hover:bg-red-300
                     p-2 mr-0 sm:mr-3 mt-[-6px] text-white text-[7px] sm:text-[12px] rounded-[20px] hover:drop-shadow-xl sm:p-0  shadow-sm"
              >Log-Out</button>)
            }
          </div>

          {/* <NavButton title="Cart" customFunc={() => handleClick('cart')} color={currentColor} icon={<FiShoppingCart />} />
        <NavButton title="Chat" dotColor="#03C9D7" customFunc={() => handleClick('chat')} color={currentColor} icon={<BsChatLeft />} /> */}
          {/* <NavButton title="Notification" dotColor="rgb(254, 201, 15)" customFunc={() => handleClick('notification')} color={currentColor} icon={<RiNotification3Line />} /> */}
          <TooltipComponent content="Profile" position="BottomCenter">
            <div
              className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
              onClick={() => handleClick('userProfile')}
            >
              {
                LocallyUserProfileImg ? <Image
                  className="rounded-full "
                  src={LocallyUserProfileImg}
                  width={32}
                  height={32}
                  alt="user-profile"
                /> : <Image
                  className="rounded-full"
                  width={32}
                  height={32}
                  src={avatar}
                  alt="user-profile"
                />
              }

              <p>
                <span className="text-gray-400 text-14">Hi,</span>{' '}
                {/* <span className="text-gray-400 font-bold ml-1 text-14">
                Michael
              </span> */}
              </p>
              <MdKeyboardArrowDown className="text-gray-400 text-14" />
            </div>
          </TooltipComponent>


          {isClicked.cart && (<Cart />)}
          {isClicked.chat && (<Chat />)}
          {isClicked.notification && (<Notification />)}
          {isClicked.userProfile && (<UserProfile
            forLogOut={forLogOut}
            setDeleteConfirmPop={setDeleteConfirmPop}
            deleteConfirmPop={deleteConfirmPop}
          />)}
          {/* {isClicked.FirePop && (<DateFillCom forLogOut={forLogOut} />)} */}
        </div>

      </div>

      {/* Show to the user Mentor details */}

      {
        openMentorPopUp && (
          <>
            <PersonalMentor
              setOpenMentorPopUp={setOpenMentorPopUp}
            />
          </>
        )
      }

      {/* Show to the user Delete Confirm Popup----if they really want to delete their account permanently */}

      {
        deleteConfirmPop && (
          <DeletePopUp
            setDeleteConfirmPop={setDeleteConfirmPop}

          />
        )
      }

      {/* open upgrade component if user want to upgrade  Starter to Exert  */}
      {
        openUpgrateComponent && (
          <UpgradeComponnt
            setopenUpgradeComponet={setopenUpgradeComponet}
          />
        )
      }

    </>
  );
};

export default DashNavbar;