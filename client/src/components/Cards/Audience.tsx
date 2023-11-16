const Audience = () => {
  return (
    <div className="text-xl flex flex-col gap-5 font-bold justify-center items-center">
      <div className="flex flex-col gap-5">
        Audience
        <select className="select w-full max-w-xs">
          <option disabled selected>
            Pick your favorite Simpson
          </option>
          <option>Homer</option>
          <option>Marge</option>
          <option>Bart</option>
          <option>Lisa</option>
          <option>Maggie</option>
        </select>
      </div>
      <div>
        <select className="select select-success w-full max-w-xs">
          <option disabled selected>
            Select your tone
          </option>
          <option>One Piece</option>
          <option>Naruto</option>
          <option>Death Note</option>
          <option>Attack on Titan</option>
          <option>Bleach</option>
          <option>Fullmetal Alchemist</option>
          <option>Jojo's Bizarre Adventure</option>
        </select>
      </div>
      <div>
        <select className="select select-info w-full max-w-xs">
          <option disabled selected>
            Select language
          </option>
          <option>English</option>
          <option>Japanese</option>
          <option>Italian</option>
        </select>
      </div>
    </div>
  );
};

export default Audience;
