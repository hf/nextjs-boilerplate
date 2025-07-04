
export async function GET(req: Request) {
  const res = await fetch(
    "https://mnjzxyprfspoehtzdcyz.supabase.red/auth/v1/.well-known/jwks.json",
  );
  res.headers.delete("set-cookie");

  return res;
}
