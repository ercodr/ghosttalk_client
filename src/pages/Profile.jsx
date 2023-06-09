import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Response from "../components/Response";
import request from "../request";
import { RiShareFill } from "react-icons/ri";

const Profile = () => {
  const { profile_user } = useParams();
  const [profileResponse, setProfileResponse] = useState([]);
  const [reslen, setReslen] = useState(0);
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  const copyToClipboard = (e) => {
    const link = e.target.innerText;
    navigator.clipboard.writeText(
      "Got something to tell me, but don&apos;t know how to face me? Tell me now I won&apos;t know who said it\n" +
        link
    );
    if ('vibrate' in navigator) {
      navigator.vibrate([100, 200, 100, 200, 100, 200]);
    }
    alert(
      "ℹ Share this link with family and friends to receive anonymous feedbacks from them"
    );
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await request.get(`/profile/${profile_user}`);
        if (res.data.length === 0) {
          navigate("/404/");
        } else {
          setProfileResponse(() =>
            user === profile_user ? res.data[0].profile_messages : []
          );
          setReslen(() => res.data[0].profile_messages.length);
        }
      } catch (err) {
        navigate("/404/");
      }
    };

    fetchProfile();
  }, [profile_user, navigate, user]);

  const socialShare = () => {
    try {
      if (navigator.canShare) {
        navigator
          .share({
            title: "GhostTalk",
            text:
              "Got something to tell me, but don't know how to face me? Tell me now I won't know who said it",
            url: `${window.location.origin}/${profile_user}`,
          })
          .catch((error) => alert(`Error: ${error}`));
      } else {
        alert("Oops! sharing not supported in your browser.");
      }
    } catch (err) {
      alert(`Error: ${err}`);
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#BB33C2] to-blue-500 min-h-screen flex justify-center items-center p-4 pt-12">
      <div className="w-full sm:w-max flex flex-col gap-4 items-center text-center text-slate-500">
        <section className="bg-white w-full shadow-lg p-4 md:p-8 rounded-lg">
          <h3 className="text-2xl font-bold">
            {profile_user.charAt(0).toUpperCase() +
              profile_user.slice(1).toLowerCase()}&apos;s Profile
          </h3>
          <div className="cursor-pointer flex items-center justify-center gap-4 bg-slate-100 px-2 py-1 rounded w-max mx-auto mt-2">
            <a
              title="ℹ Share this link with friends and family to receive anonymous feedbacks from them"
              onClick={copyToClipboard}
              className="truncate w-48 md:w-full text-xs m-2"
            >
              {`${window.location.origin}/${profile_user}`}
            </a>
          </div>
          <span className="text-xs text-slate-400">
            Tap the link to copy & share
          </span>
          <div
            onClick={socialShare}
            className="bg-gradient-to-br from-[#BB33C2] to-blue-500 text-lg flex justify-center items-center gap-2 font-medium text-center mt-6 cursor-pointer text-white rounded-full py-1 px-4 shadow-lg w-fit mx-auto hover:scale-[1.05] active:scale-[0.95]"
          >
            Share <RiShareFill />
          </div>
        </section>
        <section className="bg-white shadow-lg p-2 md:p-8 rounded-lg">
          <h2 className="font-bold text-2xl mb-4">Responses</h2>
          <ul className="text-start flex flex-col gap-4">
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
