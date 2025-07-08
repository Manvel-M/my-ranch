import { forwardRef, type ComponentPropsWithRef } from "react";

const DatePicker = forwardRef(({ value, onClick, className }, ref) => (
  <button className={className} onClick={onClick} ref={ref}>
    {value}
  </button>
));

export default DatePicker;
