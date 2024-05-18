import { useTranslation } from "react-i18next";

export const useATTranslation = (keys: string[]) => {
  const { t } = useTranslation();

  return keys.map((key) => t(key));
};

let test = {
  name: "aous",
  address: {
    city: "DA",
  },
};

let newTest = test;
newTest.name = "ali";

console.log(test.name);
console.log(newTest.name);
