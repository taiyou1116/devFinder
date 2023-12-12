import DevHistoryContainer from "@/components/dev/history/DevHistoryContainer";
import DevProfile from "@/components/dev/DevProfile";
import React from "react";

function page() {
  return (
    <div className="">
      <DevProfile />
      <DevHistoryContainer />
    </div>
  );
}

export default page;
