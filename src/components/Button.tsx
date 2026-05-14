import { children, type ResolvedChildren } from "solid-js";

interface ButtonProps {
  children?: ResolvedChildren;
  onClick: () => void;
}

export default function Button(props: ButtonProps) {
  const safeChildren = children(() => props.children);

  return (
    <button
      class="gl-button btn-default-tertiary btn-md"
      onClick={props.onClick}
      type="button"
    >
      {safeChildren()}
    </button>
  );
}
