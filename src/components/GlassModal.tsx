import { ReactNode, useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface GlassModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

export const GlassModal = ({
  isOpen,
  onClose,
  children,
  title,
}: GlassModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-modal animate-fade-in"
      onClick={onClose}
    >
      <div
        className={cn(
          "glass-intense w-full max-w-lg max-h-[85vh] overflow-auto rounded-3xl p-6 animate-scale-in"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          {title && (
            <h2 className="text-xl font-bold text-charcoal">{title}</h2>
          )}
          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-silver-light/50 transition-colors mr-auto"
          >
            <X className="h-5 w-5 text-charcoal" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};
