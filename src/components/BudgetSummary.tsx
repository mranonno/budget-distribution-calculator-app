import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import useTheme from "../hooks/useTheme";
import Typography from "../constants/typography";

const BudgetSummary = () => {
  const { theme } = useTheme();
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
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            // marginBottom: 8,
          }}
        >
          <Text style={{ color: theme.body }}>Total Budget</Text>
          <Text style={{ color: theme.body }}>BDT 0.00</Text>
        </View>
        <View
          style={{
            borderWidth: 0.2,
            borderColor: theme.border,
            marginVertical: 4,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            // marginBottom: 8,
          }}
        >
          <Text style={{ color: theme.body }}>Founder's Share (20%)</Text>
          <Text style={{ color: theme.body }}>BDT 0.00</Text>
        </View>
        <View
          style={{
            borderWidth: 0.2,
            borderColor: theme.border,
            marginVertical: 4,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            // marginBottom: 8,
          }}
        >
          <Text style={{ color: theme.body }}>Company Fund (17.5%)</Text>
          <Text style={{ color: theme.body }}>BDT 0.00</Text>
        </View>
        <View
          style={{
            borderWidth: 0.2,
            borderColor: theme.border,
            marginVertical: 4,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            // marginBottom: 8,
          }}
        >
          <Text style={{ color: theme.body }}>Zakat (2.5%)</Text>
          <Text style={{ color: theme.body }}>BDT 0.00</Text>
        </View>
        <View
          style={{
            borderWidth: 0.2,
            borderColor: theme.border,
            marginVertical: 4,
          }}
        />
        {/* <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            // marginBottom: 8,
            marginVertical: 8,
          }}
        >
          <Text style={{ color: "purple", fontWeight: "bold", fontSize: 16 }}>
            Remaining Budget
          </Text>
          <Text style={{ color: "purple", fontWeight: "bold", fontSize: 16 }}>
            BDT 0.00
          </Text>
        </View> */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            // marginVertical: 8,
          }}
        >
          <Text style={{ color: theme.body }}>Client Management (0%)</Text>
          <Text style={{ color: theme.body }}>BDT 0.00</Text>
        </View>
        <View
          style={{
            borderWidth: 0.2,
            borderColor: theme.border,
            marginVertical: 4,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            // marginBottom: 8,
          }}
        >
          <Text style={{ color: theme.body }}>
            Client Acquisition (Referral) (0%)
          </Text>
          <Text style={{ color: theme.body }}>BDT 0.00</Text>
        </View>
        <View
          style={{
            borderWidth: 0.2,
            borderColor: theme.border,
            marginVertical: 4,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            // marginBottom: 8,
          }}
        >
          <Text style={{ color: theme.body }}>Design Team (0%)</Text>
          <Text style={{ color: theme.body }}>BDT 0.00</Text>
        </View>
        <View
          style={{
            borderWidth: 0.2,
            borderColor: theme.border,
            marginVertical: 4,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            // marginBottom: 8,
          }}
        >
          <Text style={{ color: theme.body }}>Development Team (0%)</Text>
          <Text style={{ color: theme.body }}>BDT 0.00</Text>
        </View>
        <View
          style={{
            borderWidth: 0.2,
            borderColor: theme.border,
            marginVertical: 4,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            // marginBottom: 8,
          }}
        >
          <Text style={{ color: theme.body }}>Marketing Team (0%)</Text>
          <Text style={{ color: theme.body }}>BDT 0.00</Text>
        </View>
      </View>
      <View
        style={{
          borderWidth: 0.5,
          borderColor: theme.border,
          marginVertical: 4,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 8,
        }}
      >
        <Text style={{ color: "green", fontSize: 18, fontWeight: "bold" }}>
          Balance Remaining
        </Text>
        <Text style={{ color: "green", fontSize: 18, fontWeight: "bold" }}>
          BDT 0.00
        </Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          backgroundColor: "purple",
          padding: 14,
          borderRadius: 8,
          marginTop: 20,
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
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  heading: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
  },
});
