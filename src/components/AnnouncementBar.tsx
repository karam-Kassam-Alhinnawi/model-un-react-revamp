import { useState } from "react";
import { X } from "lucide-react";

const AnnouncementBar = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-primary text-primary-foreground text-center text-sm py-2 px-4">
      <span className="font-medium">
        Founder Momin Ahmed named youngest honoree to 2026 Forbes 30 Under 30 List
      </span>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-foreground/70 hover:text-primary-foreground"
      >
        <X size={16} />
      </button>
    </div>
  );
};

export default AnnouncementBar;
