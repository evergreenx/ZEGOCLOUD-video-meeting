import React from "react";
import Header from "./header";

export default function Landing({
    setStartMeeting,
    setMeetingTitle,
    meetingTitle,
  }: {
    setStartMeeting: (value: boolean) => void;
    meetingTitle: string;
    setMeetingTitle: (value: string) => void;
  }) {
  return (
    <>
      <Header
        meetingTitle={meetingTitle}
        setMeetingTitle={setMeetingTitle}
        setStartMeeting={setStartMeeting}
      />

      <div className="h-screen justify-center flex items-center flex-col">
        <h2 className="text-5xl text-center font-extrabold">
          No matter where you are, be there virtually
        </h2>

        <p className="my-5">
          Overcome distance and participate in meetings, presentations, or
          social events in real-time.
        </p>
      </div>
    </>
  );
}
