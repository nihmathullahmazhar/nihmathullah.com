import { useRef, useState, ReactNode } from 'react';

interface TiltCardProps {
  children: ReactNode;
}

const TiltCard = ({ children }: TiltCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => setRotate({ x: 0, y: 0 });

  return (
    <div
      className="perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1000px' }}
    >
      <div
        ref={cardRef}
        className="transition-transform duration-200 ease-out transform-gpu"
        style={{ transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)` }}
      >
        {children}
      </div>
    </div>
  );
};

export default TiltCard;
