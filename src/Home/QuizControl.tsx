import { Button } from "@/components/ui/button";
import { nextQuestion, previousQuestion } from "@/redux/features/quiz/quizSlice";
import { useAppDispatch } from "@/redux/hook";

const QuizControl = () => {
    const dispatch = useAppDispatch();
    const handleNextQuestion = () => {
        dispatch(nextQuestion())
    }
    const handlePreviousQuestion = () => {
        dispatch(previousQuestion())
    }
    return (
        <div className="flex justify-between w-full">
            <Button onClick={() => handlePreviousQuestion()} className="bg-blue-500 hover:bg-blue-600">Previous</Button>
            <Button onClick={() => handleNextQuestion()} className="bg-blue-500 hover:bg-blue-600">Next</Button>
        </div>
    );
};

export default QuizControl;