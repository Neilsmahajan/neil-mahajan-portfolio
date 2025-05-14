"use client";

interface ViewFullSizeButtonProps {
  imagePath: string;
}

export function ViewFullSizeButton({ imagePath }: ViewFullSizeButtonProps) {
  const handleClick = () => {
    window.open(imagePath, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="underline hover:text-primary transition-colors"
    >
      View full size diagram
    </button>
  );
}
