"use client";

import { useEffect, useState } from "react";
import { HeaderLevel } from "@/components/header-level";
import { AppLink } from "@/components/app-link";

interface Term {
  term: number[];
  actual: number;
  answer: number | null;
  correct: boolean | null;
  skipped: boolean;
}

const getTerms = (): Term[] => {
  let maxEquations = 25;
  let terms = [];
  for (let i = 0; i < maxEquations; i++) {
    let x = Math.floor(Math.random() * 20);
    let y = Math.floor(Math.random() * 20);
    terms.push({
      term: [x, y],
      actual: x * y,
      answer: null,
      correct: null,
      skipped: false,
    });
  }
  return terms;
};

function getEquations(level: string) {
  return { level: level, terms: getTerms() };
}

// Components
const pageTitle = "Multiply";
const equationsBoxSize =
  "h-[12rem] w-[24rem] border border-gray-500 rounded-xl";
const priorEquationsBoxSize =
  "h-[6rem] w-[24rem] border border-gray-500 rounded-xl mb-2";

const EquationLoading = () => (
  <div
    className={`${equationsBoxSize} text-3xl text-white flex flex-row justify-center items-center`}
  >
    Loading...
  </div>
);

export default function LevelPage() {
  const [equations, setEquations] = useState<Term[]>([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState<number | null>(null);
  const [error, setError] = useState(false);

  const onAnswerSubmit = () => {
    document.getElementById("answerInput")?.focus();
    if (answer === null) {
      setError(true);
      return;
    }

    let newEquations = [...equations];
    newEquations[questionIndex].answer = answer;
    newEquations[questionIndex].correct =
      newEquations[questionIndex].actual === answer;
    setEquations(newEquations);
    setAnswer(null);
    setError(false);
    setQuestionIndex(questionIndex + 1);
  };

  const onSkip = () => {
    let newEquations = [...equations];
    newEquations[questionIndex].skipped = true;
    setEquations(newEquations);
    setAnswer(null);
    setError(false);
    setQuestionIndex(questionIndex + 1);
    document.getElementById("answerInput")?.focus();
  };

  const onInputChange = (answer: number) => {
    setAnswer(answer);
    setError(false);
  };

  useEffect(() => {
    let data = getEquations("unknown");
    setEquations(data.terms);
  }, []);

  if (equations.length === 0) {
    return (
      <>
        <div>
          <HeaderLevel title={pageTitle} />
        </div>
        <EquationLoading />
      </>
    );
  }

  if (questionIndex === equations.length) {
    const correctAnswers = equations.filter((e) => e.correct).length;
    const skippedAnswers = equations.filter((e) => e.skipped).length;
    return (
      <>
        <div>
          <HeaderLevel title={pageTitle} />
        </div>
        <div className="text-center p-4">
          <div className="mt-4 flex flex-row justify-center items-center">
            <table className="table-auto text-white">
              <thead>
                <tr>
                  <th className="px-4 py-2">#</th>
                  <th className="px-4 py-2">Question</th>
                  <th className="px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {equations.map((e, i) => (
                  <tr key={i}>
                    <td className="border px-4 py-2">{`${i + 1}`}</td>
                    <td className="border px-4 py-2">
                      {`${e.term.join(" X ")} = `}
                      {!e.correct && (
                        <span className="line-through text-red-500">
                          {e.answer}
                        </span>
                      )}
                      <span className="ml-2">{`${e.actual}`}</span>
                    </td>
                    <td className="border px-4 py-2">
                      {e.correct && (
                        <span className="text-green-400">Correct</span>
                      )}
                      {!e.correct && !e.skipped && (
                        <span className="text-red-400">Wrong</span>
                      )}
                      {e.skipped && (
                        <span className="text-yellow-400">Skipped</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <AppLink href="/multiply" className="bg-red-300">
            Retry
          </AppLink>
          <div className="text-2xl text-white mb-4">
            You answered {correctAnswers} out of {equations.length} correctly
          </div>
          <div className="text-2xl text-white mb-2">
            You skipped {skippedAnswers} questions
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div>
        <HeaderLevel title={pageTitle} />
      </div>
      {questionIndex === 0 && (
        <div className={priorEquationsBoxSize}>
          <div className="text-center p-4 flex gap-0 flex-row justify-center items-center">
            <div className="py-3 px-4 text-gray-400 text-3xl">x * y = z</div>
          </div>
        </div>
      )}
      {questionIndex > 0 && (
        <div className={priorEquationsBoxSize}>
          <div className="text-center p-4 flex gap-0 flex-row justify-center items-center">
            <div className="py-3 px-4 text-gray-400 text-3xl">
              {`${equations[questionIndex - 1].term.join(" X ")} = `}
              {equations[questionIndex - 1].correct && (
                <span>{equations[questionIndex - 1].answer}</span>
              )}
              {!equations[questionIndex - 1].correct && (
                <>
                  <span className="text-red-500 line-through">
                    {equations[questionIndex - 1].answer}
                  </span>
                  <span className="ml-4">
                    {equations[questionIndex - 1].actual}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      <div className={equationsBoxSize}>
        <div className="text-center p-4 flex gap-0 flex-row justify-center items-center">
          <div className="py-3 px-4 text-white text-3xl">
            {`${equations[questionIndex].term.join(" X ")} = `}
          </div>
          <div className="max-w-sm space-y-3">
            <input
              id="answerInput"
              autoFocus
              type="number"
              className="py-3 px-4 text-3xl block w-20 rounded-lg disabled:opacity-50 disabled:pointer-events-none bg-neutral-900 border-neutral-700 text-white placeholder-neutral-500 focus:ring-neutral-600"
              placeholder="?"
              value={answer === null ? "" : answer}
              onChange={(e) => onInputChange(parseInt(e.target.value))}
            />
          </div>
        </div>
        <div className="text-center flex">
          <button
            className="p-2 m-2 w-16 bg-gray-100 text-gray-500 rounded-md text-lg"
            onClick={() => onSkip()}
          >
            Skip
          </button>
          <button
            className="p-2 m-2 w-full bg-green-200 text-black rounded-md text-lg"
            onClick={() => onAnswerSubmit()}
          >
            Submit
          </button>
        </div>

        <div className="mt-4 text-white text-xs flex flex-row justify-center items-center">
          {error && (
            <span className="text-red-500 text-xs">Please enter an answer</span>
          )}
          {!error && `${questionIndex + 1} of ${equations.length}`}
        </div>
      </div>
    </>
  );
}
