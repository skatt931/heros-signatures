import React from "react";

export default function Avatar({
  imageUrl,
  name,
  shortDescription,
  className,
}: {
  imageUrl: string;
  name: string;
  shortDescription: string;
  className?: string;
}) {
  return (
    <div>
      <div className={`avatar ${className}`}>
        <div className="w-24 rounded-full">
          <img src={imageUrl} />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h3 className="text-xl text-orange-500">{name}</h3>
        <p className="text-sm">{shortDescription}</p>
      </div>
    </div>
  );
}
