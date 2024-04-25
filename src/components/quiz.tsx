"use client"
import React, { useState } from 'react';
import { parseQuizJSON } from '../lib/utils';
import ReactMarkdown from 'react-markdown';
import QuizAnswerItem from './quiz-answer-item';
interface QuizProps {
  quizJson: string;
}

const Quiz: React.FC<QuizProps> = ({ quizJson }) => {
  const quizData = parseQuizJSON(quizJson);
  const [selectedOptions, setSelectedOptions] = useState<{ qIndex: number, aoIndex: number }[]>([]);

  if (!quizData) {
    return <div>Invalid quiz data</div>;
  }

  const handleSetSelectedOption = (qIndex: number, aoIndex: number | null) => {
    if (aoIndex === null) {
      setSelectedOptions(selectedOptions.filter(({ qIndex: qIdx }) => qIdx !== qIndex));
    } else {
      const selectedOption = { qIndex, aoIndex };
      setSelectedOptions(prevSelectedOptions => {
        const existingIndex = prevSelectedOptions.findIndex(
          ({ qIndex: qIdx, aoIndex: aoIdx }) => qIdx === qIndex && aoIdx === aoIndex
        );
        if (existingIndex !== -1) {
          const newSelectedOptions = [...prevSelectedOptions];
          newSelectedOptions.splice(existingIndex, 1);
          return newSelectedOptions;
        } else {
          return [...prevSelectedOptions, selectedOption];
        }
      });
    }
  }

  const getAoIndexOfSelectedOption = (qIndex: number): number => {
    const selectedOption = selectedOptions.find(({ qIndex: qIdx }) => qIdx === qIndex);
    return selectedOption ? selectedOption.aoIndex : -1;
  }

  return (
    <div>
        <h1>{quizData.title}</h1>
        <div>
          {quizData.questions.map((question, qIndex) => (
            <div key={qIndex}>
              <h2>
                <ReactMarkdown>{question.question}</ReactMarkdown>
              </h2>
              <div className={`grid grid-cols-2 gap-4`}>
                {question.options.map((option, aoIndex) => (
                  <div key={aoIndex} className='w-full h-auto'>
                    <QuizAnswerItem
                      index={aoIndex}
                      answer={option}
                      selectedOption={getAoIndexOfSelectedOption(qIndex)}
                      setSelectedOption={(aoIndex) => {
                          handleSetSelectedOption(qIndex, aoIndex);
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
          </div>
    </div>
  );
};

export default Quiz;
