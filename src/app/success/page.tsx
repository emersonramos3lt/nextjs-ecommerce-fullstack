"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import ReactConfetti from "react-confetti";

const SuccessPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const orderId = searchParams.get("orderId");

  useEffect(() => {
    if (!orderId) return;

    const timer = setTimeout(() => {
      router.push("/orders/" + orderId);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [orderId, router]);

  return (
    <div className="flex flex-col gap-6 items-center justify-center h-[calc(100vh-80px)]">
      <ReactConfetti width={1000} height={1000} className="w-full h-full" />
      <h1 className="text-6xl text-green-500">Succesful</h1>
      <h2 className="text-2xl font-medium">
        We’ve sent the invoice to your email.
      </h2>
      <h3 className="text-base">
        You will be redirected to the homepage shortly...
      </h3>
    </div>
  );
};

export default SuccessPage;
