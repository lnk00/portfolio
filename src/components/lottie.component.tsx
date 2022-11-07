import { component$, useClientEffect$, useRef } from "@builder.io/qwik";
import lottie from "lottie-web";

interface LottieComponentProps {
  class: string;
  data: string;
  loop?: boolean;
}

export default component$((props: LottieComponentProps) => {
  const anim = useRef();

  useClientEffect$(() => {
    lottie.loadAnimation({
      container: anim.current!,
      renderer: "svg",
      loop: props.loop,
      autoplay: true,
      path: props.data,
    });
  });

  return <div ref={anim} class={props.class}></div>;
});