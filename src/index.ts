import { Hono } from 'hono'
import { supabase } from './lib/supabase';
import { env } from "hono/adapter"

type Bindings = {
  SUPABASE_KEY: string;
}

const app = new Hono<{ Bindings: Bindings }>()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get("/test", async (c) => {
  const data = await supabase.from("dev_couples").select("*");
  console.log(data);
  return c.json(data);
});

app.get("/env", (c) => {
  const v = c.env.SUPABASE_KEY;
  console.log(v);
  return c.text(v);
})

export default app
