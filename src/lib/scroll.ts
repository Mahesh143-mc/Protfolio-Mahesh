import Lenis from "lenis";

let lenisInstance: Lenis | null = null;

export function setLenisInstance(instance: Lenis | null) {
  lenisInstance = instance;
}

export function getLenisInstance(): Lenis | null {
  return lenisInstance;
}

export function stopScroll() {
  lenisInstance?.stop();
}

export function startScroll() {
  lenisInstance?.start();
}

export function scrollTo(
  target: string | number | HTMLElement,
  options?: Parameters<Lenis["scrollTo"]>[1]
) {
  lenisInstance?.scrollTo(target, options);
}
