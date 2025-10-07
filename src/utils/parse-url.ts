export const parseUrl = (url: string, params: Record<string, string>): string => {
  const urlObj = new URL(url);

  const newPath = urlObj.pathname.replace(/:([a-zA-Z0-9_]+)/g, (_, key) => {
    if (params[key] === undefined) {
      throw new Error(`Missing value for parameter ":${key}"`);
    }
    return params[key];
  });

  urlObj.pathname = newPath;
  return urlObj.toString();
};
