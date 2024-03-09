import Header from "../components/prompt/header";
import PromptBox from "../components/prompt/prompt";
import ChatBox from "../components/prompt/ChatBox";
import ChatDiv from "../components/prompt/ChatDiv";

function prompt(){
    return(
    <div className="flex flex-col h-screen">
        <Header />
        <ChatDiv />
        <ChatBox initialColor={"grey"} message={"rkjegnjegrjj ufi rfji ereggrje ughjisdfiwhe fwepoweogewnpeg"} heading={"Prompt: "} />
        <PromptBox/>
    </div>
    )
}
export default prompt;