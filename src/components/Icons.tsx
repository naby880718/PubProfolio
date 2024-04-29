interface SvgProps {
  width?: number;
  height?: number;
  fill?: string;
  strokeWidth?: number;
}

const HelpDeskIcon = ({
  width = 30,
  height = 30,
  fill = "#1A1F23",
}: SvgProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22 13C22 9.13401 18.866 6 15 6C11.134 6 8 9.13401 8 13"
      stroke={fill}
      strokeWidth="2"
    />
    <path
      d="M6 16C6 17.402 6.96076 18.577 8.25835 18.9074C9.33301 19.181 10 18.2356 10 17.5V14.5C10 13.7645 9.33301 12.819 8.25835 13.0926C6.96076 13.423 6 14.598 6 16Z"
      stroke={fill}
      strokeWidth="2"
    />
    <path
      d="M24 16C24 14.598 23.0392 13.423 21.7417 13.0926C20.667 12.819 20 13.7644 20 14.5L20 17.5C20 18.2355 20.667 19.181 21.7417 18.9074C23.0392 18.577 24 17.402 24 16Z"
      stroke={fill}
      strokeWidth="2"
    />
    <path
      d="M21 19V22C21 22.5523 20.5523 23 20 23H14"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const NotificationIcon = ({
  width = 30,
  height = 30,
  fill = "#1A1F23",
}: SvgProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22.2782 17.4617L21.6387 18.2305L22.2782 17.4617ZM9.33331 12.6667C9.33331 9.53705 11.8704 7 15 7V5C10.7658 5 7.33331 8.43248 7.33331 12.6667H9.33331ZM9.33331 16.4066V12.6667H7.33331V16.4066H9.33331ZM8 19C8 18.6911 8.13888 18.4155 8.3613 18.2305L7.08231 16.6929C6.42266 17.2416 6 18.0719 6 19H8ZM9 20C8.44772 20 8 19.5523 8 19H6C6 20.6569 7.34315 22 9 22V20ZM21 20H9V22H21V20ZM22 19C22 19.5523 21.5523 20 21 20V22C22.6569 22 24 20.6569 24 19H22ZM21.6387 18.2305C21.8611 18.4155 22 18.6911 22 19H24C24 18.0719 23.5773 17.2416 22.9177 16.6929L21.6387 18.2305ZM20.6666 12.6667V16.4066H22.6666V12.6667H20.6666ZM15 7C18.1296 7 20.6666 9.53705 20.6666 12.6667H22.6666C22.6666 8.43249 19.2342 5 15 5V7ZM22.9177 16.6929C22.8064 16.6003 22.7343 16.5183 22.6948 16.456C22.6581 16.3982 22.6666 16.3855 22.6666 16.4066H20.6666C20.6666 17.2883 21.2466 17.9043 21.6387 18.2305L22.9177 16.6929ZM7.33331 16.4066C7.33331 16.3856 7.34183 16.3982 7.30516 16.456C7.26566 16.5183 7.19358 16.6003 7.08231 16.6929L8.3613 18.2305C8.75336 17.9044 9.33331 17.2883 9.33331 16.4066H7.33331Z"
      fill={fill}
    />
    <path
      d="M18 22C18 23.1046 16.6569 24 15 24C13.3431 24 12 23.1046 12 22"
      stroke={fill}
      strokeWidth="2"
    />
  </svg>
);

const SettingIcon = ({
  width = 30,
  height = 30,
  fill = "#1A1F23",
}: SvgProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <circle cx="15" cy="15" r="3" stroke={fill} strokeWidth="2" />
    <path
      d="M11.25 8.50507C11.931 8.11191 12.2869 7.43048 12.4714 6.87105C12.6365 6.37028 13.0754 5.95603 13.6027 5.95603L16.3974 5.95603C16.9247 5.95603 17.3635 6.37028 17.5287 6.87105C17.7132 7.43048 18.0691 8.11191 18.75 8.50507C19.4311 8.89826 20.1992 8.86571 20.7759 8.74575C21.2921 8.63838 21.8703 8.81126 22.1339 9.26783L23.5311 11.687C23.7948 12.1436 23.6555 12.7309 23.3044 13.1244C22.9122 13.5639 22.5001 14.2127 22.5001 14.999C22.5001 15.7854 22.9123 16.4343 23.3046 16.8738C23.6557 17.2672 23.795 17.8543 23.5314 18.3109L22.1338 20.7324C21.8702 21.1891 21.292 21.3621 20.7757 21.2547C20.199 21.1348 19.431 21.1023 18.75 21.4955C18.0691 21.8886 17.7132 22.57 17.5287 23.1295C17.3635 23.6302 16.9247 24.0445 16.3974 24.0445L13.6027 24.0445C13.0754 24.0445 12.6365 23.6302 12.4714 23.1295C12.2869 22.57 11.931 21.8886 11.25 21.4955C10.5691 21.1023 9.8011 21.1348 9.22438 21.2547C8.70808 21.3621 8.12984 21.1891 7.86623 20.7323L6.46867 18.3109C6.20511 17.8543 6.34446 17.2672 6.69554 16.8738C7.0878 16.4343 7.50006 15.7854 7.50006 14.999C7.50006 14.2127 7.08792 13.5639 6.69571 13.1244C6.34458 12.7309 6.20528 12.1436 6.46902 11.687L7.86613 9.26784C8.12982 8.81126 8.70794 8.63839 9.22414 8.74575C9.80088 8.86571 10.569 8.89826 11.25 8.50507Z"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const SearchIcon = ({ width = 30, height = 30, fill = "#1A1F23" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <circle cx="13.5" cy="13.5" r="7.5" stroke={fill} strokeWidth="2" />
    <path
      d="M23 23L19 19"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const ResetIcon = ({
  width = 30,
  height = 30,
  fill = "#354165",
  strokeWidth = 1.5,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 8.32143C12 10.6292 10.2091 12.5 8 12.5C5.79086 12.5 4 10.6292 4 8.32143C4 6.01367 5.79086 4.14286 8 4.14286C9.42509 4.14286 10.6761 4.92137 11.3846 6.09349M11.3846 6.09349V3.5M11.3846 6.09349H8.90196"
      stroke={fill}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AdminIcon = ({ width = 30, height = 30, fill = "#A2ADC1" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.26315 13.1427C5.58728 16.8109 8.82877 18.0753 9.72439 18.366C9.88052 18.4166 10.0429 18.4169 10.1992 18.3667C11.1002 18.0774 14.3721 16.814 16.6602 13.1427C17.8597 11.2181 17.9515 7.14453 17.9283 5.33524C17.9218 4.82294 17.5143 4.41424 17.0059 4.35074C16.094 4.23684 14.6394 3.98257 13.3734 3.43681C12.5234 3.0704 11.4796 2.08098 10.7721 1.33785C10.3387 0.882679 9.58795 0.885247 9.15708 1.34279C8.45782 2.08536 7.42684 3.07121 6.57877 3.43681C5.30581 3.98558 3.84214 4.23964 2.93127 4.35262C2.42905 4.41491 2.02476 4.81411 2.01137 5.32C1.964 7.11023 2.00962 11.1642 3.26315 13.1427ZM12 6.99931C12 8.10388 11.1046 8.99931 10 8.99931C8.89543 8.99931 8 8.10388 8 6.99931C8 5.89474 8.89543 4.99931 10 4.99931C11.1046 4.99931 12 5.89474 12 6.99931ZM10 14.9993C12.2091 14.9993 14 14.5649 14 12.9405C14 11.3161 12.2091 9.99931 10 9.99931C7.79086 9.99931 6 11.3161 6 12.9405C6 14.5649 7.79086 14.9993 10 14.9993Z"
      fill={fill}
    />
  </svg>
);

const ToolIcon = ({ width = 30, height = 30, fill = "#A2ADC1" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="7.5" height="7.5" rx="2" fill={fill} />
    <rect x="10.5" y="2" width="7.5" height="7.5" rx="2" fill={fill} />
    <rect x="2" y="10.5" width="7.5" height="7.5" rx="2" fill={fill} />
    <line
      x1="11.5"
      y1="14.25"
      x2="17"
      y2="14.25"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="14.25"
      y1="11.5"
      x2="14.25"
      y2="17"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const UserIcon = ({ width = 20, height = 20, fill = "#A2ADC1" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="5" r="3" fill={fill} />
    <path
      d="M17 14.2941C17 17.218 13.866 18 10 18C6.13401 18 3 17.218 3 14.2941C3 11.3703 6.13401 9 10 9C13.866 9 17 11.3703 17 14.2941Z"
      fill={fill}
    />
  </svg>
);

const XIcon = ({ width = 24, height = 24, fill = "#C6CDDA" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5.40013 5.40066L10.5999 10.6004M10.5999 5.40066L5.40013 10.6004"
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CloseIcon = ({ width = 24, height = 24, fill = "#C6CDDA" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18.3886 4L12 10.3886L5.61143 4L4 5.61143L10.3886 12L4 18.3886L5.61143 20L12 13.6114L18.3886 20L20 18.3886L13.6114 12L20 5.61143L18.3886 4Z"
      fill={fill}
    />
  </svg>
);

const LogoutIcon = ({ width = 20, height = 20, fill = "#e1315a" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.2197 8.21967C15.5126 7.92678 15.9874 7.92678 16.2803 8.21967L17.7803 9.71967C18.0732 10.0126 18.0732 10.4874 17.7803 10.7803L16.2803 12.2803C15.9874 12.5732 15.5126 12.5732 15.2197 12.2803C14.9268 11.9874 14.9268 11.5126 15.2197 11.2197L15.4393 11L10.75 11C10.3358 11 10 10.6642 10 10.25C10 9.83579 10.3358 9.5 10.75 9.5L15.4393 9.5L15.2197 9.28033C14.9268 8.98744 14.9268 8.51256 15.2197 8.21967Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 3C14 2.4477 13.5523 1.99998 13 2L2.99996 2.00041C2.44769 2.00043 2 2.44814 2 3.00041V17.0004C2 17.5527 2.44772 18.0004 3 18.0004L13 18.0004C13.5523 18.0004 14 17.5527 14 17.0004V12H10.75C9.7835 12 9 11.2165 9 10.25C9 9.2835 9.7835 8.5 10.75 8.5H14V3ZM14 9.5L10.75 9.5C10.3358 9.5 10 9.83579 10 10.25C10 10.6642 10.3358 11 10.75 11H14V9.5Z"
      fill={fill}
    />
  </svg>
);

const ToastErrorIcon = ({ width = 32, height = 32, fill = "#E1315A" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.268 4C15.0378 2.66667 16.9623 2.66667 17.7321 4L28.1244 22C28.8942 23.3333 27.9319 25 26.3923 25H5.60769C4.06809 25 3.10584 23.3333 3.87564 22L14.268 4Z"
      fill={fill}
    />
    <path
      d="M16.9229 11.1016L16.7725 18.0879H15.2275L15.0635 11.1016H16.9229ZM16.0068 21.1094C15.4189 21.1094 14.9404 20.6309 14.9404 20.043C14.9404 19.4688 15.4189 18.9902 16.0068 18.9902C16.5674 18.9902 17.0596 19.4688 17.0596 20.043C17.0596 20.6309 16.5674 21.1094 16.0068 21.1094Z"
      fill="white"
    />
  </svg>
);

const ToastSuccessIcon = ({ width = 32, height = 32, fill = "#00B29B" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <circle
      fillRule="evenodd"
      clipRule="evenodd"
      cx="16"
      cy="16"
      r="12"
      fill={fill}
    />
    <path
      d="M11 15.75L14.7895 19L20 13"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ToastWarningIcon = ({ width = 32, height = 32, fill = "#FF5934" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <circle
      fillRule="evenodd"
      clipRule="evenodd"
      cx="16"
      cy="16"
      r="12"
      fill={fill}
    />
    <path
      d="M12.4645 12.4652L19.5355 19.5363M19.5355 12.4652L12.4645 19.5363"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = ({ width = 32, height = 32, fill = "#FF5934" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M31 62C48.1208 62 62 48.1208 62 31C62 13.8792 48.1208 0 31 0C13.8792 0 0 13.8792 0 31C0 48.1208 13.8792 62 31 62Z"
      fill={fill}
    />
    <path
      d="M30.9997 51.6302C28.672 51.6302 26.7676 49.7257 26.7676 47.3981C26.7676 45.0705 28.672 43.166 30.9997 43.166C33.3273 43.166 35.2317 45.0705 35.2317 47.3981C35.2317 49.7257 33.3273 51.6302 30.9997 51.6302Z"
      fill="white"
    />
    <rect
      x="27.2969"
      y="10.3672"
      width="7.40614"
      height="27.5085"
      rx="3.70307"
      fill="white"
    />
  </svg>
);

const ErrorIcon = ({ width = 32, height = 32, fill = "#E1315A" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50Z"
      fill={fill}
    />
    <rect
      width="5.3"
      height="29.3614"
      rx="2.65"
      transform="matrix(0.707114 0.707099 -0.707114 0.707099 33.2617 12.5)"
      fill="white"
    />
    <rect
      width="5.3"
      height="29.3614"
      rx="2.65"
      transform="matrix(-0.707114 0.707099 -0.707114 -0.707099 37.5 33.2617)"
      fill="white"
    />
  </svg>
);

const SuccessIcon = ({ width = 32, height = 32, fill = "#00B29B" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M38.7371 15.8527C39.7796 16.758 39.8908 18.337 38.9855 19.3795L24.9787 35.5085C24.0773 36.5465 22.5071 36.6619 21.4636 35.767L11.2768 27.0304C10.2288 26.1316 10.1078 24.5533 11.0067 23.5052C11.9055 22.4572 13.4838 22.3362 14.5319 23.2351L22.8326 30.3541L35.2103 16.1011C36.1156 15.0586 37.6946 14.9474 38.7371 15.8527Z"
      fill="#ffffff"
    />
  </svg>
);

const CompletedIcon = ({ width = 20, height = 14, fill = "#fff" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1 6.5L8.57895 13L19 1"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TooltipIcon = ({ width = 16, height = 16, fill = "#959BA0" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <circle
      fillRule="evenodd"
      clipRule="evenodd"
      cx="8"
      cy="8"
      r="6.5"
      stroke={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.375 6.69727H8.625V12H7.375V6.69727ZM8.00977 5.94531C7.87956 5.94531 7.75911 5.91439 7.64844 5.85254C7.53776 5.79069 7.44987 5.70768 7.38477 5.60352C7.31966 5.49935 7.28711 5.38542 7.28711 5.26172C7.28711 5.14128 7.31966 5.02897 7.38477 4.9248C7.44987 4.82064 7.53776 4.73926 7.64844 4.68066C7.75911 4.61882 7.87956 4.58789 8.00977 4.58789C8.13997 4.58789 8.26042 4.61882 8.37109 4.68066C8.48177 4.73926 8.56966 4.82064 8.63477 4.9248C8.69987 5.02897 8.73242 5.14128 8.73242 5.26172C8.73242 5.38542 8.69987 5.49935 8.63477 5.60352C8.56966 5.70768 8.48177 5.79069 8.37109 5.85254C8.26042 5.91439 8.13997 5.94531 8.00977 5.94531Z"
      fill={fill}
    />
  </svg>
);

const TooltipHoverIcon = ({ width = 20, height = 20, fill = "#A2ADC1" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10.8008" r="9.25" stroke={fill} strokeWidth="1.5" />
    <path
      d="M10.0502 16.1992H9.9502"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 13.1992C10 11.1992 13 11.1992 13 8.19922C13 5.19922 7 5.19922 7 8.19922"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Pdficon = ({ width = 30, height = 30 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <rect width="30" height="30" rx="4" fill="#EB5757" />
    <path
      d="M10.1777 21V8.27344H14.959C17.877 8.27344 19.4326 10.0488 19.4414 12.4922C19.4326 14.9268 17.8594 16.6934 14.9238 16.6934H12.4629V21H10.1777ZM12.4629 14.8125H14.6074C16.3301 14.8037 17.1035 13.8369 17.1035 12.4922C17.1035 11.1299 16.3301 10.1895 14.6074 10.1895H12.4629V14.8125Z"
      fill="white"
    />
  </svg>
);

const FileDownloadIcon = ({ width = 20, height = 20, fill = "#354165" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7 8L10 12L13 8"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 11L10 5"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M4 13L4.66667 15H15.3333L16 13"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FileViewIcon = ({ width = 12, height = 12, fill = "#354165" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4.25 1H2.5C1.67157 1 1 1.67117 1 2.49959C1 4.95957 1 7.80546 1 9.50112C1 10.3296 1.67157 11 2.5 11H9.5C10.3284 11 11 10.3284 11 9.5V7.5"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M6 6L11 1" stroke={fill} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M7 1L11 1" stroke={fill} strokeWidth="1.5" strokeLinecap="round" />
    <path
      d="M11 1L11 5"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const CopyUrlIcon = ({ width = 16, height = 16, fill = "#354165" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_2863_149827)">
      <path
        d="M5.66862 10.9998H5.00195V8.33313C5.00257 7.53807 5.31852 6.77572 5.88049 6.21331C6.44246 5.65091 7.20456 5.33437 7.99962 5.33313L9.61395 5.2818V3.1438L12.7096 6.24146C12.8971 6.42899 13.0024 6.6833 13.0024 6.94846C13.0024 7.21362 12.8971 7.46793 12.7096 7.65546L9.61462 10.7531V8.61513L7.99962 8.66646C7.38135 8.66761 6.78876 8.91388 6.3518 9.35128C5.91483 9.78869 5.66915 10.3815 5.66862 10.9998ZM8.00195 7.99979L10.2826 7.94846V9.14379L12.2406 7.18413C12.3031 7.12162 12.3382 7.03685 12.3382 6.94846C12.3382 6.86007 12.3031 6.7753 12.2406 6.71279L10.281 4.75313V5.94846L7.99962 5.9998C7.38094 6.00033 6.78776 6.24633 6.35029 6.6838C5.91282 7.12127 5.66682 7.71445 5.66629 8.33313V9.11613C5.94699 8.76742 6.30233 8.48611 6.70615 8.29291C7.10996 8.09972 7.55197 7.99955 7.99962 7.99979H8.00195Z"
        fill={fill}
      />
    </g>
    <path
      d="M3 5V11.5C3 12.3284 3.67157 13 4.5 13H11"
      stroke={fill}
      strokeWidth="0.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const PlusIcon = ({
  width = 20,
  height = 20,
  strokeWidth = 1.5,
  fill = "#C6CDDA",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5 10H15M10 5V15"
      stroke={fill}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Excelicon = ({ width = 30, height = 30 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <rect width="30" height="30" rx="4" fill="#219653" />
    <path
      d="M12.0938 8.27344L14.8887 12.9492H14.9941L17.8242 8.27344H20.4258L16.5059 14.6367L20.4961 21H17.8418L14.9941 16.3594H14.8887L12.041 21H9.4043L13.4297 14.6367L9.45703 8.27344H12.0938Z"
      fill="white"
    />
  </svg>
);

const Wordicon = ({ width = 30, height = 30 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <rect width="30" height="30" rx="4" fill="#2F80ED" />
    <path
      d="M9.86719 21L6.28125 8.27344H8.74219L11.0449 17.6426H11.168L13.6113 8.27344H15.8613L18.3223 17.6602H18.4277L20.7305 8.27344H23.1914L19.6055 21H17.3379L14.7891 12.0527H14.7012L12.1348 21H9.86719Z"
      fill="white"
    />
  </svg>
);

const EtcIcon = ({ width = 30, height = 30 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <rect width="30" height="30" rx="4" fill="#A2ADC1" />
    <path
      d="M6.94961 19.5V11.0156H12.4691V12.293H8.47305V14.6133H12.1762V15.8906H8.47305V18.2109H12.4926V19.5H6.94961ZM16.9395 13.1367V14.2852H15.6855V17.5898C15.6855 18.1992 15.9902 18.3223 16.3652 18.3281C16.541 18.334 16.834 18.3164 17.0215 18.3047V19.5234C16.8457 19.5527 16.5586 19.5879 16.1777 19.582C15.0527 19.5879 14.1855 19.0312 14.1973 17.8359V14.2852H13.2832V13.1367H14.1973V11.6133H15.6855V13.1367H16.9395ZM20.6949 19.6289C18.7965 19.6289 17.648 18.2695 17.648 16.3477C17.648 14.3965 18.8316 13.0547 20.6949 13.0547C22.2359 13.0547 23.3199 13.957 23.4254 15.3281H21.9957C21.8785 14.7188 21.4332 14.2559 20.7066 14.25C19.7809 14.2559 19.1598 15.0293 19.1598 16.3125C19.1598 17.625 19.7691 18.4043 20.7066 18.4102C21.3688 18.4043 21.8609 18.0176 21.9957 17.332H23.4254C23.3141 18.6738 22.2945 19.6289 20.6949 19.6289Z"
      fill="white"
    />
  </svg>
);

const FileUploadIcon = ({ width = 16, height = 16, fill = "#8A9DBE" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9.5 6L8.33205 4.24808C7.93623 3.65434 7.06377 3.65434 6.66795 4.24807L5.5 6"
      stroke={fill}
      strokeLinecap="round"
    />
    <path d="M7.5 4L7.5 9" stroke={fill} strokeLinecap="round" />
    <path
      d="M3 10L3.5 12H11.5L12 10"
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MenuIconDummy = ({ width = 20, height = 20, fill = "#A2ADC1" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 3C3 2.44772 3.44772 2 4 2H16C16.5523 2 17 2.44772 17 3C17 3.55228 16.5523 4 16 4H4C3.44772 4 3 3.55228 3 3Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.08601 5C1.50097 5 1.04088 5.50003 1.08946 6.08305L1.92279 16.083C1.96599 16.6013 2.39925 17 2.91934 17H17.0791C17.5992 17 18.0324 16.6013 18.0756 16.083L18.909 6.08305C18.9575 5.50003 18.4974 5 17.9124 5H2.08601ZM6.99921 6.25C6.58499 6.25 6.24921 6.58579 6.24921 7C6.24921 7.41421 6.58499 7.75 6.99921 7.75H12.9992C13.4134 7.75 13.7492 7.41421 13.7492 7C13.7492 6.58579 13.4134 6.25 12.9992 6.25H6.99921Z"
      fill={fill}
    />
  </svg>
);
const BoxListArrowIcon = ({ width = 16, height = 16, fill = "#808DA8" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9.4375 4.5L13.5 9M13.5 9L9.4375 13.5M13.5 9H3.75"
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DeleteIcon = ({ width = 24, height = 25, fill = "#354165" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.3013 5.95763C10.3388 5.86185 10.4312 5.79883 10.534 5.79883H13.63C13.7329 5.79883 13.8253 5.86185 13.8628 5.95763L14.275 7.00977H9.88904L10.3013 5.95763ZM8.27803 7.00977L8.90463 5.41044C9.16732 4.73995 9.81392 4.29883 10.534 4.29883H13.63C14.3501 4.29883 14.9967 4.73995 15.2594 5.41044L15.886 7.00977H19.3304C19.7446 7.00977 20.0804 7.34555 20.0804 7.75977C20.0804 8.17398 19.7446 8.50977 19.3304 8.50977H18.6278L17.2774 19.5376C17.2159 20.0391 16.79 20.416 16.2848 20.416H8.00954C7.50826 20.416 7.08443 20.0449 7.01829 19.5479L5.54902 8.50977H4.83398C4.41977 8.50977 4.08398 8.17398 4.08398 7.75977C4.08398 7.34555 4.41977 7.00977 4.83398 7.00977H8.27803ZM7.10437 8.82617L8.4474 18.916H15.8423L17.0779 8.82617H7.10437ZM10.4094 16.6133C9.99521 16.6133 9.65943 16.2776 9.65943 15.8633V11.3112C9.65943 10.897 9.99521 10.5612 10.4094 10.5612C10.8236 10.5612 11.1594 10.897 11.1594 11.3112V15.8633C11.1594 16.2776 10.8236 16.6133 10.4094 16.6133ZM14.5048 11.3086C14.5048 10.8944 14.169 10.5586 13.7548 10.5586C13.3405 10.5586 13.0048 10.8944 13.0048 11.3086V15.8608C13.0048 16.275 13.3405 16.6108 13.7548 16.6108C14.169 16.6108 14.5048 16.275 14.5048 15.8608V11.3086Z"
      fill={fill}
    />
  </svg>
);

const EditIcon = ({ width = 30, height = 31, fill = "#354165" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 30 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.9368 4.49221C20.5462 4.10156 19.9129 4.10156 19.5224 4.49221L4.2928 19.726C4.10532 19.9135 4 20.1678 4 20.433V25.2033C4 25.7555 4.44772 26.2033 5 26.2033H9.76841C10.0337 26.2033 10.2881 26.0979 10.4756 25.9103L25.7055 10.6762C26.0959 10.2857 26.0959 9.6527 25.7055 9.2622L20.9368 4.49221ZM6 24.2033H9.35411L9.54232 24.015L6.18766 20.6594L6 20.8471V24.2033ZM7.60168 19.245L17.0081 9.83597L20.3628 13.1916L10.9563 22.6006L7.60168 19.245ZM23.5843 9.96921L21.7768 11.7771L18.4222 8.42156L20.2296 6.61363L23.5843 9.96921Z"
      fill={fill}
    />
  </svg>
);

const ReplyIcon = ({ width = 24, height = 25, fill = "#2E3646" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.66406 5.86719C7.21635 5.86719 7.66406 6.3149 7.66406 6.86719V11.5339C7.66406 11.9759 7.83966 12.3998 8.15222 12.7124C8.46478 13.0249 8.8887 13.2005 9.33073 13.2005H14.9165L13.2903 11.5743C12.8998 11.1838 12.8998 10.5506 13.2903 10.1601C13.6808 9.76956 14.314 9.76956 14.7045 10.1601L18.0378 13.4934C18.4284 13.8839 18.4284 14.5171 18.0378 14.9076L14.7045 18.241C14.314 18.6315 13.6808 18.6315 13.2903 18.241C12.8998 17.8504 12.8998 17.2173 13.2903 16.8267L14.9165 15.2005H9.33073C8.35827 15.2005 7.42564 14.8142 6.738 14.1266C6.05037 13.4389 5.66406 12.5063 5.66406 11.5339V6.86719C5.66406 6.3149 6.11178 5.86719 6.66406 5.86719Z"
      fill={fill}
    />
  </svg>
);

const ContextIcon = ({ width = 30, height = 30, fill = "#354165" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <ellipse
      cx="7"
      cy="15"
      rx="1"
      ry="1"
      transform="rotate(-90 7 15)"
      fill={fill}
      stroke={fill}
      strokeWidth="1.5"
    />
    <ellipse
      cx="15"
      cy="15"
      rx="1"
      ry="1"
      transform="rotate(-90 15 15)"
      fill={fill}
      stroke={fill}
      strokeWidth="1.5"
    />
    <ellipse
      cx="23"
      cy="15"
      rx="1"
      ry="1"
      transform="rotate(-90 23 15)"
      fill={fill}
      stroke={fill}
      strokeWidth="1.5"
    />
  </svg>
);

// default right angle icon
const AngleIcon = ({
  width = 16,
  height = 16,
  fill = "var(--pink400)",
  strokeWidth = 1.5,
  classname = "",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classname}>
    <path
      d="M6 12L10 8L6 4"
      stroke={fill}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DoubleAngleIcon = ({
  width = 16,
  height = 16,
  fill = "var(--pink400)",
  strokeWidth = 1.5,
  classname = "",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none">
    <path
      d="M10 15L14.2929 10.7071C14.6834 10.3166 14.6834 9.68342 14.2929 9.29289L10 5"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M5 15L9.29289 10.7071C9.68342 10.3166 9.68342 9.68342 9.29289 9.29289L5 5"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const TreeAngleIcon = ({
  width = 16,
  height = 16,
  fill = "#A2ADC1",
  classname = "",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classname}>
    <path
      d="M6 12L10 8L6 4L6 12Z"
      fill={fill}
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DataIcon = ({ width = 20, height = 20, fill = "#354165" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12.5858 2.58579C12.2107 2.21071 11.702 2 11.1716 2H5C3.89543 2 3 2.89543 3 4V16C3 17.1046 3.89543 18 5 18H15C16.1046 18 17 17.1046 17 16V7.82843C17 7.29799 16.7893 6.78929 16.4142 6.41421L12.5858 2.58579Z"
      fill={fill}
    />
    <path
      d="M11.5 6.5V3.5L15.5 7.5H12.5C11.9477 7.5 11.5 7.05228 11.5 6.5Z"
      fill="white"
    />
  </svg>
);

const TblLockIcon = ({ width = 20, height = 20, fill = "#A2ADC1" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.25 7C5.25 4.23355 7.39247 2.25 10 2.25C12.6075 2.25 14.75 4.23355 14.75 7C14.75 7.41421 14.4142 7.75 14 7.75C13.5858 7.75 13.25 7.41421 13.25 7C13.25 5.09327 11.8107 3.75 10 3.75C8.18925 3.75 6.75 5.09327 6.75 7C6.75 7.41421 6.41421 7.75 6 7.75C5.58579 7.75 5.25 7.41421 5.25 7Z"
      fill={fill}
    />
    <mask id="path-2-inside-1_333_23879" fill="white">
      <rect x="4" y="7" width="12" height="10" rx="1" />
    </mask>
    <rect
      x="4"
      y="7"
      width="12"
      height="10"
      rx="1"
      stroke={fill}
      strokeWidth="3"
      mask="url(#path-2-inside-1_333_23879)"
    />
  </svg>
);

const FolderIcon = ({ width = 20, height = 20, fill = "#354165" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2 5C2 3.89543 2.89543 3 4 3H8.58579C8.851 3 9.10536 3.10536 9.29289 3.29289L10.7071 4.70711C10.8946 4.89464 11.149 5 11.4142 5H16C17.1046 5 18 5.89543 18 7V15C18 16.1046 17.1046 17 16 17H4C2.89543 17 2 16.1046 2 15V5Z"
      fill={fill}
    />
  </svg>
);

const FloatingCommentIcon = ({ width = 24, height = 24, fill = "#fff" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <mask id="path-1-inside-1_355_114720" fill={fill}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.0652 2.16656 14.0916 2.47505 15.0544C2.51872 15.1907 2.53649 15.3341 2.52281 15.4766L2.02611 20.6496C1.96602 21.2754 2.49136 21.8007 3.11711 21.7406L7.95307 21.2763C8.11506 21.2607 8.27806 21.2858 8.43007 21.344C9.5388 21.7678 10.7423 22 12 22Z"
      />
    </mask>
    <path
      d="M7.95307 21.2763L7.76191 19.2854L7.95307 21.2763ZM8.43007 21.344L7.71591 23.2121L8.43007 21.344ZM3.11711 21.7406L2.92595 19.7498L3.11711 21.7406ZM2.47505 15.0544L4.37967 14.4441L2.47505 15.0544ZM20 12C20 16.4183 16.4183 20 12 20V24C18.6274 24 24 18.6274 24 12H20ZM12 4C16.4183 4 20 7.58172 20 12H24C24 5.37258 18.6274 0 12 0V4ZM4 12C4 7.58172 7.58172 4 12 4V0C5.37258 0 0 5.37258 0 12H4ZM4.37967 14.4441C4.13362 13.6762 4 12.8556 4 12H0C0 13.2748 0.19949 14.5069 0.570429 15.6646L4.37967 14.4441ZM4.01695 20.8408L4.51366 15.6678L0.53197 15.2854L0.0352615 20.4585L4.01695 20.8408ZM7.76191 19.2854L2.92595 19.7498L3.30827 23.7315L8.14423 23.2671L7.76191 19.2854ZM12 20C10.9902 20 10.0285 19.8139 9.14424 19.4758L7.71591 23.2121C9.04908 23.7218 10.4944 24 12 24V20ZM8.14423 23.2671C7.9742 23.2835 7.82793 23.2549 7.71591 23.2121L9.14424 19.4758C8.72819 19.3168 8.25593 19.238 7.76191 19.2854L8.14423 23.2671ZM0.0352615 20.4585C-0.144989 22.3357 1.43104 23.9117 3.30827 23.7315L2.92595 19.7498C3.55169 19.6897 4.07703 20.215 4.01695 20.8408L0.0352615 20.4585ZM0.570429 15.6646C0.538175 15.564 0.517621 15.4349 0.53197 15.2854L4.51366 15.6678C4.55536 15.2334 4.49926 14.8173 4.37967 14.4441L0.570429 15.6646Z"
      fill={fill}
      mask="url(#path-1-inside-1_355_114720)"
    />
    <path d="M9 10H15" stroke={fill} strokeWidth="2" strokeLinecap="round" />
    <path d="M9 14H12" stroke={fill} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const NoImg = ({
  width = 80,
  height = 80,
  fill = "#A2ADC1",
  icofill = "#C6CDDA",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 80 81"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    {/* g tag opacity="0.5" */}
    <g opacity="0.5">
      <path
        d="M40 0.199219C17.9452 0.199219 0 18.14 0 40.1992C0 62.2585 17.9452 80.1992 40 80.1992C62.0548 80.1992 80 62.254 80 40.1992C80 18.1444 62.0548 0.199219 40 0.199219ZM40 72.2842C22.3097 72.2842 7.91504 57.8895 7.91504 40.1947C7.91504 22.4999 22.3052 8.10978 40 8.10978C57.6948 8.10978 72.0894 22.5044 72.0894 40.1992C72.0894 57.894 57.6903 72.2887 40 72.2887V72.2842Z"
        fill={fill}
      />
      <path
        d="M57.5429 31.4179C51.7162 38.5146 47.8437 39.637 45.3082 39.637C44.0382 39.637 43.1081 39.2569 42.5357 38.926C42.2674 38.7695 42.0259 38.5772 41.8023 38.3626C41.5251 38.0898 41.2836 37.7812 41.1002 37.4458C40.7649 36.8332 40.4205 35.8852 40.4563 34.6107C40.5234 32.1021 41.695 28.2787 48.662 22.5504C50.2092 21.2893 51.0097 20.2206 50.9605 18.2172C50.9292 17.0188 50.3121 15.9277 49.3059 15.2211C48.5681 14.7248 47.705 14.4609 46.8152 14.4609C45.1651 14.4609 43.4703 15.3329 41.7755 17.0456C35.4747 23.3329 33.3059 29.656 35.4792 35.3709C35.5105 35.4514 35.4926 35.5453 35.43 35.6079C35.3674 35.6706 35.2735 35.6884 35.193 35.6571C33.7576 35.1071 32.2819 34.8254 30.7973 34.8254C26.3255 34.8254 21.5094 37.2804 16.8632 41.9266C13.0264 45.7589 14.3546 48.518 15.1013 49.5241C15.7676 50.4453 16.975 51.0311 18.2495 51.0177C20.3691 50.9953 21.2232 50.2485 22.3635 48.8533C28.1947 41.7522 32.2014 40.5001 34.728 40.5001C35.9309 40.5001 36.8342 40.8399 37.42 41.1619C37.7509 41.3452 38.055 41.5822 38.3188 41.855C38.5111 42.0518 38.681 42.2664 38.8241 42.4989C39.1908 43.0892 39.629 44.1043 39.5977 45.5174C39.5441 48.0261 38.2472 51.988 31.2534 57.7298C29.4065 59.2413 28.9951 60.3905 29.0086 61.8125C29.0175 63.0244 29.5631 64.1781 30.5334 64.9785C31.3294 65.6225 32.2059 65.9489 33.145 65.9489C34.7011 65.9489 36.3423 65.0635 38.1623 63.2435C44.4496 56.9428 46.6095 50.6063 44.4183 44.8958C44.387 44.8109 44.4049 44.717 44.4675 44.6543C44.5301 44.5917 44.624 44.5694 44.709 44.6052C46.1623 45.1641 47.6424 45.4458 49.1181 45.4458C53.648 45.4458 58.3344 43.0534 63.0566 38.3357C65.9096 35.4738 66.4775 33.068 64.8364 30.7695C64.1165 29.7455 62.9717 29.2178 61.7062 29.1552C59.8683 29.0702 58.7503 29.9646 57.5429 31.4268V31.4179Z"
        fill={icofill}
      />
    </g>
  </svg>
);

const NoData = ({ width = 160, height = 160 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 160 161"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.5">
      {/* <rect width="160" height="160" transform="translate(0 0.199219)" fill="white" /> */}
      <g opacity="0.8">
        <rect
          width="86"
          height="114"
          rx="2.27828"
          transform="matrix(-1 0 0 1 100 27.1992)"
          fill="#C0CFEB"
        />
        <g filter="url(#filter0_b_2853_167091)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M109.999 19.4162C110 19.4366 110 19.457 110 19.4775V128.921C110 130.179 108.98 131.199 107.722 131.199H26.2783C25.02 131.199 24 130.179 24 128.921V19.4775C24 18.2192 25.02 17.1992 26.2783 17.1992H107.722C107.744 17.1992 107.767 17.1995 107.789 17.2002L92 17.2002L109.999 35.1992V19.4162Z"
            fill="#F0F5FA"
          />
        </g>
        <path
          d="M103 119.199L92.9706 109.17M92.9706 109.17C97.3137 104.827 100 98.8266 100 92.1992C100 78.9444 89.2548 68.1992 76 68.1992C62.7452 68.1992 52 78.9444 52 92.1992C52 105.454 62.7452 116.199 76 116.199C82.6274 116.199 88.6274 113.513 92.9706 109.17Z"
          stroke="#C0CFEB"
          strokeWidth="6"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M119.024 140.878L99.6975 122.218C98.7698 121.322 98.7698 119.835 99.6975 118.94L103.025 115.727C103.908 114.875 105.307 114.875 106.19 115.727L125.632 134.499C127.456 136.26 127.456 139.116 125.632 140.878C123.807 142.64 120.849 142.64 119.024 140.878Z"
          fill="#9FB2D8"
        />
        <path
          d="M67 83.1992L85 101.199M85 83.1992L76 92.1992L67 101.199"
          stroke="#9FB2D8"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M52 33.1992H36"
          stroke="#C0CFEB"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M84 45.1992L36 45.1992"
          stroke="#C0CFEB"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M68 52.1992H36"
          stroke="#C0CFEB"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M36 59.1992H76"
          stroke="#C0CFEB"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M110 35.1982L92.0008 17.1992V32.92C92.0008 34.1782 93.0208 35.1982 94.2791 35.1982H110Z"
          fill="#C0CFEB"
        />
        <path
          d="M132 66.1992L125 73.1992"
          stroke="#C0CFEB"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M133 110.199L125 102.199"
          stroke="#C0CFEB"
          strokeWidth="4.55656"
          strokeLinecap="round"
        />
        <path
          d="M141 88.1992L129 88.1992"
          stroke="#C0CFEB"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </g>
    </g>
  </svg>
);

const FloatingGuideIcon = ({ width = 24, height = 24, fill = "#fff" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16 9.5L18 9.5"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M12 6.5V18.5"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path d="M16 13H18" stroke={fill} strokeWidth="2" strokeLinecap="round" />
    <path
      d="M7 17.32L7 16.32L7 17.32ZM12.6921 6.20675L12.1786 5.34863L12.6921 6.20675ZM21.4705 5.87115L21.8588 4.94961L21.4705 5.87115ZM11.3079 18.5268L11.8214 17.6686L11.3079 18.5268ZM12.6921 18.5268L12.1786 17.6686L12.6921 18.5268ZM11.8214 17.6686C10.8973 17.1157 9.19099 16.32 7 16.32L7 18.32C8.7087 18.32 10.0577 18.944 10.7945 19.3849L11.8214 17.6686ZM13.2055 19.3849C13.9423 18.944 15.2913 18.32 17 18.32V16.32C14.809 16.32 13.1027 17.1157 12.1786 17.6686L13.2055 19.3849ZM17 18.32C18.27 18.32 19.3441 18.539 20.1299 18.7736L20.7021 16.8572C19.7673 16.5781 18.4986 16.32 17 16.32V18.32ZM23 16.7341V6.70618H21V16.7341H23ZM21.8588 4.94961C20.9918 4.58433 19.2552 4 17 4V6C18.9149 6 20.3828 6.498 21.0823 6.7927L21.8588 4.94961ZM17 4C14.809 4 13.1027 4.79575 12.1786 5.34863L13.2055 7.06488C13.9423 6.62403 15.2913 6 17 6V4ZM7 6C8.7087 6 10.0577 6.62403 10.7945 7.06488L11.8214 5.34863C10.8973 4.79575 9.19099 4 7 4V6ZM2.91774 6.7927C3.61718 6.498 5.08506 6 7 6V4C4.74483 4 3.00816 4.58433 2.14119 4.94961L2.91774 6.7927ZM3 16.7341V6.70618H1V16.7341H3ZM7 16.32C5.50143 16.32 4.23267 16.5781 3.29785 16.8572L3.87012 18.7736C4.65586 18.539 5.73005 18.32 7 18.32L7 16.32ZM1 16.7341C1 17.5122 1.43591 18.1254 1.96435 18.4763C2.48805 18.824 3.18883 18.9771 3.87012 18.7736L3.29785 16.8572C3.24715 16.8724 3.15593 16.8667 3.07063 16.8101C3.03282 16.785 3.01313 16.7602 3.00511 16.7467C3.00141 16.7404 3.00039 16.737 3.00022 16.7364C3.00015 16.7362 3 16.7358 3 16.7341H1ZM12.1786 5.34863C12.0781 5.40879 11.9219 5.40879 11.8214 5.34863L10.7945 7.06488C11.5274 7.50338 12.4726 7.50338 13.2055 7.06488L12.1786 5.34863ZM23 6.70618C23 5.9912 22.6065 5.26463 21.8588 4.94961L21.0823 6.7927C21.0488 6.77859 21.024 6.75429 21.0109 6.73335C20.9994 6.71484 21 6.70447 21 6.70618H23ZM2.14119 4.94961C1.39353 5.26463 1 5.9912 1 6.70618H3C3 6.70447 3.00056 6.71484 2.98906 6.73335C2.97605 6.75429 2.95122 6.77859 2.91774 6.7927L2.14119 4.94961ZM20.1299 18.7736C20.8112 18.9771 21.512 18.824 22.0356 18.4763C22.5641 18.1254 23 17.5122 23 16.7341H21C21 16.7358 20.9999 16.7362 20.9998 16.7364C20.9996 16.737 20.9986 16.7404 20.9949 16.7467C20.9869 16.7602 20.9672 16.785 20.9294 16.8101C20.8441 16.8667 20.7529 16.8724 20.7021 16.8572L20.1299 18.7736ZM10.7945 19.3849C11.5274 19.8234 12.4726 19.8234 13.2055 19.3849L12.1786 17.6686C12.0781 17.7288 11.9219 17.7288 11.8214 17.6686L10.7945 19.3849Z"
      fill={fill}
    />
  </svg>
);

const MenuIcon = ({ width = 30, height = 30, fill = "#111111" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7.5 10H22.5M7.5 15H22.5M7.5 20H22.5"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const CameraIcon = ({ width = 18, height = 14, fill = "#808DA8" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 18 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.73587 0C6.27614 0 5.84682 0.229762 5.59181 0.612282L4.66806 1.9979H1C0.447715 1.9979 0 2.44561 0 2.9979V12.9978C0 13.5501 0.447716 13.9978 1 13.9978H17C17.5523 13.9978 18 13.5501 18 12.9978V2.9979C18 2.44561 17.5523 1.9979 17 1.9979H13.3319L12.4082 0.612282C12.1532 0.229762 11.7239 0 11.2641 0H6.73587ZM15 5C15 5.55228 14.5523 6 14 6C13.4477 6 13 5.55228 13 5C13 4.44772 13.4477 4 14 4C14.5523 4 15 4.44772 15 5ZM9 12C11.0711 12 12.75 10.3211 12.75 8.25C12.75 6.17893 11.0711 4.5 9 4.5C6.92893 4.5 5.25 6.17893 5.25 8.25C5.25 10.3211 6.92893 12 9 12Z"
      fill={fill}
    />
    <circle cx="9" cy="8.25" r="2.5" fill={fill} />
  </svg>
);

const ShowPasswordIcon = ({ width = 16, height = 16, fill = "#808DA8" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8 3C4.8337 3 2.75857 4.93437 1.68905 6.62053C1.15963 7.4552 1.22153 8.51647 1.7531 9.34977C3.50591 12.0976 5.66989 13 8 13C11.5593 13 13.3088 11.0148 14.2837 9.36838C14.7874 8.51789 14.8404 7.4552 14.3109 6.62053C13.2414 4.93437 11.1663 3 8 3Z"
      stroke={fill}
      strokeWidth="1.25"
    />
    <circle cx="8" cy="8" r="2.5" stroke={fill} />
  </svg>
);

const HidePasswordIcon = ({ width = 16, height = 16, fill = "#808DA8" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5.82759 12.6935C6.52949 12.9081 7.25628 13 8 13C11.5593 13 13.3088 11.0148 14.2837 9.36838C14.7874 8.51789 14.8401 7.45467 14.3106 6.62004C14.0148 6.15369 13.642 5.66837 13.1905 5.21025M3.80934 11.6552C3.0776 11.0991 2.38822 10.3455 1.75287 9.34941C1.22133 8.51608 1.15963 7.4552 1.68905 6.62053C2.75857 4.93437 4.8337 3 8 3C9.36807 3 10.5324 3.36112 11.5 3.90731"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="8" cy="8" r="2.5" stroke={fill} />
    <path d="M14 2L2 14" stroke={fill} strokeLinecap="round" />
  </svg>
);

const StarIcon = ({
  width = 20,
  height = 20,
  fill = "#fff",
  stroke = "#C6CDDA",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12.6326 6.37655L11.1542 2.82194C10.7272 1.79532 9.27284 1.79533 8.84585 2.82194L7.36741 6.37655L3.52991 6.6842C2.42159 6.77305 1.97219 8.15619 2.81661 8.87952L5.74037 11.384L4.84712 15.1288C4.58913 16.2103 5.7657 17.0651 6.71457 16.4856L10 14.4788L13.2854 16.4856C14.2343 17.0651 15.4109 16.2103 15.1529 15.1288L14.2596 11.384L17.1834 8.87952C18.0278 8.15618 17.5784 6.77305 16.4701 6.6842L12.6326 6.37655Z"
      stroke={stroke}
      strokeWidth="1.5"
    />
  </svg>
);

const Resend = ({ width = 15, height = 15, fill = "#40B4F7" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 15 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14.5 7C14.5 10.866 11.366 14 7.5 14C3.63401 14 0.5 10.866 0.5 7C0.5 3.13401 3.63401 0 7.5 0C11.366 0 14.5 3.13401 14.5 7Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.2477 7.13135C11.2382 7.40733 10.9768 7.59121 10.7045 7.54527L10.0938 7.44222C9.88652 7.40724 9.75 7.21022 9.75 7V7V7C9.75 6.78978 9.88652 6.59276 10.0938 6.55778L10.7045 6.45473C10.9768 6.40879 11.2382 6.59267 11.2477 6.86865C11.2492 6.91225 11.25 6.95604 11.25 7C11.25 7.04397 11.2492 7.08775 11.2477 7.13135ZM10.2428 4.44269C10.4311 4.64463 10.3762 4.95953 10.1511 5.11952L9.64573 5.47872C9.47467 5.60031 9.23939 5.5574 9.09099 5.40901V5.40901C8.9426 5.26061 8.89969 5.02533 9.02128 4.85427L9.38048 4.34892C9.54047 4.12384 9.85537 4.06887 10.0573 4.25723C10.1213 4.31688 10.1831 4.37874 10.2428 4.44269ZM7.63135 3.25226C7.90733 3.26176 8.09121 3.52317 8.04527 3.79546L7.94222 4.40619C7.90724 4.61348 7.71022 4.75 7.5 4.75V4.75V4.75C7.28978 4.75 7.09276 4.61348 7.05778 4.40619L6.95473 3.79546C6.90879 3.52317 7.09267 3.26176 7.36865 3.25226C7.41225 3.25076 7.45604 3.25 7.5 3.25C7.54397 3.25 7.58775 3.25076 7.63135 3.25226ZM4.94269 4.25723C5.14463 4.06887 5.45953 4.12384 5.61952 4.34892L5.97872 4.85427C6.10031 5.02533 6.0574 5.26061 5.90901 5.40901V5.40901C5.76061 5.5574 5.52533 5.60031 5.35427 5.47872L4.84892 5.11952C4.62384 4.95953 4.56887 4.64463 4.75723 4.44269C4.81688 4.37874 4.87874 4.31688 4.94269 4.25723ZM4.29546 6.45473C4.02317 6.40879 3.76176 6.59267 3.75226 6.86865C3.75076 6.91225 3.75 6.95603 3.75 7C3.75 7.04396 3.75076 7.08775 3.75226 7.13135C3.76176 7.40733 4.02317 7.59121 4.29546 7.54527L4.90619 7.44222C5.11348 7.40724 5.25 7.21022 5.25 7V7V7C5.25 6.78978 5.11348 6.59276 4.90619 6.55778L4.29546 6.45473ZM4.75723 9.55731C4.56887 9.35537 4.62384 9.04047 4.84892 8.88048L5.35427 8.52128C5.52533 8.39969 5.76061 8.4426 5.90901 8.59099V8.59099C6.0574 8.73939 6.10031 8.97467 5.97872 9.14573L5.61952 9.65108C5.45953 9.87616 5.14463 9.93113 4.94269 9.74277C4.87874 9.68312 4.81688 9.62126 4.75723 9.55731ZM7.36865 10.7477C7.09267 10.7382 6.90879 10.4768 6.95473 10.2045L7.05778 9.59381C7.09276 9.38652 7.28978 9.25 7.5 9.25V9.25V9.25C7.71022 9.25 7.90724 9.38652 7.94222 9.59381L8.04527 10.2045C8.09121 10.4768 7.90733 10.7382 7.63135 10.7477C7.58775 10.7492 7.54396 10.75 7.5 10.75C7.45603 10.75 7.41225 10.7492 7.36865 10.7477ZM10.0573 9.74277C9.85537 9.93113 9.54047 9.87616 9.38048 9.65108L9.02128 9.14573C8.89969 8.97467 8.9426 8.73939 9.09099 8.59099V8.59099C9.23939 8.4426 9.47467 8.39969 9.64573 8.52128L10.1511 8.88048C10.3762 9.04047 10.4311 9.35537 10.2428 9.55731C10.1831 9.62126 10.1213 9.68312 10.0573 9.74277Z"
      fill="white"
    />
  </svg>
);

const Change = ({ width = 15, height = 15, fill = "#33B979" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 15 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.5 7C14.5 10.866 11.366 14 7.5 14C3.63401 14 0.5 10.866 0.5 7C0.5 3.13401 3.63401 0 7.5 0C11.366 0 14.5 3.13401 14.5 7ZM7.96114 9.55005C6.70943 9.7488 5.67153 8.99507 5.51962 8.02678C5.48121 7.78192 5.30178 7.58317 5.06225 7.52014C4.82272 7.45712 4.56836 7.54174 4.41386 7.73584L3.64132 8.70643C3.42616 8.97675 3.47045 9.37002 3.74023 9.58483C4.01002 9.79964 4.40315 9.75464 4.61831 9.48432L4.71836 9.35863C5.41287 10.4298 6.7792 11.0034 8.15487 10.7849C10.0144 10.4897 10.8362 9.0256 11.0378 8.10742C11.1119 7.77007 10.8988 7.43697 10.5617 7.36344C10.2247 7.28991 9.89143 7.50377 9.81734 7.84113C9.68823 8.42904 9.15715 9.36014 7.96114 9.55005ZM9.48272 5.97057C9.33088 5.00271 8.29538 4.25052 7.04835 4.44852C5.85665 4.63774 5.32718 5.56688 5.19846 6.15445C5.12455 6.49184 4.79138 6.70588 4.45431 6.63252C4.11724 6.55916 3.9039 6.22618 3.97782 5.88879C4.1787 4.97179 4.99829 3.50838 6.85462 3.21363C8.22733 2.99567 9.59003 3.56881 10.2836 4.63794L10.3816 4.51452C10.5966 4.24404 10.9897 4.19874 11.2596 4.41334C11.5296 4.62794 11.5742 5.02118 11.3592 5.29166L10.5888 6.26113C10.4344 6.45542 10.18 6.54021 9.94032 6.47726C9.70068 6.41431 9.52114 6.21551 9.48272 5.97057Z"
      fill={fill}
    />
  </svg>
);

const Cancel = ({ width = 15, height = 15, fill = "#FFC453" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 15 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.5 14C11.366 14 14.5 10.866 14.5 7C14.5 3.13401 11.366 0 7.5 0C3.63401 0 0.5 3.13401 0.5 7C0.5 10.866 3.63401 14 7.5 14ZM4.5303 6.375C4.23742 6.375 4 6.65482 4 7C4 7.34518 4.23742 7.625 4.5303 7.625H10.4697C10.7626 7.625 11 7.34518 11 7C11 6.65482 10.7626 6.375 10.4697 6.375H4.5303Z"
      fill={fill}
    />
  </svg>
);

const Copying = ({ width = 15, height = 15, fill = "#A969DB" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 15 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.5 14C11.366 14 14.5 10.866 14.5 7C14.5 3.13401 11.366 0 7.5 0C3.63401 0 0.5 3.13401 0.5 7C0.5 10.866 3.63401 14 7.5 14ZM7.1875 4.1875H9.8125L9.8125 7.9375H8.875H7.9375H7.1875L7.1875 4.1875ZM9.8125 8.875H8.875V9.8125C8.875 10.3303 8.45527 10.75 7.9375 10.75H5.3125C4.79473 10.75 4.375 10.3303 4.375 9.8125V6.0625C4.375 5.54473 4.79473 5.125 5.3125 5.125H6.25V4.1875C6.25 3.66973 6.66973 3.25 7.1875 3.25H9.8125C10.3303 3.25 10.75 3.66973 10.75 4.1875V7.9375C10.75 8.45527 10.3303 8.875 9.8125 8.875ZM7.9375 9.8125L7.9375 8.875H7.1875C6.66973 8.875 6.25 8.45527 6.25 7.9375V6.0625H5.3125L5.3125 9.8125H7.9375Z"
      fill={fill}
    />
  </svg>
);

const Approval = ({ width = 15, height = 15, fill = "#3B79F2" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 15 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7.5 0C6.11553 0 4.76215 0.410543 3.61101 1.17971C2.45987 1.94888 1.56266 3.04213 1.03285 4.32122C0.503033 5.6003 0.36441 7.00776 0.634506 8.36563C0.904603 9.7235 1.57129 10.9708 2.55026 11.9497C3.52922 12.9287 4.7765 13.5954 6.13437 13.8655C7.49224 14.1356 8.8997 13.997 10.1788 13.4672C11.4579 12.9373 12.5511 12.0401 13.3203 10.889C14.0895 9.73784 14.5 8.38447 14.5 7C14.498 5.14409 13.7599 3.36475 12.4476 2.05242C11.1353 0.740087 9.35592 0.00195988 7.5 0ZM10.5733 5.76558L6.80404 9.53481C6.75403 9.58487 6.69465 9.62459 6.62928 9.65168C6.56391 9.67878 6.49384 9.69273 6.42308 9.69273C6.35232 9.69273 6.28225 9.67878 6.21688 9.65168C6.15151 9.62459 6.09213 9.58487 6.04212 9.53481L4.42673 7.91942C4.3257 7.81838 4.26893 7.68135 4.26893 7.53846C4.26893 7.39557 4.3257 7.25854 4.42673 7.1575C4.52777 7.05646 4.66481 6.9997 4.80769 6.9997C4.95058 6.9997 5.08762 7.05646 5.18866 7.1575L6.42308 8.39259L9.81135 5.00365C9.86138 4.95362 9.92077 4.91394 9.98613 4.88686C10.0515 4.85979 10.1216 4.84585 10.1923 4.84585C10.2631 4.84585 10.3331 4.85979 10.3985 4.88686C10.4638 4.91394 10.5232 4.95362 10.5733 5.00365C10.6233 5.05368 10.663 5.11307 10.6901 5.17844C10.7171 5.24381 10.7311 5.31386 10.7311 5.38461C10.7311 5.45537 10.7171 5.52542 10.6901 5.59079C10.663 5.65615 10.6233 5.71555 10.5733 5.76558Z"
      fill={fill}
    />
  </svg>
);

const Deny = ({ width = 16, height = 16, fill = "#FC773E" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 15 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.5 14C11.366 14 14.5 10.866 14.5 7C14.5 3.13401 11.366 0 7.5 0C3.63401 0 0.5 3.13401 0.5 7C0.5 10.866 3.63401 14 7.5 14ZM4.55806 4.05806C4.80214 3.81398 5.19786 3.81398 5.44194 4.05806L7.5 6.11612L9.55806 4.05806C9.80214 3.81398 10.1979 3.81398 10.4419 4.05806C10.686 4.30214 10.686 4.69786 10.4419 4.94194L8.38388 7L10.4419 9.05806C10.686 9.30214 10.686 9.69786 10.4419 9.94194C10.1979 10.186 9.80214 10.186 9.55806 9.94194L7.5 7.88388L5.44194 9.94194C5.19786 10.186 4.80214 10.186 4.55806 9.94194C4.31398 9.69786 4.31398 9.30214 4.55806 9.05806L6.61612 7L4.55806 4.94194C4.31398 4.69786 4.31398 4.30214 4.55806 4.05806Z"
      fill={fill}
    />
  </svg>
);

const Error = ({ width = 15, height = 15, fill = "#F03863" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 15 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.5 0.125C3.70313 0.125 0.625 3.20313 0.625 7C0.625 10.7969 3.70313 13.875 7.5 13.875C11.2969 13.875 14.375 10.7969 14.375 7C14.375 3.20313 11.2969 0.125 7.5 0.125ZM8.125 3.875C8.125 3.70924 8.05915 3.55027 7.94194 3.43306C7.82473 3.31585 7.66576 3.25 7.5 3.25C7.33424 3.25 7.17527 3.31585 7.05806 3.43306C6.94085 3.55027 6.875 3.70924 6.875 3.875V7.625C6.875 7.79076 6.94085 7.94973 7.05806 8.06694C7.17527 8.18415 7.33424 8.25 7.5 8.25C7.66576 8.25 7.82473 8.18415 7.94194 8.06694C8.05915 7.94973 8.125 7.79076 8.125 7.625V3.875ZM8.125 9.8125C8.125 9.64674 8.05915 9.48777 7.94194 9.37056C7.82473 9.25335 7.66576 9.1875 7.5 9.1875C7.33424 9.1875 7.17527 9.25335 7.05806 9.37056C6.94085 9.48777 6.875 9.64674 6.875 9.8125V10.125C6.875 10.2908 6.94085 10.4497 7.05806 10.5669C7.17527 10.6842 7.33424 10.75 7.5 10.75C7.66576 10.75 7.82473 10.6842 7.94194 10.5669C8.05915 10.4497 8.125 10.2908 8.125 10.125V9.8125Z"
      fill={fill}
    />
  </svg>
);

const Waiting = ({ width = 15, height = 15, fill = "#697F98" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 15 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14.5 7C14.5 10.866 11.366 14 7.5 14C3.63401 14 0.5 10.866 0.5 7C0.5 3.13401 3.63401 0 7.5 0C11.366 0 14.5 3.13401 14.5 7Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.31402 7.10501C8.25431 7.04972 8.25426 6.95028 8.31397 6.89499V6.89499L9.6399 5.66716C10.4741 4.89469 9.92751 3.5 8.7906 3.5H6.13875C5.00182 3.5 4.45525 4.89469 5.28944 5.66716L6.61537 6.89499V6.89499C6.67508 6.95028 6.67513 7.04972 6.61542 7.10501V7.10501L5.28949 8.33284C4.4553 9.10531 5.00188 10.5 6.1388 10.5H8.79065C9.92757 10.5 10.4741 9.10531 9.63995 8.33284L8.31402 7.10501V7.10501ZM7.63453 6.16126C7.53868 6.25001 7.39066 6.25001 7.29481 6.16126L5.96889 4.93343C5.80205 4.77894 5.91136 4.5 6.13875 4.5L8.7906 4.5C9.01798 4.5 9.12729 4.77894 8.96046 4.93343L7.63453 6.16126ZM7.29486 7.83874C7.39071 7.74999 7.53873 7.74999 7.63458 7.83874L8.96051 9.06657C9.12735 9.22106 9.01803 9.5 8.79065 9.5H6.1388C5.91141 9.5 5.8021 9.22106 5.96894 9.06657L7.29486 7.83874Z"
      fill="white"
    />
  </svg>
);

const OnHold = ({ width = 15, height = 15, fill = "#98B9CB" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 15 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14.5 7C14.5 10.866 11.366 14 7.5 14C3.63401 14 0.5 10.866 0.5 7C0.5 3.13401 3.63401 0 7.5 0C11.366 0 14.5 3.13401 14.5 7Z"
      fill={fill}
    />
    <circle cx="4.5" cy="7" r="1" fill="white" />
    <circle cx="7.5" cy="7" r="1" fill="white" />
    <circle cx="10.5" cy="7" r="1" fill="white" />
  </svg>
);

// 파마미터 아이콘
const ParameterIcon = ({ width = 20, height = 20, fill = "#fff" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9.18937 13.5357C8.8842 12.5029 7.95913 11.75 6.85286 11.75C5.74659 11.75 4.82153 12.5125 4.51635 13.5357H3.71429C3.3198 13.5357 3 13.8555 3 14.25C3 14.6445 3.3198 14.9643 3.71429 14.9643H4.51635C4.82153 15.9971 5.74659 16.75 6.85286 16.75C7.95913 16.75 8.8842 15.9875 9.18937 14.9643H16.2857C16.6802 14.9643 17 14.6445 17 14.25C17 13.8555 16.6802 13.5357 16.2857 13.5357H9.18937ZM6.85286 15.3214C6.27112 15.3214 5.80381 14.8388 5.80381 14.25C5.80381 13.6612 6.27112 13.1786 6.85286 13.1786C7.4346 13.1786 7.90191 13.6612 7.90191 14.25C7.90191 14.8388 7.4346 15.3214 6.85286 15.3214Z"
      fill={fill}
    />
    <path
      d="M4.49932 5.03571H3.71429C3.3198 5.03571 3 5.35551 3 5.75C3 6.14449 3.3198 6.46429 3.71429 6.46429H4.49932C4.80491 7.4971 5.72169 8.25 6.81037 8.25C7.89904 8.25 8.82537 7.48745 9.12142 6.46429H16.3243C16.6975 6.46429 17 6.16178 17 5.78861C17 5.41544 16.6975 5.11293 16.3243 5.11293H9.25512C8.82538 4.0029 7.90859 3.25 6.81037 3.25C5.71214 3.25 4.80491 4.01255 4.49932 5.03571ZM5.77899 5.75C5.77899 5.15154 6.23738 4.67857 6.81992 4.67857C7.40246 4.67857 7.86085 5.1612 7.86085 5.75C7.86085 6.3388 7.40246 6.82143 6.81992 6.82143C6.23738 6.82143 5.77899 6.3388 5.77899 5.75Z"
      fill={fill}
    />
    <path
      d="M15.5007 9.28571H16.2857C16.6802 9.28571 17 9.60551 17 10C17 10.3945 16.6802 10.7143 16.2857 10.7143H15.5007C15.1951 11.7471 14.2783 12.5 13.1896 12.5C12.101 12.5 11.1746 11.7375 10.8786 10.7143H3.67568C3.30251 10.7143 3 10.4118 3 10.0386C3 9.66544 3.30251 9.36293 3.67568 9.36293H10.7449C11.1746 8.2529 12.0914 7.5 13.1896 7.5C14.2879 7.5 15.1951 8.26255 15.5007 9.28571ZM14.221 10C14.221 9.40154 13.7626 8.92857 13.1801 8.92857C12.5975 8.92857 12.1392 9.4112 12.1392 10C12.1392 10.5888 12.5975 11.0714 13.1801 11.0714C13.7626 11.0714 14.221 10.5888 14.221 10Z"
      fill={fill}
    />
  </svg>
);

//책 아이콘
const BookIcon = ({ width = 20, height = 20, fill = "var(--pink400)" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15.4996 3.10156H5.99961C5.36961 3.10156 4.84961 3.62156 4.84961 4.25156V6.10156H3.99961C3.63961 6.10156 3.34961 6.39156 3.34961 6.75156C3.34961 7.11156 3.63961 7.40156 3.99961 7.40156H4.84961V9.35156H3.99961C3.63961 9.35156 3.34961 9.64156 3.34961 10.0016C3.34961 10.3616 3.63961 10.6516 3.99961 10.6516H4.84961V12.6016H3.99961C3.63961 12.6016 3.34961 12.8916 3.34961 13.2516C3.34961 13.6116 3.63961 13.9016 3.99961 13.9016H4.84961V15.7516C4.84961 16.3816 5.36961 16.9016 5.99961 16.9016H15.4996C16.1296 16.9016 16.6496 16.3816 16.6496 15.7516V4.25156C16.6496 3.62156 16.1296 3.10156 15.4996 3.10156ZM15.3496 15.6016H6.14961V13.9016H6.74961C7.10961 13.9016 7.39961 13.6116 7.39961 13.2516C7.39961 12.8916 7.10961 12.6016 6.74961 12.6016H6.14961V10.6516H6.74961C7.10961 10.6516 7.39961 10.3616 7.39961 10.0016C7.39961 9.64156 7.10961 9.35156 6.74961 9.35156H6.14961V7.40156H6.74961C7.10961 7.40156 7.39961 7.11156 7.39961 6.75156C7.39961 6.39156 7.10961 6.10156 6.74961 6.10156H6.14961V4.40156H15.3496V15.6016Z"
      fill={fill}
    />
    <path
      d="M8.99961 7.40156H12.9996C13.3596 7.40156 13.6496 7.11156 13.6496 6.75156C13.6496 6.39156 13.3596 6.10156 12.9996 6.10156H8.99961C8.63961 6.10156 8.34961 6.39156 8.34961 6.75156C8.34961 7.11156 8.63961 7.40156 8.99961 7.40156Z"
      fill={fill}
    />
  </svg>
);
//UpdateIcon 아이콘
const UpdateIcon = ({
  width = 16,
  height = 16,
  fill = "var(---magenta800)",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4.836 9.404H6.648C6.75409 9.404 6.85583 9.44614 6.93084 9.52116C7.00586 9.59617 7.048 9.69791 7.048 9.804C7.048 9.91009 7.00586 10.0118 6.93084 10.0868C6.85583 10.1619 6.75409 10.204 6.648 10.204H5.688C6.12922 10.6651 6.69824 10.9837 7.32193 11.119C7.94563 11.2542 8.59552 11.1998 9.18809 10.9629C9.78066 10.726 10.2889 10.3172 10.6474 9.78927C11.0059 9.2613 11.1983 8.63819 11.2 8C11.2 7.89391 11.2421 7.79217 11.3172 7.71716C11.3922 7.64214 11.4939 7.6 11.6 7.6C11.7061 7.6 11.8078 7.64214 11.8828 7.71716C11.9579 7.79217 12 7.89391 12 8C11.9979 8.78112 11.7671 9.54453 11.3362 10.196C10.9052 10.8475 10.2929 11.3585 9.5749 11.6661C8.85687 11.9736 8.06451 12.0642 7.29559 11.9267C6.52668 11.7891 5.81487 11.4294 5.248 10.892V11.6C5.248 11.7061 5.20586 11.8078 5.13084 11.8828C5.05583 11.9579 4.95409 12 4.848 12C4.74191 12 4.64017 11.9579 4.56516 11.8828C4.49014 11.8078 4.448 11.7061 4.448 11.6V9.8C4.44899 9.69665 4.48994 9.5977 4.56227 9.52388C4.6346 9.45006 4.7327 9.4071 4.836 9.404ZM8 4C9.02545 4.00292 10.0106 4.39957 10.752 5.108V4.4C10.752 4.29391 10.7941 4.19217 10.8692 4.11716C10.9442 4.04214 11.0459 4 11.152 4C11.2581 4 11.3598 4.04214 11.4348 4.11716C11.5099 4.19217 11.552 4.29391 11.552 4.4V6.2C11.552 6.30609 11.5099 6.40783 11.4348 6.48284C11.3598 6.55786 11.2581 6.6 11.152 6.6H9.352C9.24591 6.6 9.14417 6.55786 9.06916 6.48284C8.99414 6.40783 8.952 6.30609 8.952 6.2C8.952 6.09391 8.99414 5.99217 9.06916 5.91716C9.14417 5.84214 9.24591 5.8 9.352 5.8H10.312C9.87101 5.33915 9.30236 5.0206 8.67904 4.88524C8.05572 4.74989 7.40616 4.8039 6.81376 5.04035C6.22135 5.27679 5.71312 5.68488 5.35431 6.21224C4.99549 6.7396 4.80246 7.36215 4.8 8C4.8 8.10609 4.75786 8.20783 4.68284 8.28284C4.60783 8.35786 4.50609 8.4 4.4 8.4C4.29391 8.4 4.19217 8.35786 4.11716 8.28284C4.04214 8.20783 4 8.10609 4 8C4 7.47471 4.10346 6.95457 4.30448 6.46927C4.5055 5.98396 4.80014 5.54301 5.17157 5.17157C5.54301 4.80014 5.98396 4.5055 6.46927 4.30448C6.95457 4.10346 7.47471 4 8 4Z"
      fill={fill}
    />
  </svg>
);
const FilterIcon = ({ width = 20, height = 20, fill = "var(--pink400)" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none">
    <path
      d="M4.72895 3.125C3.30284 3.125 2.58865 4.91994 3.59705 5.96971L7.5989 10.1357L7.5989 13.5399C7.5989 14.0645 7.83612 14.5584 8.23919 14.8731L10.4802 16.6228C11.2717 17.2407 12.4011 16.6528 12.4011 15.6229L12.4011 10.1357L16.4029 5.96971C17.4114 4.91994 16.6972 3.125 15.2711 3.125L4.72895 3.125Z"
      fill={fill}
    />
  </svg>
);
//다운로드 아이콘
// const DownloadIcon = ({ width = 14, height = 12, fill = '#A2ADC1' }) => (
//   <svg width={width} height={height} viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M4 4L7 8L10 4" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//     <path d="M7 7L7 1" stroke={fill} strokeWidth="1.5" strokeLinecap="round" />
//     <path d="M1 9L1.66667 11H12.3333L13 9" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// )

// 드래그 아이콘
const DragIcon = ({ width = 20, height = 20, fill = "#354165" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <ellipse
      cx="6.8"
      cy="4.78261"
      rx="0.8"
      ry="0.782609"
      fill={fill}
      stroke={fill}
      strokeWidth="1.5"
    />
    <ellipse
      cx="13.2004"
      cy="4.78261"
      rx="0.8"
      ry="0.782609"
      fill={fill}
      stroke={fill}
      strokeWidth="1.5"
    />
    <ellipse
      cx="6.8"
      cy="9.99941"
      rx="0.8"
      ry="0.782609"
      fill={fill}
      stroke={fill}
      strokeWidth="1.5"
    />
    <ellipse
      cx="13.2004"
      cy="9.99941"
      rx="0.8"
      ry="0.782609"
      fill={fill}
      stroke={fill}
      strokeWidth="1.5"
    />
    <ellipse
      cx="6.8"
      cy="15.2182"
      rx="0.8"
      ry="0.782609"
      fill={fill}
      stroke={fill}
      strokeWidth="1.5"
    />
    <path
      d="M14.0004 15.2182C14.0004 15.6504 13.6422 16.0008 13.2004 16.0008C12.7586 16.0008 12.4004 15.6504 12.4004 15.2182C12.4004 14.7859 12.7586 14.4355 13.2004 14.4355C13.6422 14.4355 14.0004 14.7859 14.0004 15.2182Z"
      fill={fill}
      stroke={fill}
      strokeWidth="1.5"
    />
  </svg>
);

// 히스토리 아이콘
const HistoryIcon = ({ width = 20, height = 20, fill = "var(--pink400)" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10 3C13.866 3 17 6.134 17 10C17 13.866 13.866 17 10 17C6.36992 17 3.38522 14.2368 3.03447 10.699C2.99632 10.3143 3.3134 10 3.7 10C4.0866 10 4.39541 10.315 4.44315 10.6986C4.787 13.4617 7.14379 15.6 10 15.6C13.0928 15.6 15.6 13.0928 15.6 10C15.6 6.9072 13.0928 4.4 10 4.4C8.07515 4.4 6.37713 5.37114 5.36916 6.85017L6.49997 6.85006C6.88657 6.85003 7.2 7.16343 7.2 7.55003C7.2 7.93661 6.88661 8.25 6.50003 8.25H3.5C3.22386 8.25 3 8.02614 3 7.75V4.74998C3 4.36339 3.31339 4.05 3.69998 4.05C4.08659 4.05 4.39999 4.36341 4.39997 4.75002L4.39992 5.79943C5.67704 4.09952 7.71011 3 10 3ZM10.7 6.5L10.6999 9.7095L12.9698 11.9799L11.9799 12.9698L9.29986 10.2891L9.3 6.5H10.7Z"
      fill={fill}
    />
  </svg>
);

const Error404 = () => (
  <svg
    width="570"
    height="346"
    viewBox="0 0 570 346"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_286_123997)">
      <path
        d="M59.6645 345.001H537.273C540.903 341.936 544.299 338.639 547.414 335.079C576.155 302.232 577.403 251.86 551.518 216.975C542.048 204.212 530.035 193.902 519.242 181.601C494.071 152.913 501.224 110.574 485.189 77.4896C469.991 46.136 442.82 20.3871 410.09 8.04704C361.584 -10.2402 299.346 4.37929 258.656 34.3884C224.985 59.2204 199.26 84.006 155.716 86.968C100.86 90.7001 53.1849 106.607 21.2229 156.166C3.85465 183.097 -2.6507 215.901 0.964247 247.52C6.07725 292.256 28.61 323.514 59.6645 345.001Z"
        fill="#F2F2FF"
      />
    </g>
    <g clipPath="url(#clip1_286_123997)">
      <path
        d="M407.882 171.663C408.94 167.71 410.115 164.604 411.408 162.344C412.734 160.093 414.217 158.408 415.856 157.291C417.503 156.14 419.572 155.174 422.061 154.393C425.081 153.393 427.452 152.309 429.177 151.142C430.935 149.985 432.102 148.397 432.678 146.379C433.223 144.208 432.933 142.247 431.809 140.497C430.684 138.747 429.024 137.578 426.829 136.989C425.342 136.59 423.872 136.54 422.416 136.837C420.995 137.144 419.728 137.818 418.617 138.86C417.514 139.867 416.725 141.194 416.248 142.841L400.136 138.519C401.479 133.774 403.665 130.07 406.695 127.406C409.758 124.752 413.322 123.137 417.386 122.562C421.492 121.962 425.843 122.278 430.436 123.51C435.368 124.833 439.534 126.783 442.935 129.361C446.336 131.939 448.715 135.021 450.072 138.607C451.429 142.194 451.547 146.081 450.425 150.27C449.307 154.315 447.388 157.494 444.669 159.806C441.993 162.093 438.538 163.846 434.302 165.063C430.988 165.948 428.453 167.169 426.697 168.726C424.95 170.249 423.643 172.56 422.777 175.658L422.398 177.077L407.502 173.082L407.882 171.663ZM402.286 186.89C402.686 185.259 403.477 183.86 404.658 182.692C405.873 181.534 407.282 180.735 408.884 180.296C410.519 179.865 412.165 179.872 413.82 180.316C415.407 180.742 416.802 181.55 418.003 182.742C419.205 183.933 420.043 185.335 420.516 186.946C421.024 188.567 421.061 190.188 420.627 191.809C420.184 193.465 419.333 194.884 418.075 196.067C416.851 197.26 415.416 198.088 413.772 198.552C412.136 198.982 410.524 198.984 408.937 198.558C407.282 198.115 405.853 197.297 404.652 196.106C403.493 194.89 402.681 193.459 402.217 191.813C401.786 190.177 401.809 188.536 402.286 186.89Z"
        fill="#C6C5FE"
      />
      <path
        opacity="0.5"
        d="M132.482 257.915C130.69 255.777 129.416 253.904 128.66 252.297C127.923 250.674 127.562 249.187 127.579 247.833C127.581 246.462 127.85 244.928 128.388 243.23C129.009 241.151 129.332 239.401 129.354 237.981C129.395 236.545 128.966 235.271 128.065 234.16C127.066 233.005 125.859 232.4 124.443 232.344C123.027 232.288 121.726 232.758 120.539 233.755C119.736 234.43 119.132 235.232 118.73 236.162C118.345 237.077 118.226 238.049 118.373 239.078C118.505 240.088 118.937 241.049 119.669 241.96L110.96 249.275C108.837 246.668 107.624 243.996 107.322 241.26C107.039 238.509 107.53 235.885 108.798 233.388C110.068 230.858 111.944 228.55 114.427 226.464C117.093 224.225 119.81 222.659 122.577 221.767C125.345 220.874 127.995 220.75 130.526 221.395C133.058 222.04 135.274 223.496 137.173 225.761C138.993 227.97 140.016 230.286 140.244 232.711C140.475 235.101 140.102 237.719 139.126 240.563C138.324 242.762 138.015 244.657 138.197 246.248C138.364 247.82 139.143 249.455 140.534 251.151L141.177 251.919L133.126 258.682L132.482 257.915ZM138.792 267.001C138.038 266.139 137.567 265.15 137.377 264.033C137.205 262.9 137.31 261.8 137.691 260.733C138.09 259.65 138.737 258.733 139.632 257.981C140.49 257.26 141.486 256.797 142.621 256.592C143.755 256.386 144.864 256.466 145.949 256.832C147.052 257.183 147.971 257.796 148.706 258.674C149.456 259.569 149.916 260.6 150.085 261.766C150.271 262.917 150.173 264.043 149.789 265.144C149.39 266.227 148.761 267.128 147.903 267.849C147.008 268.601 145.994 269.079 144.859 269.285C143.728 269.457 142.612 269.351 141.513 268.966C140.431 268.567 139.524 267.912 138.792 267.001Z"
        fill="#C6C5FE"
      />
      <path
        opacity="0.5"
        d="M433.966 216.517C435.565 214.23 437.041 212.513 438.395 211.366C439.77 210.232 441.112 209.499 442.422 209.164C443.745 208.81 445.295 208.674 447.072 208.754C449.239 208.816 451.011 208.674 452.388 208.328C453.783 207.996 454.901 207.25 455.74 206.091C456.595 204.827 456.866 203.503 456.553 202.119C456.24 200.736 455.448 199.599 454.179 198.71C453.32 198.108 452.389 197.733 451.387 197.584C450.405 197.45 449.437 197.587 448.482 197.995C447.541 198.384 446.727 199.05 446.038 199.994L436.722 193.47C438.687 190.741 440.95 188.877 443.511 187.876C446.092 186.889 448.751 186.684 451.489 187.263C454.26 187.835 456.973 189.052 459.629 190.912C462.48 192.909 464.695 195.13 466.274 197.575C467.853 200.02 468.659 202.549 468.693 205.164C468.727 207.779 467.898 210.298 466.204 212.722C464.545 215.053 462.576 216.643 460.296 217.492C458.049 218.334 455.427 218.652 452.43 218.445C450.1 218.24 448.192 218.431 446.704 219.02C445.23 219.588 443.855 220.765 442.579 222.549L442.005 223.37L433.393 217.338L433.966 216.517ZM426.835 224.972C427.472 224.02 428.304 223.307 429.333 222.834C430.381 222.375 431.469 222.191 432.598 222.283C433.746 222.389 434.799 222.776 435.756 223.447C436.674 224.09 437.379 224.933 437.871 225.977C438.364 227.02 438.574 228.114 438.502 229.257C438.45 230.414 438.096 231.461 437.44 232.399C436.771 233.357 435.896 234.068 434.814 234.534C433.752 235.013 432.64 235.209 431.479 235.123C430.33 235.018 429.297 234.643 428.38 234C427.423 233.33 426.698 232.473 426.205 231.43C425.746 230.38 425.559 229.274 425.645 228.111C425.75 226.962 426.147 225.916 426.835 224.972Z"
        fill="#C6C5FE"
      />
      <path
        d="M295.505 232.422L287.97 340.447L287.886 341.68H245.077C241.168 341.68 238.18 338.204 238.744 334.333L254.014 232.422H295.505Z"
        fill="#0028E1"
      />
      <path
        d="M296.281 232.422L288.745 340.447H247.297C243.388 340.447 240.398 336.957 240.979 333.086L256.052 232.424H296.283L296.281 232.422Z"
        fill="#9D9FFE"
      />
      <path
        d="M177.562 337.119C174.27 337.119 171.601 339.792 171.601 343.087V346.242H222.649V337.119H177.562Z"
        fill="#9D9FFE"
      />
      <path
        d="M385.729 337.119H220.884V346.242H392.837V344.236C392.837 340.306 389.654 337.119 385.729 337.119Z"
        fill="#6F78FF"
      />
      <path
        d="M393.301 306.387H158.902C155.11 306.387 151.987 303.628 151.543 299.874L149.614 283.691L133.074 144.885C132.515 140.199 136.296 135.958 141.037 135.958H375.432C379.224 135.958 382.347 138.716 382.791 142.471L399.622 283.691L401.264 297.459C401.823 302.145 398.038 306.387 393.301 306.387Z"
        fill="#0028E1"
      />
      <path
        d="M396.15 303.041H161.752C157.959 303.041 154.836 300.282 154.392 296.528L152.463 280.346L135.923 141.54C135.365 136.851 139.145 132.612 143.886 132.612H378.281C382.073 132.612 385.196 135.371 385.64 139.125L402.471 280.346L404.113 294.113C404.672 298.799 400.888 303.041 396.15 303.041Z"
        fill="#9D9FFE"
      />
      <path
        d="M402.471 280.346H152.463L135.923 141.54C135.365 136.851 139.145 132.612 143.886 132.612H378.281C382.073 132.612 385.196 135.371 385.64 139.125L402.471 280.346Z"
        fill="#6F78FF"
      />
      <path
        d="M393.064 272.232L377.849 140.727H144.345L159.559 272.232H393.064Z"
        fill="white"
      />
      <path
        d="M281.728 295.023C283.668 293.004 283.474 289.665 281.294 287.566C279.115 285.467 275.775 285.402 273.835 287.421C271.895 289.44 272.09 292.779 274.269 294.878C276.448 296.978 279.788 297.042 281.728 295.023Z"
        fill="white"
      />
      <path
        d="M158.219 263.763L146.235 160.119H381.122L393.109 263.763H158.219Z"
        fill="#C6C5FE"
      />
      <path
        d="M329.841 149.189H162.024C160.379 149.189 159.201 150.525 159.391 152.169C159.581 153.816 161.069 155.15 162.713 155.15H330.531C332.175 155.15 333.353 153.814 333.163 152.169C332.973 150.523 331.486 149.189 329.841 149.189Z"
        fill="#C6C5FE"
      />
      <path
        d="M345.503 154.333C346.569 153.203 346.405 151.316 345.138 150.119C343.871 148.922 341.981 148.868 340.915 149.998C339.85 151.129 340.013 153.015 341.28 154.212C342.547 155.41 344.438 155.464 345.503 154.333Z"
        fill="#C6C5FE"
      />
      <path
        d="M355.466 154.326C356.531 153.195 356.368 151.308 355.101 150.111C353.834 148.914 351.943 148.86 350.878 149.99C349.813 151.121 349.976 153.008 351.243 154.205C352.51 155.402 354.401 155.456 355.466 154.326Z"
        fill="#C6C5FE"
      />
      <path
        d="M362.804 149.189C361.159 149.189 359.981 150.525 360.172 152.169C360.362 153.816 361.849 155.15 363.493 155.15C365.138 155.15 366.316 153.814 366.126 152.169C365.936 150.523 364.449 149.189 362.804 149.189Z"
        fill="#C6C5FE"
      />
      <g>
        <path
          opacity="0.75"
          d="M308.411 149.789C309.432 150.203 310.436 150.662 311.424 151.165C312.87 151.884 314.267 152.661 315.634 153.527C321.729 157.298 327.101 162.461 331.206 168.9C331.427 169.207 331.617 169.529 331.83 169.859C332.664 171.223 333.438 172.616 334.113 174.076C335.61 177.072 336.757 180.2 337.565 183.358C338.071 185.291 338.449 187.229 338.721 189.179C338.889 190.281 338.979 191.379 339.071 192.478C339.775 202.432 337.475 212.411 332.48 221.048C330.365 224.792 327.733 228.274 324.615 231.407C321.862 234.162 318.743 236.659 315.276 238.776C297.895 249.431 276.591 248.198 260.8 237.369C257.271 234.944 253.994 232.026 251.137 228.646C249.429 226.668 247.862 224.509 246.448 222.203C240.78 212.945 238.498 202.582 239.195 192.542C239.434 189.224 239.983 185.963 240.862 182.772C241.384 180.876 242.026 178.995 242.758 177.148C245.477 170.418 249.697 164.249 255.234 159.159C255.418 158.995 255.573 158.848 255.757 158.686C256.574 157.961 257.412 157.242 258.31 156.573C259.771 155.391 261.35 154.301 263.003 153.289C277.231 144.585 294.098 143.807 308.413 149.793L308.411 149.789Z"
          fill="white"
        />
        <path
          d="M335.815 212.711C334.757 215.89 333.36 218.913 331.7 221.718L255.655 158.579C258.168 156.403 260.858 154.485 263.734 152.851L335.814 212.712L335.815 212.711Z"
          fill="white"
        />
        <path
          d="M301.483 244.768C297.343 245.918 293.022 246.517 288.604 246.526L239.267 205.57C238.485 201.358 238.229 196.974 238.596 192.562L301.482 244.769L301.483 244.768Z"
          fill="white"
        />
        <path
          d="M337.263 185.099C338.91 192.08 339.061 199.533 337.415 206.992L269.049 150.214C275.725 147.379 283.067 146.004 290.577 146.325L337.263 185.099Z"
          fill="white"
        />
      </g>
      <path
        d="M332.165 222.471L323.958 232.636L427.97 316.821L436.176 306.655L332.165 222.471Z"
        fill="var(--pink400)"
      />
      <path
        d="M346.441 234.281L338.486 244.134C337.167 245.767 337.423 248.161 339.053 249.48L424.33 318.504C425.96 319.823 428.352 319.571 429.669 317.937L437.624 308.083C438.941 306.451 438.687 304.057 437.057 302.738L351.78 233.714C350.15 232.395 347.759 232.649 346.441 234.281Z"
        fill="#0028E1"
      />
      <path
        d="M320.715 234.64L323.822 237.155C324.681 237.85 325.939 237.716 326.633 236.856L336.85 224.201C337.543 223.341 337.41 222.081 336.551 221.387L333.444 218.872L320.715 234.638V234.64Z"
        fill="var(--pink400)"
      />
      <path
        d="M330.549 229.57C312.089 252.436 278.491 256.002 255.653 237.515C232.815 219.029 229.254 185.388 247.714 162.523C266.177 139.655 299.775 136.09 322.613 154.576C345.451 173.062 349.012 206.703 330.549 229.57ZM252.687 166.547C236.444 186.668 239.575 216.27 259.673 232.536C279.77 248.802 309.333 245.667 325.577 225.546C341.822 205.423 338.69 175.821 318.593 159.555C298.496 143.289 268.933 146.424 252.687 166.547Z"
        fill="#0028E1"
      />
    </g>
    <defs>
      <clipPath id="clip0_286_123997">
        <rect width="570" height="345" fill="white" />
      </clipPath>
      <clipPath id="clip1_286_123997">
        <rect
          width="387"
          height="296"
          fill="white"
          transform="translate(92 50)"
        />
      </clipPath>
    </defs>
  </svg>
);

const Error500 = () => (
  <svg
    width="570"
    height="345"
    viewBox="0 0 570 345"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_286_124114)">
      <path
        d="M59.6645 345.001H537.273C540.903 341.936 544.299 338.639 547.414 335.079C576.155 302.232 577.403 251.86 551.518 216.975C542.048 204.212 530.035 193.902 519.242 181.601C494.071 152.913 501.224 110.574 485.189 77.4896C469.991 46.136 442.82 20.3871 410.09 8.04704C361.584 -10.2402 299.346 4.37929 258.656 34.3884C224.985 59.2204 199.26 84.006 155.716 86.968C100.86 90.7001 53.1849 106.607 21.2229 156.166C3.85465 183.097 -2.6507 215.901 0.964247 247.52C6.07725 292.256 28.61 323.514 59.6645 345.001Z"
        fill="#F2F2FF"
      />
    </g>
    <g clipPath="url(#clip1_286_124114)">
      <path
        d="M434.866 92.5129C433.515 87.6462 431.601 83.0229 429.152 78.7234C422.756 81.0387 415.322 79.6899 410.192 74.5797C405.062 69.4695 403.708 62.0634 406.032 55.6921C401.718 53.2526 397.077 51.3439 392.192 50C389.308 56.1352 383.1 60.4103 375.851 60.4103C368.602 60.4103 362.395 56.1327 359.511 50C354.625 51.3439 349.984 53.2526 345.671 55.6921C347.995 62.0634 346.641 69.4695 341.511 74.5797C336.381 79.6899 328.946 81.0387 322.55 78.7234C320.102 83.0229 318.186 87.6437 316.836 92.5129C322.995 95.3833 327.287 101.567 327.287 108.791C327.287 116.014 322.993 122.196 316.836 125.068C318.188 129.935 320.102 134.558 322.55 138.855C328.946 136.54 336.381 137.889 341.511 142.999C346.641 148.109 347.992 155.515 345.671 161.887C349.984 164.326 354.625 166.235 359.511 167.579C362.395 161.444 368.602 157.168 375.851 157.168C383.1 157.168 389.308 161.446 392.192 167.579C397.077 166.235 401.718 164.326 406.032 161.887C403.708 155.515 405.062 148.109 410.192 142.999C415.322 137.889 422.756 136.54 429.152 138.855C431.601 134.556 433.517 129.935 434.866 125.068C428.707 122.196 424.416 116.012 424.416 108.791C424.416 101.57 428.71 95.3857 434.866 92.5129ZM375.851 130.135C364.018 130.135 354.422 120.577 354.422 108.788C354.422 96.9999 364.015 87.4417 375.851 87.4417C387.688 87.4417 397.28 96.9999 397.28 108.788C397.28 120.577 387.688 130.135 375.851 130.135Z"
        fill="#C6C5FE"
      />
      <path
        d="M178.456 208.173C177.453 204.567 176.036 201.142 174.22 197.955C169.481 199.672 163.972 198.671 160.172 194.885C156.372 191.099 155.37 185.612 157.09 180.891C153.893 179.085 150.455 177.67 146.835 176.674C144.699 181.22 140.1 184.39 134.728 184.39C129.356 184.39 124.756 181.22 122.62 176.674C119.001 177.67 115.562 179.085 112.365 180.891C114.088 185.612 113.084 191.099 109.283 194.885C105.483 198.671 99.9743 199.669 95.2354 197.955C93.422 201.14 92.002 204.565 91 208.173C95.5629 210.301 98.745 214.883 98.745 220.234C98.745 225.585 95.5629 230.167 91 232.295C92.002 235.901 93.4195 239.326 95.2354 242.511C99.9743 240.794 105.483 241.795 109.283 245.581C113.084 249.366 114.086 254.854 112.365 259.575C115.562 261.381 119.001 262.796 122.62 263.791C124.756 259.246 129.356 256.076 134.728 256.076C140.1 256.076 144.699 259.246 146.835 263.791C150.455 262.796 153.893 261.381 157.09 259.575C155.37 254.854 156.372 249.366 160.172 245.581C163.972 241.795 169.481 240.797 174.22 242.511C176.034 239.326 177.453 235.901 178.456 232.295C173.893 230.167 170.711 225.585 170.711 220.234C170.711 214.883 173.893 210.301 178.456 208.173ZM134.728 236.049C125.959 236.049 118.852 228.967 118.852 220.232C118.852 211.496 125.961 204.414 134.728 204.414C143.494 204.414 150.604 211.496 150.604 220.232C150.604 228.967 143.494 236.049 134.728 236.049Z"
        fill="#C6C5FE"
      />
      <path
        d="M411.428 198.084L404.773 220.232L397.879 243.163L389.369 271.463L382.475 294.414L373.092 325.604H464.971L455.589 294.414L448.694 271.463L440.184 243.163L433.29 220.232L426.635 198.084H411.428Z"
        fill="#0028E1"
      />
      <path d="M478 313.272H360.071V325.606H478V313.272Z" fill="#0028E1" />
      <path
        d="M440.185 243.163H397.879L404.774 220.232H433.29L440.185 243.163Z"
        fill="#C6C5FE"
      />
      <path
        d="M455.589 294.414H382.475L389.369 271.463H448.694L455.589 294.414Z"
        fill="#C6C5FE"
      />
      <path
        d="M290.857 231.212L283.283 339.208L283.197 340.442H240.178C236.248 340.442 233.247 336.968 233.817 333.097L249.162 231.214H290.857V231.212Z"
        fill="#0028E1"
      />
      <path
        d="M291.637 231.212L284.063 339.208H242.412C238.482 339.208 235.481 335.719 236.063 331.848L251.208 231.212H291.634H291.637Z"
        fill="#9D9FFE"
      />
      <path
        d="M172.338 335.88C169.032 335.88 166.348 338.551 166.348 341.848V345H217.645V335.88H172.338Z"
        fill="#9D9FFE"
      />
      <path
        d="M381.524 335.88H215.873V345H388.665V342.997C388.665 339.067 385.466 335.88 381.521 335.88H381.524Z"
        fill="#6F78FF"
      />
      <path
        d="M389.132 305.158H153.588C149.775 305.158 146.64 302.399 146.193 298.648L144.254 282.47L127.633 143.7C127.071 139.014 130.871 134.775 135.635 134.775H371.173C374.986 134.775 378.122 137.533 378.569 141.285L395.481 282.467L397.131 296.232C397.693 300.919 393.888 305.158 389.129 305.158H389.132Z"
        fill="#0028E1"
      />
      <path
        d="M391.994 301.813H156.452C152.64 301.813 149.504 299.055 149.057 295.303L147.119 279.125L130.497 140.355C129.935 135.669 133.735 131.43 138.499 131.43H374.038C377.85 131.43 380.986 134.189 381.433 137.94L398.346 279.123L399.995 292.888C400.557 297.574 396.752 301.813 391.994 301.813Z"
        fill="#9D9FFE"
      />
      <path
        d="M398.346 279.122H147.116L130.495 140.352C129.933 135.666 133.733 131.427 138.496 131.427H374.035C377.848 131.427 380.984 134.186 381.431 137.937L398.343 279.12L398.346 279.122Z"
        fill="#6F78FF"
      />
      <path
        d="M388.892 271.01L373.603 139.542H138.961L154.248 271.01H388.892Z"
        fill="white"
      />
      <path
        d="M277.013 293.795C278.963 291.776 278.769 288.438 276.579 286.339C274.39 284.241 271.034 284.177 269.084 286.197C267.133 288.216 267.328 291.554 269.517 293.652C271.707 295.751 275.063 295.815 277.013 293.795Z"
        fill="white"
      />
      <path
        d="M152.901 262.548L140.857 158.931H376.892L388.936 262.548H152.901Z"
        fill="#C6C5FE"
      />
      <path
        d="M325.361 148.004H156.724C155.071 148.004 153.886 149.339 154.079 150.984C154.27 152.63 155.766 153.964 157.418 153.964H326.055C327.707 153.964 328.893 152.63 328.699 150.984C328.509 149.339 327.013 148.004 325.361 148.004Z"
        fill="#C6C5FE"
      />
      <path
        d="M338.453 148.004C336.801 148.004 335.616 149.339 335.809 150.984C336 152.63 337.495 153.964 339.147 153.964C340.8 153.964 341.985 152.63 341.792 150.984C341.601 149.339 340.105 148.004 338.453 148.004Z"
        fill="#C6C5FE"
      />
      <path
        d="M348.471 148.004C346.819 148.004 345.634 149.339 345.827 150.984C346.017 152.63 347.513 153.964 349.165 153.964C350.817 153.964 352.003 152.63 351.81 150.984C351.619 149.339 350.123 148.004 348.471 148.004Z"
        fill="#C6C5FE"
      />
      <path
        d="M361.128 153.133C362.198 152.004 362.033 150.118 360.76 148.921C359.487 147.724 357.587 147.669 356.517 148.799C355.447 149.928 355.612 151.814 356.885 153.011C358.159 154.208 360.058 154.262 361.128 153.133Z"
        fill="#C6C5FE"
      />
      <path
        d="M268.702 172.12L230.776 243.515H306.625L268.702 172.12Z"
        fill="#C6C5FE"
      />
      <path
        d="M308.739 242.402L270.814 171.007C270.398 170.226 269.589 169.741 268.702 169.741C267.815 169.741 267.003 170.226 266.59 171.007L228.665 242.402C228.276 243.135 228.3 244.03 228.728 244.744C229.158 245.455 229.943 245.895 230.774 245.895H306.625C307.459 245.895 308.243 245.455 308.671 244.744C309.101 244.033 309.125 243.135 308.737 242.402H308.739ZM234.743 241.136L268.702 177.208L302.661 241.136H234.743Z"
        fill="white"
        stroke="white"
        strokeMiterlimit="10"
      />
      <path
        d="M266.869 224.554L265.175 207.363V199.414H272.226V207.363L270.557 224.554H266.869ZM265.454 234.75V228.257H271.972V234.75H265.454Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_286_124114">
        <rect width="570" height="345" fill="white" />
      </clipPath>
      <clipPath id="clip1_286_124114">
        <rect
          width="387"
          height="295"
          fill="white"
          transform="translate(91 50)"
        />
      </clipPath>
    </defs>
  </svg>
);

const SaveIcon = ({ width = 20, height = 20, fill = "var(--pink400)" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 21 20"
    fill="none">
    <path
      d="M6.97284 15.0556V11.31C6.97284 11.0891 7.15193 10.91 7.37284 10.91H13.6273C13.8482 10.91 14.0273 11.0891 14.0273 11.31V15.0556H15.7042V6.9872L13.6014 4.94444H5.29575V15.0556H6.97284ZM4.74563 3.5H13.6214C13.8817 3.5 14.1317 3.60147 14.3183 3.78285L16.6969 6.09436C16.8907 6.28265 17 6.54133 17 6.81151V15.7778C17 16.1767 16.6459 16.5 16.2353 16.5H4.74563C4.33503 16.5 4 16.1767 4 15.7778V4.22222C4 3.82335 4.33503 3.5 4.74563 3.5ZM8.26961 12.1667V15.0556H12.7304V12.1667H8.26961Z"
      fill={fill}
    />
  </svg>
);

const EditorIcon = ({ width = 20, height = 20, fill = "#fff" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14.3105 14.7484H5.16055V5.24844H10.9505L12.3005 3.89844H5.06055C4.37055 3.89844 3.81055 4.45844 3.81055 5.14844V14.8484C3.81055 15.5384 4.37055 16.0984 5.06055 16.0984H14.4105C15.1005 16.0984 15.6605 15.5384 15.6605 14.8484V9.04844L14.3105 10.3984V14.7484Z"
      fill={fill}
    />
    <path
      d="M17.591 4.62938C17.541 4.51938 17.471 4.40938 17.391 4.31938L15.941 2.87938C15.851 2.78938 15.751 2.71938 15.631 2.67938C15.521 2.62938 15.391 2.60938 15.271 2.60938C15.151 2.60938 15.021 2.62938 14.911 2.67938C14.801 2.72938 14.691 2.79938 14.601 2.87938L8.92104 8.57938C8.76104 8.74938 8.64104 8.94938 8.59104 9.17938L8.18104 10.9594C8.15104 11.0994 8.16104 11.2394 8.18104 11.3794C8.21104 11.5094 8.28104 11.6394 8.36104 11.7494C8.45104 11.8594 8.56104 11.9394 8.68104 11.9994C8.80104 12.0594 8.93104 12.0894 9.07104 12.0894C9.14104 12.0894 9.20104 12.0894 9.27104 12.0894H9.28104L11.091 11.6894C11.321 11.6394 11.541 11.5194 11.711 11.3494L17.371 5.63937C17.461 5.54938 17.531 5.44938 17.571 5.33938C17.621 5.22938 17.641 5.09938 17.641 4.97938C17.641 4.85938 17.621 4.72937 17.571 4.61937L17.591 4.62938ZM15.811 5.30938L14.951 4.44937L15.261 4.12938L16.121 4.98937L15.801 5.30938H15.811ZM9.66104 10.6094L9.92104 9.50938L14.121 5.28938L14.981 6.13937L10.781 10.3594L9.67104 10.6094H9.66104Z"
      fill={fill}
    />
  </svg>
);

const LinkIcon = ({ width = 16, height = 17, fill = "var(--pink400)" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 16 17"
    fill="none">
    <path
      d="M9.22953 11.5123L7.05486 13.6869C6.42347 14.3014 5.57553 14.6427 4.69449 14.6368C3.81345 14.6308 2.97016 14.2783 2.34707 13.6554C1.72397 13.0325 1.37119 12.1893 1.36504 11.3082C1.35888 10.4272 1.69986 9.57916 2.31419 8.94761L4.48886 6.77095C4.61386 6.64585 4.68406 6.47622 4.68399 6.29938C4.68393 6.12253 4.61362 5.95295 4.48853 5.82795C4.36343 5.70294 4.1938 5.63275 4.01696 5.63281C3.84011 5.63288 3.67053 5.70319 3.54553 5.82828L1.37153 8.00494C0.49304 8.88387 -0.000312421 10.0758 1.48434e-07 11.3184C0.000312718 12.5611 0.494265 13.7528 1.37319 14.6313C2.25212 15.5097 3.44403 16.0031 4.6867 16.0028C5.92938 16.0025 7.12104 15.5085 7.99953 14.6296L10.1742 12.4549C10.2956 12.3292 10.3628 12.1608 10.3613 11.986C10.3598 11.8112 10.2897 11.644 10.1661 11.5204C10.0425 11.3968 9.87526 11.3267 9.70046 11.3252C9.52566 11.3236 9.35726 11.3908 9.23153 11.5123H9.22953Z"
      fill={fill}
    />
    <path
      d="M14.627 1.37402C14.1932 0.937226 13.6771 0.590869 13.1084 0.355014C12.5398 0.119159 11.93 -0.0015043 11.3144 1.64272e-05C10.6991 -0.00161806 10.0896 0.118735 9.52109 0.354117C8.9526 0.589499 8.43642 0.935241 8.00237 1.37135L5.82437 3.54668C5.69928 3.67169 5.62897 3.84127 5.62891 4.01811C5.62884 4.19496 5.69904 4.36459 5.82404 4.48968C5.94905 4.61478 6.11863 4.68509 6.29547 4.68515C6.47232 4.68521 6.64195 4.61502 6.76704 4.49002L8.94371 2.31535C9.25408 2.00312 9.6233 1.75555 10.03 1.58699C10.4367 1.41843 10.8728 1.33222 11.313 1.33335C11.9759 1.33357 12.6238 1.5303 13.1748 1.89868C13.7259 2.26706 14.1553 2.79055 14.4089 3.40296C14.6625 4.01538 14.7288 4.68923 14.5995 5.33933C14.4702 5.98944 14.151 6.58661 13.6824 7.05535L11.5077 9.23002C11.3826 9.35511 11.3123 9.52477 11.3123 9.70168C11.3123 9.87859 11.3826 10.0483 11.5077 10.1734C11.6328 10.2984 11.8025 10.3687 11.9794 10.3687C12.1563 10.3687 12.3259 10.2984 12.451 10.1734L14.6257 8.00002C15.5031 7.12075 15.9959 5.92942 15.9962 4.68729C15.9964 3.44517 15.5041 2.25364 14.627 1.37402Z"
      fill={fill}
    />
    <path
      d="M9.52774 5.53089L5.52774 9.53088C5.46407 9.59238 5.41328 9.66594 5.37834 9.74728C5.3434 9.82862 5.32501 9.9161 5.32424 10.0046C5.32347 10.0931 5.34034 10.1809 5.37386 10.2629C5.40738 10.3448 5.45689 10.4192 5.51948 10.4818C5.58208 10.5444 5.65651 10.5939 5.73844 10.6274C5.82037 10.6609 5.90816 10.6778 5.99668 10.677C6.0852 10.6763 6.17268 10.6579 6.25401 10.6229C6.33535 10.588 6.40891 10.5372 6.47041 10.4735L10.4704 6.47356C10.5918 6.34782 10.659 6.17942 10.6575 6.00462C10.656 5.82983 10.5859 5.66262 10.4623 5.53901C10.3387 5.41541 10.1715 5.34529 9.99668 5.34378C9.82188 5.34226 9.65348 5.40945 9.52774 5.53089Z"
      fill={fill}
    />
  </svg>
);

const ResultIcon = ({ width = 20, height = 20, fill = "var(--pink400)" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9.33333 6.5H10.6667V13.5H9.33333V6.5ZM12 9.3H13.3333V13.5H12V9.3ZM6.66667 10.7H8V13.5H6.66667V10.7ZM12 4.4H5.33333V15.6H14.6667V7.2L12 4.4ZM4 3.69426C4 3.31084 4.29833 3 4.66567 3H12.6667L15.9998 6.5L16 16.2948C16 16.6842 15.7034 17 15.3377 17H4.66227C4.29651 17 4 16.6813 4 16.3057V3.69426Z"
      fill={fill}
    />
  </svg>
);

const RunChangeIcon = ({ width = 20, height = 20, fill = "#fff" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8.49222 10.9887L14.4818 4.99913C14.7575 4.72347 15.2044 4.72347 15.4801 4.99913C15.7558 5.2748 15.7558 5.72173 15.4801 5.9974L9.19932 12.2782C8.8088 12.6687 8.17564 12.6687 7.78512 12.2782L4.49914 8.99222C4.22347 8.71656 4.22347 8.26962 4.49914 7.99396C4.7748 7.7183 5.22173 7.7183 5.4974 7.99396L8.49222 10.9887Z"
      fill={fill}
    />
    <rect
      x="4"
      y="14.0898"
      width="12"
      height="1.41176"
      rx="0.705882"
      fill={fill}
    />
  </svg>
);

const LibAppIcon = ({ width = 20, height = 20, fill = "#A2ADC1" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.9184 15C18.5009 15 18.9602 14.5041 18.9155 13.9233L18.0693 2.9233C18.0293 2.40231 17.5948 2 17.0723 2H2.92434C2.4018 2 1.96736 2.40231 1.92728 2.9233L1.08113 13.9233C1.03645 14.5041 1.49567 15 2.07818 15L17.9184 15ZM7.96796 6.46967C7.67507 6.76256 7.67507 7.23744 7.96796 7.53033C8.26086 7.82322 8.73573 7.82322 9.02862 7.53033L9.24829 7.31066V12C9.24829 12.4142 9.58408 12.75 9.99829 12.75C10.4125 12.75 10.7483 12.4142 10.7483 12V7.31066L10.968 7.53033C11.2609 7.82322 11.7357 7.82322 12.0286 7.53033C12.3215 7.23744 12.3215 6.76256 12.0286 6.46967L10.5286 4.96967C10.2357 4.67678 9.76085 4.67678 9.46796 4.96967L7.96796 6.46967Z"
      fill={fill}
    />
    <path
      d="M1 17C1 16.4477 1.44772 16 2 16H18C18.5523 16 19 16.4477 19 17C19 17.5523 18.5523 18 18 18H2C1.44772 18 1 17.5523 1 17Z"
      fill={fill}
    />
  </svg>
);

const LibProjectIcon = ({ width = 20, height = 20, fill = "#A2ADC1" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 3C3 2.44772 3.44772 2 4 2H16C16.5523 2 17 2.44772 17 3C17 3.55228 16.5523 4 16 4H4C3.44772 4 3 3.55228 3 3Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.08601 5C1.50097 5 1.04088 5.50003 1.08946 6.08305L1.92279 16.083C1.96599 16.6013 2.39925 17 2.91934 17H17.0791C17.5992 17 18.0324 16.6013 18.0756 16.083L18.909 6.08305C18.9575 5.50003 18.4974 5 17.9124 5H2.08601ZM6.99921 6.25C6.58499 6.25 6.24921 6.58579 6.24921 7C6.24921 7.41421 6.58499 7.75 6.99921 7.75H12.9992C13.4134 7.75 13.7492 7.41421 13.7492 7C13.7492 6.58579 13.4134 6.25 12.9992 6.25H6.99921Z"
      fill={fill}
    />
  </svg>
);

const LibCommonCodeIcon = ({ width = 20, height = 20, fill = "#A2ADC1" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.0007 2H6.48804C5.60482 2 4.82618 2.57934 4.57239 3.4253L2 11.9999L2.00005 12L2.00011 12L2.72157 16.3288C2.88229 17.2932 3.71667 18 4.69435 18H15.3058C16.2835 18 17.1179 17.2932 17.2786 16.3288L18.0001 12.0001L18 12L18 12L16.9433 8.47776C16.7291 9.35164 15.9406 10 15.0007 10C13.8962 10 13.0007 9.10457 13.0007 8V7H12.0007C10.8962 7 10.0007 6.10457 10.0007 5C10.0007 3.89543 10.8962 3 12.0007 3H13.0007V2ZM14.0007 2.06049C14.6718 2.22956 15.222 2.73993 15.4276 3.4253L16.2 6H16.0007V7V8C16.0007 8.55228 15.553 9 15.0007 9C14.4484 9 14.0007 8.55228 14.0007 8V7V6H13.0007H12.0007C11.4484 6 11.0007 5.55228 11.0007 5C11.0007 4.44772 11.4484 4 12.0007 4H13.0007H14.0007V3V2.06049ZM4.16306 14.1414C4.077 13.539 4.54446 13 5.15301 13H14.847C15.4555 13 15.923 13.539 15.8369 14.1414L15.6941 15.1414C15.6237 15.6341 15.2018 16 14.7041 16H5.29587C4.79821 16 4.37629 15.6341 4.30591 15.1414L4.16306 14.1414Z"
      fill={fill}
    />
    <path d="M6 14.5H11" stroke={fill} strokeLinecap="round" />
    <path d="M13 14.5H14" stroke={fill} strokeLinecap="round" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 2C16 1.44772 15.5523 1 15 1C14.4477 1 14 1.44772 14 2V4H12C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6H14V8C14 8.55228 14.4477 9 15 9C15.5523 9 16 8.55228 16 8V6H18C18.5523 6 19 5.55228 19 5C19 4.44772 18.5523 4 18 4H16V2Z"
      fill={fill}
    />
  </svg>
);

const LibToolsIcon = ({ width = 20, height = 20, fill = "#A2ADC1" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="7.5" height="7.5" rx="2" fill={fill} />
    <rect x="10.5" y="2" width="7.5" height="7.5" rx="2" fill={fill} />
    <rect x="2" y="10.5" width="7.5" height="7.5" rx="2" fill={fill} />
    <rect x="10.5" y="10.5" width="7.5" height="7.5" rx="3.75" fill={fill} />
  </svg>
);

const LibLicenseIcon = ({ width = 20, height = 20, fill = "#A2ADC1" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 7C19 10.3137 16.3137 13 13 13C12.3884 13 11.7981 12.9085 11.2422 12.7384C11.222 12.7713 11.1977 12.8023 11.1692 12.8308L10.1464 13.8536C10.0527 13.9473 9.9255 14 9.79289 14H8.5C8.22386 14 8 14.2239 8 14.5V15.5C8 15.7761 7.77614 16 7.5 16H6.5C6.22386 16 6 16.2239 6 16.5V17.5C6 17.7761 5.77614 18 5.5 18H2.5C2.22386 18 2 17.7761 2 17.5V14.7071C2 14.5745 2.05268 14.4473 2.14645 14.3536L7.38383 9.11617C7.13574 8.45807 7 7.74489 7 7C7 3.68629 9.68629 1 13 1C16.3137 1 19 3.68629 19 7ZM15 6C15.5523 6 16 5.55228 16 5C16 4.44772 15.5523 4 15 4C14.4477 4 14 4.44772 14 5C14 5.55228 14.4477 6 15 6Z"
      fill={fill}
    />
  </svg>
);

const LibAdminUserIcon = ({ width = 20, height = 20, fill = "#A2ADC1" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.54234 14.4116C9.27439 14.1168 8.85848 14.0167 8.46976 14.1037C8.03711 14.2007 7.58717 14.2518 7.12529 14.2518C3.74239 14.2518 1 11.5091 1 8.12589C1 7.65767 1.05252 7.20172 1.152 6.76362C1.30407 6.09391 2.12244 5.94989 2.60803 6.43552L4.94769 8.7754C5.13523 8.96296 5.39195 9.06992 5.64884 9.0039C6.01124 8.91076 6.56826 8.68297 7.12529 8.12589C7.68236 7.56876 7.91012 7.01163 8.00324 6.6492C8.06923 6.39234 7.9623 6.13565 7.77478 5.94811L5.4349 3.608C4.94937 3.12242 5.09337 2.30414 5.763 2.15205C6.20111 2.05254 6.65707 2 7.12529 2C10.5082 2 13.2506 4.74265 13.2506 8.12589C13.2506 8.58707 13.1996 9.03635 13.103 9.46841C13.0162 9.85696 13.1163 10.2726 13.4109 10.5404L17.4209 14.1862C17.4676 14.2287 17.51 14.2749 17.544 14.3281C17.7827 14.7021 18.6787 16.361 17.02 18.0199C15.3613 19.6787 13.7026 18.7827 13.3286 18.5439C13.2754 18.5099 13.2292 18.4675 13.1867 18.4208L9.54234 14.4116Z"
      fill={fill}
    />
  </svg>
);

const LibManualIcon = ({ width = 20, height = 20, fill = "#A2ADC1" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 4C3 2.89543 3.89543 2 5 2H15C16.1046 2 17 2.89543 17 4V14C17 15.1046 16.1046 16 15 16H5C4.72386 16 4.5 16.2239 4.5 16.5C4.5 16.7761 4.72386 17 5 17H13H14H16C16.2761 17 16.5 17.2239 16.5 17.5C16.5 17.7761 16.2761 18 16 18H14H13H5C3.89543 18 3 17.1046 3 16V4ZM8.25 8.5C8.25 8.08579 8.58579 7.75 9 7.75H10C10.4142 7.75 10.75 8.08579 10.75 8.5V12.25H11C11.4142 12.25 11.75 12.5858 11.75 13C11.75 13.4142 11.4142 13.75 11 13.75H10H9C8.58579 13.75 8.25 13.4142 8.25 13C8.25 12.5858 8.58579 12.25 9 12.25H9.25V9.25H9C8.58579 9.25 8.25 8.91421 8.25 8.5ZM10 7C10.5523 7 11 6.55228 11 6C11 5.44772 10.5523 5 10 5C9.44772 5 9 5.44772 9 6C9 6.55228 9.44772 7 10 7Z"
      fill={fill}
    />
  </svg>
);

const LibAlgorithmIcon = ({ width = 20, height = 20, fill = "#A2ADC1" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 2C2.89543 2 2 2.89543 2 4V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V6C18 4.89543 17.1046 4 16 4H11.7016C11.2474 4 10.8068 3.84544 10.4522 3.56174L9.04783 2.43826C8.6932 2.15456 8.25258 2 7.79844 2H4ZM7.48014 8.57617C7.79835 8.31099 7.84134 7.83807 7.57617 7.51986C7.31099 7.20165 6.83807 7.15866 6.51986 7.42383L3.98079 9.53972C3.3811 10.0395 3.3811 10.9605 3.98079 11.4603L6.51986 13.5762C6.83807 13.8413 7.31099 13.7983 7.57617 13.4801C7.84134 13.1619 7.79835 12.689 7.48014 12.4238L5.17154 10.5L7.48014 8.57617ZM12.4238 7.51986C12.1587 7.83807 12.2017 8.31099 12.5199 8.57617L14.8285 10.5L12.5199 12.4238C12.2017 12.689 12.1587 13.1619 12.4238 13.4801C12.689 13.7983 13.1619 13.8413 13.4801 13.5762L16.0192 11.4603C16.6189 10.9605 16.6189 10.0395 16.0192 9.53972L13.4801 7.42383C13.1619 7.15866 12.689 7.20165 12.4238 7.51986ZM11.2354 8.14709C11.3167 7.74092 11.0533 7.3458 10.6471 7.26456C10.2409 7.18333 9.8458 7.44674 9.76456 7.85291L8.76456 12.8529C8.68333 13.2591 8.94674 13.6542 9.35291 13.7354C9.75908 13.8167 10.1542 13.5533 10.2354 13.1471L11.2354 8.14709Z"
      fill={fill}
    />
  </svg>
);

const LibQnaIcon = ({ width = 20, height = 20, fill = "#A2ADC1" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 15V13.4142L5.41421 13H14C15.1046 13 16 12.1046 16 11V6H17C17.5523 6 18 6.44772 18 7V17.7929C18 18.2383 17.4614 18.4614 17.1464 18.1464L15.2929 16.2929C15.1054 16.1054 14.851 16 14.5858 16H6C5.44772 16 5 15.5523 5 15ZM15 3V6V11C15 11.5523 14.5523 12 14 12H5.41421C5.26992 12 5.12885 12.0312 5 12.0898L4.98693 12.0959C4.88399 12.1445 4.78915 12.2108 4.70711 12.2929L2.85355 14.1464C2.53857 14.4614 2 14.2383 2 13.7929V3C2 2.44772 2.44772 2 3 2H14C14.5523 2 15 2.44772 15 3ZM8.5 3.25C7.88142 3.25 7.30684 3.45759 6.88438 3.87656C6.46136 4.29608 6.25 4.86901 6.25 5.4876C6.25 5.90182 6.58579 6.2376 7 6.2376C7.41421 6.2376 7.75 5.90182 7.75 5.4876C7.75 5.21364 7.83864 5.04276 7.94063 4.94162C8.04316 4.83993 8.21858 4.75 8.5 4.75C8.80279 4.75 8.97486 4.83801 9.06714 4.92691C9.1551 5.01165 9.25 5.17321 9.25 5.4876C9.25 5.84899 9.12665 6.01243 9.01187 6.09404C8.78337 6.25651 8.48151 6.48015 8.23728 6.76241C7.98699 7.05168 7.75 7.45698 7.75 7.97521V8C7.75 8.41421 8.08579 8.75 8.5 8.75C8.91421 8.75 9.25 8.41421 9.25 8V7.97521C9.25 7.94115 9.26119 7.87151 9.37161 7.74389C9.48808 7.60928 9.65947 7.4741 9.88107 7.31654C10.4646 6.90166 10.75 6.23753 10.75 5.4876C10.75 4.84997 10.5449 4.26773 10.1079 3.84667C9.67514 3.42978 9.09721 3.25 8.5 3.25ZM9.25 10C9.25 9.58579 8.91421 9.25 8.5 9.25C8.08579 9.25 7.75 9.58579 7.75 10V10.01C7.75 10.4242 8.08579 10.76 8.5 10.76C8.91421 10.76 9.25 10.4242 9.25 10.01V10Z"
      fill={fill}
    />
  </svg>
);

const LibTermsIcon = ({ width = 20, height = 20, fill = "#A2ADC1" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 4C3 2.89543 3.89543 2 5 2H11.1716C11.702 2 12.2107 2.21071 12.5858 2.58579L16.4142 6.41421C16.7893 6.78929 17 7.29799 17 7.82843V16C17 17.1046 16.1046 18 15 18H5C3.89543 18 3 17.1046 3 16V4ZM10.75 7C10.75 6.58579 10.4142 6.25 10 6.25C9.58579 6.25 9.25 6.58579 9.25 7V11C9.25 11.4142 9.58579 11.75 10 11.75C10.4142 11.75 10.75 11.4142 10.75 11V7ZM10.75 13.99C10.75 13.5758 10.4142 13.24 10 13.24C9.58579 13.24 9.25 13.5758 9.25 13.99V14C9.25 14.4142 9.58579 14.75 10 14.75C10.4142 14.75 10.75 14.4142 10.75 14V13.99Z"
      fill={fill}
    />
  </svg>
);

const Loading = ({ width = 130, height = 130, fill = "var(--pink400)" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid">
    <g transform="rotate(0 50 50)">
      <rect x="47" y="24" rx="3" ry="3.48" width="6" height="12" fill={fill}>
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.9166666666666666s"
          repeatCount="indefinite"
        />
      </rect>
    </g>
    <g transform="rotate(30 50 50)">
      <rect x="47" y="24" rx="3" ry="3.48" width="6" height="12" fill={fill}>
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.8333333333333334s"
          repeatCount="indefinite"
        />
      </rect>
    </g>
    <g transform="rotate(60 50 50)">
      <rect x="47" y="24" rx="3" ry="3.48" width="6" height="12" fill={fill}>
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.75s"
          repeatCount="indefinite"
        />
      </rect>
    </g>
    <g transform="rotate(90 50 50)">
      <rect x="47" y="24" rx="3" ry="3.48" width="6" height="12" fill={fill}>
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.6666666666666666s"
          repeatCount="indefinite"
        />
      </rect>
    </g>
    <g transform="rotate(120 50 50)">
      <rect x="47" y="24" rx="3" ry="3.48" width="6" height="12" fill={fill}>
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.5833333333333334s"
          repeatCount="indefinite"
        />
      </rect>
    </g>
    <g transform="rotate(150 50 50)">
      <rect x="47" y="24" rx="3" ry="3.48" width="6" height="12" fill={fill}>
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.5s"
          repeatCount="indefinite"
        />
      </rect>
    </g>
    <g transform="rotate(180 50 50)">
      <rect x="47" y="24" rx="3" ry="3.48" width="6" height="12" fill={fill}>
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.4166666666666667s"
          repeatCount="indefinite"
        />
      </rect>
    </g>
    <g transform="rotate(210 50 50)">
      <rect x="47" y="24" rx="3" ry="3.48" width="6" height="12" fill={fill}>
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.3333333333333333s"
          repeatCount="indefinite"
        />
      </rect>
    </g>
    <g transform="rotate(240 50 50)">
      <rect x="47" y="24" rx="3" ry="3.48" width="6" height="12" fill={fill}>
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.25s"
          repeatCount="indefinite"
        />
      </rect>
    </g>
    <g transform="rotate(270 50 50)">
      <rect x="47" y="24" rx="3" ry="3.48" width="6" height="12" fill={fill}>
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.16666666666666666s"
          repeatCount="indefinite"
        />
      </rect>
    </g>
    <g transform="rotate(300 50 50)">
      <rect x="47" y="24" rx="3" ry="3.48" width="6" height="12" fill={fill}>
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.08333333333333333s"
          repeatCount="indefinite"
        />
      </rect>
    </g>
    <g transform="rotate(330 50 50)">
      <rect x="47" y="24" rx="3" ry="3.48" width="6" height="12" fill={fill}>
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="0s"
          repeatCount="indefinite"
        />
      </rect>
    </g>
  </svg>
);
const ArrowUp = ({ width = 20, height = 20, fill = "#354165" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none">
    <path
      d="M15 9L10.7071 4.70711C10.3166 4.31658 9.68342 4.31658 9.29289 4.70711L5 9"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M10 16L10 5"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);
const ArrowRootUp = ({ width = 20, height = 20, fill = "#354165" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none">
    <path
      d="M15 10L10.7071 5.70711C10.3166 5.31658 9.68342 5.31658 9.29289 5.70711L5 10"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path d="M5 4L15 4" stroke={fill} strokeWidth="1.5" strokeLinecap="round" />
    <path
      d="M10 16L10 6"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);
const ArrowDown = ({ width = 20, height = 20, fill = "#354165" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none">
    <path
      d="M5 11L9.29289 15.2929C9.68342 15.6834 10.3166 15.6834 10.7071 15.2929L15 11"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path d="M10 4V15" stroke={fill} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
const ArrowRootDown = ({ width = 20, height = 20, fill = "#354165" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none">
    <path
      d="M5 10L9.29289 14.2929C9.68342 14.6834 10.3166 14.6834 10.7071 14.2929L15 10"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M15 16L5 16"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M10 4L10 14"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const TriangleIcon = ({ width = 20, height = 20, fill = "#A2ADC1" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 6L8 10L12 6H4Z"
      fill={fill}
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CopyIcon = ({ width = 20, height = 20, fill = "#FFF" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <rect x="3.5" y="5.5" width="7" height="7" rx="0.5" stroke={fill} />
    <path
      d="M11 10.5H12C12.2761 10.5 12.5 10.2761 12.5 10V4C12.5 3.72386 12.2761 3.5 12 3.5H6C5.72386 3.5 5.5 3.72386 5.5 4V5"
      stroke={fill}
    />
  </svg>
);

const TransferIcon = ({ width = 20, height = 20, fill = "#A2ADC1" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5 13L14 13"
      stroke={fill}
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path d="M15 7L6 7" stroke={fill} strokeWidth="1.2" strokeLinecap="round" />
    <path
      d="M13 9L15.376 7.41603C15.6728 7.21811 15.6728 6.78189 15.376 6.58397L13 5"
      stroke={fill}
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path
      d="M7 11L4.62404 12.584C4.32717 12.7819 4.32717 13.2181 4.62404 13.416L7 15"
      stroke={fill}
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

export const Icons = {
  HelpDeskIcon,
  NotificationIcon,
  SettingIcon,
  SearchIcon,
  ResetIcon,
  AdminIcon,
  ToolIcon,
  UserIcon,
  LogoutIcon,
  XIcon,
  CloseIcon,
  DeleteIcon,
  EditIcon,
  ToastErrorIcon,
  ToastSuccessIcon,
  ToastWarningIcon,
  InfoIcon,
  ErrorIcon,
  SuccessIcon,
  CompletedIcon,
  TooltipIcon,
  TooltipHoverIcon,
  Pdficon,
  FileDownloadIcon,
  FileViewIcon,
  CopyUrlIcon,
  PlusIcon,
  Excelicon,
  Wordicon,
  EtcIcon,
  FileUploadIcon,
  MenuIconDummy,
  BoxListArrowIcon,
  ReplyIcon,
  ContextIcon,
  AngleIcon,
  DoubleAngleIcon,
  TreeAngleIcon,
  DataIcon,
  TblLockIcon,
  FolderIcon,
  FloatingCommentIcon,
  NoImg,
  NoData,
  FloatingGuideIcon,
  MenuIcon,
  CameraIcon,
  ShowPasswordIcon,
  HidePasswordIcon,
  StarIcon,
  Resend,
  Cancel,
  Approval,
  Deny,
  Change,
  ParameterIcon,
  BookIcon,
  UpdateIcon,
  FilterIcon,
  // DownloadIcon,
  DragIcon,
  HistoryIcon,
  SaveIcon,
  EditorIcon,
  LinkIcon,
  Error404,
  Error500,
  ResultIcon,
  RunChangeIcon,
  LibAppIcon,
  LibProjectIcon,
  LibCommonCodeIcon,
  LibToolsIcon,
  LibLicenseIcon,
  LibAdminUserIcon,
  LibManualIcon,
  LibAlgorithmIcon,
  LibQnaIcon,
  LibTermsIcon,
  Loading,
  TriangleIcon,
  ArrowUp,
  ArrowRootUp,
  ArrowDown,
  ArrowRootDown,
  CopyIcon,
  TransferIcon,
};
