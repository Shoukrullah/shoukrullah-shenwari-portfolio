interface MyInfoShape {
  id: number;
  label: string;
  info: string | number;
}

const myInfo: MyInfoShape[] = [
  {
    id: 1,
    label: "Full Name",
    info: "Shoukrullah Shenwari",
  },
  {
    id: 2,
    label: "Birth Date",
    info: "23 Dec 2003",
  },
  {
    id: 3,
    label: "Website",
    info: "www.example.com",
  },
  {
    id: 4,
    label: "Phone",
    info: "+93 728131873",
  },
  {
    id: 5,
    label: "City",
    info: "Kabul, Afghanistan",
  },
  {
    id: 6,
    label: "Age",
    info: 21,
  },
  {
    id: 7,
    label: "Degree",
    info: "Bachelor In Engineering",
  },
  {
    id: 8,
    label: "Email",
    info: "shockrullahshenwari@gmail.com",
  },
  {
    id: 9,
    label: "Freelance",
    info: "Eager and Available",
  },
];

export default myInfo