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
    }, 900);
  }, [pathname]);

  useEffect(() => {

  }, [shown])

  return (
    <div className={clsx("page-loader", animateUp && "animate-up", shown && "shown")}>
      <img className="logo" src="/images/cloudfret-light.svg" alt="Cloudfret" />
      <img className="loader" src="/images/icons/loader.svg" alt="Loader" />
    </div>
  );
};

export default Loader;
