

"use client"

import React, { createContext, useContext, useState } from 'react';
import toast from 'react-hot-toast';
const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);

  //Reading showing Answer by the states change below
  const [ReadingShowAnswer, setReadingShowAnswer] = useState('')

  //Listening showing Answer by the states change below
  const [ListeningShowAnswer, setListeningShowAnswer] = useState('')


  const [speakingStepsNo, setSpeakingStepNo] = useState()
  const [showSpeakingResult, setShoeSpeakingResult] = useState([])

  //state for more clicked in writing--
  // show the text into the login & SingUp component if we want to show show text to the user
  const [writingText, setWritingText] = useState("");

  // chnage status for showing the login&Signup  UI to the user for stay into the same Page -- 
  const [loginRedirectStatus, setLoginRedirectUrl] = useState("");


  const [array, setArray] = useState([]);

  //state for open when user click in premium modules
  //& make the status true or false in country select--
  const [makeCountryStatus, setMakeCountryStatus] = useState(false);

  //store all Country data to this state(16/3/24)
  const [StoreCountryData, setStoreCounrtyData] = useState([]);

  //CV-Make all outSide state as like every auto select data's-----(25/4/24)
  const [storeWorkExprienceTitle, setStoreWorkExprienceTitle] = useState([]);
  const [storeWorkExprienceCountry, setStoreWorkExprienceCountry] = useState([]);

  //for Explanations in reading && Listening.......
  const [explainRLQuestions, setExplainRLQuestions] = useState(false);
  const [explainObjForRL, setExplainObjForRL] = useState({})








  //check the payment status-----
  const [bdPaidStatus, setBdPaidSatus] = useState(false);
  const [otherPaidStatus, setOtherPaidStatus] = useState(false);

  //if dont need above code remove please---------
  const [userPaymentStatusCheck, setuserPaymentStatusCheck] = useState("paymentSatus")

  const [billPopUp, setBillPopUp] = useState(false); // it's not need
  const notify = () => toast('Thank you. Your payment has been successfully done.');



  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
  };

  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider value={{
      currentColor, currentMode, activeMenu,
      screenSize, setScreenSize, handleClick, isClicked, initialState, setIsClicked,
      setActiveMenu, setCurrentColor, setCurrentMode, setMode, setColor, themeSettings,
      setThemeSettings, writingText, setWritingText, array, setArray, makeCountryStatus, setMakeCountryStatus, notify, bdPaidStatus, setBdPaidSatus, otherPaidStatus, setOtherPaidStatus, billPopUp, setBillPopUp,
      loginRedirectStatus, setLoginRedirectUrl, StoreCountryData, setStoreCounrtyData,
      showSpeakingResult, setShoeSpeakingResult,
      speakingStepsNo, setSpeakingStepNo,
      storeWorkExprienceTitle, setStoreWorkExprienceTitle,
      storeWorkExprienceCountry, setStoreWorkExprienceCountry,
      ReadingShowAnswer, setReadingShowAnswer,
      ListeningShowAnswer, setListeningShowAnswer,
      userPaymentStatusCheck, setuserPaymentStatusCheck,
      explainRLQuestions, setExplainRLQuestions,
      explainObjForRL, setExplainObjForRL
    }}>

      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);