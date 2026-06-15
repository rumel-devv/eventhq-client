"use client";

import { useState } from "react";
import { Card, Button, Input } from "@heroui/react";
import { FaCheck } from "react-icons/fa";
import { useSession } from "@/lib/auth-client";
import { FaBan } from "react-icons/fa6";
import toast from "react-hot-toast";

export default function BookingWidget({ ticketPrice, availableSeats, eventId, eventTitle }) {
  const isSoldOut = availableSeats <= 0;
   const [quantity, setQuantity] = useState(0)
  const { data: session } = useSession();

  const user = session?.user;
   const totalAmount = ticketPrice.toFixed(2) * quantity;
    
    const handleBookTicket = async () => {
     if (quantity < 1) {
    toast.error("Please select at least 1 ticket");
    return;
  }
   const paymentData = {
      type: "booking",
      ticketPrice: ticketPrice.toFixed(2),
      eventId,
      eventTitle,
      quantity,
    }

    const res = await fetch("/api/checkout_sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(paymentData)
    });

    const data = await res.json();
    // console.log(data);
    if (data?.url) {
      window.location.href = data.url;
    }


  }




  return (
    <Card className="glass sticky top-24 border border-white/10" radius="lg">
  {user?.role === "attendee" ? (
    <div className="p-5">
      <h3 className="text-lg font-bold text-white mb-5">
        Booking Details
      </h3>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-slate-400 text-sm">
            Ticket Price
          </span>

          <span className="text-xl font-bold text-pink-400">
            {ticketPrice === 0
              ? "Free"
              : `$${ticketPrice.toFixed(2)}`}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-slate-400 text-sm">
            Available Seats
          </span>

          {isSoldOut ? (
            <span className="text-red-500 font-semibold">
              Sold Out
            </span>
          ) : (
            <span className="text-white font-semibold">
              {availableSeats} Left
            </span>
          )}
        </div>
      </div>

      {!isSoldOut && (
        <>
          <div className="h-px bg-white/10 my-5" />

          <Input
            type="number"
            label="Quantity"
            labelPlacement="outside"
            placeholder="Enter quantity"
            min={1}
            max={availableSeats}
            value={quantity}
            onChange={(e) =>
              setQuantity(Number(e.target.value))
            }
            className="w-full"
          />

          <div className="flex items-center justify-between mt-5">
            <span className="text-slate-400">
              Total Amount
            </span>

            <span className="text-2xl font-bold text-white">
              ${totalAmount}
            </span>
          </div>
        </>
      )}

      <Button
      onClick={handleBookTicket}
        isDisabled={isSoldOut}
        radius="lg"
        className={`w-full mt-6 h-12 font-semibold ${
          isSoldOut
            ? "bg-slate-800 text-slate-500"
            : "bg-gradient-to-r from-pink-500 to-indigo-600 text-white"
        }`}
      >
        {isSoldOut ? "Sold Out" : "Book Ticket Now"}
      </Button>

      <div className="flex items-center justify-center gap-2 mt-4 text-xs text-slate-400">
        <FaCheck className="text-green-500" />
        <span>Instant confirmation</span>
      </div>
    </div>
  ) : (
    <div className="p-5 text-center">
      <FaBan className="mx-auto text-4xl text-red-500 mb-3" />

      <h3 className="text-lg font-semibold text-red-500">
        Booking Not Available
      </h3>

      <p className="mt-2 text-sm text-slate-400">
        {user?.role?.toUpperCase()} users cannot book events.
      </p>
    </div>
  )}
</Card>
  );
}
