import DashboardHeading from "@/components/DashboardHeading";
import { myEvents } from "@/lib/api/events/data";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React, { Suspense } from "react";
import ManageEventClient from "./ManageEventClient";
import { Spinner } from "@heroui/react";

const ManageEventPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const events = await myEvents(session?.user?.email);

  return (
    <div>
      <DashboardHeading
        title="Manage Events"
        description="Efficiently manage all your events, update event information, monitor ticket sales, track attendee registrations, and ensure a seamless event experience."
      />
      <Suspense fallback={<Spinner />}>
        <ManageEventClient events={events} />
      </Suspense>
    </div>
  );
};

export default ManageEventPage;
