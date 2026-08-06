import { useEffect, useState, useMemo } from "react";

const DEFAULT_ROLES = [
  "MERN Full Stack Developer",
  "Full Stack Developer",
  "React & Node.js Developer",
  "Software Developer",
];

interface AnimatedRolesProps {
  roles?: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
  showCursor?: boolean;
  cursorClassName?: string;
}

export function AnimatedRoles({
  roles = DEFAULT_ROLES,
  typingSpeed = 75,
  deletingSpeed = 35,
  pauseDuration = 2000,
  className = "",
  showCursor = true,
  cursorClassName = "bg-primary",
}: AnimatedRolesProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentRole = useMemo(() => roles[roleIndex] || "", [roles, roleIndex]);

  useEffect(() => {
    if (roles.length === 0) return;

    if (!isDeleting && subIndex === currentRole.length) {
      // Reached full title - pause for 2 seconds before erasing
      const pauseTimeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);

      return () => clearTimeout(pauseTimeout);
    }

    if (isDeleting && subIndex === 0) {
      // Finished erasing - move immediately to the next role
      setIsDeleting(false);
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      return;
    }

    // Typing or erasing step
    const timeout = setTimeout(
      () => {
        setSubIndex((prevSub) => prevSub + (isDeleting ? -1 : 1));
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, currentRole, roles.length, typingSpeed, deletingSpeed, pauseDuration]);

  const displayedText = currentRole.substring(0, subIndex);

  return (
    <span className={`inline-grid grid-cols-1 grid-rows-1 align-baseline ${className}`}>
      {/* Invisible overlay sizers for all roles to reserve max layout dimensions (prevents layout shift) */}
      {roles.map((role) => (
        <span
          key={role}
          className="col-start-1 row-start-1 invisible select-none pointer-events-none"
          aria-hidden="true"
        >
          {role}
          {/* Reserve space for blinking cursor */}
          {showCursor ? <span className="ml-1 inline-block w-[2.5px]" /> : null}
        </span>
      ))}

      {/* Visible typewriter text with blinking cursor */}
      <span className="col-start-1 row-start-1 inline-flex items-center">
        <span>{displayedText}</span>
        {showCursor ? (
          <span
            className={`ml-1 inline-block h-[1em] w-[2.5px] rounded-full align-middle animate-pulse ${cursorClassName}`}
            aria-hidden="true"
          />
        ) : null}
      </span>
    </span>
  );
}

export default AnimatedRoles;
