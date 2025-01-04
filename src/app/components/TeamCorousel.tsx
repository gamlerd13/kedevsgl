"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "../../components/ui/button";
import Link from "next/link";

import team from "../team/devs.json";
import { TeamMemberCard } from "./TeamMemberCard";

export const TeamCarousel = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <div className="w-full py-12 bg-gray-900">
      <h2 className="text-4xl font-bold text-center mb-10 text-white">
        Our Amazing Team
      </h2>
      <div
        className="relative flex overflow-x-hidden myGradient"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex animate-carousel-scroll">
          {team.map((member) => (
            <TeamMemberCard key={member.id} {...member} />
          ))}
        </div>
        <div className="flex animate-carousel-scroll">
          {team.map((member) => (
            <TeamMemberCard key={`${member.id}-clone`} {...member} />
          ))}
        </div>
        {isHovered && (
          <Link href="/contact">
            <div className="absolute top-0 left-0 w-full h-full z-10  backdrop-blur-sm cursor-pointer flex justify-center items-center">
              <Button
                className="transform transition-transform  z-20"
                variant="outline"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Contáctanos
              </Button>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};
