import { WRITING_POST_GET_COHERENCE_SCORES_AFTER_EVALUATION } from "@/assets/URL's/AllUrl";
import axios from "axios";



//not used yet...

export function Post_API_to_get_Coherence_Score(text, storeQuestionText, taskComplessionSTr, setMainTaskComplessionResult) {
    axios.post(
        // "https://ipractest-406204.uc.r.appspot.com/coherenceScore",
        WRITING_POST_GET_COHERENCE_SCORES_AFTER_EVALUATION, {
        questions: storeQuestionText,
        answers: text
      })
        .then((res) => {
          console.log(res.data.message);

          const numbers = [];
          for (const [, beginStr, endStr] of res.data.message.matchAll(/(\d+)(?:-(\d+))?/g)) {
            const [begin, end] = [beginStr, endStr].map(Number);
            numbers.push(begin);
            if (endStr !== undefined) {
              for (let num = begin + 1; num <= end; num++) {
                numbers.push(num);
              }
            }
          }
          //below code if for if coherence scores is less then 4 then scores
          //will be 5 & if it less then or equal to 6 then it will be added + 1 
          // other wise will return the same scores
          console.log(numbers)
          if (numbers[0]) {
            if (numbers[0] < 4) {
              setMainTaskComplessionResult(5);
              taskComplessionSTr = 5;
            } else if (numbers[0] <= 6) {
              setMainTaskComplessionResult(numbers[0] + 1);
              taskComplessionSTr = numbers[0] + 1
            } else {
              setMainTaskComplessionResult(numbers[0]);
              taskComplessionSTr = numbers[0];
            }
          } else {
            setMainTaskComplessionResult("0");
          }

          
        })
        .catch((error) => {
          console.log(error)
        })
}
