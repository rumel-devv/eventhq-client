import {
  Button,
  Card,
  CardHeader,
  Form,
  Input,
  TextArea,
} from "@heroui/react";
import {
  FaCalendarDay,
  FaDollarSign,
  FaTicketAlt,
} from "react-icons/fa";

const AttendeeOverViewPage = () => {
  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card className="glass border-white/5" radius="lg">
          <div className="flex items-center justify-between p-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Total Spent
              </span>
              <h2 className="text-3xl font-extrabold text-white">$298.00</h2>
            </div>

            <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-3.5 text-green-400">
              <FaDollarSign size={24} />
            </div>
          </div>
        </Card>

        <Card className="glass border-white/5" radius="lg">
          <div className="flex items-center justify-between p-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Tickets Booked
              </span>
              <h2 className="text-3xl font-extrabold text-white">4</h2>
            </div>

            <div className="rounded-2xl border border-pink-500/20 bg-pink-500/10 p-3.5 text-pink-400">
              <FaTicketAlt size={24} />
            </div>
          </div>
        </Card>

        <Card className="glass border-white/5" radius="lg">
          <div className="flex items-center justify-between p-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Upcoming Events
              </span>
              <h2 className="text-3xl font-extrabold text-white">2</h2>
            </div>

            <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/10 p-3.5 text-indigo-400">
              <FaCalendarDay size={24} />
            </div>
          </div>
        </Card>
      </div>

      {/* Profile Update Panel */}
      <Card
  className="glass max-w-3xl border border-white/10 bg-slate-900/40 shadow-xl"
  radius="lg"
>
  <CardHeader className="flex flex-col items-start gap-1 border-b border-white/10 px-6 py-5">
    <h3 className="text-xl font-bold text-white">
      Profile Information
    </h3>
    <p className="text-sm text-slate-400">
      Update your public details and biography.
    </p>
  </CardHeader>

  <div className="p-6">
    <Form className="flex w-full flex-col gap-5">

      <Input
        label="Full Name"
        labelPlacement="outside"
        placeholder="John Doe"
        radius="lg"
        variant="bordered"
        classNames={{
          label: "text-slate-300",
          input: "text-white placeholder:text-slate-500",
          inputWrapper:
            "bg-slate-900/50 border border-white/10 hover:border-pink-500 focus-within:!border-pink-500",
        }}
      />

      <Input
        label="Avatar URL"
        labelPlacement="outside"
        placeholder="https://api.dicebear.com/7.x/adventurer/svg?seed=John"
        radius="lg"
        variant="bordered"
        classNames={{
          label: "text-slate-300",
          input: "text-white placeholder:text-slate-500",
          inputWrapper:
            "bg-slate-900/50 border border-white/10 hover:border-pink-500 focus-within:!border-pink-500",
        }}
      />

      <TextArea
        label="Biography"
        labelPlacement="outside"
        placeholder="Tell us about yourself..."
        minRows={4}
        radius="lg"
        variant="bordered"
        classNames={{
          label: "text-slate-300",
          input: "text-white placeholder:text-slate-500",
          inputWrapper:
            "bg-slate-900/50 border border-white/10 hover:border-pink-500 focus-within:!border-pink-500",
        }}
      />

      <Button
        type="submit"
        radius="lg"
        className="mt-2 h-11 w-fit bg-indigo-600 px-8 font-semibold text-white transition-all hover:bg-indigo-500"
      >
        Save Profile
      </Button>

    </Form>
  </div>
</Card>
    </div>
  );
};

export default AttendeeOverViewPage;