"use client";
import Image from "next/image";
import desc from "../public/assets/desc.svg";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function Home() {
  const testimonials = [
    {
      text: "1",
      author: "abc",
    },
    {
      text: "2",
      author: "abc",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const handleClick = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };
  const handlePrev = () => {
    setCurrentIndex(
      currentIndex <= 0 ? testimonials.length - 1 : currentIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div>
      <div>
        <div>{currentTestimonial.text}</div>
        <div>{currentTestimonial.author}</div>
        <button onClick={handleClick}>Next</button>
        <button onClick={handlePrev}>Prev</button>
        <div>
          {currentIndex + 1} / {testimonials.length}
        </div>
      </div>

      <div>
        {testimonials.map((item, index) => (
          <div key={index}>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>{item.text}</AccordionTrigger>
                <AccordionContent>{item.author}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>

      <div>
        <Link href="/register">
          <button>click</button>
        </Link>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-0">
        <div className="col-span-2">
          <Image src={desc} className="w-[735px] h-[642px] mt-0"></Image>
          <h2 className=" font-Inter font-medium text-[20px] mt-4">
            Featured product
          </h2>
          <h2 className="font-Inter font-medium text-[20px] text-[#828282]">
            Description of Featured product
          </h2>
          <h2 className="font-Inter font-medium text-[20px]">$10.99</h2>
        </div>
        <div className="col-span-1 ">
          <div>
            <Image src={desc}></Image>
            <h2 className="mt-4 font-Inter font-medium text-[20px]">Product</h2>
            <h2 className="font-Inter font-medium text-[20px] text-[#828282]">
              Description of first product
            </h2>
            <h2 className="font-Inter font-medium text-[20px]">$10.99</h2>
          </div>
          <div className="mt-4">
            <Image src={desc}></Image>
            <h2 className="mt-4 font-Inter font-medium text-[20px]">Product</h2>
            <h2 className="font-Inter font-medium text-[20px] text-[#828282]">
              Description of first product
            </h2>
            <h2 className="font-Inter font-medium text-[20px]">$10.99</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
