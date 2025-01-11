import { cn } from "@/lib/utils";

export const Plus = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-[15px] w-[14px]", className)}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.50483 3.89448C6.37355 4.02575 6.2998 4.2038 6.2998 4.38945V7.18945H3.4998C3.31415 7.18945 3.13611 7.2632 3.00483 7.39448C2.87355 7.52575 2.7998 7.7038 2.7998 7.88945C2.7998 8.0751 2.87355 8.25315 3.00483 8.38443C3.13611 8.5157 3.31415 8.58945 3.4998 8.58945H6.2998V11.3895C6.2998 11.5751 6.37355 11.7532 6.50483 11.8844C6.63611 12.0157 6.81415 12.0895 6.9998 12.0895C7.18546 12.0895 7.3635 12.0157 7.49478 11.8844C7.62605 11.7532 7.6998 11.5751 7.6998 11.3895V8.58945H10.4998C10.6855 8.58945 10.8635 8.5157 10.9948 8.38443C11.1261 8.25315 11.1998 8.0751 11.1998 7.88945C11.1998 7.7038 11.1261 7.52575 10.9948 7.39448C10.8635 7.2632 10.6855 7.18945 10.4998 7.18945H7.6998V4.38945C7.6998 4.2038 7.62605 4.02575 7.49478 3.89448C7.3635 3.7632 7.18546 3.68945 6.9998 3.68945C6.81415 3.68945 6.63611 3.7632 6.50483 3.89448Z"
        fill="currentColor"
      />
    </svg>
  );
};
