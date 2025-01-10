import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getQuiz } from "@/redux/features/quiz/quizSlice";
import { useAppSelector } from "@/redux/hook";

const Question = () => {
    const { question, currentQuestionIndex } = useAppSelector(getQuiz);
    const currentQuestion = question[currentQuestionIndex];
    console.log({ question, currentQuestionIndex, currentQuestion });
    return (
        <div className="flex justify-center">
            <Card className="w-[400px] rounded-md">
                <CardHeader>
                    <CardTitle>{currentQuestion.question}</CardTitle>
                    <CardDescription>Question {currentQuestionIndex + 1} of {question.length}</CardDescription>
                </CardHeader>
                <CardContent>
                    {
                        currentQuestion.options.map((option, index) => <Button key={index} size="lg" className="w-full mt-2">{option}</Button>)
                    }
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button>Deploy</Button>
                </CardFooter>
            </Card>
        </div>
    )
};

export default Question;