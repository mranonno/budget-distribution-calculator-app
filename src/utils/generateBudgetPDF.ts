// src/utils/generateBudgetPDF.ts

import RNHTMLtoPDF from "react-native-html-to-pdf";

interface BudgetData {
  totalBudget: number;
  founderShare: number;
  companyFund: number;
  zakat: number;
  remainingBudget: number;
  teams: Array<{
    name: string;
    percentage: string;
    amount: number;
  }>;
  balanceRemaining: number;
  currency: string;
}

export const generateBudgetPDF = async (data: BudgetData) => {
  const {
    totalBudget,
    founderShare,
    companyFund,
    zakat,
    remainingBudget,
    teams,
    balanceRemaining,
    currency,
  } = data;

  const formatCurrency = (amount: number) => `${currency} ${amount.toFixed(2)}`;

  const teamRows = teams
    .map(
      (team) => `
    <tr>
      <td>${team.name} (${team.percentage}%)</td>
      <td style="text-align:right">${formatCurrency(team.amount)}</td>
    </tr>`
    )
    .join("");

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Budget Summary</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          h1 { text-align: center; color: #333; }
          table { width: 100%; border-collapse: collapse; margin-top: 20px; }
          th, td { padding: 10px; border-bottom: 1px solid #ccc; }
          tfoot td { font-weight: bold; border-top: 2px solid #333; }
        </style>
      </head>
      <body>
        <h1>Budget Summary</h1>

        <table>
          <tbody>
            <tr><td>Total Budget</td><td style="text-align:right">${formatCurrency(
              totalBudget
            )}</td></tr>
            <tr><td>Founder's Share (20%)</td><td style="text-align:right">${formatCurrency(
              founderShare
            )}</td></tr>
            <tr><td>Company Fund (17.5%)</td><td style="text-align:right">${formatCurrency(
              companyFund
            )}</td></tr>
            <tr><td>Zakat (2.5%)</td><td style="text-align:right">${formatCurrency(
              zakat
            )}</td></tr>
            <tr><td>Remaining Budget (60%)</td><td style="text-align:right">${formatCurrency(
              remainingBudget
            )}</td></tr>
            ${teamRows}
          </tbody>
          <tfoot>
            <tr><td>Balance Remaining</td><td style="text-align:right; color: green;">${formatCurrency(
              balanceRemaining
            )}</td></tr>
          </tfoot>
        </table>
      </body>
    </html>
  `;

  const options = {
    html,
    fileName: "budget_summary",
    directory: "Documents",
  };

  try {
    const file = await RNHTMLtoPDF.convert(options); // ✅ Correct usage
    return file.filePath;
  } catch (error) {
    console.error("Failed to generate PDF:", error);
    throw error;
  }
};
