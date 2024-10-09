import { YAxis as RechartsYAxis } from "recharts";

const YAxisWrapper = ({
  tickLine = false,
  axisLine = { strokeWidth: "0" },
  style = { fontSize: "10px" },
  domain = [8000, 23000],
  ...props
}) => {
  return (
    <RechartsYAxis
      tickLine={tickLine}
      axisLine={axisLine}
      style={style}
      domain={domain}
      {...props}
    />
  );
};

export default YAxisWrapper ; 