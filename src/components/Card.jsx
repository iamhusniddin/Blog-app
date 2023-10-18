import parse from "html-react-parser";
import { ViewIcon } from "@chakra-ui/icons";
import userImg from "../assets/userImg.jpg";
import { Link } from "react-router-dom";

function Card({ title, body, views, user, id, createdAt }) {
  return (
    <div className="w-full rounded-lg p-3 border-1 border my-10 hover:border-black duration-200">
      {/* <div className="w-full rounded-lg bg-slate-600  h-[200px] mb-4"></div> */}
      <div>
        <Link to={`/details/${id}`}>
          <h2 className="card-title mb-4">{title}</h2>
        </Link>

        <div className="max-h-[100px] overflow-hidden rounded-md">
          {parse(body)}
        </div>

        <div>
          <div className="flex items-center gap-[3px] mt-[5px]">
            <img className="w-[25px] mt-1" src={userImg} alt="" />
            <p className="mt-[3px] text-[20px] font-medium">{user.username}</p>
          </div>

          <div className="flex gap-[15px] mt-[10px]">
            <p className="text-slate-400">
              {new Date(createdAt).toDateString()}
            </p>

            <div className="flex items-center gap-[5px]">
              <ViewIcon className="cursor-pointer text-[17px]" />
              <span>{views}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
