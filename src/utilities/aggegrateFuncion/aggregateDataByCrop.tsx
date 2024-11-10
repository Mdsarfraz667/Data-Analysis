import { Crop } from "../data";
import { CropData } from "../data";

// Aggregate data by crop name
export const aggregateDataByCrop = (data: Crop[]): CropData[] => {
  // Initialize a map to store total yield, total area, and count for each crop name
  const cropData = new Map<
    string,
    { totalYield: number; totalArea: number; count: number }
  >();

  // Iterate over each crop entry in the data array
  data.forEach((crop) => {
    const cropName = crop["Crop Name"];
    let yieldOfCrop: number;
    let cultivationArea: number;

    // Check if "Yield Of Crops" and "Area Under Cultivation" fields are valid numbers
    // Set values to 0 if invalid, otherwise assign the actual numbers
    if (
      typeof crop["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"] !==
        "number" ||
      typeof crop["Area Under Cultivation (UOM:Ha(Hectares))"] !== "number"
    ) {
      yieldOfCrop = 0;
      cultivationArea = 0;
    } else {
      yieldOfCrop = crop[
        "Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"
      ] as number;
      cultivationArea = crop[
        "Area Under Cultivation (UOM:Ha(Hectares))"
      ] as number;
    }

    // Check if the map already has an entry for this crop name
    if (!cropData.has(cropName)) {
      // Create a new entry in the map if this crop hasn't been encountered before
      cropData.set(cropName, {
        totalYield: yieldOfCrop,
        totalArea: cultivationArea,
        count: 1, // Initialize count at 1
      });
    } else {
      // If an entry exists, update totals and increment count
      const current = cropData.get(cropName)!;
      current.totalYield += yieldOfCrop;
      current.totalArea += cultivationArea;
      current.count += 1;
    }
  });

  // Convert map entries to an array of CropData objects, calculating averages
  return Array.from(cropData.entries()).map(
    ([cropName, { totalYield, totalArea, count }]) => ({
      CropName: cropName,
      // putting Average  of yield and cultivation area
      AverageYield: totalYield / count,
      AverageCultivationArea: totalArea / count,
    })
  );
};
