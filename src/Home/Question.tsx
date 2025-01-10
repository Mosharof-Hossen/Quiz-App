import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getQuiz, setAnswer } from "@/redux/features/quiz/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

const Question = () => {
    const dispatch = useAppDispatch();
    const { question, currentQuestionIndex } = useAppSelector(getQuiz);
    const currentQuestion = question[currentQuestionIndex];
    const handleAnswerChange = (answer: string) => {
        console.log(answer);
        dispatch(setAnswer({answer,currentQuestionIndex}))
    }
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
                        currentQuestion.options.map((option, index) => <Button
                            onClick={() => handleAnswerChange(option)}
                            key={index}
                            size="lg"
                            className="w-full mt-2"
                        >{option}</Button>)
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