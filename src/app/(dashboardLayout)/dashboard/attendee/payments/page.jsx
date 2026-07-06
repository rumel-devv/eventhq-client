import DashboardHeading from '@/components/DashboardHeading';
import PaymentsTable from '@/components/PaymentsTable';
import { fetchMyPayments } from '@/lib/api/payments/data';
import { getUser } from '@/lib/api/session';
import React from 'react';

const AttedendeePayments = async () => {

   const user = await getUser()
   //  console.log("user",user);
     const payments = await fetchMyPayments(user?.email)

    return (
        <div>
            <DashboardHeading
                title="My Payment Overview"
                description="All payments of user"
            />
            <PaymentsTable payments={payments} />
        </div>
    );
};

export default AttedendeePayments;