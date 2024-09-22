
"use client"
import { Suspense } from "react";
import LanginHomePage from "../app/Pages/LandingHome/index";
import { CheckPaymentStatus } from "./Pages/Payments/CkeckPayment/CheckPayments";
import Loader from "@/Helper/Loader";


export default function Home() {
  CheckPaymentStatus();

  return (
    <Suspense fallback={<div className='w-[100%] h-[100vh] flex justify-center align-middle'>
      {<Loader />}
    </div>}>
      <LanginHomePage />
    </Suspense>
  );
}
