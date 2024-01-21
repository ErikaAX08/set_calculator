interface ResultItem {
    text: string;
    type: "title" | "boldText" | "coloredText" | "default";
    color?: string;
}

export default ResultItem