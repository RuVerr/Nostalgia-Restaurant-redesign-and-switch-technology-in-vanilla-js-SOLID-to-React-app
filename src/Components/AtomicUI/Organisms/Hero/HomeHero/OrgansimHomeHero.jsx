import React, { useEffect, useLayoutEffect, useRef } from "react";
import MoleculeHomeHero from "../../../Molecules/Hero/HomeHero/MoleculeHomeHero";
import gsap from "gsap";

export default function OrgansimHomeHero() {
  const refHeading = useRef(null);
  const saladBg = useRef(null);
  const salad = useRef(null);
  const paragraph = useRef(null);
  const link = useRef(null);

  if (!link.current) {
    console.log(link.current);
  }
  useLayoutEffect(() => {
    if (!saladBg.current || !salad.current || !refHeading.current || !paragraph.current || !link.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "sine.inOut" } });
      gsap.set(saladBg.current, { x: 200 });
      gsap.set(salad.current, { x: 200 });
      gsap.set(refHeading.current, { scale: 0.1, x: -200, autoAlpha: 0 });
      gsap.set(paragraph.current, { y: 100, autoAlpha: 0 });
      gsap.set(link.current, { y: 100, autoAlpha: 0 });

      tl.to(saladBg.current, { x: -700, duration: 2 })
        .to(salad.current, { x: -300, y: 30, rotate: 180, duration: 1.5 }, "<")
        .to(refHeading.current, { scale: 1, x: 0, duration: 0.5, autoAlpha: 1 })
        .to(paragraph.current, { y: 0, autoAlpha: 1, duration: 0.5 }, ">")
        .to(link.current, { y: 0, duration: 0.5, autoAlpha: 1 }, ">");
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <MoleculeHomeHero
        refHeading={refHeading}
        refParagraph={paragraph}
        refLink={link}
        refSaladBg={saladBg}
        refSalad={salad}
      />
    </>
  );
}
