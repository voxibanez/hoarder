function buildAuthentikConfig() {
  const { AUTHENTIK_ID, AUTHENTIK_SECRET, AUTHENTIK_ISSUER } = process.env;

  if (!AUTHENTIK_ID || !AUTHENTIK_SECRET || !AUTHENTIK_ISSUER) {
    return undefined;
  }

  return {
    clientId: AUTHENTIK_ID,
    clientSecret: AUTHENTIK_SECRET,
    issuer: AUTHENTIK_ISSUER,
  };
}

const serverConfig = {
  apiUrl: process.env.API_URL || "http://localhost:3000",
  auth: {
    authentik: buildAuthentikConfig(),
  },
  openAI: {
    apiKey: process.env.OPENAI_API_KEY,
  },
  bullMQ: {
    redisHost: process.env.REDIS_HOST || "localhost",
    redisPort: parseInt(process.env.REDIS_PORT || "6379"),
  },
  logLevel: process.env.LOG_LEVEL || "debug",
};

export default serverConfig;