"use client";

import DashboardHeading from "@/components/DashboardHeading";
import { addEvent } from "@/lib/api/events/action";

import { useSession } from "@/lib/auth-client";
import { uploadImage } from "@/lib/utilis/uploadImage";

import {
  Button,
  Card,
  CardHeader,
  Input,
  TextArea,
  Select,
  Form,
  Label,
} from "@heroui/react";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaImage } from "react-icons/fa";

const AddEventPage = () => {
  const { data: session } = useSession();

  const CATEGORIES = [
    "Music",
    "Tech",
    "Sports",
    "Arts",
    "Business",
    "Food",
    "Other",
  ];

  const LOCATIONS = [
    "New York",
    "San Francisco",
    "London",
    "Dhaka",
    "Tokyo",
    "Berlin",
    "Online",
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const imageFile = data.banner[0];
    const imageUrl = await uploadImage(imageFile);
    // console.log(data?.banner, "data.banner");
    console.log("banner data",data);
    delete data?.banner;
    const updateData = {
        ...data,
        banner: imageUrl,
        organizationEmail: session.user.email
    }

    const result = await addEvent(updateData)
    console.log(result);

        if (result.insertedId) {
            toast.success("Event added successfully...")
            // redirect("/events")
        } else {
            toast.error(result.message || "Event not created...")
        }
  };

  return (
    <div>
      <DashboardHeading
        title="Add Event"
        description=" Create a new event by filling out the details below. Make sure all
    information is accurate so users can easily discover and join your event."
      />

      <div className="mt-6 max-w-3xl">
        <Card
          className="border border-white/5 bg-slate-900/40 backdrop-blur-xl shadow-2xl rounded-2xl"
          radius="lg"
        >
          <CardHeader className="flex flex-col gap-1 pb-4 border-b border-white/5 p-6">
            <h3 className="text-xl font-bold text-white">Host a New Event</h3>
            <p className="text-slate-400 text-xs">
              Fill out the detailed event information. Banners and dates are
              required.
            </p>
          </CardHeader>

          <div className="p-6">
            <Form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full space-y-6 bg-slate-950/40 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm"
            >
              {/* Title + Banner */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                <div>
                  <Label className="text-sm font-semibold text-slate-200 mb-2 block">
                    Title
                  </Label>
                  <Input
                    label="Event Title"
                    labelPlacement="outside"
                    placeholder="e.g. Rock Fest 2026"
                    className="w-full"
                    classNames={{
                      inputWrapper:
                        "bg-slate-900/60 border border-slate-700 hover:border-pink-500 focus-within:border-pink-500 transition-all duration-300 min-h-[52px]",
                      input: "text-white placeholder:text-slate-400",
                    }}
                    {...register("title", {
                      required: "Event title is required",
                    })}
                  />
                  {errors.title && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.title.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label className="text-sm font-semibold text-slate-200 mb-2 block">
                    Image
                  </Label>
                  <Input
                    type="file"
                    accept="image/*"
                    labelPlacement="outside"
                    startContent={
                      <FaImage className="text-slate-400 text-sm" />
                    }
                    className="w-full"
                    classNames={{
                      inputWrapper:
                        "bg-slate-900/60 border border-slate-700 hover:border-pink-500 focus-within:border-pink-500 transition-all duration-300 min-h-[52px]",
                      input: "text-white file:text-white",
                    }}
                    {...register("banner", {
                      required: "Banner is Required",
                    })}
                  />
                  {errors.banner && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.banner.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Category + Location */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                <div>
                  <Label className="text-sm font-semibold text-slate-200 mb-2 block">
                    Category
                  </Label>

                  <select
                    className="
          w-full
          bg-slate-900/60
          border border-slate-700
          rounded-xl
          px-4
          h-[52px]
          text-white
          hover:border-pink-500
          focus:border-pink-500
          transition-all
          duration-300
          outline-none
        "
                    {...register("category", {
                      required: "Category is required",
                    })}
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>

                  {errors.category && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.category.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label className="text-sm font-semibold text-slate-200 mb-2 block">
                    Location
                  </Label>

                  <select
                    className="
          w-full
          bg-slate-900/60
          border border-slate-700
          rounded-xl
          px-4
          h-[52px]
          text-white
          hover:border-pink-500
          focus:border-pink-500
          transition-all
          duration-300
          outline-none
        "
                    {...register("location", {
                      required: "Location is required",
                    })}
                  >
                    {LOCATIONS.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>

                  {errors.location && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.location.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Date + Price + Capacity */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
                <div>
                  <Label className="text-sm font-semibold text-slate-200 mb-2 block">
                    Date
                  </Label>
                  <Input
                    type="date"
                    className="w-full"
                    classNames={{
                      inputWrapper:
                        "bg-slate-900/60 border border-slate-700 hover:border-pink-500 focus-within:border-pink-500 transition-all duration-300 min-h-[52px]",
                      input: "text-white",
                    }}
                    {...register("date", {
                      required: "Date is required",
                    })}
                  />
                  {errors.date && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.date.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label className="text-sm font-semibold text-slate-200 mb-2 block">
                    Price
                  </Label>
                  <Input
                    type="number"
                    placeholder="0.00"
                    className="w-full"
                    classNames={{
                      inputWrapper:
                        "bg-slate-900/60 border border-slate-700 hover:border-pink-500 focus-within:border-pink-500 transition-all duration-300 min-h-[52px]",
                      input: "text-white placeholder:text-slate-400",
                    }}
                    {...register("price", {
                      required: "Price is required",
                      valueAsNumber: true,
                      min: { value: 0, message: "Price cannot be negative" },
                    })}
                  />
                  {errors.price && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.price.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label className="text-sm font-semibold text-slate-200 mb-2 block">
                    Capacity
                  </Label>
                  <Input
                    type="number"
                    placeholder="100"
                    className="w-full"
                    classNames={{
                      inputWrapper:
                        "bg-slate-900/60 border border-slate-700 hover:border-pink-500 focus-within:border-pink-500 transition-all duration-300 min-h-[52px]",
                      input: "text-white placeholder:text-slate-400",
                    }}
                    {...register("capacity", {
                      required: "Capacity is required",
                      valueAsNumber: true,
                      min: { value: 1, message: "Capacity must be at least 1" },
                    })}
                  />
                  {errors.capacity && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.capacity.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Description */}
              <div>
                <Label className="text-sm font-semibold text-slate-200 mb-2 block">
                  Description
                </Label>

                <TextArea
                  placeholder="Outline the detailed schedule, speaker list, and amenities..."
                  className="w-full"
                  classNames={{
                    inputWrapper:
                      "bg-slate-900/60 border border-slate-700 hover:border-pink-500 focus-within:border-pink-500 transition-all duration-300",
                    input: "text-white placeholder:text-slate-400",
                  }}
                  minRows={6}
                  {...register("description", {
                    required: "Description is required",
                    minLength: {
                      value: 20,
                      message:
                        "Description must be at least 20 characters long",
                    },
                  })}
                />

                {errors.description && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.description.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full md:w-full bg-gradient-to-r from-pink-700 via-fuchsia-600 to-indigo-600 text-white font-semibold h-12 px-8 rounded-xl shadow-lg hover:scale-[1.02] transition-all duration-300"
              >
                🚀 Host Event Now
              </Button>
            </Form>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AddEventPage;
