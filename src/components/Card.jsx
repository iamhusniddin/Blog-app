import parse from "html-react-parser"
import { ViewIcon } from "@chakra-ui/icons";


function Card({title, body, views, user, id, createdAt}) {
  return (
    <div className="w-full rounded-lg p-3 border-1 border">
      <div className="w-full rounded-lg bg-slate-600  h-[200px] mb-5"></div>
      <div>
        <h2 className="card-title">{title}</h2>
        <div>{parse(body)}</div>
          

        <div className="flex gap-[15px]">

          <p className="text-slate-400">{new Date (createdAt).toDateString()}</p>
          <div className="flex items-center gap-[5px]"><ViewIcon className="cursor-pointer"/>{views}</div>
        </div>

        

     
        </div>
    </div>
  );
}

export default Card;
