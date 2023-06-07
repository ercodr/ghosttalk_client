import { RiSendPlaneFill } from "react-icons/ri";
import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import request from "../request";

const SendTalk = () => {
  const maxLength = 500;
  const formRef = useRef();
  const { username } = useParams();
  const [statusMsg, setStatusMsg] = useState("");
  const [charCount, setCharCount] = useState(maxLength);
  const [msg, setMsg] = useState("");

  const responseHandler = (e) => {
    e.preventDefault();
    const response = formRef.current.user_response.value;

    request
      .post("/response/", {
        profile: username,
        content: response,
      })
      .then((res) => {
        if (res.status === 200) {
          setMsg("")
          setStatusMsg(() => res.data.status);
          dismissStatus();
        }
      });

    const dismissStatus = () => {
      setTimeout(() => {
        setStatusMsg(() => null);
      }, 5000);
    };
  };
  return (
    <div className="bg-gradient-to-br from-[#BB33C2] to-blue-500 min-h-screen flex justify-center items-center p-4 pt-12">
      <form
        onSubmit={responseHandler}
        ref={formRef}
        className="transition-transform duration-[5s] bg-white shadow-2xl w-full md:max-w-md flex flex-col gap-4 items-center rounded-lg p-8 text-slate-500"
      >
        <h3 className="text-2xl font-bold text-white bg-slate-600 w-full text-center p-2 rounded">
          GhostTalk Me!
        </h3>
        <div className="space-y-4 flex flex-col w-full [&>*]:px-4 [&>*]:py-2 [&>*]:border-">
          <label>Say Something About Me</label>
          <textarea
            onChange={(e) => {
              setCharCount(() => maxLength - e.target.value.length);
              setMsg(() => e.target.value)
            }}
            maxLength={maxLength}
            cols="30"
            rows="10"
            name="user_response"
            placeholder="Leave a message for me"
            className="appearance-none border-b-2 outline-none rounded"
            required
            value={msg}
          ></textarea>
          <div
            className={`text-sm ${
              charCount > 250
                ? "text-green-400"
                : charCount > 50
                ? "text-yellow-400"
                : "text-red-500"
            }`}
          >
            Characters left: {charCount}
          </div>
          <button className="bg-blue-500 py-2 text-white rounded shadow-lg flex items-center justify-center gap-4">
            Send Message <RiSendPlaneFill />
          </button>
          <span
            className={`text-center ${
              statusMsg === "Response sent successfully!"
                ? "text-green-500"
                : "text-red-500"
            } animate-bounce`}
          >
            {statusMsg}
          </span>
        </div>
      </form>
    </div>
  );
};

export default SendTalk;
