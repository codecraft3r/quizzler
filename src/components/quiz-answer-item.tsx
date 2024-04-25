import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button, buttonVariants } from './ui/button';
import ReactMarkdown from 'react-markdown';

interface QuizAnswerItemProps {
  index: number;
  answer: string;
  selectedOption: number | null;
  setSelectedOption: (option: number | null) => void;
}

const QuizAnswerItem: React.FC<QuizAnswerItemProps> = ({ index, answer, selectedOption, setSelectedOption }) => {
  const handleSelectOption = (option: number) => {
    setSelectedOption(-1);
    setSelectedOption(option === index ? option : -1);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <span>{`Option ${index}:`}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 ml-2">
        <div className="prose text-left align-left max-h-none">
          <ReactMarkdown>
            {answer}
          </ReactMarkdown>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end p-4">
        <Button
          variant="outline"
          className={selectedOption === index ? "bg-green-600" : ""}
          onClick={() => handleSelectOption(index)}
        >
          Select
        </Button>
      </CardFooter>
    </Card>
  );
};

export default QuizAnswerItem;

