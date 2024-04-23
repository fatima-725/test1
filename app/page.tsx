"use client";
import Image from "next/image";
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
    </div>
  );
}
