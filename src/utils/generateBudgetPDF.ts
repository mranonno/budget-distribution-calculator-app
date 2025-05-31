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
  projectName: string;
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
    projectName,
  } = data;

  // ✅ Replace this with your actual base64 string
  const base64Logo = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA...your-base64-string-here`;

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

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Budget Summary</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          h1, h2 { text-align: center; color: #333; }
          table { width: 100%; border-collapse: collapse; margin-top: 20px; }
          th, td { padding: 10px; border-bottom: 1px solid #ccc; }
          tfoot td { font-weight: bold; border-top: 2px solid #333; }
          .logo { width: 150px; display: block; margin: 0 auto; }
        </style>
      </head>
      <body>
        <img src="${base64Logo}" class="logo" alt="Company Logo" />
        <h1>Project: ${projectName}</h1>
        <h2>Budget Summary</h2>

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
    html: htmlContent,
    fileName: "budget_summary",
    directory: "Documents",
  };

  try {
    const pdf = await RNHTMLtoPDF.convert(options);
    return pdf.filePath;
  } catch (error) {
    console.error("Failed to generate PDF:", error);
    throw error;
  }
};
