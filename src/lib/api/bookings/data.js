import { serverFetch } from "../server";



export const fetchMyBookings = async (email) => {
  const result = await serverFetch(`/api/events/booking/${email}`);
  console.log(result, 'my fetechbbokings');
  return result;
};