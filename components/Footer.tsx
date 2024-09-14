import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";
import { div } from "three/webgpu";

function Footer() {
  return (
    <footer className="w-full pt-20 pd-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1>
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level ?
        </h1>

        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how i can help you
          achieve your goles.
        </p>
        <a href="mailto:vishvas1055@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center mb-16">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img
                src={profile.img}
                alt={profile.alt}
                width={String(20)}
                height={String(20)}
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
