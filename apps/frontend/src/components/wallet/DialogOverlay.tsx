'use client';

interface DialogOverlayProps {
  children: React.ReactNode;
  onClose: () => void;
}

export function DialogOverlay({ children, onClose }: DialogOverlayProps) {
  return (
    <>
      <div
        className="fixed inset-0 z-[998] bg-black/50"
        onClick={onClose}
      />
      {children}
    </>
  );
} 