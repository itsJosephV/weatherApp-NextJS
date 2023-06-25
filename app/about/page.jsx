import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="container mx-auto mt-8">
      <div
        style={{ backgroundColor: "" }}
        className=" flex flex-col items-center mb-10"
      >
        <h1 className="text-4xl font-medium text-center mb-5">about</h1>
        <div className="max-w-xl p-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800/50 dark:border-gray-700 backdrop-blur">
          <div className="md:flex flex-row mb-5">
            <Image
              className="rounded-md"
              src="/images/leonardo.jpg"
              width={150}
              height={150}
              alt="avatar"
            />
            <div className="my-auto mx-auto pt-2">
              <p className="text-3xl">Joseph Vento Pérez</p>
              <small>Designer, Illustrator and Coder</small>
            </div>
          </div>
          <p className="tracking-wide opacity-80">
            Hey, I'm Joseph, a designer with a strong passion for coding. I
            believe design and code are the perfect combination for creating
            captivating digital experiences. Bringing my design concepts to life
            through coding is my ultimate joy.
          </p>
          <br />
          <p className="tracking-wide opacity-80">
            Constantly exploring new techniques and trends, I strive to push the
            boundaries of design and code. Collaboration is essential to me, as
            I enjoy working closely with developers to ensure flawless
            implementation.
          </p>
          <br />
          <p className="tracking-wide opacity-80">
            My goal is to create user-friendly designs that go beyond
            aesthetics, delivering meaningful and impactful experiences. If
            you're looking for a designer who loves to code and is ready to
            bring your ideas to life, let's collaborate and create something
            amazing together!
          </p>
        </div>
      </div>
      <h1 className="text-2xl text-center mb-5">Used Tech</h1>
    </div>
  );
};

export default About;
