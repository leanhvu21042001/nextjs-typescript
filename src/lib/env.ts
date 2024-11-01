import z from "zod";

const envClientSchema = z.object({
  NODE_ENV: z.string(),
  SERVER_URL: z.string().url(),
});

const envCLient = envClientSchema.parse(process.env);

export default envCLient;
