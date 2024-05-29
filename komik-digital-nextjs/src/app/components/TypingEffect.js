import React from "react";
import Typewriter from "typewriter-effect";

export default function TypingEffect() {
  return (
    <div className="text-3xl lg:text-5xl">
      <Typewriter
        options={{
          strings: ["KOMIK UPTD SD NEGERI 6 PEMALI"],
          autoStart: true,
          loop: true, // Loop infinitely
          delay: 150, // Adjust typing speed
        }}
        onInit={(typewriter) => {
          typewriter
            .callFunction(() => {
              console.log("String typed out!");
            })
            .pauseFor(10)
            .deleteAll()
            .callFunction(() => {
              console.log("All strings were deleted");
            })
            .start();
        }}
      />
    </div>
  );
}
