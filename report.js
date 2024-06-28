let data = require("./inputData");

function calculateTeamFinanceReport(salaries, team) {
  const totalBudget = "totalBudget";
  const teamName = "Team";
  let results = {};
  Object.assign(results, { [`${totalBudget + teamName}`]: 0 });
  Object.getOwnPropertyNames(salaries).map((item) => {
    Object.assign(results, { [`${totalBudget + item}`]: 0 });
  });

  for (let i = 0; i < team.length; i++) {
    if (salaries[team[i].specialization]) {
      let total =
        salaries[team[i].specialization].salary /
        ((100 - salaries[team[i].specialization].tax.replace("%", "")) / 100);
      Object.assign(results, {
        [`${totalBudget + teamName}`]:
          results[`${totalBudget + teamName}`] + total,
      });
      Object.assign(results, {
        [`${totalBudget + team[i].specialization}`]:
          results[`${totalBudget + team[i].specialization}`] + total,
      });
    }
  }
  Object.keys(results).forEach((item) => {
    results[item] = Math.floor(results[item]);
  });

  return results;
}

let financeReport1 = calculateTeamFinanceReport(data.salaries1, data.team1);
console.log("Report 1", JSON.stringify(financeReport1));

let financeReport2 = calculateTeamFinanceReport(data.salaries2, data.team2);
console.log("Report 2", JSON.stringify(financeReport2));

let financeReport3 = calculateTeamFinanceReport(data.salaries3, data.team3);
console.log("Report 3", JSON.stringify(financeReport3));
