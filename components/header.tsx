import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";
export default function Header({
  setStartMeeting,
  meetingTitle,
  setMeetingTitle,
}: {
  setStartMeeting: (value: boolean) => void;
  meetingTitle: string;
  setMeetingTitle: (value: string) => void;
}) {
  return (
    <>
      {" "}
      <header className="w-full p-3 flex justify-end absolute">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2"
              variant="outline"
            >
              {" "}
              Start meeting
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Meeting Details</DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Title
                </Label>
                <Input
                  onChange={(e) => setMeetingTitle(e.target.value)}
                  id="title"
                  value={meetingTitle}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={() => setStartMeeting(true)}>
                Create
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </header>
    </>
  );
}
