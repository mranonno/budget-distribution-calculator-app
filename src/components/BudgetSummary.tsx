import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import useTheme from "../hooks/useTheme";
import Typography from "../constants/typography";
import Divider from "../shared/Divider";
import SummaryRow from "../shared/SummaryRow";
import { generateBudgetPDF } from "../utils/generateBudgetPDF";
import { useMainContext } from "../hooks/useMainContext";

const BudgetSummary = () => {
  const { theme } = useTheme();
  const { totalBudget, currency, teams, projectName } = useMainContext();

  // Helper function to format numbers
  const formatCurrency = (amount: number) => `${currency} ${amount.toFixed(2)}`;

  // Fixed percentages
  const founderSharePercent = 20;
  const companyFundPercent = 17.5;
  const zakatPercent = 2.5;

  // Calculated values
  const founderShare = (totalBudget * founderSharePercent) / 100;
  const companyFund = (totalBudget * companyFundPercent) / 100;
  const zakat = (totalBudget * zakatPercent) / 100;

  const usedBudget = founderShare + companyFund + zakat;
  const remainingBudget = totalBudget - usedBudget;

  // Total allocated by teams
  const teamTotal = teams.reduce((sum, team) => sum + team.amount, 0);

  const balanceRemaining = remainingBudget - teamTotal;
  return (
    <View
      style={[styles.container, { backgroundColor: theme.componentBackground }]}
    >
      <Text
        style={[
          styles.heading,
          Typography.subheading,
          { color: theme.heading },
        ]}
      >
        Budget Summary
      </Text>

      {/* Total Budget */}
      <SummaryRow
        label="Total Budget"
        value={formatCurrency(totalBudget)}
        theme={theme}
      />

      <Divider theme={theme} />

      {/* Founder's Share */}
      <SummaryRow
        label={`Founder's Share (${founderSharePercent}%)`}
        value={formatCurrency(founderShare)}
        theme={theme}
      />

      <Divider theme={theme} />

      {/* Company Fund */}
      <SummaryRow
        label={`Company Fund (${companyFundPercent}%)`}
        value={formatCurrency(companyFund)}
        theme={theme}
      />

      <Divider theme={theme} />

      {/* Zakat */}
      <SummaryRow
        label={`Zakat (${zakatPercent}%)`}
        value={formatCurrency(zakat)}
        theme={theme}
      />

      <Divider theme={theme} />

      {/* Remaining Budget */}
      {/* <SummaryRow
        label="Remaining Budget (60%)"
        value={formatCurrency(remainingBudget)}
        theme={theme}
        bold
      /> */}

      {/* <Divider theme={theme} /> */}

      {/* Teams */}
      {teams.map((team) => (
        <React.Fragment key={team.id}>
          <SummaryRow
            label={`${team.name} (${team.percentage}%)`}
            value={formatCurrency(team.amount)}
            theme={theme}
          />
          <Divider theme={theme} />
        </React.Fragment>
      ))}

      {/* Balance Remaining */}
      <View style={{ marginVertical: 8 }}>
        <SummaryRow
          label="Balance Remaining"
          value={formatCurrency(balanceRemaining)}
          theme={theme}
          green
          bold
        />
      </View>

      <Divider theme={theme} />

      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          backgroundColor: theme.primary,
          padding: 14,
          borderRadius: 8,
          marginTop: 20,
        }}
        onPress={async () => {
          try {
            const filePath = await generateBudgetPDF({
              totalBudget,
              founderShare: (totalBudget * 20) / 100,
              companyFund: (totalBudget * 17.5) / 100,
              zakat: (totalBudget * 2.5) / 100,
              remainingBudget: (totalBudget * 60) / 100,
              teams,
              balanceRemaining:
                (totalBudget * 60) / 100 -
                teams.reduce((sum, team) => sum + team.amount, 0),
              currency,
              projectName,
            });
            alert(`PDF saved at: ${filePath}`);
          } catch (error) {
            console.error("Failed to generate PDF", error);
            alert("Error generating PDF");
          }
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontWeight: "500",
            fontSize: 18,
          }}
        >
          Download Summary
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BudgetSummary;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 16,
    borderRadius: 12,
    shadowColor: "#999",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
  },
});
