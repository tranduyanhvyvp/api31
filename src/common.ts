import { HttpAgent } from "@dfinity/agent";
import fetch from "node-fetch";
import * as superheroes from "./superheroes";
(global as any).fetch = fetch;

export const defaultAgent = new HttpAgent({
  host: "http://localhost:8080",
});

export const heroes = superheroes.createActor(defaultAgent);