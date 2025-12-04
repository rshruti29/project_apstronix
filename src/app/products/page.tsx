"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { events } from "@/config/mainEvents/mainEvents";

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4 md:px-12 lg:px-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <h1 className="text-center text-4xl md:text-5xl font-bold text-cyan-300 drop-shadow-lg">
        Our Products
      </h1>

      <p className="text-center text-slate-300 mt-3 mb-12">
        Explore all products, events, and categories.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {events.map((item) => (
          <Link
            href={`/products/${item.id}`}
            key={item.id}
            className="group border border-cyan-700 rounded-2xl overflow-hidden shadow-lg bg-slate-800 
                       hover:border-cyan-400 transition-all duration-300"
          >
            <div className="relative w-full h-52 overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="p-5">
              <h2 className="text-xl font-semibold text-cyan-300 mb-1">
                {item.name}
              </h2>

              <p className="text-slate-300 text-sm line-clamp-2">
                {item.shortDescription || "Click to view details"}
              </p>

              <span className="block mt-4 text-cyan-400 font-medium group-hover:underline">
                View Details →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
