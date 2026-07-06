import DashboardHeading from '@/components/DashboardHeading';
import TicketsTable from '@/components/TicketsTable';
import { fetchMyBookings } from '@/lib/api/bookings/data';
import { getUser } from '@/lib/api/session';
import React from 'react';

const AttendeeTickets = async () => {
 const user = await getUser()
//  console.log("user",user);
  const bookings = await fetchMyBookings(user?.email)
  console.log('hshsh',fetchMyBookings);
//   console.log("boookings",bookings);
    return (
        <div>
             <DashboardHeading
                title="My Booked Tickets"
                description="All the booked tickets"
            />
             <TicketsTable tickets={bookings} />
        </div>
        
    );
};

export default AttendeeTickets;