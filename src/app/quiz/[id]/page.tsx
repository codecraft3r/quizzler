import { notFound } from "next/navigation";
import { parseQuizJSON } from "@/lib/utils";
import Quiz from "@/components/quiz";

const demo_quiz_json = `{
  "title": "Demo Quiz",
  "questions": [
    {
      "question": "What is the capital of France?",
      "options": ["Paris", "**London**", "\`Berlin\`", "\`\`\`js Madrid fn \\n main() \`\`\`" ],
      "answer": "Paris"
    },
    {
      "question": "What is the largest planet in our solar system?",
      "options": ["Earth", "Jupiter", "Mars", "Venus"],
      "answer": "Jupiter"
    },
    {
      "question": "What is the smallest country in the world by land area?",
      "options": ["Monaco", "Vatican City", "Nauru", "Tuvalu"],
      "answer": "Vatican City"
    }
  ]
}`;


export default function QuizPage({ params }: {params: {id: string}}) {
  const { id } = params;
  if (!id) {
    notFound();
  }

  return (
    <div>
      <Quiz quizJson={demo_quiz_json} />
    </div>
  );
}
