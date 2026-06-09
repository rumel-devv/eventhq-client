"use client";

import DashboardHeading from "@/components/DashboardHeading";
import { useSession } from "@/lib/auth-client";
import { addOrganization, updateOrg } from "@/lib/organization/action";
import { myOrganization } from "@/lib/organization/data";
import { uploadImage } from "@/lib/utilis/uploadImage";
import { Button, Card, CardHeader, Form, Input } from "@heroui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaImage } from "react-icons/fa";

const OrganiizationPage = () => {
  const { data: session } = useSession();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  console.log(session?.user);
  const setOrgData = async () => {
    if (session && session?.user?.email) {
      const org = await myOrganization(session?.user?.email);
      //   console.log(session?.user?.email);
      return org;
    }
  };

  //   console.log(myOrg);

  const onOrganizationSubmit = async (data) => {
    console.log(data, "data");
    const imageFile = data.organizationLogo[0];
    const imageUrl = await uploadImage(imageFile);

    const orgData = {
      organizationName: data.organizationName,
      organizationLogo: imageUrl,
      organizationWebsite: data.organizationWebsite,
      description: data.description,
      organizerEmail: session?.user?.email,
    };

    // const resData = await addOrganization(orgData);
    const myOrg = await setOrgData();
    console.log(myOrg, "my org");
    if (!myOrg) {
      const resData = await addOrganization(orgData);
      if (resData.insertedId) {
        toast.success("Org Profile added");
      }
    } else {
      const updatedRes = await updateOrg(orgData, myOrg._id);
      if (updatedRes.modifiedCount > 0) {
        toast.success("Org Profile updated");
      }
    }

    // console.log("orgdata",resData);

    reset();
  };

  return (
    <div>
      <DashboardHeading
        title="My Organization Profile"
        description="Update your organization logo, profile information, website, and description to keep your brand professional and up to date."
      />

      <div className="mt-6 max-w-3xl">
        <Card
          className="border border-white/5 bg-slate-900/40 backdrop-blur-xl shadow-2xl rounded-2xl"
          radius="lg"
        >
          <CardHeader className="flex flex-col gap-1 pb-4 border-b border-white/5 p-6">
            <h3 className="text-xl font-bold text-white">
              Organization Details
            </h3>
            <p className="text-slate-400 text-xs">
              Review and edit your organization credentials.
            </p>
          </CardHeader>

          <div className="p-6">
            <Form
              onSubmit={handleSubmit(onOrganizationSubmit)}
              className="space-y-5 w-full"
            >
              {/* Organization Name */}
              <div className="w-full">
                <Input
                  {...register("organizationName", {
                    required: "Organization Name is required",
                  })}
                  id="organizationName"
                  label="Organization Name"
                  labelPlacement="outside"
                  placeholder="TechEvents Corp"
                  className="w-full"
                />
                {errors.organizationName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.organizationName.message}
                  </p>
                )}
              </div>

              {/* Logo */}
              <div className="w-full">
                <Input
                  {...register("organizationLogo", {
                    required: "Organization Logo is required",
                  })}
                  type="file"
                  accept="image/*"
                  id="organizationLogo"
                  label="Organization Logo"
                  labelPlacement="outside"
                  startContent={<FaImage className="text-slate-400 text-sm" />}
                  className="w-full"
                />
                {errors.organizationLogo && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.organizationLogo.message}
                  </p>
                )}
              </div>

              {/* Website */}
              <div className="w-full">
                <Input
                  {...register("organizationWebsite", {
                    required: "Organization Website is required",
                    pattern: {
                      value: /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/.*)?$/,
                      message: "Please enter a valid website URL",
                    },
                  })}
                  id="organizationWebsite"
                  label="Organization Website"
                  labelPlacement="outside"
                  placeholder="https://techevents.com"
                  className="w-full"
                />
                {errors.organizationWebsite && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.organizationWebsite.message}
                  </p>
                )}
              </div>

              {/* Description */}
              <div className="w-full">
                <textarea
                  {...register("description", {
                    required: "Description is required",
                    minLength: {
                      value: 20,
                      message: "Minimum 20 characters required",
                    },
                  })}
                  id="description"
                  placeholder="Hosting global developer conferences and software hackathons..."
                  className="w-full bg-slate-900/50 border border-white/10 rounded-xl p-3 text-white text-sm focus:outline-none focus:border-indigo-500 min-h-[120px]"
                />

                {errors.description && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.description.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <div className="pt-2 w-full">
                <Button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold h-11 shadow-lg"
                  radius="lg"
                >
                  Save Changes
                </Button>
              </div>
            </Form>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default OrganiizationPage;
