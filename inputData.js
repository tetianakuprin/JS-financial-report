const salaries1 = {
  Progger: {
    // specialization type 'Progger'
    salary: 1000, // salary after tax; should be integer; min: 100, max: 100000
    tax: "15%", // tax percent; presented as a string with template `{tax}%` where 'tax' is an integer;  min: "0%", max: "99%"
  },
  Tester: {
    salary: 1000,
    tax: "10%",
  },
};

const team1 = [
  {
    name: "Masha", // name of team member
    specialization: "Progger", // specialization should be picked from `salaries` otherwise member should be ignored in the report
  },
  {
    name: "Vasya",
    specialization: "Tester",
  },
  {
    name: "Taras",
    specialization: "Tester",
  },
];

const salaries2 = {
  Manager: { salary: 1000, tax: "10%" },
  Designer: { salary: 600, tax: "30%" },
  Artist: { salary: 1500, tax: "15%" },
};

const team2 = [
  { name: "Misha", specialization: "Manager" },
  { name: "Max", specialization: "Designer" },
  { name: "Vova", specialization: "Designer" },
  { name: "Leo", specialization: "Artist" },
];

const salaries3 = {
  TeamLead: { salary: 1000, tax: "99%" },
  Architect: { salary: 9000, tax: "34%" },
};

const team3 = [
  { name: "Alexander", specialization: "TeamLead" },
  { name: "Gaudi", specialization: "Architect" },
  { name: "Koolhas", specialization: "Architect" },
  { name: "Foster", specialization: "Architect" },
  { name: "Napoleon", specialization: "General" },
];

module.exports = { salaries1, team1, salaries2, team2, salaries3, team3 };
