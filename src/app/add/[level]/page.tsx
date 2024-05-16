"use client";

import { HeaderLevel } from "@/components/header-level";

interface LevelPageProps {
  params: {
    level: string;
  };
}

interface TermsProps {
  maxSum: number;
  maxEquations?: number;
}

const getTerms = ({ maxSum, maxEquations = 25 }: TermsProps) => {
  let terms = [];
  for (let i = 0; i < maxEquations; i++) {
    let x = Math.floor(Math.random() * (maxSum - 1)) + 1;
    let y = Math.floor(Math.random() * (maxSum - x)) + 1;
    terms.push([x, y]);
  }
  console.log(terms);
  return terms;
};

async function getData(level: string) {
  if (level === "novice") {
    return { level: level, terms: getTerms({ maxSum: 10 }) };
  }
  if (level === "advanced-beginner") {
    return { level: level, terms: getTerms({ maxSum: 100 }) };
  }
  if (level === "competent") {
    return { level: level, terms: getTerms({ maxSum: 1000 }) };
  }
  if (level === "proficient") {
    return { level: level, terms: getTerms({ maxSum: 10000 }) };
  }
  if (level === "expert") {
    return { level: level, terms: getTerms({ maxSum: 100000 }) };
  }
  return { level: "unknown", terms: [] };
}

export default async function LevelPage({ params }: LevelPageProps) {
  const data = await getData(params.level);
  const totalTerms = data.terms.length;
  // Get the first term and display it as x + y = ?
  console.log(data.terms[0]);

  return (
    <div>
      <HeaderLevel title="Addition" />
    </div>
  );
}
