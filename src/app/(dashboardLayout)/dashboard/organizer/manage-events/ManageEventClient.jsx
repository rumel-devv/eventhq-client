"use client";

import DeleteEventModal from "@/components/DeleteEventModal";
import EditEventModal from "@/components/EditEventModal";
import {
  Button,
  Card,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableContent,
  TableHeader,
  TableRow,
} from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const ManageEventClient = ({ events }) => {
  const [deletedId, setDeletedId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const hasEvents = events && events.length > 0;

  return (
    <div className="mt-6">
      <Card className="border border-white/5 bg-slate-900/40 backdrop-blur-xl shadow-2xl p-6 rounded-2xl">

        {/* ================= EMPTY STATE ================= */}
        {!hasEvents ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="text-slate-200 text-lg font-semibold mb-2">
              No events found
            </div>
            <p className="text-slate-500 text-sm mb-6">
              You haven’t added any events yet. Start by creating your first event.
            </p>

            <Link href='/dashboard/organizer/add-event'>
            <Button
              className="bg-indigo-500 text-white hover:bg-indigo-600"
              onPress={() => console.log("redirect to add event page")}
            >
              + Add Event
            </Button>
            </Link>
          </div>
        ) : (
          /* ================= TABLE ================= */
          <div className="p-0 overflow-x-auto">
            <Table aria-label="Manage Events Table">
              <TableContent>
                <TableHeader className="bg-slate-950/40 border-b border-white/5 rounded-t-xl">
                  <TableColumn className="py-4 px-6 text-slate-400 font-extrabold uppercase text-[11px] tracking-wider">
                    EVENT
                  </TableColumn>
                  <TableColumn className="py-4 px-6 text-slate-400 font-extrabold uppercase text-[11px] tracking-wider">
                    CATEGORY
                  </TableColumn>
                  <TableColumn className="py-4 px-6 text-slate-400 font-extrabold uppercase text-[11px] tracking-wider">
                    DATE
                  </TableColumn>
                  <TableColumn className="py-4 px-6 text-slate-400 font-extrabold uppercase text-[11px] tracking-wider">
                    TICKET PRICE
                  </TableColumn>
                  <TableColumn className="py-4 px-6 text-slate-400 font-extrabold uppercase text-[11px] tracking-wider">
                    AVAILABLE SEATS
                  </TableColumn>
                  <TableColumn className="py-4 px-6 text-slate-400 font-extrabold uppercase text-[11px] tracking-wider">
                    STATUS
                  </TableColumn>
                  <TableColumn className="py-4 px-6 text-slate-400 font-extrabold uppercase text-[11px] tracking-wider">
                    ACTIONS
                  </TableColumn>
                </TableHeader>

                <TableBody>
                  {events.map((ev) => (
                    <TableRow key={ev._id}>
                      <TableCell className="py-4 px-6 font-bold text-white">
                        {ev.title}
                      </TableCell>

                      <TableCell className="py-4 px-6 text-slate-300">
                        {ev.category}
                      </TableCell>

                      <TableCell className="py-4 px-6 text-slate-300">
                        {ev.date}
                      </TableCell>

                      <TableCell className="py-4 px-6 font-semibold text-green-400">
                        ${ev.price?.toFixed(2)}
                      </TableCell>

                      <TableCell className="py-4 px-6 text-slate-300">
                        {ev.capacity} seats
                      </TableCell>

                      <TableCell className="py-4 px-6">
                        <Chip
                          size="sm"
                          className={`uppercase text-[10px] font-bold ${
                            ev.status === "approved"
                              ? "bg-green-500/10 text-green-400"
                              : ev.status === "rejected"
                              ? "bg-red-500/10 text-red-400"
                              : "bg-yellow-500/10 text-yellow-400"
                          }`}
                        >
                          {ev.status || "pending"}
                        </Chip>
                      </TableCell>

                      <TableCell className="py-4 px-6">
                        <div className="flex gap-2">

                          <Button
                            isIconOnly
                            size="sm"
                            onPress={() => {
                              setEditingEvent(ev);
                              setIsModalOpen(true);
                            }}
                          >
                            <FaEdit />
                          </Button>

                          <Button
                            isIconOnly
                            size="sm"
                            onPress={() => {
                              setDeletedId(ev._id);
                              setIsDeleteOpen(true);
                            }}
                          >
                            <FaTrash />
                          </Button>

                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>

              </TableContent>
            </Table>
          </div>
        )}
      </Card>

      {/* MODALS */}
      <EditEventModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        editingEvent={editingEvent}
      />

      <DeleteEventModal
        isDeleteOpen={isDeleteOpen}
        setIsDeleteOpen={setIsDeleteOpen}
        id={deletedId}
      />
    </div>
  );
};

export default ManageEventClient;