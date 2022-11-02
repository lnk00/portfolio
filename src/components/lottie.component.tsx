import { component$, useClientEffect$, useRef } from "@builder.io/qwik";
import lottie from "lottie-web";

interface LottieComponentProps {
  class: string;
  data: string;
}

export default component$((props: LottieComponentProps) => {
  const anim = useRef();

  useClientEffect$(() => {
    lottie.loadAnimation({
      container: anim.current!,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: props.data,
    });
  });

  return <div ref={anim} class={props.class}></div>;
});