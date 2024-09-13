"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import logo from '../../../../assets/images/Practestlogo.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
//end of the importing...


import { links } from '../data/dummy';
import { useStateContext } from '../../../../contexts/ContextProvider';

const Sidebar = ({ DashboardID }) => {
  let history = useRouter()
  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();
  const [ActiveBgChange, setActiveBgChange] = useState("Dashboard");

  const handleCloseSideBar = (navNames) => {
    setActiveBgChange(navNames);
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink = 'flex items-center gap-2 pl-4 pt-3 pb-1 rounded-lg  text-white  text-md m-2';
  const normalLink = 'flex items-center gap-2 pl-4 pt-3 pb-1 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  return (
    <div className="h-screen w-full overflow-hidden pb-10 pl-2 ">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <div onClick={() => {
              handleCloseSideBar();
            }}
              className="items-center gap-3 ml-1 mt-2  font-extrabold tracking-tight">
              {/* <SiShopware /> <span>iPractest</span> */}
              <Image src={logo} alt="logo image for side bar" className='w-[100px]'
                onClick={() => { history.push("/") }}
              />
            </div>

            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                style={{ color: currentColor }}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10 w-[1000px]">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                  {item.title}
                </p>
                <div className='grid'>
                  {item.links.map((link) => (
                    <div key={link.name}
                      onClick={() => {
                        handleCloseSideBar(link.name);
                        history.push(`/Pages/MainDashboard/${link.name}`)
                      }}
                      style={{ backgroundColor: link.name == DashboardID && "#D3D3D3" }}
                      className={`${link.name == DashboardID ? activeLink : normalLink} cursor-pointer`}
                    >
                      <p className='font-bold'>{link.icon}</p>
                      <p className='font-bold text-black text-[12px]'>{link.name}</p>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;