const Content = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-xl font-bold">Create Content</div>
      <textarea
        className="textarea textarea-info"
        placeholder="Share your creative ideas here... 🚀🪐🌌"
      ></textarea>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="https://play-lh.googleusercontent.com/15OKLti0ofnjK4XK1bgRXgsoblPvMi3hCA5z2o9WAcjssFNt2dXxemp2Om9vB3A_jYAe" alt="Avatar" />
          </div>
        </div>
        <div className="chat-bubble">
          "Get ready to unleash your creativity! Your journey to create amazing content begins now." 🎨📸🎥
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="https://play-lh.googleusercontent.com/15OKLti0ofnjK4XK1bgRXgsoblPvMi3hCA5z2o9WAcjssFNt2dXxemp2Om9vB3A_jYAe" alt="Avatar" />
          </div>
        </div>
        <div className="chat-bubble">
          "You're about to become a content wizard. Share your thoughts and let the magic happen!" 🪄📝🧙‍♂️
        </div>
      </div>
    </div>
  );
};

export default Content;
