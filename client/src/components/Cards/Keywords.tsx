import React, { useState } from "react";

const Keywords = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [keywords, setKeywords] = useState<string[]>([]);
  const [limit, setLimit] = useState(false);

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (keywords.length <= 3) {
        addKeyword();
      } else {
        setLimit(true);
        setInputValue("");
      }
    }
  };

  const addKeyword = () => {
    if (inputValue.trim() !== "") {
      setKeywords([...keywords, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <div className="text-xl font-bold">Keywords</div>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered input-info w-full max-w-xs"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <div className="flex flex-wrap gap-4">
        {keywords.map((keyword: string, index) => (
          <button
            className="badge badge-lg badge-accent badge-outline"
            key={index}
          >
            {keyword}
          </button>
        ))}
      </div>
      {limit && (
        <div className="toast">
          <div className="alert alert-error">
            <span>Max limit reached</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Keywords;
