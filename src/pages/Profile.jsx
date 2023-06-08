import { useEffect, useState } from "react";
// import { HiClipboardCopy } from "react-icons/hi";
import { useParams, useNavigate } from "react-router-dom";
import Response from "../components/Response";
import request from "../request";

const Profile = () => {
  const { profile_user } = useParams();
  const [profileResponse, setProfileResponse] = useState({});
  const [reslen, setReslen] = useState(0);
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  const copyToClipboard = (e) => {
    const link = e.target.innerText;
    navigator.clipboard.writeText("Got something to tell me, but don't know how to face me? Tell me now I won't know who said it\n" + link);
    alert("Profile link copied!");
  };

  useEffect(() => {
    request
      .get(`/profile/${profile_user}`)
      .then((res) => {
        setProfileResponse(() =>
          user === profile_user
            ? res.data[0].profile_messages
            : navigate("/404/")
        );
        setReslen(() => res.data[0].profile_messages.length);
      })
      .catch((err) => {
        if (err.response.status) {
          navigate("/404/");
        }
      });
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#BB33C2] to-blue-500 min-h-screen flex justify-center items-center p-4 pt-12">
      <div className="w-full sm:w-max flex flex-col gap-4 items-center text-center [&>*]:text-slate-500">
        <section className="bg-white md:w-full w-[16.3rem] shadow-lg p-2 md:p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-slate-500">
            {profile_user.charAt(0).toUpperCase() +
              profile_user.slice(1).toLowerCase()}
            {"'s "}
            profile
          </h3>
          <div className="cursor-pointer flex items-center justify-center gap-4 bg-slate-100 px-2 py-1 rounded w-max mx-auto mt-2">
            <a
              onClick={(e) => copyToClipboard(e)}
              // ref={urlRef}
              className="truncate w-[full] text-xs m-2"
            >
              {`${window.location.origin}/${profile_user}`}
            </a>

            {/* <HiClipboardCopy
              title="Copy Link"
              className="text-2xl hover:text-red-500 md:cursor-pointer"
            /> */}
          </div>
          <span className="text-xs text-slate-400">Tap the link to copy</span>
        </section>
        <section className="bg-white shadow-lg p-2 md:p-8 rounded-lg">
          {/* <input
            hidden
            value={window.location.href}
            readOnly={true}
            className="text-xs rounded outline-none border p-2 w-[90%]"
          ></input> */}
          <h2 className="font-bold text-2xl mb-4">Responses</h2>
          <ul className="[&>*]:appearance-none text-start flex flex-col gap-4 [&>*]:rounded [&>*]:outline-none w-full max-w-md">
            {reslen > 0 ? (
              profileResponse.map((message) => (
                <Response key={message.id} message={message} />
              ))
            ) : (
              <div>No messages available for you</div>
            )}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Profile;
