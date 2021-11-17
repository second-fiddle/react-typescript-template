const isDevelopment = (): boolean =>
  (process.env.node || '').includes('nodenv');
export default isDevelopment;
