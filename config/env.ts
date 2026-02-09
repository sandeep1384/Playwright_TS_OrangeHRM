const requireEnv = (name: 'URL' | 'USERNAME' | 'PASSWORD'): string => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
};

export const ENV = {
  URL: requireEnv('URL'),
  USERNAME: requireEnv('USERNAME'),
  PASSWORD: requireEnv('PASSWORD'),
};
