
function Achievements(props) {
  
  const Achievements = [
    {
      id: 1,
      count: props?.data?.happy_clients,
      heading: "Happy Clients",
    },
    {
      id: 2,
      count: props?.data?.awards_won,
      heading: "Award Clients",
    },
    {
      id: 3,
      count: props?.data?.projects,
      heading: "Projects",
    },
  ];
  return (
    <>
      <p></p>
      <div className="bg-[#001524]">
        <div className="mx-auto container py-7">
          <h1 className="text-center text-[#ffff]  text-[2.3rem] font-semibold">
            Achievements
          </h1>
          <div className="flex flex-col md:flex-row justify-center items-center gap-24 text-[#fff] pt-12 w-full">
            {Achievements.map((item) => {
              return (
                <div
                  key={item.id}
                  className="w-[15rem] h-[15rem] border-4 z-30 border-[#fff] rounded-full "
                >
                  <div className="w-full h-full flex flex-col gap-3 justify-center items-center">
                    <h1 className="text-5xl font-extrabold">{item.count}</h1>
                    <h1 className="text-xl">{item.heading}</h1>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default Achievements;