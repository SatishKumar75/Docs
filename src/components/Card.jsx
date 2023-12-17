import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose, IoScale } from "react-icons/io5";
import { motion } from "framer-motion";

function card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 25 }}
      className="relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white p-5 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="text-sm mt-5 leading-tight">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between mb-3 py-3 px-8">
          <h5>{data.fileSize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center ">
            {data.close ? (
              <IoClose />
            ) : (
              <LuDownload size=".8rem" color="#fff" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div>
            {console.log(`tagColor: ${data.tag.tagColor}`)}
            <div
              className={`tag w-full py-3 ${
                data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
              } flex items-center justify-center`}
            >
              <p className="text-sm font-semibold">{data.tag.tagTitle}</p>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default card;
