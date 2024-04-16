import React from "react";
import Navbar from "../components/Navbar/Navbar";
export default function Error() {
  return (
    <>
      <Navbar />
      <div>
        <h1 style={{ textAlign: "center", color: "red" }}>
          {/* something went wrong!!! */}
          404 error
        </h1>
      </div>
    </>
  );
}
