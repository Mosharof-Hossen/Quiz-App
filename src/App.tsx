import Question from './Home/Question'
import QuizSummary from './Home/QuizSummary';
import { getQuiz } from './redux/features/quiz/quizSlice'
import { useAppSelector } from './redux/hook'

function App() {
  const { quizComplete} = useAppSelector(getQuiz);
  return (

    <div>
      <h1 className='text-center text-4xl font-bold my-5'>Basic Quiz App</h1>
{
      
      !quizComplete?<Question></Question>:<QuizSummary></QuizSummary>
}
    </div>
  )
}

export default App
