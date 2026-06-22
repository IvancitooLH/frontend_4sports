export const getTwBgColorTable = ({ index }: { index: number }) => {
  return index % 2 ? "bg-surface" : "bg-background";
};
