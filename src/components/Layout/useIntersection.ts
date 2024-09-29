import { Ref, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

interface Returns {
  ref: Ref<HTMLHeadingElement>;
  intersects: boolean;
}
export function useIntersection() {
  const [intersects, setIntersects] = useState(true);
  const ref = useRef<HTMLHeadingElement>(null);

  const location = useLocation();
  // eslint-disable-next-line
  const isHome = location.pathname.match(/^\/(pl|en)[\/]?$/);

  useEffect(() => {
    let observer: any;
    if (isHome) {
      observer = new IntersectionObserver(
        (entries) => {
          setIntersects(entries.slice(-1)[0].isIntersecting);
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.5,
        },
      );
      if (ref.current) {
        observer.observe(ref.current);
      }
    } else {
      setIntersects(false);
    }

    return () => observer?.disconnect();
  }, [isHome, intersects]);

  return { ref, intersects };
}
