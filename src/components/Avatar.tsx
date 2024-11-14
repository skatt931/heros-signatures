import { BACKUP_IMAGE_URL } from "@/constants";

export default function Avatar({
  imageUrl = BACKUP_IMAGE_URL,
  name,
  shortDescription,
  className,
}: {
  imageUrl?: string;
  name: string;
  shortDescription: string;
  className?: string;
}) {
  return (
    <div className="transition-all animate-in md:hover:scale-110">
      <div className={`avatar ${className}`}>
        <div className="w-24 rounded-full">
          <img src={imageUrl} />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h3 className="text-xl text-orange-500">{name}</h3>
        <p className="text-sm text-white hover:text-white">
          {shortDescription}
        </p>
      </div>
    </div>
  );
}
