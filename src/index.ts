import { Hono } from 'hono'
import { supabase } from './lib/supabase';

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get("/test", async (c) => {
  const data = await supabase.from("dev_couples").select("*");
  console.log(data);
  return c.json(data);
});

export default app
