import kira_im from "../../images/kira2.png";

function kira(){
    return(
        <div className="flex flex-col relative justify-center items-center h-screen bottom-10">
           <img src={kira_im} alt="Image" className="object-cover" style={{width:"800px",height:"300px"}}/>
           <h1 className="text-4xl font-normal leading-15 text-center absolute left-0 right-0 bg-transparent" style={{ top: "550px",width:"800px" }}>Knowledge Integrated R-Land AI-ChatBot</h1>
        </div>
    )
}
export default kira;