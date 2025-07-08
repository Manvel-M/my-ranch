interface ImportMetaEnv {
  readonly RESEND_API_KEY: string;
  readonly RESEND_TO_EMAIL: string;
  readonly RESEND_FROM_EMAIL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
