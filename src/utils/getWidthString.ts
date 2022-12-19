const getWidthString = (span: number) => {
  if (!span) return;
  const width = (span / 12) * 100;
  return `width:${width}%;`;
};

export default getWidthString;
