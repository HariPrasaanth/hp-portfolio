import React from "react";

interface DomainPillProps {
  domain: string;
}

const SkillPill = (props: DomainPillProps) => {
  const { domain } = props;
  return (
    <div>
      <button className="bg-[#00BFA6] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer w-[auto]">
        {domain}
      </button>
    </div>
  );
};

export default SkillPill;
