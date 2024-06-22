import WorkContainer from "@/components/work-container";
import works from "@/utils/works";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Work",
  description: "This is a description",
};

export default async function WorkPage() {
  return (
    <div className="max-w-3xl mx-auto md:mt-0 p-4 md:p-8 lg:p-12">
      <h2 className="inline-block font-black text-4xl lg:text-5xl">Work</h2>
      <p className="mt-4 md:mt-6 lg:mt-8 text-sm md:text-base lg:text-lg">
        Passionate software engineer dedicated to delivering innovative solutions through meticulous design, efficient
        programming, and seamless deployment processes.
      </p>
      <p className="text-sm md:text-base lg:text-lg">Here&lsquo;s a snapshot of my journey.</p>
      <WorkContainer works={works} />
    </div>
  );
}
