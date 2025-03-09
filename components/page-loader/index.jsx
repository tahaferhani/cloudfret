"use client";
import { use, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import "./style.css";
import clsx from "clsx";

const Loader = () => {
  const pathname = usePathname();
  const [shown, setShown] = useState(true);
  const [animateUp, setAnimateUp] = useState(false);

  useEffect(() => {
    setShown(true);
    
    setTimeout(() => {
      setAnimateUp(true);
      setTimeout(() => {
        setShown(false);
        setAnimateUp(false);
      }, 500);
    }, 700);
  }, [pathname]);

  useEffect(() => {
    
  }, [shown])

  return (
    <div className={clsx("page-loader", animateUp && "animate-up", shown && "shown")}>
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
