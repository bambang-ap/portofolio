export function Desc({ description }: { description: Description[] }) {
  return (
    <>
      {description.map((desc) => {
        if (!Array.isArray(desc)) {
          const detail =
            desc === "~" ? <br className="md:block hidden" /> : desc;
          return <>{detail} </>;
        }

        const [detail, className = "text-AAsecondary"] = desc;

        return (
          <>
            <span className={className}>{detail}</span>{" "}
          </>
        );
      })}
    </>
  );
}
