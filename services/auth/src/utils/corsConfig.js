export function corsConfig(whitelisted) {
  return {
    origin: function (origin, cb) {
      if (!whitelisted || whitelisted?.length === 0) {
        cb(new Error('Not allowed by CORS'));
      }
      if (whitelisted.indexOf(origin) !== -1 || !origin) {
        cb(null, true);
      } else {
        cb(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  };
}
