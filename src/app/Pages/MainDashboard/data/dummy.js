
import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GiSoundWaves } from "react-icons/gi";
import { MdOutlineLeaderboard } from "react-icons/md";
import { FcWorkflow } from "react-icons/fc";
import { VscReferences } from "react-icons/vsc";
//images....
import { AiFillFilePdf } from "react-icons/ai";
import avatar from "../../../../assets/images/Dashboard-Images/avatar2.png"
import avatar2 from "../../../../assets/images/Dashboard-Images/avatar2.png"
import avatar3 from "../../../../assets/images/Dashboard-Images/avatar2.png"
import avatar4 from "../../../../assets/images/Dashboard-Images/avatar2.png"



export const areaPrimaryXAxis = {
  valueType: 'DateTime',
  labelFormat: 'y',
  majorGridLines: { width: 0 },
  intervalType: 'Years',
  edgeLabelPlacement: 'Shift',
  labelStyle: { color: 'gray' },
};

export const areaPrimaryYAxis = {
  labelFormat: '{value}%',
  lineStyle: { width: 0 },
  maximum: 4,
  interval: 1,
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelStyle: { color: 'gray' },

};
export const barPrimaryXAxis = {
  valueType: 'Category',
  interval: 1,
  majorGridLines: { width: 0 },
};
export const barPrimaryYAxis = {
  majorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  lineStyle: { width: 0 },
  labelStyle: { color: 'transparent' },
};





// Linechart all data ---------
export const LinePrimaryXAxis = {
  valueType: 'DateTime',
  labelFormat: 'y',
  intervalType: 'Years',
  edgeLabelPlacement: 'Shift',
  majorGridLines: { width: 0 },
  background: 'white',
};

export const LinePrimaryYAxis = {
  labelFormat: '({value})',
  rangePadding: 'None',
  minimum: 0,
  maximum: 9,
  interval: 1,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};



export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'Dashboard',
        icon: <FiShoppingBag />,
      },
      {
        name: 'LeaderBoard',
        icon: <MdOutlineLeaderboard />,
      },
      {
        name: 'Speaking-Records',
        icon: <GiSoundWaves />,
      },
      {
        name: "Let's-Practice",
        icon: <FcWorkflow />,
      },
      {
        name: 'SOPFile',
        icon: <AiFillFilePdf />,
      },
      {
        name: 'Referrals',
        icon: <VscReferences />,
      },
      // {
      //   name: 'LORFile',
      //   icon: <AiFillFilePdf />,
      // },
      // {
      //   name: 'UserScors',
      //   icon: <FiShoppingBag />,
      // },
      // {
      //   name: 'ecommerce',
      //   icon: <FiShoppingBag />,
      // },

    ],
  },

  // {
  //   title: 'Pages',
  //   links: [
  //     {
  //       name: 'orders',
  //       icon: <AiOutlineShoppingCart />,
  //     },
  //     {
  //       name: 'employees',
  //       icon: <IoMdContacts />,
  //     },
  //     {
  //       name: 'customers',
  //       icon: <RiContactsLine />,
  //     },
  //   ],
  // },
  // {
  //   title: 'Features',
  //   links: [
  //     {
  //       name: 'calendar',
  //       icon: <AiOutlineCalendar />,
  //     },

  //     {
  //       name: 'kanban',
  //       icon: <BsKanban />,
  //     },
  //     {
  //       name: 'editor',
  //       icon: <FiEdit />,
  //     },
  //     {
  //       name: 'color-picker',
  //       icon: <BiColorFill />,
  //     },
  //   ],
  // },
  // {
  //   title: 'Charts',
  //   links: [
  //     {
  //       name: 'line',
  //       icon: <AiOutlineStock />,
  //     },
  //     {
  //       name: 'area',
  //       icon: <AiOutlineAreaChart />,
  //     },

  //     {
  //       name: 'bar',
  //       icon: <AiOutlineBarChart />,
  //     },
  //     {
  //       name: 'pie',
  //       icon: <FiPieChart />,
  //     },
  //     {
  //       name: 'financial',
  //       icon: <RiStockLine />,
  //     },
  //     {
  //       name: 'color-mapping',
  //       icon: <BsBarChart />,
  //     },
  //     {
  //       name: 'pyramid',
  //       icon: <GiLouvrePyramid />,
  //     },
  //     {
  //       name: 'stacked',
  //       icon: <AiOutlineBarChart />,
  //     },
  //   ],
  // },
];


export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: 'My Profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },

];

export const chatData = [
  {
    image:
      avatar2,
    message: 'Roman Joined the Team!',
    desc: 'Congratulate him',
    time: '9:08 AM',
  },
  {
    image:
      avatar3,
    message: 'New message received',
    desc: 'Salma sent you new message',
    time: '11:56 AM',
  },
  {
    image:
      avatar4,
    message: 'New Payment received',
    desc: 'Check your earnings',
    time: '4:39 AM',
  },
  {
    image:
      avatar,
    message: 'Jolly completed tasks',
    desc: 'Assign her new tasks',
    time: '1:12 AM',
  },
];




export const contextMenuItems = [
  'AutoFit',
  'AutoFitAll',
  'SortAscending',
  'SortDescending',
  'Copy',
  'Edit',
  'Delete',
  'Save',
  'Cancel',
  'PdfExport',
  'ExcelExport',
  'CsvExport',
  'FirstPage',
  'PrevPage',
  'LastPage',
  'NextPage',
];
