import React from "react";
import { Table, Title, Container, Paper } from "@mantine/core";
import { data } from "../utilities/data";
import { aggregateDataByCrop } from "../utilities/aggegrateFuncion/aggregateDataByCrop";

import { calculateAggregates } from "../utilities/aggegrateFuncion/aggregateDateByYear";

// Component to render the tables
export const CropTables: React.FC = () => {
  // calculate the crops with maximum and minimum production for each year
  const yearlyData = calculateAggregates(data);

  // // Function to calculate the Aggregate data by crop name
  const cropData = aggregateDataByCrop(data);

  return (
    <Container>
      <Paper
        shadow="lg"
        radius="md"
        p="lg"
        style={{ backgroundColor: "#fafafa" }}
      >
        <Title order={2} mb="lg">
          Table 1: Data by Year
        </Title>
        <Table
          highlightOnHover
          verticalSpacing="sm"
          horizontalSpacing="xl"
          style={{
            borderSpacing: "0px",
            borderCollapse: "collapse",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <thead>
            <tr
              style={{
                backgroundColor: "#2196F3",
                borderBottom: "3px solid #ddd",
                color: "white",
              }}
            >
              <th
                style={{
                  borderRight: "1px solid #ddd",
                  padding: "30px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Year
              </th>
              <th
                style={{
                  borderRight: "1px solid #ddd",
                  padding: "15px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                <span>Crop with Maximum Production </span>
              </th>
              <th
                style={{
                  padding: "15px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Crop with Minimum Production
              </th>
            </tr>
          </thead>
          <tbody>
            {yearlyData.map((item, index) => (
              <tr
                key={index}
                style={{
                  borderBottom: "1px solid #ddd",
                  backgroundColor: index % 2 === 0 ? "#f9f9f9" : "white",
                }}
              >
                <td
                  style={{
                    borderRight: "1px solid #ddd",
                    padding: "15px",
                    textAlign: "center",
                  }}
                >
                  {item.Year.split(",")[1]}
                </td>
                <td
                  style={{
                    borderRight: "1px solid #ddd",
                    padding: "15px",
                    textAlign: "center",
                  }}
                >
                  {item.CropWithMaxProduction}
                </td>
                <td style={{ padding: "15px", textAlign: "center" }}>
                  {item.CropWithMinProduction}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Paper>

      <Paper
        shadow="lg"
        radius="md"
        p="lg"
        mt="xl"
        style={{ backgroundColor: "#fafafa" }}
      >
        <Title order={2} mb="lg">
          Table 2: Data by Crop Name (1950-2020)
        </Title>
        <Table
          highlightOnHover
          verticalSpacing="sm"
          horizontalSpacing="xl"
          style={{
            borderSpacing: "0px",
            borderCollapse: "collapse",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <thead>
            <tr
              style={{
                backgroundColor: "#2196F3",
                borderBottom: "3px solid #ddd",
                color: "white",
              }}
            >
              <th
                style={{
                  borderRight: "1px solid #ddd",
                  padding: "15px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Crop Name
              </th>
              <th
                style={{
                  borderRight: "1px solid #ddd",
                  padding: "15px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Average Yield (Kg/Ha)
              </th>
              <th
                style={{
                  padding: "15px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Average Cultivation Area (Ha)
              </th>
            </tr>
          </thead>
          <tbody>
            {cropData.map((item, index) => (
              <tr
                key={index}
                style={{
                  borderBottom: "1px solid #ddd",
                  backgroundColor: index % 2 === 0 ? "#f9f9f9" : "white",
                }}
              >
                <td
                  style={{
                    borderRight: "1px solid #ddd",
                    padding: "15px",
                    textAlign: "center",
                  }}
                >
                  {item.CropName}
                </td>
                <td
                  style={{
                    borderRight: "1px solid #ddd",
                    padding: "15px",
                    textAlign: "center",
                  }}
                >
                  {item.AverageYield.toFixed(2)}
                </td>
                <td style={{ padding: "15px", textAlign: "center" }}>
                  {item.AverageCultivationArea.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Paper>
    </Container>
  );
};

export default CropTables;
