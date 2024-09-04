
"use client"
import LanginHomePage from "../app/Pages/LandingHome/index";
import { CheckPaymentStatus } from "./Pages/Payments/CkeckPayment/CheckPayments";


export default function Home() {
  CheckPaymentStatus();

  return (

    <LanginHomePage />
  );
}
