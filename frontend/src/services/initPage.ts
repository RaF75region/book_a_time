import { components } from "../types/swagger-types";
import { tg } from "./init";
import { getUser } from "./userService";
type Service = components["schemas"]["Service"];

export default async function LoadData() {
    const t:Service = {
        id: "ddd",
        title: "string",
        description: "string",
        price: 0,
        timeProgress: 0,
    }
    await getUser(tg.initDataUnsafe?.user?.id ?? 0);
    tg.ready()
}