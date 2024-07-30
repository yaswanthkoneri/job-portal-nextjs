import React from "react";
import "./JobModal.css";
import "./Form.css";

interface JobDetailsModalProps {
  job: {
    company: "";
    position: "";
    emptype: "Full-time";
    primtg: "";
    tags: "";
    locns: "";
    logo: "";
    minsal: "";
    maxsal: "";
    desc: "";
    benefits: "";
    how2apply: "";
    email4jobappl: "";
    applUrl: "";
    twtr: "";
    compMail: "";
    invMail: "";
    invAdrs: "";
    invNote: "";
    payLtr: false;
    pltrEml: "";
    fdbck: "";
    bgcolor: "#fefba4";
  };
  onClose: Function;
}

const JobDetailsModal: React.FC<JobDetailsModalProps> = ({ job, onClose }) => {
  const handleOverlayClick = () => {
    onClose(null);
  };
  const bgcol = "#101011";
  let comp = job.company,
    pos = job.position,
    jobdesc = job.desc,
    how2apply = job.how2apply;
  if (comp == "") comp = "Company";
  if (pos == "") pos = "Position";

  return (
    <div className="overlay" onClick={handleOverlayClick}>
      <div
        className="modale text-white scrollbar-hide"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <button className="close-button" onClick={handleOverlayClick}>
          &times;
        </button>
        <div className="group" style={{ background: bgcol }}>

          <main className="w-full bg-grey-900 text-white">
            <br />
            <div
              style={{
                marginTop: "5px",
                marginBottom: "50px",
                border: "shadow",
                borderWidth: "1px",
                borderRadius: "7px",
                width: "95%",
                marginLeft: "2.5%",
              }}
            >
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar top-[82px] left-[13%]"
              >
                <div
                  className="w-20 rounded-full border border-white bg-white"
                  style={{ marginLeft: "0%" }}
                >
                  <img alt="Profile Picture" src={job.logo} />
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <h1 style={{ textAlign: "left" }}>
                  <div className="ml-[20%]">
                    <div
                      style={{
                        fontSize: "35px",
                        marginTop: ".5%",
                        display: "flex",
                        justifyItems: "center",
                      }}
                    >
                      <span>{comp} is hiring a</span>
                    </div>

                    <b style={{ fontSize: "35px" }}>
                      Remote <span>{pos}</span>
                    </b>
                  </div>
                </h1>
              </div>

              <br />

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <span
                  className="head"
                  style={{ background: bgcol, color: "white" }}
                >
                  Employment Type:{" "}
                </span>
                <div style={{ marginTop: "18px" }}>{job.emptype}</div>
              </div>
              {job.primtg != "" &&
                job.primtg != "Select a Primary tag for the Job" && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <span
                      className="head"
                      style={{ background: bgcol, color: "white" }}
                    >
                      Primary Tag:
                    </span>
                    <div style={{ marginTop: "18px" }}>{job.primtg}</div>
                  </div>
                )}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <span
                  className="head"
                  style={{ background: bgcol, color: "white" }}
                >
                  Technical Skills:
                </span>
                <div style={{ marginTop: "18px" }}>{job.tags}</div>
              </div>
              {job.locns != "" && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <span
                    className="head"
                    style={{ background: bgcol, color: "white" }}
                  >
                    Locations Allowed:
                  </span>
                  <div style={{ marginTop: "18px" }}>{job.locns}</div>
                </div>
              )}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <span
                  className="head"
                  style={{ background: bgcol, color: "white" }}
                >
                  Salary Range:
                </span>
                <div
                  style={{ marginTop: "18px" }}
                >{`${job.minsal}  -  ${job.maxsal}`}</div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <span
                  className="head"
                  style={{ background: bgcol, color: "white" }}
                >
                  Benefits:
                </span>
                <div style={{ marginTop: "18px" }}>{job.benefits}</div>
              </div>

              <span
                className="head"
                style={{
                  marginLeft: "1.5%",
                  background: bgcol,
                  color: "white",
                }}
              >
                Job Description:
              </span>
              <div
                className=" scrollbar-hide"
                style={{
                  marginLeft: "2%",
                  overflowX: "auto",
                  overflowY: "auto",
                  width: "80%",
                  maxHeight: "400px",
                  padding: "2px",
                  borderRadius: "4px",
                }}
              >
                <main dangerouslySetInnerHTML={{ __html: jobdesc }}></main>
              </div>

              {how2apply != "" && how2apply != "<p><br></p>" && (
                <div>
                  <span
                    className="head"
                    style={{
                      marginLeft: "1.5%",
                      background: bgcol,
                      color: "white",
                    }}
                  >
                    How to Apply:
                  </span>
                  <div
                    className=" scrollbar-hide"
                    style={{
                      marginLeft: "2%",
                      overflowX: "auto",
                      overflowY: "auto",
                      width: "80%",
                      maxHeight: "400px",
                      padding: "2px",
                      borderRadius: "4px",
                    }}
                  >
                    <main
                      dangerouslySetInnerHTML={{ __html: how2apply }}
                    ></main>
                  </div>
                  <br />
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsModal;
