'use server';

import fetchRequest from "../src/util/FetchRequest";
import extract from "../src/extractors/facebook";
import { writeFile } from "fs/promises";
import getPage from "../src/util/getPageFB";

export async function handleSearch(formData : FormData) {
    const query = formData.get("query") as string;
    const url = `https://www.facebook.com/marketplace/108602292505393/search/?query=${encodeURIComponent(query)}`;
    const htmlData = await getPage(url);
    try {
        await writeFile("facebook.html", htmlData);
    } catch (error) {
        console.error("Error writing to file:", error);
    }

    const extractedData = extract(htmlData);
    try {
        await writeFile("facebook.json", JSON.stringify(extractedData, null, 2));
    } catch (error) {
        console.error("Error writing to file:", error);
    }
    console.log("Extracted data:", extractedData);
  }