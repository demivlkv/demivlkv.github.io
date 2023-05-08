const Moon = () => {
  return (
    <div>
      <svg
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="transition-all ease-in duration-300"
      >
        <use href="/feather-sprite.svg#moon"/>
      </svg>
    </div>
  );
};

export default Moon;