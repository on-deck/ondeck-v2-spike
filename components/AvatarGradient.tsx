import React from "react";

export const AvatarGradient = ({small} : {small?: boolean}) => {
  return (
    <>
      <div
        style={{
          top: small ? 150 : 20,
          left: small ? 80 : 40,
          width: "100%",
          height: "100%",
          maxWidth: small ? 116 : 245,
          maxHeight: small ? 116 : 245,
          mixBlendMode: "overlay",
          background:
            "linear-gradient(270deg, #E35275 0%, #773FE2 53.28%, #315BE8 100%);",
        }}
        className="animate-pulse duration-700 z-0 absolute rounded-full -mt-10"
      ></div>

      <div
        style={{
          top: small ? 180 : 0,
          left: small ? 90 : 30,
          width: small ? 116 : 245,
          height: small ? 116 : 245,
          mixBlendMode: "overlay",
          background:
            "linear-gradient(270deg, #E35275 0%, #773FE2 53.28%, #315BE8 100%);",
        }}
        className=" animate-pulse delay-200 z-0 absolute rounded-full -mt-10"
      ></div>

      <div
        style={{
          top: small ? 160 : 31,
          left: small ? 110 : 12,
          width: small ? 116 : 245,
          height: small ? 116 : 245,
          mixBlendMode: "overlay",
          background:
            "linear-gradient(270deg, #E35275 0%, #773FE2 53.28%, #315BE8 100%);",
        }}
        className=" animate-pulse delay-300 z-0 absolute rounded-full -mt-10"
      ></div>
    </>
  );
};
