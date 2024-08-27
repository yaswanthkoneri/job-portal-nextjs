import Swal from "sweetalert2";

interface SwalFailedProps {
  title: string;
  error?: any;
  type?: string;
}

export const swalFailed = ({
  title,
  error,
  type = "modal",
}: SwalFailedProps) => {
  return type === "modal"
    ? Swal.fire({
        title: title,
        text: error?.response?.data?.username[0] || "An error occurred",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
            `,
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
            `,
        },
      })
    : Swal.fire({
        title: title,
        icon: "error",
        toast: true,
        timer: 2000,
        position: "top-right",
        timerProgressBar: true,
        showConfirmButton: false,
      });
};

interface SwalSuccessProps {
  title: string;
  message?: string;
  type?: string;
}

export const swalSuccess = ({
  title,
  message,
  type = "modal",
}: SwalSuccessProps) => {
  return type === "modal"
    ? Swal.fire({
        title: title,
        text: message,
        icon: "success",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
            `,
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
            `,
        },
      })
    : Swal.fire({
        title: title,
        icon: "success",
        toast: true,
        timer: 2000,
        position: "top-right",
        timerProgressBar: true,
        showConfirmButton: false,
      });
};
