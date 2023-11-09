"use client";

import Item from "./item.js";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
export default function Sorting({items}) {
  const [sortBy, setSortBy] = useState("name");

  /*let sortedItems = [...items];
  /*let sortedItems = [...items];*/

  /*if (!Array.isArray(items)) {
    console.error('items is not an array');
    return null;
  }*/

  if (sortBy === "name") {
    console.log("sort by name");
    items.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  } else if (sortBy === "category") {
    console.log("sort by category");
    items.sort((a, b) => {
      if (a.category < b.category) {
        return -1;
      }
      if (a.category > b.category) {
        return 1;
      }
      return 0;
    });
  }
}