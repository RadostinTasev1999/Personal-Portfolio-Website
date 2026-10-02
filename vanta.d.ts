declare module "vanta/dist/vanta.globe.min.js" {
  import type * as THREE from "three";

  type VantaGlobeOptions = {
    el: HTMLElement | string;
    THREE: typeof THREE;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    size?: number;
    color?: number;
    color2?: number;
    backgroundColor?: number;
  };

  type VantaEffect = {
    destroy: () => void;
    setOptions?: (options: Partial<VantaGlobeOptions>) => void;
    resize?: () => void;
  };

  const VantaGlobe: (options: VantaGlobeOptions) => VantaEffect;
  export default VantaGlobe;
}
