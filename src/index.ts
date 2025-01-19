import { Hono } from 'hono'
import { supabase } from './lib/supabase';

type Bindings = {
  APP_ENV: string;
  SUPABASE_KEY: string;
}

const app = new Hono<{ Bindings: Bindings }>()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get("/test", async (c) => {
  const { data } = await supabase(c.env.SUPABASE_KEY).from("dev_couples").select("*");
  console.log(data);
  return c.json(data);
});

app.get("/env", (c) => {
  const v = c.env.SUPABASE_KEY;
  return c.text(v);
})

export default app
