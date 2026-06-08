import axios from "axios";
import { LOG_API } from "./constants";

type Level =
  | "debug"
  | "info"
  | "warn"
  | "error"
  | "fatal";

type BackendPackage =
  | "cache"
  | "controller"
  | "cron_job"
  | "db"
  | "domain"
  | "handler"
  | "repository"
  | "route"
  | "service";

export async function Log(
  level: Level,
  pkg: BackendPackage,
  message: string
) {
  try {
    const response = await axios.post(
      LOG_API,
      {
        stack: "backend",
        level,
        package: pkg,
        message
      },
      {
        headers: {
          Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzYWRoYW5hLnByYWphcGF0aTIwMjNAc3NpcG10LmNvbSIsImV4cCI6MTc4MDg5Njg4NiwiaWF0IjoxNzgwODk1OTg2LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiM2ViNDYzNTItNmJlYy00NTI5LThiYjctMzdhNDk5MzY2MDU3IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoic2FkaGFuYSBwcmFqYXBhdGkiLCJzdWIiOiI5ZGViNzgxOS00YTBkLTQ4M2UtYjBiYy0wYzAyNjNkZmM0MTQifSwiZW1haWwiOiJzYWRoYW5hLnByYWphcGF0aTIwMjNAc3NpcG10LmNvbSIsIm5hbWUiOiJzYWRoYW5hIHByYWphcGF0aSIsInJvbGxObyI6IjMwMzMxMTMyMzA1MCIsImFjY2Vzc0NvZGUiOiJhR0JUSloiLCJjbGllbnRJRCI6IjlkZWI3ODE5LTRhMGQtNDgzZS1iMGJjLTBjMDI2M2RmYzQxNCIsImNsaWVudFNlY3JldCI6ImF5SkpCc0NyaldOd1NEWVcifQ.7av8Pl4vVw24Na9hEA6DfvvUZDuaIb7vC25id59rFOs`,
          "Content-Type": "application/json"
        }
      }
    );

    return response.data;
  } catch (error: any) {
    console.error(
      "Logging Error:",
      error.response?.data || error.message
    );
  }
}