import Block, { withBlock } from '@ps/ui/components/Block';
import { withButton } from '@ps/ui/components/Button';
import CanvasContainerImport from '@ps/ui/.storybook/components/CanvasContainer';
import WrapperImport from '@ps/ui/.storybook/components/Wrapper';

export const Wrapper = WrapperImport;
export const CanvasContainer = CanvasContainerImport;
export const CanvasContent = withBlock({
  ss: ``,
});
export const Container = withBlock({
  ss: `padding: 1.2rem 1rem 1.9rem;`
});
export const Content = withBlock({ ss: `padding: 0` });
export const Title = withBlock({
  // variant: 'gradient',
  ss: `padding: 0.125rem 0 0 0.25rem;`,
});
export const Button = withButton({
  ss: `margin: 1rem 1rem 0rem 0.25rem;`,
});
export const ButtonCTA = withButton({
  variant: 'bggradient',
  ss: `margin: 1rem 1rem 0rem 0.25rem;`,
});

export const IconNewTab = () => (
  <svg viewBox="0 0 1024 1024">
    <path
      fill="currentColor"
      d="M896.006 920c0 22.090-17.91 40-40 40h-688.006c-22.090 0-40-17.906-40-40v-549.922c-0.838-3.224-1.33-6.588-1.33-10.072 0-22.090 17.908-40.004 40-40.004h178.66c22.092 0.004 40 17.914 40 40.004 0 22.088-17.908 40-40 40h-137.33v479.996h607.998v-479.996h-138.658c-22.090 0-40-17.912-40-40 0-22.090 17.906-40.004 40-40.004h178.658c22.090 0 40 17.91 40 40v559.844c0 0.050 0.008 0.102 0.008 0.154zM665.622 200.168l-124.452-124.45c-8.042-8.042-18.65-11.912-29.186-11.674-1.612-0.034-3.222 0-4.828 0.16-0.558 0.054-1.098 0.16-1.648 0.238-0.742 0.104-1.484 0.192-2.218 0.338-0.656 0.13-1.29 0.31-1.934 0.472-0.622 0.154-1.244 0.292-1.86 0.476-0.64 0.196-1.258 0.436-1.886 0.66-0.602 0.216-1.208 0.414-1.802 0.66-0.598 0.248-1.17 0.54-1.754 0.814-0.598 0.282-1.202 0.546-1.788 0.86-0.578 0.312-1.13 0.664-1.694 1-0.552 0.332-1.116 0.644-1.654 1.006-0.67 0.448-1.3 0.942-1.942 1.426-0.394 0.302-0.806 0.576-1.196 0.894-1.046 0.858-2.052 1.768-3.008 2.726l-124.398 124.39c-15.622 15.62-15.618 40.948 0.002 56.57 15.622 15.62 40.95 15.62 56.568 0l56.164-56.166v439.426c0 22.094 17.912 40 40.002 40 22.092 0 40-17.91 40-40v-441.202l57.942 57.942c15.622 15.624 40.948 15.62 56.568 0 15.626-15.618 15.626-40.946 0.002-56.566z"
    ></path>
  </svg>
);
