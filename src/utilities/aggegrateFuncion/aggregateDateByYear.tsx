import { Crop } from "../data";
import groupBy from "../heper";
import { YearlyAggregation } from "../data";

// Function to calculate the crops with maximum and minimum production for each year
export function calculateAggregates(data: Crop[]): YearlyAggregation[] {
  // Group the data by year using the helper function
  const groupedData = groupBy(data, "Year");

  // Process each year's data to find the crops with max and min production
  return Object.entries(groupedData).map(([year, crops]) => {
    // Initialize variables to track the maximum and minimum production values
    let maxProduction = -Infinity;
    let minProduction = Infinity;
    let cropWithMaxProduction = "";
    let cropWithMinProduction = "";

    // Iterate over the crops for this specific year
    crops.forEach((crop) => {
      // Extract the production value
      const production = crop["Crop Production (UOM:t(Tonnes))"];

      // Check if production is a valid number
      if (typeof production === "number") {
        // Update max production if the current crop's production is higher
        if (production > maxProduction) {
          maxProduction = production;
          cropWithMaxProduction = crop["Crop Name"];
        }

        // Update min production if the current crop's production is lower
        if (production < minProduction) {
          minProduction = production;
          cropWithMinProduction = crop["Crop Name"];
        }
      }
    });

    // Return an object with the year and crops with max and min production for this year
    return {
      Year: year,
      CropWithMaxProduction: cropWithMaxProduction,
      CropWithMinProduction: cropWithMinProduction,
    };
  });
}
