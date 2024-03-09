import Header from "../components/prompt/header";
import PromptBox from "../components/prompt/prompt";
import ChatBox from "../components/prompt/ChatBox";

function prompt(){
    return(
    <div className="relative">
        <Header />
        <PromptBox/>
    </div>
    )
}
export default prompt;