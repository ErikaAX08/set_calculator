import { Set } from "@components/set";

const cleanSet = (set: string) : Set => {
    const elements = set.split(",").map((element) => element.trim());
    const formattedString: string = `${elements.join(" , ")}`;
  
    return {
      formattedString,
      elements
    };
}

export default cleanSet