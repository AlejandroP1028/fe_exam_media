import React from "react";
interface AccountInformationCellProps {
  title: string;
  value: string;
}
const AccountInformationCell = ({
  title,
  value,
}: AccountInformationCellProps) => {
  return (
    <div className="col-span-1 flex flex-col">
      <p className="text-[#73726C] leading-1.4">{title}</p>
      <p className="text-[#141413]">{value}</p>
    </div>
  );
};

export default AccountInformationCell;
