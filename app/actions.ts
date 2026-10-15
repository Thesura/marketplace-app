'use server';

import fetchRequest from "../src/util/FetchRequest";
import extract from "../src/extractors/facebook";
import { writeFile } from "fs/promises";

export async function handleSearch(formData : FormData) {
    const query = formData.get("query") as string;
    const url = `https://www.facebook.com/marketplace/108602292505393/search/?query=${encodeURIComponent(query)}`;
    const data = await fetchRequest(url, "GET");
    const htmlData = await data.text();
    try {
        await writeFile("facebook.html", htmlData);
    } catch (error) {
        console.error("Error writing to file:", error);
    }

    const extractedData = extract(htmlData);
    console.log("Extracted data:", extractedData);
  }