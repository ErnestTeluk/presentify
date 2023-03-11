export const getTargetDir = (targetDir: string | undefined) => {
  return targetDir?.trim().replace(/\/+$/g, '');
};
