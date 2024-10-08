// import Image from "next/image";
// import React from "react";

// interface ApplicantCardProps {
//   applicant_name: string;
//   applicant_email: string;
//   applicant_phone: string;
//   applicant_profile_picture: string | null;
//   applicant_cv?: string;
//   applicant_resume?: string;
// }

// const ApplicantCard = ({ applicant }: { applicant: ApplicantCardProps }) => (
//   <div className="items-center bg-gray-50 rounded-lg w-[50%] shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
//     <a href="#">
//       <Image
//         className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
//         src="/assets/images/default-profile.webp"
//         alt="Bonnie Avatar"
//         width={200}
//         height={200}
//       />
//     </a>
//     <div className="p-5">
//       <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
//         <a href="#">{applicant.applicant_name}</a>
//       </h3>
//       <span className="text-gray-500 dark:text-gray-400">
//         Email: {applicant.applicant_email}
//       </span>
//       <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
//         {applicant.applicant_cv ||
//           "I believe I am qualified enough to apply for this job."}
//       </p>
//       <ul className="flex space-x-4 sm:mt-0">
//         <li>
//           <a
//             href="#"
//             className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
//           >
//             <svg
//               className="w-5 h-5"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//               aria-hidden="true"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </a>
//         </li>
//         <li>
//           <a
//             href="#"
//             className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
//           >
//             <svg
//               className="w-5 h-5"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//               aria-hidden="true"
//             >
//               <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//             </svg>
//           </a>
//         </li>
//         <li>
//           <a
//             href="#"
//             className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
//           >
//             <svg
//               className="w-5 h-5"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//               aria-hidden="true"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </a>
//         </li>
//         <li>
//           <a
//             href="#"
//             className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
//           >
//             <Image
//               src="/assets/icons/resume_icon.svg"
//               alt="Resume"
//               width={64}
//               height={64}
//               className="w-4 h-4"
//             />
//           </a>
//         </li>
//       </ul>
//     </div>
//   </div>
// );

// export default ApplicantCard;

import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ApplicantProps {
  val: number;
  applicant: {
    applicant_name: string;
    applicant_email: string;
    applicant_phone: string;
    applicant_profile_picture: string | null;
    applicant_resume: string | null;
    applied_at: string;
  };
  setIndex?: React.Dispatch<React.SetStateAction<number>>;
  setIsCoverOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const ApplicantCard = ({
  applicant,
  val,
  setIndex,
  setIsCoverOpen,
}: ApplicantProps) => {
  return (
    <div className="flex border p-4 rounded-lg bg-gray-100">
      <div className="flex-1 flex items-center gap-x-4">
        <div className="shrink-0">
          <Image
            src={
              applicant.applicant_profile_picture ||
              "/assets/images/default-profile.webp"
            }
            alt={applicant.applicant_name}
            width={64}
            height={64}
            className="rounded-full w-16 h-16 object-cover"
          />
        </div>
        <div className="flex-1 space-y-1 w-full max-w-full">
          <h3 className="font-bold text-gray-700 xl:text-base lg:text-sm text-base truncate max-w-full">
            {applicant.applicant_name}
          </h3>
          <p className="xl:text-sm lg:text-xs text-sm text-gray-500 truncate max-w-full">
            {applicant.applicant_email}
          </p>
          <p className="xl:text-sm lg:text-xs text-sm text-gray-500 truncate max-w-full">
            {applicant.applicant_phone}
          </p>
          <p className="xl:text-xs lg:text-[10px] text-xs text-gray-400 truncate max-w-full">
            Applied - {new Date(applicant.applied_at).toDateString()}
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-2">
        <button
          onClick={() => {
            setIndex && setIndex(val);
            setIsCoverOpen && setIsCoverOpen(true);
          }}
          className="px-4 py-2 text-sm font-semibold text-gray-600 hover:text-gray-50 bg-gray-300 hover:bg-blue-400 rounded-lg transition-colors duration-300 whitespace-nowrap"
        >
          Cover Letter
        </button>
        <Link
          href={applicant.applicant_resume || "#"}
          className="px-4 py-2 text-sm font-semibold text-gray-600 hover:text-gray-50 bg-gray-300 hover:bg-blue-400 rounded-lg transition-colors duration-300 text-center"
        >
          Resume
        </Link>
      </div>
    </div>
  );
};

export default ApplicantCard;
